import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { Chip } from '../components/Chip'

const stack = ['Azure Container Apps', '.NET 8', 'Azure Service Bus', 'SignalR', 'JWT', 'Azure Spain Central']
const services = ['Identity', 'Wallet', 'Shipping', 'Inventory', 'Catalog', 'AI Vision']

export function Slide07_Backbone() {
  return (
    <SlideContainer background="surface" slideNumber={7}>
      <Headline size="sm">
        Arquitectura Cloud-First: Un edge resiliente para la línea de producción.
      </Headline>

      <div style={{ marginBottom: 20 }}>
        <svg width="100%" viewBox="0 0 1000 320" style={{ display: 'block', overflow: 'visible' }} preserveAspectRatio="xMidYMid meet">
          {/* LAYER LABELS - Aumentadas a 12px y negrita */}
          {[
            { y: 14,  label: 'INFRAESTRUCTURA', color: '#475569' },
            { y: 90,  label: 'MENSAJERÍA',      color: '#475569' },
            { y: 168, label: 'SERVICIOS',       color: '#475569' },
            { y: 248, label: 'DATOS',           color: '#475569' },
          ].map(({ y, label, color }) => (
            <text key={label} x={0} y={y + 26} fill={color} fontFamily="'Share Tech Mono', monospace" fontSize={12} fontWeight="bold">
              {'>'} {label}
            </text>
          ))}

          {/* Layer 1: Cloud - Texto a 14px */}
          <rect x={140} y={10} width={600} height={52} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1} rx={3}/>
          <text x={440} y={36} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={16} fontWeight="bold">Azure Container Apps — Spain Central</text>

          {/* Layer 2: Bus - Texto a 16px */}
          <rect x={140} y={88} width={850} height={52} fill="#111827" rx={3}/>
          <text x={565} y={114} textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={16} fontWeight="bold">Azure Service Bus (Asíncrono)</text>

          {/* Layer 3: Microservices - Texto a 14px */}
          {services.map((s, i) => {
            const W = 135, gap = 8
            const x = 140 + i * (W + gap)
            return (
              <g key={s}>
                <rect x={x} y={166} width={W} height={52} fill="#1E2939" rx={3}/>
                <text x={x + W / 2} y={192} textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="'Share Tech Mono', monospace" fontSize={14} fontWeight="bold">{s}</text>
              </g>
            )
          })}

          {/* Layer 4: Data - Texto a 14px */}
          {[
            { label: 'Azure SQL', w: 278 },
            { label: 'Cosmos DB', w: 278 },
            { label: 'Blob Storage', w: 278 },
          ].map(({ label, w }, i) => {
            const x = 140 + i * (w + 8)
            return (
              <g key={label}>
                <rect x={x} y={246} width={w} height={52} fill="white" stroke="#CBD5E1" strokeWidth={2} rx={3}/>
                <text x={x + w / 2} y={272} textAnchor="middle" dominantBaseline="middle" fill="#111827" fontFamily="'Share Tech Mono', monospace" fontSize={15} fontWeight="bold">{label}</text>
              </g>
            )
          })}
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1rem', color: '#00D2A0', marginBottom: 10 }}>{'>'} THIN EDGE RESILIENTE</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', color: '#1e293b', fontWeight: 500 }}>
            Buffer Local SQLite AES-256: Operación garantizada sin conexión.
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1rem', color: '#00D2A0', marginBottom: 10 }}>{'>'} STACK</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {stack.map(s => <Chip key={s} label={s} />)}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}