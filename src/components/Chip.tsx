interface ChipProps { label: string; dark?: boolean }

export function Chip({ label, dark = false }: ChipProps) {
  return (
    <span
      style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.65rem',
        color: dark ? '#94A3B8' : '#334155',
        background: dark ? 'rgba(255,255,255,0.06)' : '#E2E8F0',
        border: `1px solid ${dark ? '#334155' : '#CBD5E1'}`,
        borderRadius: 2,
        padding: '3px 8px',
        whiteSpace: 'nowrap',
        letterSpacing: '0.03em',
      }}
    >
      {label}
    </span>
  )
}
