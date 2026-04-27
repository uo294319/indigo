import { SlideContainer } from '../components/SlideContainer'

const reasons = [
  { n: '01', title: 'Mercado caliente', desc: '244.000 M€ globales · canal C2B propio para 218 M apps' },
  { n: '02', title: 'Cumplimiento regulatorio', desc: 'ESPR + DPP + CSRD desde el día uno — sin deuda técnica' },
  { n: '03', title: 'Operativa probada', desc: '6,5k prendas/día · 350k transacciones en pico' },
  { n: '04', title: 'Inversión cerrada', desc: '4,44 M€ IVA incluido · 22 meses · 3 centros' },
  { n: '05', title: 'Riesgo controlado', desc: '22 riesgos analizados, solo 1 en nivel Medio (mitigado)' },
]

export function Slide12_Summary() {
  return (
    <SlideContainer background="black" slideNumber={12} demoUrl="https://indigo-web-demo.vercel.app/">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>

        {/* Headline */}
        <h2 style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '1.6rem',
          color: 'white',
          margin: 0,
          fontWeight: 'normal',
          lineHeight: 1.3,
          maxWidth: '80%',
        }}>
          IndiGo es la pieza que falta — circular por diseño, regulatorio por defecto,{' '}
          <span style={{ color: '#00D2A0' }}>rentable por arquitectura.</span>
        </h2>

        {/* 5 razones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, margin: '28px 0' }}>
          {reasons.map(({ n, title, desc }) => (
            <div key={n} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '14px 20px',
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '2px solid rgba(0,210,160,0.25)',
              borderRadius: '0 2px 2px 0',
            }}>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '1.6rem', color: '#00D2A0', lineHeight: 1, width: 40, flexShrink: 0 }}>{n}</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.88rem', color: 'white', width: 220, flexShrink: 0 }}>{title}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#94A3B8', lineHeight: 1.4 }}>{desc}</span>
            </div>
          ))}
        </div>

        {/* CTAs + Cierre */}
        <div>
          <div style={{ borderTop: '1px solid #1E2939', paddingTop: 14 }}>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#94A3B8', margin: '0 0 4px 0' }}>
              <span style={{ color: 'white' }}>Yago Rueda · Ángel Arróspide</span> — Dirección de Proyecto &nbsp;·&nbsp;
              <span style={{ color: 'white' }}>Marcos Rato</span> — Subdirección Técnica
            </p>
          </div>
        </div>

      </div>
    </SlideContainer>
  )
}
