interface NavArrowsProps {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export function NavArrows({ current, total, onPrev, onNext }: NavArrowsProps) {
  return (
    <div
      className="nav-arrows"
      style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 100 }}
    >
      <button
        onClick={onPrev}
        disabled={current === 0}
        style={{
          background: 'transparent',
          border: '1px solid #334155',
          color: current === 0 ? '#334155' : '#94A3B8',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.7rem',
          padding: '6px 14px',
          cursor: current === 0 ? 'default' : 'pointer',
        }}
      >
        ← PREV
      </button>
      <button
        onClick={onNext}
        disabled={current === total - 1}
        style={{
          background: 'transparent',
          border: '1px solid #334155',
          color: current === total - 1 ? '#334155' : '#94A3B8',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.7rem',
          padding: '6px 14px',
          cursor: current === total - 1 ? 'default' : 'pointer',
        }}
      >
        NEXT →
      </button>
    </div>
  )
}
