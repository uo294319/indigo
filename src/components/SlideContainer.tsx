import type { ReactNode } from 'react'
import { Logo } from './Logo'
import type { BgVariant } from '../styles/tokens'

interface SlideContainerProps {
  children: ReactNode
  background: BgVariant
  slideNumber: number
  total?: number
  demoUrl?: string
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
  black:   { bg: '#111827', logoVariant: 'dark' },
  surface: { bg: '#F8FAFC', logoVariant: 'horizontal' },
  canvas:  { bg: '#FFFFFF', logoVariant: 'horizontal' },
}

export function SlideContainer({ children, background, slideNumber, total = 12, demoUrl }: SlideContainerProps) {
  const { bg, logoVariant, grid } = bgConfig[background]
  const accentColor = '#00D2A0'
  const metaColor   = '#94A3B8'

  return (
    <div
      className="slide"
      style={{
        width: '100%',
        height: '100%',
        background: bg,
        // Al no existir 'grid', backgroundImage será undefined y el fondo será liso
        backgroundImage: grid,
        backgroundSize: grid ? '50px 50px' : undefined,
        position: 'relative',
        padding: '36px 48px 48px', // Mantenemos el padding optimizado para PDF
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {children}

      {/* Footer */}
      <div
        className="progress-container"
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '0.72rem',
                color: accentColor,
                textDecoration: 'none',
                border: `1px solid ${accentColor}`,
                padding: '2px 8px',
                borderRadius: 2,
                letterSpacing: '0.05em',
                opacity: 0.85,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >
              DEMO
            </a>
          )}
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
    </div>
  )
}