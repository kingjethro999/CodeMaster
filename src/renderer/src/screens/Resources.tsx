// Self-directed resource library: books, videos, and docs organized by
// career path. All entries are explanatory material, not copy-along tutorials.

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, BookOpen, Clapperboard, FileText, ExternalLink } from 'lucide-react'
import type { CareerPathId } from '../../../shared/types'
import { useApp } from '../store'
import { sound } from '../lib/sound'

export interface ResourceEntry {
  id: string
  path: CareerPathId
  kind: 'book' | 'video' | 'docs'
  title: string
  creator: string
  url: string
  why: string
  tags: string[]
}

const KIND_ICON: Record<ResourceEntry['kind'], React.JSX.Element> = {
  book: <BookOpen size={20} />,
  video: <Clapperboard size={20} />,
  docs: <FileText size={20} />
}

export function Resources(): React.JSX.Element {
  const { t } = useTranslation()
  const { go, activeProfile, isGuest, guestPath } = useApp()
  const [items, setItems] = useState<ResourceEntry[]>([])
  const [filter, setFilter] = useState<'all' | ResourceEntry['kind']>('all')

  const activePath: CareerPathId | null = isGuest ? (guestPath as CareerPathId | null) : (activeProfile?.careerPath ?? null)

  useEffect(() => {
    void window.api.resources.list().then((r) => setItems(r as ResourceEntry[]))
  }, [])

  const shown = items.filter((r) => (filter === 'all' ? true : r.kind === filter))

  const openResource = (r: ResourceEntry): void => {
    sound.click()
    window.open(r.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="col" style={{ gap: 20 }}>
      <div className="row spread wrap">
        <button className="btn btn-ghost" onClick={() => go({ name: 'home' })}>
          <ArrowLeft size={18} /> {t('common.back')}
        </button>
        <div className="col center" style={{ gap: 2 }}>
          <h2>{t('resources.title')}</h2>
          <span className="muted">{t('resources.subtitle')}</span>
        </div>
        <div className="row" style={{ gap: 8 }}>
          {(['all', 'book', 'video', 'docs'] as const).map((k) => (
            <button
              key={k}
              className={`chip ${filter === k ? 'selected' : ''}`}
              onClick={() => setFilter(k)}
            >
              {k === 'all' ? t('resources.all') : t(`resources.${k === 'book' ? 'books' : k === 'video' ? 'videos' : 'docs'}`)}
            </button>
          ))}
        </div>
      </div>

      {activePath && (
        <div className="notice notice-info">
          <strong>{t(`paths.${activePath}.name`)}</strong>
          <span> · {t('resources.why')}</span>
        </div>
      )}

      <div className="col" style={{ gap: 12 }}>
        {shown.map((r) => (
          <div key={r.id} className="card-flat row spread wrap">
            <div className="row" style={{ gap: 14 }}>
              <span className="path-icon" style={{ background: 'var(--accent-yellow)', width: 44, height: 44 }}>
                {KIND_ICON[r.kind]}
              </span>
              <div className="col" style={{ gap: 2 }}>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>{r.title}</strong>
                <span className="muted" style={{ fontSize: 14 }}>
                  {r.creator}
                </span>
                <span style={{ fontSize: 14 }}>{r.why}</span>
                <div className="row wrap" style={{ gap: 6, marginTop: 4 }}>
                  {r.tags.map((tag) => (
                    <span key={tag} className="lang-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="btn btn-info" onClick={() => openResource(r)}>
              <ExternalLink size={18} /> {t('resources.open')}
            </button>
          </div>
        ))}
        {shown.length === 0 && <p className="muted">{t('resources.subtitle')}</p>}
      </div>
    </div>
  )
}
