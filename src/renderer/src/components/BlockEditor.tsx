// Block-based editor. Blocks serialize to MasterScript source and run through
// the same interpreter as the text editor. Keyboard accessible.

import { useCallback, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X, GripVertical } from 'lucide-react'
import type { BlockNode, Stage } from '../../../shared/types'
import {
  BLOCK_ARG_DEFAULTS,
  BLOCK_ARG_KEY,
  BLOCK_ARG_OPTIONS,
  BLOCK_LIBRARY
} from '../../../shared/blocklib'
import { blocksToCode } from '../../../shared/interpreter'
import { Select } from './Select'

let idCounter = 0
function nextId(): string {
  return `b${++idCounter}`
}

function makeNode(type: string): BlockNode {
  const tpl = BLOCK_LIBRARY[type]
  const args: Record<string, string> = {}
  for (const k of tpl.argKeys ?? []) args[k] = BLOCK_ARG_DEFAULTS[k] ?? ''
  return {
    id: nextId(),
    type,
    args,
    children: []
  }
}

function collectTypes(blocks: BlockNode[]): string[] {
  const out: string[] = []
  const walk = (list: BlockNode[]): void => {
    for (const b of list) {
      out.push(b.type)
      walk(b.children)
    }
  }
  walk(blocks)
  return out
}

function updateInList(list: BlockNode[], id: string, fn: (n: BlockNode) => BlockNode): BlockNode[] {
  return list.map((n) => {
    if (n.id === id) return fn(n)
    const children = updateInList(n.children, id, fn)
    return children === n.children
      ? n
      : {
          ...n,
          children
        }
  })
}

function removeInList(list: BlockNode[], id: string): BlockNode[] {
  return list.filter((n) => {
    if (n.id === id) return false
    const children = removeInList(n.children, id)
    n.children = children
    return true
  })
}

function isWrapper(type: string): boolean {
  return type === 'repeat' || type === 'ifBlock'
}

function insertAfter(
  list: BlockNode[],
  toId: string,
  node: BlockNode,
  foundRef: {
    found: boolean
  }
): BlockNode[] {
  const result: BlockNode[] = []
  for (const b of list) {
    result.push(b)
    if (foundRef.found) continue
    if (b.id === toId) {
      result.push(node)
      foundRef.found = true
    } else if (b.children.length) {
      const childFound = {
        found: false
      }
      const children = insertAfter(b.children, toId, node, childFound)
      if (childFound.found) {
        result[result.length - 1] = {
          ...b,
          children
        }
        foundRef.found = true
      }
    }
  }
  return result
}

function moveInList(list: BlockNode[], fromId: string, toId: string | null): BlockNode[] {
  const source = findNode(list, fromId)
  if (!source) return list
  const withoutSource = removeInList(list, fromId)
  if (toId === null) return [...withoutSource, source]
  const target = findNode(withoutSource, toId)
  if (!target) return withoutSource
  if (isWrapper(target.type)) {
    return updateInList(withoutSource, toId, (n) => ({
      ...n,
      children: [...n.children, source]
    }))
  }
  return insertAfter(withoutSource, toId, source, {
    found: false
  })
}

function findNode(list: BlockNode[], id: string): BlockNode | undefined {
  for (const n of list) {
    if (n.id === id) return n
    const found = findNode(n.children, id)
    if (found) return found
  }
  return undefined
}

