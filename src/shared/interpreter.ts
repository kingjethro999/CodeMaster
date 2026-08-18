// A tiny, safe scripting language ("MasterScript") shared by block and text stages.
// Compiles to a Turtle that draws on canvas plus a console for printed output.
import type { BlockNode, RunResult, StageValidation, TurtlePoint, TurtleState } from './types'

const MAX_STEPS = 100000
const MAX_CALL_STACK = 128
const CANVAS = 600

type TokenType =
  | 'number'
  | 'string'
  | 'ident'
  | 'keyword'
  | 'op'
  | 'punct'
  | 'eof'

interface Token {
  type: TokenType
  value: string
  pos: number
}

const KEYWORDS = new Set([
  'let',
  'if',
  'else',
  'repeat',
  'function',
  'return',
  'and',
  'or',
  'not',
  'true',
  'false'
])

const TURTLE_OPS = new Set([
  'forward',
  'back',
  'left',
  'right',
  'penUp',
  'penDown',
  'penColor',
  'clear'
])

const BUILTINS = new Set(['print', 'count', 'abs', 'round'])

function tokenize(src: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const n = src.length
  while (i < n) {
    const c = src[i]
    if (/\s/.test(c)) {
      i++
      continue
    }
    if (c === '/' && src[i + 1] === '/') {
      while (i < n && src[i] !== '\n') i++
      continue
    }
    if (c === '"' || c === "'") {
      const quote = c
      const start = i
      i++
      let value = ''
      while (i < n && src[i] !== quote) {
        if (src[i] === '\\' && i + 1 < n) {
          value += src[i + 1]
          i += 2
        } else {
          value += src[i]
          i++
        }
      }
      if (i >= n) throw new SyntaxError(`Unterminated string at position ${start}`)
      i++
      tokens.push({ type: 'string', value, pos: start })
      continue
    }
    if (/[0-9]/.test(c)) {
      const start = i
      while (i < n && /[0-9.]/.test(src[i])) i++
      tokens.push({ type: 'number', value: src.slice(start, i), pos: start })
      continue
    }
    if (/[A-Za-z_]/.test(c)) {
      const start = i
      while (i < n && /[A-Za-z0-9_]/.test(src[i])) i++
      const word = src.slice(start, i)
      tokens.push({
        type: KEYWORDS.has(word) ? 'keyword' : 'ident',
        value: word,
        pos: start
      })
      continue
    }
    const two = src.slice(i, i + 2)
    if (['<=', '>=', '==', '!='].includes(two)) {
      tokens.push({ type: 'op', value: two, pos: i })
      i += 2
      continue
    }
    if ('+-*/<>=!'.includes(c)) {
      tokens.push({ type: 'op', value: c, pos: i })
      i++
      continue
    }
    if ('(){}[],;'.includes(c)) {
      tokens.push({ type: 'punct', value: c, pos: i })
      i++
      continue
    }
    throw new SyntaxError(`Unexpected character "${c}" at position ${i}`)
  }
  tokens.push({ type: 'eof', value: '', pos: n })
  return tokens
}

type Value = number | string | boolean | Value[]

class RuntimeError extends Error {}

interface FunctionDef {
  paramNames: string[]
  body: Node[]
}

type Node =
  | { kind: 'print'; expr: Expr }
  | { kind: 'assign'; name: string; expr: Expr }
  | { kind: 'turtle'; op: string; arg?: Expr }
  | { kind: 'if'; cond: Expr; then: Node[]; els?: Node[] }
  | { kind: 'repeat'; count: Expr; body: Node[] }
  | { kind: 'funcDef'; name: string; paramNames: string[]; body: Node[] }
  | { kind: 'call'; name: string; args: Expr[] }
  | { kind: 'return'; expr?: Expr }
  | { kind: 'expr'; expr: Expr }

