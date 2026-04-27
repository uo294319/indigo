import type { ReactNode } from 'react'

export function AccentLine({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 24 }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: '#00D2A0' }} />
      {children}
    </div>
  )
}
