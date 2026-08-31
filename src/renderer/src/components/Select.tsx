// Custom Select — replaces all plain <select> elements across the app.
// Fully keyboard-accessible, searchable, closes on outside-click/Escape, animates open/close.
// Two variants: default (form fields) and compact (inline, for block editor args).

import { useEffect, useRef, useState, useId } from 'react'
import { ChevronDown, Check, Search } from 'lucide-react'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  /** Placeholder shown when no value matches */
  placeholder?: string
  /** Max-width or custom styles for trigger */
  style?: React.CSSProperties
  /** Compact variant: smaller, used inline inside block args */
  compact?: boolean
  /** Force search on/off. Defaults to true if options >= 5 and non-compact */
  searchable?: boolean
  /** Placeholder for search input */
  searchPlaceholder?: string
  disabled?: boolean
  id?: string
}

export function Select({
  value,
  onChange,
  options,
  placeholder = 'Select…',
  style,
  compact = false,
  searchable,
  searchPlaceholder = 'Search options…',
  disabled = false,
  id
}: SelectProps): React.JSX.Element {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const wrapRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const autoId = useId()
  const listId = `select-list-${id ?? autoId}`

  // Determine if search input should be shown
  const isSearchable = searchable ?? (!compact && options.length >= 5)

  const selected = options.find((o) => o.value === value)

  // Filter options based on search query
  const filteredOptions = searchQuery.trim()
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent): void => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Focus search input or scroll focused item into view when open
  useEffect(() => {
    if (!open) {
      setSearchQuery('')
      setFocusedIndex(-1)
      return
    }

    if (isSearchable && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }

    const initialIdx = filteredOptions.findIndex((o) => o.value === value)
    setFocusedIndex(initialIdx >= 0 ? initialIdx : 0)
  }, [open])

  // Scroll focused item into view
  useEffect(() => {
    if (!open || focusedIndex < 0) return
    const item = listRef.current?.children[isSearchable ? focusedIndex + 1 : focusedIndex] as
      HTMLElement | undefined
    item?.scrollIntoView({
      block: 'nearest'
    })
  }, [focusedIndex, open, isSearchable])

  const choose = (val: string): void => {
    onChange(val)
    setOpen(false)
    setSearchQuery('')
    setFocusedIndex(-1)
  }

  const handleTriggerKeyDown = (e: React.KeyboardEvent): void => {
    if (disabled) return
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!open) {
          setOpen(true)
        }
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!open) {
          setOpen(true)
        } else {
          setFocusedIndex((i) => Math.min(i + 1, filteredOptions.length - 1))
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex((i) => Math.max(i - 1, 0))
        break
    }
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          choose(filteredOptions[focusedIndex].value)
        } else if (filteredOptions.length > 0) {
          choose(filteredOptions[0].value)
        }
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex((i) => Math.min(i + 1, filteredOptions.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex((i) => Math.max(i - 1, 0))
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  return (
    <div
      ref={wrapRef}
      className={`cm-select${compact ? ' cm-select--compact' : ''}${disabled ? ' cm-select--disabled' : ''}`}
      style={style}
    >
      {/* Trigger */}
      <button
        type="button"
        id={id}
        className="cm-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setOpen((o) => !o)
          }
        }}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="cm-select__label">{selected?.label ?? placeholder}</span>
        <ChevronDown
          size={compact ? 14 : 16}
          className={`cm-select__chevron${open ? ' cm-select__chevron--open' : ''}`}
        />
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="cm-select__dropdown">
          {isSearchable && (
            <div className="cm-select__search-box">
              <Search size={14} className="cm-select__search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                className="cm-select__search-input"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setFocusedIndex(0)
                }}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
          )}

          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label="Options"
            className="cm-select__list"
          >
            {filteredOptions.length === 0 ? (
              <li className="cm-select__empty">No options found</li>
            ) : (
              filteredOptions.map((opt, idx) => {
                const isSelected = opt.value === value
                const isFocused = idx === focusedIndex
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    className={`cm-select__option${isSelected ? ' cm-select__option--selected' : ''}${isFocused ? ' cm-select__option--focused' : ''}`}
                    onMouseEnter={() => setFocusedIndex(idx)}
                    onMouseDown={(e) => {
                      e.preventDefault() // prevent blur before click
                      choose(opt.value)
                    }}
                  >
                    <span className="cm-select__option-label">{opt.label}</span>
                    {isSelected && <Check size={14} className="cm-select__check" />}
                  </li>
                )
              })
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
