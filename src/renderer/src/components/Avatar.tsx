// Avatar system: the app mascot plus a small set of hand-drawn SVG critters.
// No emojis anywhere — avatars are actual illustrations.

import mascotImg from '../assets/mascot.png'

export const AVATARS = ['panda', 'fox', 'cat', 'bear', 'robot', 'alien'] as const

export type AvatarId = (typeof AVATARS)[number]

const COLORS: Record<string, string> = {
  fox: '#FF8A3D',
  cat: '#3DBBFF',
  bear: '#B463FF',
  robot: '#4CD787',
  alien: '#FFD65C'
}

function Critter({ id, size }: { id: string; size: number }): React.JSX.Element {
  if (id === 'panda') {
    return (
      <img
        src={mascotImg}
        alt="panda"
        style={{
          width: size,
          height: size
        }}
        className="avatar-img"
        draggable={false}
      />
    )
  }
  const c = COLORS[id] ?? '#FF8A3D'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={id}>
      <circle cx="32" cy="32" r="30" fill="#FFF6E8" />
      <circle cx="32" cy="38" r="22" fill={c} />
      {id === 'fox' && (
        <>
          <polygon points="14,26 20,8 26,22" fill={c} />
          <polygon points="50,26 44,8 38,22" fill={c} />
        </>
      )}
      {id === 'cat' && <polygon points="16,14 22,24 28,16" fill={c} />}
      {id === 'cat' && <polygon points="48,14 42,24 36,16" fill={c} />}
      {id === 'bear' && <circle cx="14" cy="22" r="8" fill={c} />}
      {id === 'bear' && <circle cx="50" cy="22" r="8" fill={c} />}
      {id === 'alien' && (
        <>
          <ellipse cx="26" cy="24" rx="6" ry="8" fill="#3D2B1F" />
          <ellipse cx="38" cy="24" rx="6" ry="8" fill="#3D2B1F" />
        </>
      )}
      {id === 'robot' && (
        <>
          <rect x="20" y="16" width="24" height="8" rx="3" fill="#FFF6E8" />
          <circle cx="24" cy="32" r="5" fill="#3D2B1F" />
          <circle cx="40" cy="32" r="5" fill="#3D2B1F" />
        </>
      )}
      {(id === 'fox' || id === 'cat' || id === 'bear') && (
        <>
          <circle cx="25" cy="34" r="5" fill="#3D2B1F" />
          <circle cx="39" cy="34" r="5" fill="#3D2B1F" />
          <circle cx="27" cy="32" r="1.6" fill="#fff" />
          <circle cx="41" cy="32" r="1.6" fill="#fff" />
        </>
      )}
      <ellipse cx="27" cy="42" rx="2.6" ry="3.4" fill="#3D2B1F" />
      <ellipse cx="37" cy="42" rx="2.6" ry="3.4" fill="#3D2B1F" />
    </svg>
  )
}

export function Avatar({
  id,
  size = 64,
  className,
  onClick
}: {
  id: string
  size?: number
  className?: string
  onClick?: () => void
}): React.JSX.Element {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        overflow: 'hidden',
        borderRadius: '50%'
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <Critter id={id} size={size} />
    </div>
  )
}
