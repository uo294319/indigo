import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const riskData = [
  { level: 'Muy Bajo', count: 18, color: '#00D2A0' },
  { level: 'Bajo',     count: 3,  color: '#64748B' },
  { level: 'Medio',    count: 1,  color: '#F59E0B' },
  { level: 'Alto',     count: 0,  color: '#EF4444' },
]

export function Slide10_Management() {
  const maxCount = 22

  return (
    <SlideContainer background="canvas" slideNumber={10}>
      <Headline>
        Híbrido Waterfall + Scrum — gobernanza para el cliente, agilidad para el código.
      </Headline>

      <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>

        {/* Left: Metodología */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 14 }}>{'>'} METODOLOGÍA</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { h: 'Waterfall en hitos contractuales (M1–M8)', d: 'El cliente firma cada fase' },
                { h: 'Scrum en desarrollo',                       d: 'Sprints 2 semanas · Azure DevOps' },
                { h: '3 niveles de comunicación',                  d: 'Operativo · Táctico · Estratégico' },
              ].map(({ h, d }) => (
                <li key={h} style={{ borderLeft: '2px solid #E2E8F0', paddingLeft: 14 }}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#111827', marginBottom: 3 }}>{h}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#64748B' }}>{d}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 12 }}>{'>'} GARANTÍAS DE CALIDAD</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Azure DevOps end-to-end — trazabilidad total (board, repos, pipelines)',
                '22 riesgos identificados y tratados (mitigar / transferir / evitar / aceptar)',
                'Reserva de gestión: 3 semanas distribuidas en los últimos hitos',
              ].map((b, i) => (
                <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#64748B', display: 'flex', gap: 10 }}>
                  <span style={{ color: '#00D2A0', flexShrink: 0 }}>—</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Análisis de riesgos */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 4 }}>{'>'} ANÁLISIS DE RIESGOS · MÉTODO MOSLER</div>

          {/* Risk bars */}
          {riskData.map(({ level, count, color }) => (
            <div key={level}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#111827', flex: 1 }}>{level}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1.5rem', color, lineHeight: 1, minWidth: 24, textAlign: 'right' }}>
                  {count}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#94A3B8', width: 40 }}>riesgos</span>
              </div>
              <div style={{ height: 8, background: '#F1F5F9', borderRadius: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: count > 0 ? `${(count / maxCount) * 100}%` : '0%', background: color, borderRadius: 1, transition: 'width 0s' }} />
              </div>
            </div>
          ))}

          {/* R-014 */}
          <div style={{ border: '1px solid #F59E0B', borderLeft: '3px solid #F59E0B', background: '#FFFBEB', padding: '14px 16px', borderRadius: 2, marginTop: 8 }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#F59E0B', marginBottom: 6 }}>R-014 · ÚNICO RIESGO NIVEL MEDIO</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#111827', marginBottom: 8, fontWeight: 600 }}>
              Brecha de seguridad y fuga de datos de usuarios
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: '#64748B', lineHeight: 1.5 }}>
              Mitigación: MFA en roles privilegiados · TLS 1.2+ · hashing Argon2id / bcrypt · cifrado AES-256 en buffer local
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}
