import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const ganttItems = [
  { label: 'Diseño & Arquitectura',  start: 0,  dur: 3,  color: '#334155' },
  { label: 'Desarrollo Backend',     start: 3,  dur: 8,  color: '#00D2A0' },
  { label: 'App Móvil & Industrial', start: 4,  dur: 7,  color: '#475569' },
  { label: 'Integración Logística',  start: 11, dur: 4,  color: '#334155' },
  { label: 'Piloto & Lanzamiento',   start: 15, dur: 2,  color: '#00A07A' },
]

const milestones = [
  { id: 'M2', mes: '+3',  desc: 'Arquitectura aprobada',            accent: false },
  { id: 'E1', mes: '+11', desc: 'Backend v1.0 (Funcional)',         accent: false },
  { id: 'M7', mes: '+17', desc: 'GO-LIVE PRODUCCIÓN',               accent: true  },
]

export function Slide11_Planning() {
  return (
    <SlideContainer background="canvas" slideNumber={11}>
      <Headline>
        Hitos de entrega: IndiGo estará en producción en el mes 17.
      </Headline>

      <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0, alignItems: 'center' }}>
        <div style={{ flex: 1.5 }}>
          <svg width="100%" viewBox="0 0 800 300" style={{ display: 'block', overflow: 'visible' }}>
            {ganttItems.map(({ label, start, dur, color }, i) => (
              <g key={label}>
                <text x={180} y={i * 50 + 25} textAnchor="end" dominantBaseline="middle" fill="#1e293b" fontFamily="Inter, sans-serif" fontSize={16} fontWeight="600">{label}</text>
                <rect x={200 + (start/22)*550} y={i * 50 + 5} width={(dur/22)*550} height={40} fill={color} rx={4}/>
              </g>
            ))}
            <line x1={200 + (17/22)*550} y1={0} x2={200 + (17/22)*550} y2={250} stroke="#00D2A0" strokeWidth={3} strokeDasharray="8 4"/>
            <text x={200 + (17/22)*550} y={275} textAnchor="middle" fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={18} fontWeight="bold">MES 17: GO-LIVE</text>
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            {milestones.map(({ id, mes, desc, accent }) => (
              <div key={id} style={{
                padding: '16px', border: accent ? '2px solid #00D2A0' : '1px solid #e2e8f0',
                borderRadius: '8px', background: accent ? '#f0fdfa' : 'white'
              }}>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1rem', color: '#00D2A0' }}>{id} · MES {mes}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', fontWeight: 700 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}