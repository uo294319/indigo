interface KpiCardProps {
  label: string
  value: string
  sublabel?: string
  dark?: boolean
}

export function KpiCard({ label, value, sublabel, dark = false }: KpiCardProps) {
  const border = dark ? '1px solid #334155' : '1px solid #E2E8F0'
  const bg = dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'
  const labelColor = dark ? '#94A3B8' : '#64748B'
  return (
    <div style={{ border, background: bg, padding: '20px 24px', borderRadius: 2, minWidth: 160 }}>
      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: labelColor, letterSpacing: '0.1em', marginBottom: 8 }}>
        {'> '}{label}
      </div>
      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '2rem', color: '#00D2A0', lineHeight: 1 }}>
        {value}
      </div>
      {sublabel && (
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: labelColor, marginTop: 4 }}>{sublabel}</div>
      )}
    </div>
  )
}