type Expr =
  | { kind: 'num'; value: number }
  | { kind: 'str'; value: string }
  | { kind: 'bool'; value: boolean }
  | { kind: 'var'; name: string }
  | { kind: 'binary'; op: string; left: Expr; right: Expr }
  | { kind: 'unary'; op: string; operand: Expr }
  | { kind: 'list'; items: Expr[] }
  | { kind: 'index'; target: Expr; index: Expr }
  | { kind: 'call'; name: string; args: Expr[] }

class Parser {
  private tokens: Token[]
  private pos = 0

  constructor(src: string) {
    this.tokens = tokenize(src)
  }

  private peek(): Token {
    return this.tokens[this.pos]
  }

  private next(): Token {
    return this.tokens[this.pos++]
  }

  private expect(value: string): Token {
    const t = this.next()
    if (t.value !== value) {
      throw new SyntaxError(`Expected "${value}" but found "${t.value}" at position ${t.pos}`)
    }
    return t
  }

  private isValue(v: string): boolean {
    return this.peek().value === v
  }

  parseProgram(): Node[] {
    const stmts: Node[] = []
    while (this.peek().type !== 'eof') {
      stmts.push(this.parseStatement())
    }
    return stmts
  }

  private parseStatement(): Node {
    const t = this.peek()
    if (t.type === 'keyword') {
      switch (t.value) {
        case 'let':
          return this.parseAssign()
        case 'if':
          return this.parseIf()
        case 'repeat':
          return this.parseRepeat()
        case 'function':
          return this.parseFuncDef()
        case 'return':
          this.next()
          if (this.isValue(';')) this.next()
          return { kind: 'return' }
      }
    }
    if (t.type === 'ident') {
      if (this.peek().type === 'ident' && this.tokens[this.pos + 1].value === '(') {
        // could be call or turtle op or builtin
        const name = this.next().value
        return { kind: 'call', name, args: this.parseArgs() }
      }
      if (t.value === 'penUp' || t.value === 'penDown' || t.value === 'clear') {
        this.next()
        return { kind: 'turtle', op: t.value }
      }
      throw new SyntaxError(`Expected "(" after "${t.value}" at position ${t.pos}`)
    }
    throw new SyntaxError(`Unexpected token "${t.value}" at position ${t.pos}`)
  }

  private parseAssign(): Node {
    this.expect('let')
    const name = this.expect('ident').value
    this.expect('=')
    const expr = this.parseExpr()
    if (this.isValue(';')) this.next()
    return { kind: 'assign', name, expr }
  }

  private parseArgs(): Expr[] {
    this.expect('(')
    const args: Expr[] = []
    while (!this.isValue(')')) {
      args.push(this.parseExpr())
      if (this.isValue(',')) this.next()
    }
    this.expect(')')
    return args
  }

  private parseIf(): Node {
    this.expect('if')
    this.expect('(')
    const cond = this.parseExpr()
    this.expect(')')
    const then = this.parseBlock()
    let els: Node[] | undefined
    if (this.peek().value === 'else') {
      this.next()
      els = this.parseBlock()
    }
    return { kind: 'if', cond, then, els }
  }

  private parseRepeat(): Node {
    this.expect('repeat')
    this.expect('(')
    const count = this.parseExpr()
    this.expect(')')
    const body = this.parseBlock()
    return { kind: 'repeat', count, body }
  }

  private parseFuncDef(): Node {
    this.expect('function')
    const name = this.expect('ident').value
    this.expect('(')
    const paramNames: string[] = []
    while (!this.isValue(')')) {
      paramNames.push(this.expect('ident').value)
      if (this.isValue(',')) this.next()
    }
    this.expect(')')
    const body = this.parseBlock()
    return { kind: 'funcDef', name, paramNames, body }
  }

  private parseBlock(): Node[] {
    this.expect('{')
    const stmts: Node[] = []
    while (!this.isValue('}')) {
      if (this.peek().type === 'eof') {
        throw new SyntaxError('Missing closing brace "}"')
      }
      stmts.push(this.parseStatement())
    }
    this.expect('}')
    return stmts
  }

