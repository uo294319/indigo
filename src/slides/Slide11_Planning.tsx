import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const ganttItems = [
  { label: 'Diseño & Arquitectura', start: 0, dur: 3, color: '#334155' },
  { label: 'Infraestructura Azure', start: 3, dur: 2, color: '#475569' },
  { label: 'Backend .NET 8', start: 3, dur: 8, color: '#334155' },
  { label: 'App móvil .NET MAUI', start: 4, dur: 6, color: '#475569' },
  { label: 'BackOffice industrial', start: 5, dur: 6, color: '#334155' },
  { label: 'Integración logística', start: 11, dur: 3, color: '#475569' },
  { label: 'Testing & QA', start: 12, dur: 3, color: '#334155' },
  { label: 'Piloto + Go-to-Market', start: 15, dur: 2, color: '#00A07A' },
  { label: 'Soporte post-lanzamiento', start: 17, dur: 4, color: '#1E2939' },
]

const milestones = [
  { id: 'M1', mes: '+0', desc: 'Aprobación formal de requisitos y plan de proyecto', accent: false },
  { id: 'M2', mes: '+3', desc: 'Aprobación de arquitectura y diseño del sistema', accent: false },
  { id: 'M3', mes: '+5', desc: 'Infraestructura Azure operativa y validada', accent: false },
  { id: 'M4', mes: '+13', desc: 'Integración logística multi-operador completa', accent: false },
  { id: 'M5', mes: '+15', desc: 'Testing completado — Decisión Go / No-Go', accent: false },
  { id: 'M6', mes: '+15', desc: 'Aprobación del piloto — Sistema validado', accent: false },
  { id: 'M7', mes: '+17', desc: 'GO-LIVE — IndiGo operativo en producción', accent: true },
  { id: 'M8', mes: '+21', desc: 'Primera revisión estratégica de KPIs y proyección año 2', accent: false },
]

const TOTAL = 22
const LABEL_W = 158
const BAR_H = 22
const GAP = 6

export function Slide11_Planning() {
  return (
    <SlideContainer background="canvas" slideNumber={11}>
      <Headline size="sm">
        En el mes 11 entregamos el backend funcional. En el mes 17, IndiGo está vivo en producción.
      </Headline>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minHeight: 0 }}>

        {/* Gantt — full width */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 10 }}>{`>`} GANTT SIMPLIFICADO (meses desde kickoff)</div>

          <svg
            width="100%"
            viewBox={`0 0 ${LABEL_W + 600 + 20} ${ganttItems.length * (BAR_H + GAP) + 30}`}
            style={{ display: 'block', overflow: 'visible' }}
            preserveAspectRatio="xMidYMid meet"
          >
            {ganttItems.map(({ label, start, dur, color }, i) => {
              const y = i * (BAR_H + GAP)
              const barX = LABEL_W + (start / TOTAL) * 600
              const barW = (dur / TOTAL) * 600

              return (
                <g key={label}>
                  <text x={LABEL_W - 8} y={y + BAR_H / 2} textAnchor="end" dominantBaseline="middle"
                    fill="#64748B" fontFamily="Inter, sans-serif" fontSize={9}>
                    {label}
                  </text>
                  <rect x={barX} y={y} width={barW} height={BAR_H} fill={color} rx={2} />
                </g>
              )
            })}

            {/* GO-LIVE line */}
            <line
              x1={LABEL_W + (17 / TOTAL) * 600} y1={0}
              x2={LABEL_W + (17 / TOTAL) * 600} y2={ganttItems.length * (BAR_H + GAP)}
              stroke="#00D2A0" strokeWidth={1.5} strokeDasharray="4 3" />
            <text
              x={LABEL_W + (17 / TOTAL) * 600 + 4} y={8}
              fill="#00D2A0" fontFamily="'Share Tech Mono', monospace" fontSize={8}>
              GO-LIVE
            </text>

            {/* Axis */}
            {[0, 3, 6, 9, 12, 15, 17, 21].map(m => (
              <g key={m}>
                <line x1={LABEL_W + (m / TOTAL) * 600} y1={ganttItems.length * (BAR_H + GAP) + 4}
                  x2={LABEL_W + (m / TOTAL) * 600} y2={ganttItems.length * (BAR_H + GAP) + 10}
                  stroke="#CBD5E1" strokeWidth={1} />
                <text
                  x={LABEL_W + (m / TOTAL) * 600} y={ganttItems.length * (BAR_H + GAP) + 22}
                  textAnchor="middle"
                  fill={m === 17 ? '#00D2A0' : '#94A3B8'} fontFamily="'Share Tech Mono', monospace" fontSize={8}>
                  M{m}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Milestones + Entregables — below the chart, horizontal layout */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', borderTop: '1px solid #E2E8F0', paddingTop: 12 }}>
          {/* HITOS CLAVE */}
          <div style={{ display: 'flex', gap: 12, flex: 1 }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', flexShrink: 0, paddingTop: 2 }}>{`>`} HITOS CLAVE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
              {milestones.map(({ id, mes, desc, accent }) => (
                <div key={id} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '4px 10px',
                  background: accent ? 'rgba(0,210,160,0.06)' : 'transparent',
                  border: accent ? '1px solid rgba(0,210,160,0.3)' : '1px solid transparent',
                  borderRadius: 2,
                }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: accent ? '#00D2A0' : '#94A3B8', width: 26, flexShrink: 0 }}>{id}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: accent ? '#00D2A0' : '#475569', width: 30, flexShrink: 0 }}>{mes}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: accent ? '#111827' : '#64748B', fontWeight: accent ? 600 : 400 }}>{desc}</span>
                  {accent && <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#00D2A0', marginLeft: 'auto' }}>★</span>}
                </div>
              ))}
            </div>
          </div>

          {/* ENTREGABLES */}
          <div style={{ display: 'flex', gap: 12, flex: 1 }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', flexShrink: 0, paddingTop: 2 }}>{`>`} ENTREGABLES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
              {[
                { id: 'E1', mes: '+11', desc: 'Entrega parcial: Backend v1.0 funcional', accent: false },
                { id: 'E2', mes: '+11', desc: 'Entrega parcial: Aplicación móvil v1.0', accent: false },
                { id: 'E3', mes: '+10', desc: 'Entrega parcial: BackOffice industrial v1.0', accent: false }

              ].map(({ id, mes, desc, accent }) => (
                <div key={id} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '4px 10px',
                  background: accent ? 'rgba(0,210,160,0.06)' : 'transparent',
                  border: accent ? '1px solid rgba(0,210,160,0.3)' : '1px solid transparent',
                  borderRadius: 2,
                }}>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: accent ? '#00D2A0' : '#94A3B8', width: 26, flexShrink: 0 }}>{id}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: accent ? '#00D2A0' : '#475569', width: 30, flexShrink: 0 }}>{mes}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: accent ? '#111827' : '#64748B', fontWeight: accent ? 600 : 400 }}>{desc}</span>
                  {accent && <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#00D2A0', marginLeft: 'auto' }}>★</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SlideContainer>
  )
}
