// LAN multiplayer: mDNS-style discovery is replaced by a lightweight UDP
// broadcast for room discovery, with a 4-digit room-code fallback, and a
// TCP JSON-line protocol carrying authoritative room state. No internet
// dependency for the match itself.

import dgram, { type RemoteInfo } from 'node:dgram'
import net from 'node:net'
import { EventEmitter } from 'node:events'
import type { DiscoveryHost, RoomPlayer, RoomSettings, RoomState } from '../../shared/types'

export const DISCOVERY_PORT = 46400
const BROADCAST_ADDR = '255.255.255.255'

function newId(): string {
  return Math.random().toString(36).slice(2, 10)
}

export function randomRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export interface MultiplayerEvents {
  state: (state: RoomState) => void
  discovery: (hosts: DiscoveryHost[]) => void
  error: (message: string) => void
}

// ---- Host side -----------------------------------------------------------

interface HostPlayerConn {
  socket: net.Socket
  player: RoomPlayer
  buffer: string
}

class HostSession {
  private state: RoomState
  private udp: dgram.Socket
  private server: net.Server
  private conns = new Map<string, HostPlayerConn>()
  private emitter: EventEmitter

  getState(): RoomState {
    return this.state
  }

  start(): void {
    if (this.state.startedAt) return
    this.state.startedAt = new Date().toISOString()
    if (this.state.settings.mode === 'most_completed') {
      const ms = this.state.settings.timeLimitMinutes * 60_000
      this.state.endsAt = new Date(Date.now() + ms).toISOString()
    }
    this.broadcast()
  }

  playerFinished(): void {
    this.state.players = this.state.players.map((p) =>
      p.id === this.state.hostId
        ? { ...p, finishedAt: p.finishedAt ?? new Date().toISOString() }
        : p
    )
    this.broadcast()
  }

  playerCompleted(): void {
    this.state.players = this.state.players.map((p) =>
      p.id === this.state.hostId ? { ...p, completed: p.completed + 1 } : p
    )
    this.broadcast()
  }

  constructor(
    settings: RoomSettings,
    hostName: string,
    onState: (s: RoomState) => void,
    onError: (m: string) => void
  ) {
    this.emitter = new EventEmitter()
    this.emitter.on('state', onState)
    this.emitter.on('error', onError)
    const hostId = newId()
    this.state = {
      roomCode: settings.hostCode,
      hostId,
      settings,
      players: [{ id: hostId, name: hostName, joinedAt: new Date().toISOString(), completed: 0 }]
    }
    this.udp = dgram.createSocket('udp4')
    this.server = net.createServer()
    this.bind()
  }

  private bind(): void {
    this.udp.on('error', (err) => this.emitter.emit('error', `Discovery error: ${err.message}`))
    this.udp.on('message', (msg, rinfo: RemoteInfo) => {
      if (msg.toString() === 'CM_DISCOVER') {
        const reply = Buffer.from(
          JSON.stringify({
            name: this.state.settings.hostName,
            roomCode: this.state.roomCode,
            hostId: this.state.hostId,
            port: this.port()
          })
        )
        this.udp.send(reply, rinfo.port, rinfo.address)
      }
    })
    this.udp.bind(DISCOVERY_PORT)

    this.server.on('connection', (socket) => this.handleConnection(socket))
    this.server.listen(0, '0.0.0.0')
  }

  port(): number {
    const addr = this.server.address()
    return typeof addr === 'object' && addr ? addr.port : 0
  }

  private handleConnection(socket: net.Socket): void {
    socket.setEncoding('utf8')
    let buffer = ''
    socket.on('data', (chunk: string) => {
      buffer += chunk
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      for (const line of lines) {
        if (!line.trim()) continue
        this.handleLine(socket, line)
      }
    })
    socket.on('close', () => {
      for (const [id, conn] of this.conns) {
        if (conn.socket === socket) {
          this.conns.delete(id)
          this.state.players = this.state.players.filter((p) => p.id !== id)
          this.broadcast()
        }
      }
    })
    socket.on('error', () => {})
  }

