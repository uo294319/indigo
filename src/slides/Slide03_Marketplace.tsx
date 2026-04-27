import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

export function Slide03_Marketplace() {
  const nodes = [
    { x: 20,  title: 'USUARIO',       sub: 'Particular Inditex' },
    { x: 270, title: 'TIENDA/LOCKER', sub: 'Recogida multi-punto' },
    { x: 520, title: 'CENTRO INDIGO', sub: 'Procesado automático' },
    { x: 770, title: 'APP INDITEX',   sub: '6 marcas · 1 catálogo' },
  ]
  const steps = ['depositar', 'validar IA', 'publicar']
  const W = 200, H = 110, CY = 100

  return (
    <SlideContainer background="surface" slideNumber={3}>
      <Headline>
        Un marketplace C2B nativo: el cliente entrega, Inditex revende, la marca recupera la prenda.
      </Headline>

      {/* Diagrama full-width */}
      <div style={{ marginBottom: 32 }}>
        <svg
          width="100%"
          viewBox="0 0 1000 280"
          style={{ display: 'block', overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker id="arr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0.5 L0,6.5 L6,3.5 z" fill="#334155"/>
            </marker>
            <marker id="arrG" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0.5 L0,6.5 L6,3.5 z" fill="#00D2A0"/>
            </marker>
          </defs>

          {nodes.map((n, i) => (
            <g key={n.title}>
              <rect x={n.x} y={30} width={W} height={H} fill="#111827" rx={3}/>
              <rect x={n.x} y={30} width={W} height={3} fill={i === 2 ? '#00D2A0' : '#334155'} rx={2}/>
              <circle cx={n.x + 16} cy={44} r={11} fill={i === 2 ? 'rgba(0,210,160,0.15)' : '#1E2939'}/>
              <text x={n.x + 16} y={44} textAnchor="middle" dominantBaseline="middle"
                fill={i === 2 ? '#00D2A0' : '#94A3B8'}
                fontFamily="'Share Tech Mono', monospace" fontSize={10} fontWeight="bold">
                {i + 1}
              </text>
              <text x={n.x + W / 2} y={88} textAnchor="middle" dominantBaseline="middle"
                fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={13} fontWeight="bold">
                {n.title}
              </text>
              <text x={n.x + W / 2} y={108} textAnchor="middle" dominantBaseline="middle"
                fill="#94A3B8" fontFamily="Inter, sans-serif" fontSize={10}>
                {n.sub}
              </text>
              {i < nodes.length - 1 && (
                <g>
                  <line
                    x1={n.x + W} y1={CY}
                    x2={nodes[i + 1].x} y2={CY}
                    stroke="#334155" strokeWidth={2}
                    markerEnd="url(#arr)"
                  />
                  <text
                    x={(n.x + W + nodes[i + 1].x) / 2} y={CY - 10}
                    textAnchor="middle"
                    fill="#64748B" fontFamily="'Share Tech Mono', monospace" fontSize={8}>
                    {steps[i]}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* Bucle de recompensa */}
          <path
            d={`M ${nodes[3].x + W} ${CY + 20} C ${nodes[3].x + W} 230, 20 230, 20 ${CY + 20}`}
            stroke="#00D2A0" strokeWidth={1.5} fill="none" strokeDasharray="6 4"
            markerEnd="url(#arrG)"
          />
          <rect x={340} y={222} width={320} height={22} fill="#F1F5F9" rx={2}/>
          <text x={500} y={233} textAnchor="middle" dominantBaseline="middle"
            fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={9}>
            {'>'} recompensa hídrica + saldo IndiGo
          </text>
        </svg>
      </div>

      {/* Propuesta de valor: 3 C's a ancho completo */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { k: 'Comodidad',    v: 'Envío directo desde el particular, sin desplazamientos' },
            { k: 'Recompensas',  v: 'Tasación dinámica con IA según estado y talla' },
            { k: 'Confianza',    v: 'A diferencia de Vinted, hay una empresa validadora detrás' },
          ].map(({ k, v }) => (
            <li key={k} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#111827', display: 'flex', gap: 12 }}>
              <span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace", fontWeight: 700, flexShrink: 0 }}>{k}</span>
              <span style={{ color: '#64748B' }}>— {v}</span>
            </li>
          ))}
        </ul>
      </div>
    </SlideContainer>
  )
}