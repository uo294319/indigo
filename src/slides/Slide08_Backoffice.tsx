import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { KpiCard } from '../components/KpiCard'

export function Slide08_Backoffice() {
  return (
    <SlideContainer background="surface" slideNumber={8}>
      <Headline>
        Power BI conectado al dato vivo — Inditex toma decisiones por hora, no por mes.
      </Headline>

      {/* 4 KPI cards */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <KpiCard label="Prendas/hora por centro" value="LIVE" sublabel="Inventory + Shipping" />
        <KpiCard label="Tasa de aceptación IA" value="LIVE" sublabel="AI Vision" />
        <KpiCard label="Litros de agua ahorrados" value="LIVE" sublabel="Wallet/Rewards" />
        <KpiCard label="GMV en tiempo real" value="LIVE" sublabel="Catalog + Order" />
      </div>

      {/* Dashboard mock SVG */}
      <div style={{ marginBottom: 24 }}>
        <svg width="100%" viewBox="0 0 1000 140" style={{ display: 'block' }} preserveAspectRatio="xMidYMid meet">
          {/* Panel background */}
          <rect x={0} y={0} width={1000} height={140} fill="#F1F5F9" rx={4}/>
          <rect x={0} y={0} width={1000} height={3} fill="#CBD5E1" rx={2}/>

          {/* Simulated bar chart */}
          {[60, 85, 45, 95, 70, 110, 88, 75, 92, 65, 80, 100].map((h, i) => (
            <rect key={i}
              x={16 + i * 62} y={140 - h - 10} width={42} height={h}
              fill={i === 6 ? '#00D2A0' : '#CBD5E1'} rx={2}/>
          ))}

          {/* Axis line */}
          <line x1={10} y1={130} x2={756} y2={130} stroke="#CBD5E1" strokeWidth={1}/>

          {/* Right panel: metric boxes */}
          <rect x={770} y={8} width={220} height={58} fill="white" stroke="#E2E8F0" strokeWidth={1} rx={3}/>
          <text x={880} y={28} textAnchor="middle" dominantBaseline="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={18} fontWeight="bold">98.4%</text>
          <text x={880} y={52} textAnchor="middle" dominantBaseline="middle" fill="#64748B" fontFamily="Inter, sans-serif" fontSize={9}>SLA logístico último turno</text>

          <rect x={770} y={74} width={220} height={58} fill="white" stroke="#E2E8F0" strokeWidth={1} rx={3}/>
          <text x={880} y={94} textAnchor="middle" dominantBaseline="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={18} fontWeight="bold">2.847</text>
          <text x={880} y={118} textAnchor="middle" dominantBaseline="middle" fill="#64748B" fontFamily="Inter, sans-serif" fontSize={9}>prendas procesadas hoy</text>
        </svg>
      </div>

      {/* Capacidades */}
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 12 }}>{'>'} CAPACIDADES</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'App industrial .NET MAUI sobre PDAs rugerizadas — no PC en planta',
              'Power BI integrado nativamente con Azure SQL + Cosmos DB',
              'Vistas por rol: operario, supervisor, dirección',
            ].map((b, i) => (
              <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#111827', display: 'flex', gap: 8 }}>
                <span style={{ color: '#00D2A0', flexShrink: 0 }}>—</span><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 12 }}>{'>'} MÉTRICAS DE EXPLOTACIÓN</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Trazabilidad por prenda — Pasaporte Digital del Producto integrado',
              'Detección de mermas en tiempo real',
              'Alertas de SLA logístico por operador',
            ].map((b, i) => (
              <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#111827', display: 'flex', gap: 8 }}>
                <span style={{ color: '#00D2A0', flexShrink: 0 }}>—</span><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideContainer>
  )
}
