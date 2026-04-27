import type { ReactNode } from 'react'

interface BigNumberProps {
  value: ReactNode
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export function BigNumber({ value, label, size = 'md' }: BigNumberProps) {
  const sizes = { sm: '3rem', md: '4.5rem', lg: '6rem' }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: sizes[size],
          color: '#00D2A0',
          lineHeight: 1,
          fontWeight: 'normal',
        }}
      >
        {value}
      </span>
      {label && (
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.3 }}>
          {label}
        </span>
      )}
    </div>
  )
}
