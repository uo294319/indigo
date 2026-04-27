import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { Chip } from '../components/Chip'

const norms = [
  'ESPR (UE 2024/1781)', 'DPP', 'RGPD', 'LOPD-GDD',
  'NIS2', 'AI Act', 'CSRD', 'LGDCU', 'LSSI-CE', 'DSA', 'PCI DSS',
]

export function Slide02_Problem() {
  return (
    <SlideContainer background="black" slideNumber={2}>
      <Headline dark>
        Inditex no puede esperar — la regulación obliga, el mercado tira y la oportunidad expira.
      </Headline>

      {/* 3 números grandes como bloque principal */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, gap: 0, marginBottom: 28 }}>
        {[
          { v: '244.000 M€', l: 'Mercado segunda mano global', sub: 'Estimación 2025' },
          { v: '>5.500 M€',  l: 'Mercado segunda mano España',  sub: '10% del retail de moda 2025' },
          { v: '218 M',      l: 'Apps Inditex activas',          sub: 'Base instalada explotable desde día 1' },
        ].map(({ v, l, sub }, i) => (
          <div
            key={v}
            style={{
              flex: 1,
              padding: '28px 28px',
              borderLeft: i > 0 ? '1px solid #1E2939' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '3.2rem', color: '#00D2A0', lineHeight: 1, marginBottom: 14 }}>
              {v}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'white', fontWeight: 600, marginBottom: 5 }}>
              {l}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#94A3B8' }}>
              {sub}
            </div>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <ul style={{ margin: '0 0 20px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {[
          'For&From no escala: solo personas con discapacidad, intermediación local',
          <span key="vinted">Vinted captura valor con <span style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace" }}>10%</span> de comisión — fuera de Inditex</span>,
          'Sin canal C2B propio, Inditex pierde la prenda y al cliente',
        ].map((b, i) => (
          <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#94A3B8', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ color: '#00D2A0', marginTop: 2, flexShrink: 0 }}>—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Chips normativos */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {norms.map(n => <Chip key={n} label={n} dark />)}
      </div>
    </SlideContainer>
  )
}
