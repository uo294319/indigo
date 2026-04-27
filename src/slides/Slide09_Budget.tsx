import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

const rows = [
  { cap: '1. Materiales y hardware', imp: '2.737.800 €', pct: 72 },
  { cap: '2. Servicios profesionales (14 perfiles, 22 meses, 8.338 h)', imp: '500.094 €', pct: 13 },
  { cap: '4. Mantenimiento y SLAs primer año (incl. infra cloud)', imp: '429.303 €', pct: 11 }
]

export function Slide09_Budget() {
  return (
    <SlideContainer background="black" slideNumber={9}>
      <Headline dark>
        4,44 M€ IVA incluido para tres centros — el ROI llega antes del fin del primer año operativo.
      </Headline>

      <div style={{ display: 'flex', gap: 56, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>

        {/* Número gigante + barras */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flexShrink: 0, width: 340 }}>
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#94A3B8', letterSpacing: '0.1em', marginBottom: 8 }}>
              PRESUPUESTO TOTAL · IVA INCLUIDO
            </div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '3.8rem', color: '#00D2A0', lineHeight: 1 }}>
              4.444.507 €
            </div>
          </div>

          {/* Visual bar breakdown */}
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#94A3B8', marginBottom: 14 }}>DESGLOSE PORCENTUAL</div>
            {[
              { label: 'Hardware logístico', pct: 74, color: '#00D2A0' },
              { label: 'Serv. profesionales', pct: 14, color: '#e3e5e7ff' },
              { label: 'Mantenimiento', pct: 12, color: '#e3e5e7ff' },

            ].map(({ label, pct, color }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#94A3B8' }}>{label}</span>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color }}>
                    {pct}%
                  </span>
                </div>
                <div style={{ height: 8, background: '#1E2939', borderRadius: 1 }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla desglose */}
        <div style={{ flex: 1 }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 24 }}>
            <tbody>
              {rows.map(({ cap, imp }) => (
                <tr key={cap}>
                  <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#94A3B8', padding: '8px 0', borderBottom: '1px solid #1E2939', paddingRight: 16, lineHeight: 1.4 }}>
                    {cap}
                  </td>
                  <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', color: 'white', padding: '8px 0', borderBottom: '1px solid #1E2939', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {imp}
                  </td>
                </tr>
              ))}
              {/* PEM subtotal */}
              <tr>
                <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.9rem', color: 'white', padding: '12px 0 6px 0', paddingRight: 16, fontWeight: 700, borderBottom: '1px solid #1E2939' }}>Presupuesto de Ejecución Material</td>
                <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1.05rem', color: '#00D2A0', padding: '12px 0 6px 0', textAlign: 'right', borderBottom: '1px solid #1E2939' }}>3.627.530 €</td>
              </tr>
              {/* IVA — discreta */}
              <tr>
                <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#94A3B8', padding: '6px 0', paddingRight: 16, fontStyle: 'italic' }}>IVA 21% s/ PEM</td>
                <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.78rem', color: 'white', padding: '6px 0', textAlign: 'right', fontStyle: 'italic' }}>771.361 €</td>
              </tr>
              {/* Total */}
              <tr>
                <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.9rem', color: 'white', padding: '8px 0 0 0', paddingRight: 16, fontWeight: 700 }}>TOTAL IVA INCLUIDO</td>
                <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1.05rem', color: '#00D2A0', padding: '8px 0 0 0', textAlign: 'right' }}>4.444.507 €</td>
              </tr>
            </tbody>
          </table>


          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Hardware logístico (AS/RS, Sorter, cintas) = 89% del Capítulo 1 — inversión productiva',
              'Equipo de 14 profesionales durante 22 meses = entrega cerrada, no consultoría abierta',
              'Coste cloud absorbido en mantenimiento — sin sorpresas en factura recurrente',
            ].map((b, i) => (
              <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#94A3B8', display: 'flex', gap: 10 }}>
                <span style={{ color: '#00D2A0', flexShrink: 0 }}>—</span><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideContainer>
  )
}
