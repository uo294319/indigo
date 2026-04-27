interface TechLabelProps { children: string }

export function TechLabel({ children }: TechLabelProps) {
  return (
    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#00D2A0', letterSpacing: '0.05em' }}>
      {'> '}{children}
    </span>
  )
}
