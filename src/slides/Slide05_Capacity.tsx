import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { KpiCard } from '../components/KpiCard'

const projRows = [
  ['Prendas/año',  '2,5 M',  '12 M'],
  ['GMV',          '45 M€',  '264 M€'],
  ['Ingresos netos', '4,5 M€', '26,4 M€'],
]

export function Slide05_Capacity() {
  return (
    <SlideContainer background="black" slideNumber={5}>
      <Headline dark>
        Diseñado para 6,5k prendas/día desde el día uno — y para multiplicar por 5 en pico.
      </Headline>

      {/* KPI cards */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
        <KpiCard dark label="Prendas/centro/día (año 1)" value="6.500" />
        <KpiCard dark label="Multiplicador en picos" value="×3–×5" />
        <KpiCard dark label="Transacciones/día estable" value="50k–70k" />
        <KpiCard dark label="Transacciones en pico" value="350.000" />
      </div>

      {/* Proyección + barra visual */}
      <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
        {/* Tabla */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 12 }}>{'>'} PROYECCIÓN DE CRECIMIENTO</div>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                {['Indicador', 'Año 1', 'Año 3'].map(h => (
                  <th key={h} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#94A3B8', textAlign: 'left', padding: '6px 16px', borderBottom: '1px solid #334155' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projRows.map(([ind, y1, y3]) => (
                <tr key={ind}>
                  <td style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#94A3B8', padding: '12px 16px', borderBottom: '1px solid #1E2939' }}>{ind}</td>
                  <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem', color: '#00D2A0', padding: '12px 16px', borderBottom: '1px solid #1E2939' }}>{y1}</td>
                  <td style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem', color: '#00D2A0', padding: '12px 16px', borderBottom: '1px solid #1E2939' }}>{y3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Barras de crecimiento visual */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#00D2A0', marginBottom: 16 }}>{'>'} CRECIMIENTO GMV (M€)</div>
          {[
            { label: 'Año 1', value: 45,  max: 264, color: '#334155' },
            { label: 'Año 2', value: 138, max: 264, color: '#00A07A' }, // Valor corregido a 138 de acorde al mock original
            { label: 'Año 3', value: 264, max: 264, color: '#00D2A0' },
          ].map(({ label, value, max, color }) => (
            <div key={label} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#94A3B8' }}>{label}</span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color }}>
                  {value} M€
                </span>
              </div>
              <div style={{ height: 10, background: '#1E2939', borderRadius: 1 }}>
                <div style={{ height: '100%', width: `${(value / max) * 100}%`, background: color, borderRadius: 1 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  )
}