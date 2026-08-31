// Block palette shared by the curriculum (main) and the block editor (renderer).

import type { BlockTemplate } from './types'

export const BLOCK_LIBRARY: Record<string, BlockTemplate> = {
  print: {
    type: 'print',
    labelKey: 'block.print',
    color: 'var(--accent-orange)',
    argKeys: ['text'],
    wrappable: false
  },
  let: {
    type: 'let',
    labelKey: 'block.let',
    color: 'var(--accent-blue)',
    argKeys: ['name', 'value'],
    wrappable: false
  },
  forward: {
    type: 'forward',
    labelKey: 'block.forward',
    color: 'var(--accent-green)',
    argKeys: ['steps'],
    wrappable: false
  },
  back: {
    type: 'back',
    labelKey: 'block.back',
    color: 'var(--accent-green)',
    argKeys: ['steps'],
    wrappable: false
  },
  left: {
    type: 'left',
    labelKey: 'block.left',
    color: 'var(--accent-green)',
    argKeys: ['degrees'],
    wrappable: false
  },
  right: {
    type: 'right',
    labelKey: 'block.right',
    color: 'var(--accent-green)',
    argKeys: ['degrees'],
    wrappable: false
  },
  penColor: {
    type: 'penColor',
    labelKey: 'block.penColor',
    color: 'var(--accent-purple)',
    argKeys: ['color'],
    wrappable: false
  },
  penUp: {
    type: 'penUp',
    labelKey: 'block.penUp',
    color: 'var(--accent-purple)',
    wrappable: false
  },
  penDown: {
    type: 'penDown',
    labelKey: 'block.penDown',
    color: 'var(--accent-purple)',
    wrappable: false
  },
  clear: {
    type: 'clear',
    labelKey: 'block.clear',
    color: 'var(--accent-purple)',
    wrappable: false
  },
  repeat: {
    type: 'repeat',
    labelKey: 'block.repeat',
    color: 'var(--accent-purple)',
    argKeys: ['count'],
    wrappable: true
  },
  ifBlock: {
    type: 'ifBlock',
    labelKey: 'block.if',
    color: 'var(--accent-blue)',
    argKeys: ['condition'],
    wrappable: true
  },
  call: {
    type: 'call',
    labelKey: 'block.call',
    color: 'var(--accent-green)',
    argKeys: ['name'],
    wrappable: false
  }
}

export const BLOCK_ARG_OPTIONS: Record<string, string[]> = {
  color: ['1', '2', '3', '4', '5']
}

export const BLOCK_ARG_DEFAULTS: Record<string, string> = {
  text: '',
  name: 'value',
  value: '0',
  steps: '50',
  degrees: '90',
  color: '1',
  count: '4',
  condition: 'true',
  functionName: 'draw'
}

export const BLOCK_ARG_KEY: Record<string, string> = {
  text: 'argText',
  name: 'argName',
  value: 'argValue',
  steps: 'argSteps',
  degrees: 'argDegrees',
  color: 'argColor',
  count: 'argCount',
  condition: 'argCondition',
  functionName: 'argFunctionName'
}
