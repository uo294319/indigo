import type { ReactNode } from 'react'
import { Logo } from './Logo'
import type { BgVariant } from '../styles/tokens'

interface SlideContainerProps {
  children: ReactNode
  background: BgVariant
  slideNumber: number
  total?: number
}

const techGrid = [
  'linear-gradient(0deg, transparent 24%, rgba(0,210,160,.06) 25%, rgba(0,210,160,.06) 26%, transparent 27%, transparent 74%, rgba(0,210,160,.06) 75%, rgba(0,210,160,.06) 76%, transparent 77%, transparent)',
  'linear-gradient(90deg, transparent 24%, rgba(0,210,160,.06) 25%, rgba(0,210,160,.06) 26%, transparent 27%, transparent 74%, rgba(0,210,160,.06) 75%, rgba(0,210,160,.06) 76%, transparent 77%, transparent)',
].join(', ')

const bgConfig: Record<BgVariant, {
  bg: string
  logoVariant: 'dark' | 'horizontal'
  grid?: string
}> = {
  black:   { bg: '#111827', logoVariant: 'dark',       grid: techGrid },
  surface: { bg: '#F8FAFC', logoVariant: 'horizontal'                 },
  canvas:  { bg: '#FFFFFF', logoVariant: 'horizontal'                 },
}

export function SlideContainer({ children, background, slideNumber, total = 12 }: SlideContainerProps) {
  const { bg, logoVariant, grid } = bgConfig[background]
  const accentColor = '#00D2A0'
  const metaColor   = '#94A3B8'

  return (
    <div
      className="slide"
      style={{
        width: '100vw',
        height: '100vh',
        background: bg,
        backgroundImage: grid,
        backgroundSize: grid ? '50px 50px' : undefined,
        position: 'relative',
        padding: '52px 64px 68px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {children}

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 48,
          right: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo variant={logoVariant} width={116} />
        <span
          className="progress"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.72rem',
            color: metaColor,
          }}
        >
          <span style={{ color: accentColor }}>{String(slideNumber).padStart(2, '0')}</span>{' '}/ {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