  // Pratt parser for expressions.
  private parseExpr(minBp = 0): Expr {
    let left = this.parsePrefix()
    for (;;) {
      const op = this.peek().value
      const bp = bindingPower(op)
      if (bp <= minBp) break
      if (op === '[') {
        this.next()
        const index = this.parseExpr()
        this.expect(']')
        left = { kind: 'index', target: left, index }
        continue
      }
      this.next()
      if (op === 'not') {
        left = { kind: 'unary', op, operand: left }
        continue
      }
      const right = this.parseExpr(bp)
      left = { kind: 'binary', op, left, right }
    }
    return left
  }

  private parsePrefix(): Expr {
    const t = this.peek()
    if (t.type === 'number') {
      this.next()
      return { kind: 'num', value: parseFloat(t.value) }
    }
    if (t.type === 'string') {
      this.next()
      return { kind: 'str', value: t.value }
    }
    if (t.type === 'keyword' && (t.value === 'true' || t.value === 'false')) {
      this.next()
      return { kind: 'bool', value: t.value === 'true' }
    }
    if (t.type === 'keyword' && t.value === 'not') {
      this.next()
      return { kind: 'unary', op: 'not', operand: this.parsePrefix() }
    }
    if (t.type === 'op' && t.value === '-') {
      this.next()
      return { kind: 'unary', op: '-', operand: this.parsePrefix() }
    }
    if (t.value === '(') {
      this.next()
      const e = this.parseExpr()
      this.expect(')')
      return e
    }
    if (t.value === '[') {
      this.next()
      const items: Expr[] = []
      while (!this.isValue(']')) {
        items.push(this.parseExpr())
        if (this.isValue(',')) this.next()
      }
      this.expect(']')
      return { kind: 'list', items }
    }
    if (t.type === 'ident') {
      this.next()
      if (this.isValue('(')) {
        return { kind: 'call', name: t.value, args: this.parseArgs() }
      }
      return { kind: 'var', name: t.value }
    }
    throw new SyntaxError(`Unexpected token "${t.value}" at position ${t.pos}`)
  }
}

function bindingPower(op: string): number {
  switch (op) {
    case 'or':
      return 1
    case 'and':
      return 2
    case '==':
    case '!=':
      return 3
    case '<':
    case '>':
    case '<=':
    case '>=':
      return 4
    case '+':
    case '-':
      return 5
    case '*':
    case '/':
      return 6
    case '[':
      return 9
    default:
      return 0
  }
}

export function newTurtleState(): TurtleState {
  const start = { x: CANVAS / 2, y: CANVAS / 2 }
  return {
    x: CANVAS / 2,
    y: CANVAS / 2,
    angle: -90,
    pen: true,
    color: '#FF8A3D',
    path: [{ ...start, color: '#FF8A3D' }],
    start
  }
}

interface Env {
  vars: Map<string, Value>
  funcs: Map<string, FunctionDef>
}

class Interpreter {
  private console: string[] = []
  private turtle = newTurtleState()
  private steps = 0
  private depth = 0

