import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const levels = [
  { name: 'Bronce',  benefit: 'Recompensa base',                    active: false },
  { name: 'Plata',   benefit: 'Bonificaciones puntuales',            active: false },
  { name: 'Oro',     benefit: 'Acceso anticipado a colecciones',     active: false },
  { name: 'Platino', benefit: 'Eventos cerrados + multiplicadores',  active: true  },
]

// Ciclo cerrado de 4 nodos
const CYCLE_NODES = ['Ventas', 'Puntos disp.', 'Cupones', 'Prendas']
const CX = 150, CY = 150, R = 106
const angles = CYCLE_NODES.map((_, i) => -Math.PI / 2 + (2 * Math.PI / 4) * i)
const pts = angles.map(a => ({ x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) }))

export function Slide04_Gamification() {
  return (
    <SlideContainer background="black" slideNumber={4}>
      <Headline dark size="sm">
        Incentivamos a "entrar en la rueda" de la economía circular.
      </Headline>

      <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>

        {/* Izquierda: Rueda */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0' }}>{'>'} LA RUEDA</div>

          <svg width="300" height="300" viewBox="0 0 300 300" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="circArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0.5 L0,5.5 L5,3 z" fill="#334155"/>
              </marker>
            </defs>

            <circle cx={CX} cy={CY} r={R + 28} stroke="#1E2939" strokeWidth={1} fill="none" strokeDasharray="3 4"/>

            {pts.map((p, i) => {
              const next = pts[(i + 1) % pts.length]
              const dx = next.x - p.x, dy = next.y - p.y
              const len = Math.sqrt(dx * dx + dy * dy)
              const nx = dx / len, ny = dy / len
              const shrink = 30
              return (
                <line
                  key={i}
                  x1={p.x + nx * shrink} y1={p.y + ny * shrink}
                  x2={next.x - nx * shrink} y2={next.y - ny * shrink}
                  stroke="#334155" strokeWidth={1.5}
                  markerEnd="url(#circArr)"
                />
              )
            })}

            {pts.map((p, i) => (
              <g key={CYCLE_NODES[i]}>
                <circle cx={p.x} cy={p.y} r={28} fill="#1E2939" stroke="#334155" strokeWidth={1}/>
                {i === 0 && <circle cx={p.x} cy={p.y} r={28} fill="none" stroke="#00D2A0" strokeWidth={1.5}/>}
                
                <text x={p.x} y={p.y - (i === 1 ? 5 : 0)} textAnchor="middle" dominantBaseline="middle"
                  fill={i === 0 ? '#00D2A0' : '#94A3B8'}
                  fontFamily="'Share Tech Mono', monospace" fontSize={9} fontWeight="bold">
                  {CYCLE_NODES[i]}
                </text>
                {/* Añadir subtítulo de caducidad al nodo 2 */}
                {i === 1 && (
                  <text x={p.x} y={p.y + 7} textAnchor="middle" dominantBaseline="middle" fill="#94A3B8" fontFamily="'Share Tech Mono', monospace" fontSize={7} fontWeight="bold">
                    (6 meses)
                  </text>
                )}
              </g>
            ))}

            <circle cx={CX} cy={CY} r={36} fill="rgba(0,210,160,0.06)" stroke="rgba(0,210,160,0.2)" strokeWidth={1}/>
            <text x={CX} y={CY - 7} textAnchor="middle" dominantBaseline="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={9}>LA</text>
            <text x={CX} y={CY + 7} textAnchor="middle" dominantBaseline="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={9}>RUEDA</text>
          </svg>
        </div>

        {/* Derecha: Fidelización y Saldo */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 10 }}>{'>'} NIVELES DE FIDELIZACIÓN Y SALDO HISTÓRICO</div>
            
            <div style={{
              padding: '12px 14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid #1E2939',
              borderRadius: 2,
              marginBottom: 12
            }}>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', color: 'white', marginBottom: 4 }}>Saldo histórico</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#94A3B8' }}>Permanente. Valor reputacional (litros acumulados).</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {levels.map(l => (
                <div key={l.name} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px',
                  background: l.active ? 'rgba(0,210,160,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${l.active ? 'rgba(0,210,160,0.3)' : '#1E2939'}`,
                  borderRadius: 2,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.active ? '#00D2A0' : '#334155', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: l.active ? '#00D2A0' : 'white', minWidth: 56 }}>{l.name}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#94A3B8' }}>{l.benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 6 }}>{'>'} GESTIÓN DE PASIVO (mitiga R-011 / R-013)</div>
            <div style={{
              padding: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(0,210,160,0.3)`,
              borderRadius: 2,
            }}>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', color: '#00D2A0', marginBottom: 6 }}>Saldo disponible (Puntos)</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Caduca a 6 meses. Controla el pasivo de tesorería.<br/>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#334155', display: 'block', marginTop: 8 }}>Aviso automático 7 días antes de caducidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}