// Plain-text code editor for text stages. Monospace, ligatures off (default).

import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export function CodeEditor({
  starter: _starter,
  value,
  onChange,
  onSubmit
}: {
  starter: string
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}): React.JSX.Element {
  const { t } = useTranslation()
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.fontVariantLigatures = 'none'
    }
  }, [])

  return (
    <div
      className="col"
      style={{
        gap: 8
      }}
    >
      <span className="field-label">{t('stage.yourCode')}</span>
      <textarea
        ref={ref}
        className="textarea"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 15,
          minHeight: 260
        }}
        value={value}
        spellCheck={false}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault()
            const el = e.currentTarget
            const start = el.selectionStart
            const end = el.selectionEnd
            const next = value.slice(0, start) + '  ' + value.slice(end)
            onChange(next)
            requestAnimationFrame(() => {
              el.selectionStart = el.selectionEnd = start + 2
            })
          }
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
            onSubmit()
          }
        }}
      />
    </div>
  )
}
