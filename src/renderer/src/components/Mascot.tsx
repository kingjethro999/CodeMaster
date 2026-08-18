// The Master mascot — reacts to app state. Uses the commissioned red panda
// image with CSS animation for mood states.

import mascotImg from '../assets/mascot.png'

export type MascotMood = 'idle' | 'happy' | 'wobble' | 'think'

export function Mascot({ mood = 'idle', size = 120 }: { mood?: MascotMood; size?: number }): React.JSX.Element {
  const cls = mood === 'happy' ? 'mascot-happy' : mood === 'wobble' ? 'mascot-wobble' : mood === 'think' ? 'mascot-think' : ''
  return <img src={mascotImg} alt="Master the red panda" className={`mascot ${cls}`} style={{ width: size, height: size }} draggable={false} />
}