export function BlockEditor({
  stage,
  onChange
}: {
  stage: Stage
  onChange: (source: string, blocks: BlockNode[]) => void
}): React.JSX.Element {
  const { t } = useTranslation()
  const [blocks, setBlocks] = useState<BlockNode[]>([])
  const [dragType, setDragType] = useState<string | null>(null)
  const [dragId, setDragId] = useState<string | null>(null)
  const [overWorkspace, setOverWorkspace] = useState(false)
  const [overSlot, setOverSlot] = useState<string | null>(null)
  const lastChanged = useRef('')

  const paletteTypes = useMemo(() => stage.palette ?? [], [stage.palette])

  const emit = useCallback(
    (next: BlockNode[]): void => {
      const source = blocksToCode(next)
      if (source !== lastChanged.current) {
        lastChanged.current = source
        onChange(source, next)
      }
    },
    [onChange]
  )

  const addBlock = (type: string): void => {
    const next = [...blocks, makeNode(type)]
    setBlocks(next)
    emit(next)
  }

  const addChild = (parentId: string, type: string): void => {
    const next = updateInList(blocks, parentId, (n) => ({
      ...n,
      children: [...n.children, makeNode(type)]
    }))
    setBlocks(next)
    emit(next)
  }

  const updateBlock = (id: string, patch: Partial<BlockNode>): void => {
    const next = updateInList(blocks, id, (n) => ({
      ...n,
      ...patch
    }))
    setBlocks(next)
    emit(next)
  }

  const removeBlock = (id: string): void => {
    const next = removeInList(blocks, id)
    setBlocks(next)
    emit(next)
  }

  const handleDrop = (targetId: string | null): void => {
    if (dragType) {
      if (targetId) {
        addChild(targetId, dragType)
      } else {
        addBlock(dragType)
      }
      setDragType(null)
    } else if (dragId) {
      const next = moveInList(blocks, dragId, targetId)
      if (next !== blocks) {
        setBlocks(next)
        emit(next)
      }
      setDragId(null)
    }
    setOverWorkspace(false)
    setOverSlot(null)
  }

  const moveByKeyboard = (id: string, dir: -1 | 1): void => {
    const current = [...blocks]
    const idx = current.findIndex((n) => n.id === id)
    if (idx === -1) return
    const target = idx + dir
    if (target < 0 || target >= current.length) return
    const copy = [...current]
    copy[idx] = copy[target]
    copy[target] = current[idx]
    setBlocks(copy)
    emit(copy)
  }

  const renderBlock = (node: BlockNode): React.JSX.Element => {
    const tpl = BLOCK_LIBRARY[node.type]
    const isWrapper = tpl.wrappable
    const inner = (
      <>
        <div className="block-head">
          <span
            style={{
              display: 'inline-flex'
            }}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', node.id)
              setDragId(node.id)
            }}
          >
            <GripVertical size={16} />
          </span>
          {t(tpl.labelKey)}
          {(tpl.argKeys ?? []).map((k) =>
            BLOCK_ARG_OPTIONS[k] ? (
              <Select
                key={k}
                compact
                value={node.args[k]}
                onChange={(v) =>
                  updateBlock(node.id, {
                    args: {
                      ...node.args,
                      [k]: v
                    }
                  })
                }
                options={BLOCK_ARG_OPTIONS[k].map((opt) => ({
                  value: opt,
                  label: opt
                }))}
              />
            ) : (
              <input
                key={k}
                className="block-input"
                placeholder={t(`block.${BLOCK_ARG_KEY[k]}`)}
                value={node.args[k] ?? ''}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) =>
                  updateBlock(node.id, {
                    args: {
                      ...node.args,
                      [k]: e.target.value
                    }
                  })
                }
              />
            )
          )}
          <button
            aria-label={t('common.cancel')}
            className="icon-btn"
            style={{
              background: 'rgba(255,255,255,0.2)',
              boxShadow: 'none',
              width: 28,
              height: 28
            }}
            onClick={(e) => {
              e.stopPropagation()
              removeBlock(node.id)
            }}
          >
            <X size={14} />
          </button>
        </div>
        {isWrapper && (
          <div
            className={`block-slot ${overSlot === node.id ? 'dragover' : ''}`}
            onDragOver={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setOverSlot(node.id)
            }}
            onDragLeave={() => setOverSlot((cur) => (cur === node.id ? null : cur))}
            onDrop={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleDrop(node.id)
            }}
          >
            {node.children.map((c) => (
              <div key={c.id} onClick={(e) => e.stopPropagation()}>
                {renderBlock(c)}
              </div>
            ))}
          </div>
        )}
      </>
    )
    return (
      <div
        className={`block ${isWrapper ? 'wrapper' : ''}`}
        style={{
          background: tpl.color
        }}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', node.id)
          setDragId(node.id)
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.altKey && e.key === 'ArrowUp') {
            e.preventDefault()
            moveByKeyboard(node.id, -1)
          } else if (e.altKey && e.key === 'ArrowDown') {
            e.preventDefault()
            moveByKeyboard(node.id, 1)
          }
        }}
      >
        {inner}
      </div>
    )
  }

  return (
    <div className="block-editor">
      <div className="palette" role="list" aria-label={t('stage.palette')}>
        <span className="field-label">{t('stage.palette')}</span>
        {paletteTypes.map((type) => {
          const tpl = BLOCK_LIBRARY[type]
          return (
            <div
              key={type}
              role="button"
              tabIndex={0}
              aria-label={t(tpl.labelKey)}
              className="block"
              style={{
                background: tpl.color,
                cursor: 'pointer'
              }}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('application/x-cm-block', type)
                setDragType(type)
              }}
              onClick={() => addBlock(type)}
              onKeyDown={(e) => e.key === 'Enter' && addBlock(type)}
            >
              {t(tpl.labelKey)}
              {(tpl.argKeys ?? []).map((k) => (
                <span key={k} className="block-inline-label">
                  {t(`block.${BLOCK_ARG_KEY[k]}`)}
                </span>
              ))}
            </div>
          )
        })}
      </div>

      <div
        className={`workspace ${overWorkspace ? 'dragover' : ''}`}
        onDragOver={(e) => {
          e.preventDefault()
          setOverWorkspace(true)
        }}
        onDragLeave={() => setOverWorkspace(false)}
        onDrop={(e) => {
          e.preventDefault()
          handleDrop(null)
        }}
        aria-label={t('stage.workspace')}
      >
        {blocks.length === 0 ? (
          <div className="workspace-empty">{t('stage.emptyWorkspace')}</div>
        ) : (
          blocks.map((b) => <div key={b.id}>{renderBlock(b)}</div>)
        )}
      </div>
    </div>
  )
}

export { collectTypes }