  private handleLine(socket: net.Socket, line: string): void {
    let msg: Record<string, unknown>
    try {
      msg = JSON.parse(line)
    } catch {
      return
    }
    switch (msg.type) {
      case 'join': {
        const name = String(msg.name ?? 'Player')
        const code = String(msg.roomCode ?? '')
        if (code !== this.state.roomCode) {
          this.send(socket, { type: 'error', message: 'Wrong room code.' })
          return
        }
        if (this.state.players.length >= this.state.settings.maxPlayers) {
          this.send(socket, { type: 'error', message: 'Room is full.' })
          return
        }
        const player: RoomPlayer = {
          id: newId(),
          name,
          joinedAt: new Date().toISOString(),
          completed: 0
        }
        this.conns.set(player.id, { socket, player, buffer: '' })
        this.state.players.push(player)
        this.broadcast()
        this.send(socket, { type: 'welcome', playerId: player.id, state: this.state })
        break
      }
      case 'start': {
        const sender = this.findBySocket(socket)
        if (sender && sender.id === this.state.hostId) {
          this.state.startedAt = new Date().toISOString()
          if (this.state.settings.mode === 'most_completed') {
            const ms = this.state.settings.timeLimitMinutes * 60_000
            this.state.endsAt = new Date(Date.now() + ms).toISOString()
          }
          this.broadcast()
        }
        break
      }
      case 'finished': {
        const sender = this.findBySocket(socket)
        if (sender) {
          sender.finishedAt = sender.finishedAt ?? new Date().toISOString()
          this.state.players = this.state.players.map((p) => (p.id === sender.id ? sender : p))
          this.broadcast()
        }
        break
      }
      case 'completed': {
        const sender = this.findBySocket(socket)
        if (sender) {
          sender.completed += 1
          this.state.players = this.state.players.map((p) => (p.id === sender.id ? sender : p))
          this.broadcast()
        }
        break
      }
      case 'end': {
        const sender = this.findBySocket(socket)
        if (sender && sender.id === this.state.hostId) {
          this.state.endedAt = this.state.endedAt ?? new Date().toISOString()
          this.broadcast()
        }
        break
      }
    }
  }

  private findBySocket(socket: net.Socket): RoomPlayer | undefined {
    for (const conn of this.conns.values()) {
      if (conn.socket === socket) return conn.player
    }
    return undefined
  }

  private send(socket: net.Socket, obj: unknown): void {
    socket.write(JSON.stringify(obj) + '\n')
  }

  private broadcast(): void {
    const payload = JSON.stringify({ type: 'state', state: this.state }) + '\n'
    for (const conn of this.conns.values()) conn.socket.write(payload)
    this.emitter.emit('state', this.state)
  }

  close(): void {
    this.udp.close()
    this.server.close()
  }
}

// ---- Client side ---------------------------------------------------------

interface ClientConn {
  socket: net.Socket
  buffer: string
}

export class ClientSession {
  private socket: net.Socket
  private buffer = ''
  private emitter: EventEmitter
  playerId?: string

  constructor(
    host: DiscoveryHost,
    name: string,
    roomCode: string,
    onState: (s: RoomState) => void,
    onError: (m: string) => void
  ) {
    this.emitter = new EventEmitter()
    this.emitter.on('state', onState)
    this.emitter.on('error', onError)
    this.socket = net.createConnection({ host: host.address, port: host.port })
    this.socket.setEncoding('utf8')
    this.socket.on('connect', () => {
      this.send({ type: 'join', name, roomCode })
    })
    this.socket.on('data', (chunk: string) => {
      this.buffer += chunk
      const lines = this.buffer.split('\n')
      this.buffer = lines.pop() ?? ''
      for (const line of lines) {
        if (!line.trim()) continue
        this.handleLine(line)
      }
    })
    this.socket.on('error', (err) => this.emitter.emit('error', `Connection error: ${err.message}`))
    this.socket.on('close', () => this.emitter.emit('error', 'Connection closed.'))
  }

  private handleLine(line: string): void {
    let msg: Record<string, unknown>
    try {
      msg = JSON.parse(line)
    } catch {
      return
    }
    if (msg.type === 'state') {
      this.emitter.emit('state', msg.state as RoomState)
    } else if (msg.type === 'welcome') {
      this.playerId = String(msg.playerId)
    } else if (msg.type === 'error') {
      this.emitter.emit('error', String(msg.message ?? 'Unknown error'))
    }
  }

  send(obj: unknown): void {
    this.socket.write(JSON.stringify(obj) + '\n')
  }

  startMatch(): void {
    this.send({ type: 'start' })
  }

  reportFinished(): void {
    this.send({ type: 'finished' })
  }

  reportCompleted(): void {
    this.send({ type: 'completed' })
  }

  endMatch(): void {
    this.send({ type: 'end' })
  }

  close(): void {
    this.socket.destroy()
  }
}

// ---- Discovery -----------------------------------------------------------

export function discoverRooms(timeoutMs = 3000): Promise<DiscoveryHost[]> {
  return new Promise((resolve) => {
    const socket = dgram.createSocket('udp4')
    const hosts = new Map<string, DiscoveryHost>()
    socket.on('message', (msg, rinfo) => {
      try {
        const data = JSON.parse(msg.toString()) as {
          name: string
          roomCode: string
          hostId: string
          port: number
        }
        hosts.set(data.hostId, {
          name: data.name,
          roomCode: data.roomCode,
          hostId: data.hostId,
          address: rinfo.address,
          port: data.port
        })
      } catch {
        // ignore malformed
      }
    })
    socket.on('error', () => resolve([...hosts.values()]))
    socket.bind(() => {
      socket.setBroadcast(true)
      const payload = Buffer.from('CM_DISCOVER')
      try {
        socket.send(payload, DISCOVERY_PORT, BROADCAST_ADDR)
      } catch {
        // broadcast may fail on some networks; fallback is manual code entry
      }
    })
    setTimeout(() => {
      socket.close()
      resolve([...hosts.values()])
    }, timeoutMs)
  })
}