  run(program: Node[]): RunResult {
    const env: Env = { vars: new Map(), funcs: new Map() }
    try {
      for (const stmt of program) this.exec(stmt, env)
      return {
        ok: true,
        console: this.console,
        turtle: this.turtle,
        steps: this.steps
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      return {
        ok: false,
        console: this.console,
        turtle: this.turtle,
        error: message,
        steps: this.steps
      }
    }
  }

  private guard(): void {
    this.steps++
    if (this.steps > MAX_STEPS) {
      throw new RuntimeError('Your program is running too many steps. Is a loop missing its end?')
    }
  }

  private exec(stmt: Node, env: Env): void {
    this.guard()
    switch (stmt.kind) {
      case 'print': {
        const v = this.eval(stmt.expr, env)
        this.console.push(this.stringify(v))
        break
      }
      case 'assign':
        env.vars.set(stmt.name, this.eval(stmt.expr, env))
        break
      case 'turtle':
        this.turtleOp(stmt.op, stmt.arg ? this.asNumber(this.eval(stmt.arg, env), stmt.op) : undefined)
        break
      case 'if':
        if (this.truthy(this.eval(stmt.cond, env))) {
          for (const s of stmt.then) this.exec(s, env)
        } else if (stmt.els) {
          for (const s of stmt.els) this.exec(s, env)
        }
        break
      case 'repeat': {
        const count = Math.floor(this.asNumber(this.eval(stmt.count, env), 'repeat'))
        for (let i = 0; i < count; i++) {
          for (const s of stmt.body) this.exec(s, env)
        }
        break
      }
      case 'funcDef':
        env.funcs.set(stmt.name, { paramNames: stmt.paramNames, body: stmt.body })
        break
      case 'return':
        throw new ReturnSignal(undefined)
      case 'call':
        this.callFunction(stmt.name, stmt.args, env, false)
        break
      case 'expr':
        this.eval(stmt.expr, env)
        break
    }
  }

  private callFunction(name: string, args: Expr[], env: Env, fromExpr: boolean): Value {
    if (name === 'print') {
      const vals = args.map((a) => this.eval(a, env))
      this.console.push(vals.map((v) => this.stringify(v)).join(' '))
      return undefined as unknown as Value
    }
    if (name === 'count') {
      const v = this.eval(args[0], env)
      if (!Array.isArray(v)) throw new RuntimeError('count() needs a list')
      return v.length
    }
    if (name === 'abs') return Math.abs(this.asNumber(this.eval(args[0], env), 'abs'))
    if (name === 'round') return Math.round(this.asNumber(this.eval(args[0], env), 'round'))
    if (TURTLE_OPS.has(name)) {
      const arg = args[0] ? this.asNumber(this.eval(args[0], env), name) : undefined
      this.turtleOp(name, arg)
      return undefined as unknown as Value
    }
    const fn = env.funcs.get(name)
    if (!fn) throw new RuntimeError(`Unknown function "${name}"`)
    if (fn.paramNames.length !== args.length) {
      throw new RuntimeError(`"${name}" expects ${fn.paramNames.length} argument(s)`)
    }
    this.depth++
    if (this.depth > MAX_CALL_STACK) {
      this.depth--
      throw new RuntimeError('Too many nested calls. Did a function call itself forever?')
    }
    const child: Env = { vars: new Map(env.vars), funcs: env.funcs }
    args.forEach((a, i) => child.vars.set(fn.paramNames[i], this.eval(a, env)))
    try {
      for (const s of fn.body) this.exec(s, child)
    } catch (err) {
      if (err instanceof ReturnSignal) {
        this.depth--
        return err.value
      }
      throw err
    }
    this.depth--
    return undefined as unknown as Value
  }

  private turtleOp(op: string, arg?: number): void {
    const t = this.turtle
    switch (op) {
      case 'forward':
      case 'back': {
        const distance = arg ?? 0
        const dir = op === 'forward' ? 1 : -1
        const rad = (t.angle * Math.PI) / 180
        const nx = t.x + Math.cos(rad) * distance * dir
        const ny = t.y + Math.sin(rad) * distance * dir
        if (t.pen) t.path.push({ x: nx, y: ny, color: t.color })
        t.x = nx
        t.y = ny
        break
      }
      case 'left':
        t.angle = (t.angle + (arg ?? 90) + 360) % 360
        break
      case 'right':
        t.angle = (t.angle - (arg ?? 90) + 360) % 360
        break
      case 'penUp':
        t.pen = false
        break
      case 'penDown':
        t.pen = true
        break
      case 'penColor':
        t.color = typeof arg === 'number' ? defaultColor(arg) : '#FF8A3D'
        break
      case 'clear':
        t.x = t.start.x
        t.y = t.start.y
        t.angle = -90
        t.pen = true
        t.path = [{ x: t.start.x, y: t.start.y, color: t.color }]
        break
    }
  }

  private eval(e: Expr, env: Env): Value {
    this.guard()
    switch (e.kind) {
      case 'num':
      case 'str':
      case 'bool':
        return e.value
      case 'var': {
        const v = env.vars.get(e.name)
        if (v === undefined) throw new RuntimeError(`Unknown variable "${e.name}"`)
        return v
      }
      case 'unary':
        if (e.op === 'not') return !this.truthy(this.eval(e.operand, env))
        return -this.asNumber(this.eval(e.operand, env), '-')
      case 'list':
        return e.items.map((i) => this.eval(i, env))
      case 'index': {
        const target = this.eval(e.target, env)
        const index = Math.floor(this.asNumber(this.eval(e.index, env), 'index'))
        if (!Array.isArray(target)) throw new RuntimeError('Only lists can be indexed with []')
        if (index < 0 || index >= target.length) {
          throw new RuntimeError(`Index ${index} is out of range`)
        }
        return target[index]
      }
      case 'call':
        return this.callFunction(e.name, e.args, env, true)
      case 'binary': {
        const l = this.eval(e.left, env)
        const r = this.eval(e.right, env)
        switch (e.op) {
          case '+':
            if (typeof l === 'string' || typeof r === 'string') return this.stringify(l) + this.stringify(r)
            return this.asNumber(l, '+') + this.asNumber(r, '+')
          case '-':
            return this.asNumber(l, '-') - this.asNumber(r, '-')
          case '*':
            return this.asNumber(l, '*') * this.asNumber(r, '*')
          case '/':
            return this.asNumber(l, '/') / this.asNumber(r, '/')
          case '<':
            return this.compare(l, r) < 0
          case '>':
            return this.compare(l, r) > 0
          case '<=':
            return this.compare(l, r) <= 0
          case '>=':
            return this.compare(l, r) >= 0
          case '==':
            return this.compare(l, r) === 0
          case '!=':
            return this.compare(l, r) !== 0
          case 'and':
            return this.truthy(l) && this.truthy(r)
          case 'or':
            return this.truthy(l) || this.truthy(r)
        }
        throw new RuntimeError(`Unknown operator "${e.op}"`)
      }
    }
  }

  private compare(a: Value, b: Value): number {
    if (typeof a === 'number' && typeof b === 'number') return a - b
    if (typeof a === 'boolean' && typeof b === 'boolean') return a === b ? 0 : a ? 1 : -1
    return this.stringify(a) < this.stringify(b) ? -1 : this.stringify(a) > this.stringify(b) ? 1 : 0
  }

  private asNumber(v: Value, ctx: string): number {
    if (typeof v === 'number') return v
    if (typeof v === 'string' && v.trim() !== '' && !isNaN(Number(v))) return Number(v)
    throw new RuntimeError(`"${ctx}" needs a number, got ${this.stringify(v)}`)
  }

  private truthy(v: Value): boolean {
    if (typeof v === 'boolean') return v
    if (typeof v === 'number') return v !== 0
    if (typeof v === 'string') return v.length > 0
    return Array.isArray(v) && v.length > 0
  }

  private stringify(v: Value): string {
    if (Array.isArray(v)) return '[' + v.map((x) => this.stringify(x)).join(', ') + ']'
    if (typeof v === 'boolean') return v ? 'true' : 'false'
    return String(v)
  }
}

class ReturnSignal extends Error {
  value: Value | undefined
  constructor(value: Value | undefined) {
    super('return')
    this.value = value
  }
}

function defaultColor(index: number): string {
  const palette = ['#FF8A3D', '#3DBBFF', '#B463FF', '#4CD787', '#FFD65C', '#FF6B6B']
  return palette[Math.abs(index) % palette.length]
}

export function runMasterScript(source: string): RunResult {
  if (source.trim() === '') {
    return { ok: true, console: [], turtle: newTurtleState(), steps: 0 }
  }
  try {
    const parser = new Parser(source)
    const program = parser.parseProgram()
    return new Interpreter().run(program)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { ok: false, console: [], turtle: newTurtleState(), error: message, steps: 0 }
  }
}

// ---- Block serialization ------------------------------------------------

const BLOCK_SNIPPETS: Record<string, (node: BlockNode) => string> = {
  print: (n) => `print(${quoteIfNeeded(n.args.text ?? '')});`,
  let: (n) => `let ${n.args.name || 'value'} = ${n.args.value ?? '0'};`,
  forward: (n) => `forward(${n.args.steps || '50'});`,
  back: (n) => `back(${n.args.steps || '50'});`,
  left: (n) => `left(${n.args.degrees || '90'});`,
  right: (n) => `right(${n.args.degrees || '90'});`,
  penColor: (n) => `penColor(${n.args.color || '1'});`,
  penUp: () => `penUp();`,
  penDown: () => `penDown();`,
  clear: () => `clear();`,
  repeat: (n) => {
    const body = n.children.map((c) => indent(blockToCode(c))).join('\n')
    return `repeat (${n.args.count || '4'}) {\n${body}\n}`
  },
  ifBlock: (n) => {
    const body = n.children.map((c) => indent(blockToCode(c))).join('\n')
    return `if (${n.args.condition || 'true'}) {\n${body}\n}`
  },
  call: (n) => `${n.args.name || 'draw'}();`
}

export function quoteIfNeeded(v: string): string {
  const trimmed = v.trim()
  if (trimmed === '') return '""'
  if (/^-?\d+(\.\d+)?$/.test(trimmed) || trimmed.startsWith('"')) return trimmed
  return `"${trimmed.replace(/"/g, '\\"')}"`
}

function indent(s: string): string {
  return s
    .split('\n')
    .map((l) => '  ' + l)
    .join('\n')
}

export function blockToCode(node: BlockNode): string {
  const fn = BLOCK_SNIPPETS[node.type]
  if (!fn) return ''
  return fn(node)
}

export function blocksToCode(blocks: BlockNode[]): string {
  return blocks.map(blockToCode).join('\n')
}

// ---- Validation ----------------------------------------------------------

export function validateRun(
  result: RunResult,
  validation: StageValidation,
  blocks?: BlockNode[]
): { passed: boolean; messages: string[] } {
  const messages: string[] = []
  if (!result.ok) {
    return { passed: false, messages: [result.error ?? 'The program did not run.'] }
  }
  let passed = true
  if (validation.consoleExact) {
    const joined = result.console.join('\n')
    if (joined !== validation.consoleExact.join('\n')) {
      passed = false
      messages.push(`Expected console output to be exactly:\n${validation.consoleExact.join('\n')}`)
    }
  }
  if (validation.consoleIncludes) {
    for (const needle of validation.consoleIncludes) {
      if (!result.console.some((l) => l.includes(needle))) {
        passed = false
        messages.push(`Your output should mention "${needle}".`)
      }
    }
  }
  if (validation.consoleLines !== undefined) {
    if (result.console.length !== validation.consoleLines) {
      passed = false
      messages.push(`Expected ${validation.consoleLines} line(s) of output, got ${result.console.length}.`)
    }
  }
  if (validation.requireKeywords) {
    const sourceKeywords = [...(validation.requireKeywords ?? [])]
    void sourceKeywords
    // keyword check happens against source in caller
  }
  return { passed, messages }
}

export function checkKeywords(source: string, keywords: string[]): string[] {
  return keywords.filter((k) => !source.includes(k))
}
