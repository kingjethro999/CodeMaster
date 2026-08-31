// LAN multiplayer: host a room, discover rooms on the network, join by room
// code, then race a stage. Match results celebrate different valid solutions,
// not who is "smartest".

import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Radio, Trophy, UserPlus, Play, Search, Flag, ExternalLink } from 'lucide-react'
import type { DiscoveryHost, RoomSettings, RoomState, Stage } from '../../../shared/types'
import { useApp } from '../store'
import { sound } from '../lib/sound'
import { Mascot } from '../components/Mascot'
import { Select } from '../components/Select'

type Tab = 'host' | 'join'
type Phase = 'form' | 'lobby' | 'results'

interface RaceMarker {
  stageKey: string
  mode: RoomSettings['mode']
  roomCode: string
}

export function Multiplayer(): React.JSX.Element {
  const { t } = useTranslation()
  const { go, activeProfile, isGuest: _isGuest, guestName } = useApp()
  const [tab, setTab] = useState<Tab>('host')
  const [phase, setPhase] = useState<Phase>('form')
  const [name, setName] = useState(activeProfile?.name ?? guestName ?? '')
  const [stageKey, setStageKey] = useState('')
  const [mode, setMode] = useState<RoomSettings['mode']>('first_to_finish')
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(5)
  const [maxPlayers, setMaxPlayers] = useState(4)
  const [hostCode, setHostCode] = useState('')
  const [roomState, setRoomState] = useState<RoomState | null>(null)
  const [isHost, setIsHost] = useState(false)
  const [hosts, setHosts] = useState<DiscoveryHost[]>([])
  const [discovering, setDiscovering] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [stages, setStages] = useState<Stage[]>([])
  const unsubscribeRef = useRef<() => void>(() => {})

  useEffect(() => {
    void window.api.stages.list().then((list) => {
      setStages(list)
      if (!stageKey && list.length) setStageKey(list[0].key)
    })
  }, [])

  useEffect(() => {
    const off = window.api.multiplayer.onState((raw) => {
      const s = raw as RoomState & {
        type?: string
        message?: string
      }
      if (s.type === 'error') {
        setError(s.message ?? t('multi.connectionFailed'))
        return
      }
      setRoomState(s as RoomState)
    })
    unsubscribeRef.current = off
    return () => off()
  }, [t])

  const players = useMemo(() => roomState?.players ?? [], [roomState])
  const myPlayerId = roomState?.hostId

  const createRoom = async (): Promise<void> => {
    if (!stageKey || name.trim().length < 1) return
    setError(null)
    sound.click()
    const settings: RoomSettings = {
      hostName: name.trim(),
      hostCode: hostCode.trim().toUpperCase(),
      stageKey,
      mode,
      timeLimitMinutes,
      maxPlayers
    }
    const state = await window.api.multiplayer.host(settings, name.trim())
    setIsHost(true)
    setRoomState(state)
    setPhase('lobby')
  }

  const discover = async (): Promise<void> => {
    setDiscovering(true)
    setError(null)
    const found = await window.api.multiplayer.discover()
    setHosts(found)
    setDiscovering(false)
  }

  const join = async (host: DiscoveryHost, code: string): Promise<void> => {
    if (name.trim().length < 1) return
    setError(null)
    try {
      await window.api.multiplayer.join(host, name.trim(), code)
      setIsHost(false)
      setRoomState(null)
      setPhase('lobby')
    } catch {
      setError(t('multi.connectionFailed'))
    }
  }

  const startMatch = (): void => {
    sound.click()
    void window.api.multiplayer.startMatch()
  }

  const endMatch = (): void => {
    sound.click()
    void window.api.multiplayer.endMatch()
  }

  const leave = (): void => {
    void window.api.multiplayer.leave()
    if (isHost) void window.api.multiplayer.stopHosting()
    localStorage.removeItem('codemaster:race')
    setRoomState(null)
    setPhase('form')
  }

  const goBuild = (): void => {
    if (!roomState) return
    const marker: RaceMarker = {
      stageKey: roomState.settings.stageKey,
      mode: roomState.settings.mode,
      roomCode: roomState.roomCode
    }
    localStorage.setItem('codemaster:race', JSON.stringify(marker))
    sound.click()
    go({
      name: 'stage',
      stageKey: roomState.settings.stageKey
    })
  }

  const finishedCount = players.filter((p) => p.finishedAt).length
  const allFinished = players.length > 0 && finishedCount === players.length
  const matchOver = roomState?.endedAt != null

  const sortedResults = useMemo(() => {
    const list = [...players]
    if (mode === 'first_to_finish') {
      return list.sort((a, b) => {
        if (a.finishedAt && b.finishedAt)
          return new Date(a.finishedAt).getTime() - new Date(b.finishedAt).getTime()
        if (a.finishedAt) return -1
        if (b.finishedAt) return 1
        return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
      })
    }
    return list.sort((a, b) => b.completed - a.completed)
  }, [players, mode])

  if (phase === 'results' || matchOver) {
    return (
      <div
        className="col center"
        style={{
          height: '100%',
          gap: 20,
          textAlign: 'center'
        }}
      >
        <Mascot mood="happy" size={140} />
        <h2>{t('multi.results')}</h2>
        <div
          className="col"
          style={{
            width: '100%',
            maxWidth: 460,
            gap: 10
          }}
        >
          {sortedResults.map((p, i) => (
            <div key={p.id} className="card-flat row spread">
              <div
                className="row"
                style={{
                  gap: 10
                }}
              >
                <span className="stage-index">{i + 1}</span>
                <strong
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16
                  }}
                >
                  {p.name}
                </strong>
              </div>
              <span className="muted">
                {mode === 'first_to_finish'
                  ? p.finishedAt
                    ? t('multi.finished')
                    : '—'
                  : `${p.completed} / ${t('multi.players')}`}
              </span>
            </div>
          ))}
        </div>
        <div
          className="card"
          style={{
            maxWidth: 520
          }}
        >
          <h3
            style={{
              marginBottom: 8
            }}
          >
            <Trophy size={18} /> {t('multi.retrospective')}
          </h3>
          <p className="muted">{t('multi.retrospectiveText')}</p>
        </div>
        <button className="btn btn-primary btn-lg" aria-label={t('common.done')} onClick={leave}>
          {t('common.done')}
        </button>
      </div>
    )
  }

  if (phase === 'lobby' && roomState) {
    const raceStarted = roomState.startedAt != null
    return (
      <div
        className="col center"
        style={{
          height: '100%',
          gap: 20,
          textAlign: 'center'
        }}
      >
        <div
          className="row center"
          style={{
            gap: 10
          }}
        >
          <Radio size={22} />
          <h2>{t('multi.title')}</h2>
        </div>
        <div
          className="card"
          style={{
            maxWidth: 480
          }}
        >
          <div
            className="col"
            style={{
              gap: 12
            }}
          >
            <div className="row spread">
              <span className="muted">{t('multi.roomCode')}</span>
              <strong
                className="letter-spaced"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 24
                }}
              >
                {roomState.roomCode}
              </strong>
            </div>
            <div className="row spread">
              <span className="muted">{t('multi.mode')}</span>
              <span>
                {t(
                  roomState.settings.mode === 'first_to_finish'
                    ? 'multi.firstToFinish'
                    : 'multi.mostCompleted'
                )}
              </span>
            </div>
            <div className="row spread">
              <span className="muted">{t('multi.players')}</span>
              <span>
                {players.length} / {roomState.settings.maxPlayers}
              </span>
            </div>
          </div>
        </div>

        <div
          className="col"
          style={{
            width: '100%',
            maxWidth: 480,
            gap: 10
          }}
        >
          <h3>{t('multi.players')}</h3>
          {players.map((p) => (
            <div key={p.id} className="card-flat row spread">
              <strong
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16
                }}
              >
                {p.name}
              </strong>
              <span className="muted">
                {p.finishedAt
                  ? t('multi.finished')
                  : raceStarted
                    ? t('multi.racing')
                    : t('multi.ready')}
              </span>
            </div>
          ))}
        </div>

        {error && <div className="notice notice-error" role="alert">{error}</div>}

        {!raceStarted && (
          <div
            className="row"
            style={{
              gap: 12
            }}
          >
            {isHost ? (
              <button
                className="btn btn-primary btn-lg"
                aria-label={t('multi.startMatch')}
                onClick={startMatch}
                disabled={players.length < 2}
              >
                <Play size={20} /> {t('multi.startMatch')}
              </button>
            ) : (
              <span className="muted">{t('multi.waitingForPlayers')}</span>
            )}
            <button className="btn btn-ghost" aria-label={t('multi.leave')} onClick={leave}>
              {t('multi.leave')}
            </button>
          </div>
        )}

        {raceStarted && !matchOver && (
          <div
            className="col center"
            style={{
              gap: 12
            }}
          >
            {players.some((p) => p.id === myPlayerId && p.finishedAt) ? (
              <span className="muted">{t('multi.youFinished')}</span>
            ) : (
              <button className="btn btn-success btn-lg" aria-label={t('multi.startMatch')} onClick={goBuild}>
                <ExternalLink size={20} /> {t('multi.startMatch')}
              </button>
            )}
            {isHost && (
              <button className="btn btn-info" aria-label={t('multi.results')} onClick={endMatch}>
                <Flag size={18} /> {t('multi.results')}
              </button>
            )}
            {mode === 'first_to_finish' && allFinished && !matchOver && isHost && (
              <button className="btn btn-primary" aria-label={t('multi.results')} onClick={endMatch}>
                {t('multi.results')}
              </button>
            )}
            <button className="btn btn-ghost" aria-label={t('multi.leave')} onClick={leave}>
              {t('multi.leave')}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className="col"
      role="main"
      aria-label={t('multi.title')}
      style={{
        gap: 20
      }}
    >
      <div className="row spread wrap">
        <button
          className="btn btn-ghost"
          aria-label={t('common.back')}
          onClick={() =>
            go({
              name: 'home'
            })
          }
        >
          <ArrowLeft size={18} /> {t('common.back')}
        </button>
        <div
          className="col center"
          style={{
            gap: 2
          }}
        >
          <h2>{t('multi.title')}</h2>
          <span className="muted">{t('multi.subtitle')}</span>
        </div>
        <div
          className="row"
          style={{
            gap: 8
          }}
        >
          <button
            className={`chip ${tab === 'host' ? 'selected' : ''}`}
            aria-label={t('multi.host')}
            aria-pressed={tab === 'host'}
            onClick={() => setTab('host')}
          >
            {t('multi.host')}
          </button>
          <button
            className={`chip ${tab === 'join' ? 'selected' : ''}`}
            aria-label={t('multi.join')}
            aria-pressed={tab === 'join'}
            onClick={() => setTab('join')}
          >
            {t('multi.join')}
          </button>
        </div>
      </div>

      {error && <div className="notice notice-error">{error}</div>}

      {tab === 'host' ? (
        <div
          className="card col"
          style={{
            maxWidth: 560,
            gap: 16
          }}
        >
          <div className="field">
            <label className="field-label" htmlFor="multi-host-name">{t('multi.namePlaceholder')}</label>
            <input
              id="multi-host-name"
              className="input"
              value={name}
              aria-label={t('multi.namePlaceholder')}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('multi.namePlaceholder')}
            />
          </div>
          <div className="field">
            <label className="field-label">{t('home.nextUp')}</label>
            <Select
              id="multi-stage"
              value={stageKey}
              onChange={setStageKey}
              searchable
              searchPlaceholder="Search module or stage..."
              options={stages.map((s) => ({
                value: s.key,
                label: s.titleKey
              }))}
            />
          </div>
          <div className="field">
            <label className="field-label">{t('multi.mode')}</label>
            <div className="row wrap">
              <button
                className={`chip ${mode === 'first_to_finish' ? 'selected' : ''}`}
                aria-label={t('multi.firstToFinish')}
                aria-pressed={mode === 'first_to_finish'}
                onClick={() => setMode('first_to_finish')}
              >
                {t('multi.firstToFinish')}
              </button>
              <button
                className={`chip ${mode === 'most_completed' ? 'selected' : ''}`}
                aria-label={t('multi.mostCompleted')}
                aria-pressed={mode === 'most_completed'}
                onClick={() => setMode('most_completed')}
              >
                {t('multi.mostCompleted')}
              </button>
            </div>
          </div>
          {mode === 'most_completed' && (
            <div
              className="row"
              style={{
                gap: 16
              }}
            >
              <div className="field grow">
                <label className="field-label">{t('multi.timeLimitMinutes')}</label>
                <input
                  className="input"
                  type="number"
                  min={1}
                  max={60}
                  value={timeLimitMinutes}
                  aria-label={t('multi.timeLimitMinutes')}
                  onChange={(e) => setTimeLimitMinutes(Number(e.target.value) || 1)}
                />
              </div>
              <div className="field grow">
                <label className="field-label">{t('multi.maxPlayers')}</label>
                <input
                  className="input"
                  type="number"
                  min={2}
                  max={10}
                  value={maxPlayers}
                  aria-label={t('multi.maxPlayers')}
                  onChange={(e) => setMaxPlayers(Number(e.target.value) || 2)}
                />
              </div>
            </div>
          )}
          <div className="field">
            <label className="field-label">{t('multi.roomCode')}</label>
            <input
              className="input"
              value={hostCode}
              aria-label={t('multi.roomCode')}
              onChange={(e) => setHostCode(e.target.value)}
              placeholder={t('multi.roomCodePlaceholder')}
              maxLength={4}
            />
          </div>
          <button className="btn btn-primary" aria-label={t('multi.createRoom')} onClick={() => void createRoom()}>
            <UserPlus size={18} /> {t('multi.createRoom')}
          </button>
        </div>
      ) : (
        <div
          className="col"
          style={{
            maxWidth: 560,
            gap: 16
          }}
        >
          <div className="field">
            <label className="field-label" htmlFor="multi-join-name">{t('multi.namePlaceholder')}</label>
            <input
              id="multi-join-name"
              className="input"
              value={name}
              aria-label={t('multi.namePlaceholder')}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('multi.namePlaceholder')}
            />
          </div>
          <button className="btn" aria-label={t('multi.discover')} onClick={() => void discover()} disabled={discovering}>
            <Search size={18} /> {discovering ? t('common.loading') : t('multi.discover')}
          </button>
          {hosts.length > 0 && (
            <div
              className="col"
              style={{
                gap: 10
              }}
            >
              <span className="field-label">{t('multi.discoveredRooms')}</span>
              {hosts.map((h) => (
                <div key={h.hostId} className="card-flat row spread">
                  <div
                    className="col"
                    style={{
                      gap: 2
                    }}
                  >
                    <strong
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 16
                      }}
                    >
                      {h.name}
                    </strong>
                    <span
                      className="muted"
                      style={{
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {h.roomCode}
                    </span>
                  </div>
                  <button className="btn btn-primary" aria-label={`${t('multi.joinRoom')}: ${h.name}`} onClick={() => void join(h, h.roomCode)}>
                    {t('multi.joinRoom')}
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="divider" />
          <div className="field">
            <label className="field-label">{t('multi.roomCode')}</label>
            <div
              className="row"
              style={{
                gap: 10
              }}
            >
              <input
                className="input grow"
                value={hostCode}
                aria-label={t('multi.roomCode')}
                onChange={(e) => setHostCode(e.target.value)}
                placeholder={t('multi.roomCodePlaceholder')}
                maxLength={4}
              />
              <button
                className="btn btn-primary"
                aria-label={t('multi.joinRoom')}
                disabled={hostCode.trim().length < 4 || name.trim().length < 1}
                onClick={() => {
                  const host = hosts.find((h) => h.roomCode === hostCode.trim().toUpperCase())
                  if (host) void join(host, host.roomCode)
                  else setError(t('multi.wrongCode'))
                }}
              >
                {t('multi.joinRoom')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
