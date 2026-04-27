import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

export function Slide06_Logistics() {
  const steps = [
    { title: 'RECOGIDA', desc: 'Multi-operador' },
    { title: 'TRIAGE IA', desc: 'Control Calidad' },
    { title: 'SORTER', desc: 'Automatizado' },
    { title: 'REVENTA', desc: 'Stock Vivo' },
  ]

  return (
    <SlideContainer background="surface" slideNumber={6}>
      <Headline>
        Logística de Alta Capacidad: 6.500 prendas/día por centro.
      </Headline>

      <div style={{ display: 'flex', gap: 20, flex: 1, alignItems: 'center' }}>
        {steps.map((s, i) => (
          <div key={s.title} style={{
            flex: 1, background: '#111827', padding: '40px 20px', borderRadius: '12px',
            textAlign: 'center', borderTop: i === 2 ? '6px solid #00D2A0' : 'none'
          }}>
            <div style={{ color: '#00D2A0', fontFamily: "'Share Tech Mono', monospace", fontSize: '2.5rem', marginBottom: 15 }}>0{i+1}</div>
            <div style={{ color: 'white', fontFamily: "'Share Tech Mono', monospace", fontSize: '1.8rem', fontWeight: 'bold', marginBottom: 10 }}>{s.title}</div>
            <div style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontSize: '1.2rem' }}>{s.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30, padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '6px solid #00D2A0' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.3rem', fontWeight: 600, color: '#1e293b' }}>
          "Eliminamos cuellos de botella con sistemas Goods-to-Person (G2P)."
        </div>
      </div>
    </SlideContainer>
  )
}