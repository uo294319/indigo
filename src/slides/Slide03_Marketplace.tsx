import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

export function Slide03_Marketplace() {
  const nodes = [
    { title: 'USUARIO', sub: 'Entrega Prenda' },
    { title: 'LOGÍSTICA', sub: 'Validación IA' },
    { title: 'INDIGO', sub: 'Publicación' },
    { title: 'COMPRADOR', sub: 'Venta Directa' },
  ]

  return (
    <SlideContainer background="surface" slideNumber={3}>
      <Headline>
        Circuito Cerrado C2B: Del armario del cliente a la reventa en 7 días.
      </Headline>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="90%" viewBox="0 0 1000 250" style={{ overflow: 'visible' }}>
          {nodes.map((n, i) => (
            <g key={n.title} transform={`translate(${i * 260}, 50)`}>
              <rect width={220} height={120} fill="#111827" rx={8}/>
              <circle cx={110} cy={-20} r={25} fill="#00D2A0"/>
              <text x={110} y={-20} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontSize={20} fontWeight="bold">{i+1}</text>
              <text x={110} y={55} textAnchor="middle" fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={22} fontWeight="bold">{n.title}</text>
              <text x={110} y={85} textAnchor="middle" fill="#94A3B8" fontFamily="Inter, sans-serif" fontSize={16}>{n.sub}</text>
              {i < 3 && (
                <path d="M 230 60 L 255 60" stroke="#00D2A0" strokeWidth={4} markerEnd="url(#arrG)"/>
              )}
            </g>
          ))}
          {/* Loop de recompensa */}
          <path d="M 900 180 Q 500 280 110 180" stroke="#00D2A0" strokeWidth={3} fill="none" strokeDasharray="10 5" />
          <text x={500} y={235} textAnchor="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={18} fontWeight="bold">RECOMPENSA INMEDIATA: SALDO INDIGO</text>
        </svg>
      </div>
    </SlideContainer>
  )
}