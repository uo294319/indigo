import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { BigNumber } from '../components/BigNumber'

export function Slide02_Problem() {
  return (
    <SlideContainer background="black" slideNumber={2}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Titular accionable */}
        <Headline dark>
          Inditex no puede esperar — la regulación obliga, el mercado tira y la oportunidad expira.
        </Headline>

        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', marginTop: '20px' }}>
          
          {/* Columna Izquierda: Flujo vertical solicitado */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '12px',
            minWidth: '280px'
          }}>
            <FlowStep label="Inditex" />
            <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
            <FlowStep label="Usuarios" />
            <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
            <FlowStep label="IndiGo" accent />
            <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
            <FlowStep label="Puntos de venta" />
          </div>

          {/* Columna Derecha: Titulares Estratégicos */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '75px',
            flex: 1 
          }}>
            {/* 1. Dinero */}
            <BigNumber 
              value=">5.500 M€/año" 
              label="Mercado segunda mano España (10% retail 2025)"
            />

            {/* 2. Sostenibilidad: Titular basado en objetivos 2040 */}
            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#00D2A0', marginBottom: '8px' }}>{'>'} OBJETIVOS INDITEX</div>
              <div style={{ color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                Cero Emisiones Netas (2040)
              </div>
              <p style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                Memoria Anual Inditex 2024 - Plan de Transición Climática
              </p>
            </div>

            {/* 3. Regulatorio: Titular basado en ESPR/DPP Julio 2026 */}
            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#00D2A0', marginBottom: '8px' }}>{'>'} COMPLIANCE</div>
              <div style={{ color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                Regulación ESPR (Julio 2026)
              </div>
              <p style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
                Reglamento (UE) 2024/1781 sobre Ecodiseño para Productos Sostenibles
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideContainer>
  )
}

function FlowStep({ label, accent = false }: { label: string, accent?: boolean }) {
  return (
    <div style={{
      width: '100%',
      padding: '20px',
      border: `1px solid ${accent ? '#00D2A0' : '#1E2939'}`,
      backgroundColor: accent ? 'rgba(0, 210, 160, 0.05)' : 'transparent',
      borderRadius: '4px',
      textAlign: 'center',
      fontFamily: "'Share Tech Mono', monospace",
      color: accent ? '#00D2A0' : 'white',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }}>
      {label}
    </div>
  )
}