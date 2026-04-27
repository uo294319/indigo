import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const steps = [
  { n: '01', title: 'RECOGIDA',  detail: 'Correos · SEUR\nInPost · DHL', badge: 'multi-op.' },
  { n: '02', title: 'ESCANEO',   detail: 'Arco láser\nen muelle', badge: 'auto' },
  { n: '03', title: 'CUSTODIA',  detail: '"Nido de Abeja"\nmáx. 7 días', badge: 'buffer' },
  { n: '04', title: 'PROCESADO', detail: 'AS/RS + Sorter\nG2P picking', badge: 'automático' },
  { n: '05', title: 'REVENTA',   detail: 'App Inditex\n+ DPP prenda', badge: 'digital' },
]

export function Slide06_Logistics() {
  return (
    <SlideContainer background="surface" slideNumber={6}>
      <Headline>
        Subcontratación híbrida en primera milla, automatización total en el centro.
      </Headline>

      {/* Flujo 5 pasos — SVG full-width */}
      <div style={{ marginBottom: 28 }}>
        <svg
          width="100%"
          viewBox="0 0 1000 200"
          style={{ display: 'block', overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker id="lArr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0.5 L0,6.5 L6,3.5 z" fill="#00D2A0"/>
            </marker>
          </defs>

          {steps.map((s, i) => {
            const x = 10 + i * 198
            const W = 176, H = 148, midY = 74

            return (
              <g key={s.n}>
                {/* Card */}
                <rect x={x} y={10} width={W} height={H} fill="#111827" rx={3}/>
                {/* Top accent */}
                <rect x={x} y={10} width={W} height={4} fill={i === 3 ? '#00D2A0' : '#1E2939'} rx={2}/>

                {/* Step number */}
                <rect x={x + 10} y={18} width={30} height={18} rx={2} fill={i === 3 ? 'rgba(0,210,160,0.15)' : '#1E2939'}/>
                <text x={x + 25} y={27} textAnchor="middle" dominantBaseline="middle"
                  fill={i === 3 ? '#00D2A0' : '#64748B'} fontFamily="'Share Tech Mono', monospace" fontSize={9} fontWeight="bold">
                  {s.n}
                </text>

                {/* Badge */}
                <rect x={x + W - 52} y={18} width={44} height={18} rx={2} fill="#1E2939"/>
                <text x={x + W - 30} y={27} textAnchor="middle" dominantBaseline="middle"
                  fill="#94A3B8" fontFamily="'Share Tech Mono', monospace" fontSize={7}>
                  {s.badge}
                </text>

                {/* Title */}
                <text x={x + W / 2} y={midY - 8} textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={14} fontWeight="bold">
                  {s.title}
                </text>

                {/* Detail */}
                {s.detail.split('\n').map((line, j) => (
                  <text key={j} x={x + W / 2} y={midY + 16 + j * 16} textAnchor="middle" dominantBaseline="middle"
                    fill="#94A3B8" fontFamily="Inter, sans-serif" fontSize={10}>
                    {line}
                  </text>
                ))}

                {/* Arrow */}
                {i < steps.length - 1 && (
                  <line
                    x1={x + W} y1={74} x2={x + W + 10} y2={74}
                    stroke="#00D2A0" strokeWidth={2}
                    markerEnd="url(#lArr)"
                  />
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Bullets */}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          <span key="a"><span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace" }}>Multi-operador</span> mitiga riesgo de huelga / SLA (R-007)</span>,
          <span key="b"><span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace" }}>AS/RS vertical</span> + <span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace" }}>Sorter automático</span> — Goods-to-Person elimina cuellos de botella</span>,
          <span key="c"><span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace" }}>Estaciones Put-to-Light</span> estandarizan el doblado y control de calidad</span>,
        ].map((b, i) => (
          <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#111827', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ color: '#00D2A0', marginTop: 2, flexShrink: 0 }}>—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </SlideContainer>
  )
}
