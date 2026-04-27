import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { Chip } from '../components/Chip'

const stack = ['Azure Container Apps', '.NET 8', 'Azure Service Bus', 'SignalR', 'JWT', 'Azure Spain Central', '.NET MAUI']
const services = ['Identity', 'Wallet/Rewards', 'Shipping', 'Inventory', 'Catalog', 'AI Vision']

export function Slide07_Backbone() {
  return (
    <SlideContainer background="surface" slideNumber={7}>
      <Headline size="sm">
        Cloud-first sin renunciar al almacén — un edge resiliente para que la línea no pare.
      </Headline>

      {/* Architecture diagram SVG */}
      <div style={{ marginBottom: 20 }}>
        <svg
          width="100%"
          viewBox="0 0 1000 320"
          style={{ display: 'block', overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* LAYER LABELS */}
          {[
            { y: 14,  label: 'CLOUD',        color: '#64748B' },
            { y: 90,  label: 'BUS',           color: '#64748B' },
            { y: 168, label: 'MICROSERVICIOS',color: '#64748B' },
            { y: 248, label: 'DATOS',         color: '#64748B' },
          ].map(({ y, label, color }) => (
            <text key={label} x={0} y={y + 26} dominantBaseline="middle"
              fill={color} fontFamily="'Share Tech Mono', monospace" fontSize={7} letterSpacing={1}>
              {'>'} {label}
            </text>
          ))}

          {/* Layer 1: Cloud infrastructure */}
          <rect x={80} y={10} width={440} height={52} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1} rx={3}/>
          <rect x={80} y={10} width={440} height={3} fill="#334155" rx={2}/>
          <text x={300} y={36} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={12} fontWeight="bold">Azure Container Apps — Spain Central</text>

          <rect x={540} y={10} width={220} height={52} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1} rx={3}/>
          <rect x={540} y={10} width={220} height={3} fill="#334155" rx={2}/>
          <text x={650} y={36} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={11}>Azure App Gateway</text>

          <rect x={780} y={10} width={210} height={52} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1} rx={3}/>
          <rect x={780} y={10} width={210} height={3} fill="#334155" rx={2}/>
          <text x={885} y={36} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={11}>.NET MAUI App</text>

          {/* Layer 2: Service Bus */}
          <rect x={80} y={88} width={910} height={52} fill="#111827" stroke="#334155" strokeWidth={1} rx={3}/>
          <rect x={80} y={88} width={910} height={3} fill="#00D2A0" rx={2}/>
          <text x={535} y={114} textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={12} fontWeight="bold">Azure Service Bus — mensajería asíncrona</text>

          {/* Layer 3: Microservices */}
          {services.map((s, i) => {
            const W = 142, gap = 14
            const x = 80 + i * (W + gap)
            return (
              <g key={s}>
                <rect x={x} y={166} width={W} height={52} fill="#1E2939" stroke="#334155" strokeWidth={1} rx={3}/>
                <rect x={x} y={166} width={W} height={3} fill={i === 5 ? '#00D2A0' : '#334155'} rx={2}/>
                <text x={x + W / 2} y={192} textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={10} fontWeight="bold">{s}</text>
              </g>
            )
          })}

          {/* Layer 4: Data */}
          {[
            { label: 'Azure SQL',    sub: 'Transaccional', w: 260 },
            { label: 'Cosmos DB',    sub: 'Catálogo + DPP', w: 260 },
            { label: 'Blob Storage', sub: '1 TB hot (imágenes)', w: 260 },
          ].map(({ label, sub, w }, i) => {
            const x = 80 + i * (w + 35)
            return (
              <g key={label}>
                <rect x={x} y={246} width={w} height={52} fill="white" stroke="#CBD5E1" strokeWidth={1} rx={3}/>
                <rect x={x} y={246} width={w} height={3} fill="#00D2A0" rx={2}/>
                <text x={x + w / 2} y={264} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={11} fontWeight="bold">{label}</text>
                <text x={x + w / 2} y={282} textAnchor="middle" dominantBaseline="middle" fill="#64748B" fontFamily="Inter, sans-serif" fontSize={9}>{sub}</text>
              </g>
            )
          })}

          {/* Vertical connectors (Cloud → Bus, Bus → Services, Services → Data) */}
          {[{ x: 535, y1: 62, y2: 88 }, { x: 535, y1: 140, y2: 166 }, { x: 535, y1: 218, y2: 246 }].map((c, i) => (
            <line key={i} x1={c.x} y1={c.y1} x2={c.x} y2={c.y2} stroke="#334155" strokeWidth={1} strokeDasharray="3 3"/>
          ))}
        </svg>
      </div>

      {/* Thin Edge + Stack */}
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 10 }}>{'>'} ARQUITECTURA THIN EDGE</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { h: 'Buffer Local SQLite AES-256', d: 'Operación offline garantizada en cada centro.' },
              { h: 'Sincronización diferida',     d: 'Vuelco automático al cloud al recuperar conexión.' },
            ].map(({ h, d }) => (
              <li key={h} style={{ borderLeft: '2px solid #E2E8F0', paddingLeft: 12 }}>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color: '#111827', marginBottom: 2 }}>{h}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#64748B' }}>{d}</div>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 10 }}>{'>'} STACK TECNOLÓGICO</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {stack.map(s => <Chip key={s} label={s} />)}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
