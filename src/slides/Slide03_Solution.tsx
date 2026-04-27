import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { BigNumber } from '../components/BigNumber'

export function Slide03_Solution() {
  return (
    <SlideContainer background="black" slideNumber={3}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        <Headline dark>
          El flujo IndiGo: tasación instantánea y cero fricción para el usuario.
        </Headline>

        <div style={{ display: 'flex', gap: '140px', alignItems: 'center', marginTop: '20px' }}>
          
          {/* Contenedor de la columna de flujo (sin flecha de retorno) */}
          <div style={{ position: 'relative', minWidth: '300px' }}>
            
            {/* Columna de Flujo */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '12px'
            }}>
              <FlowStep label="1. Fotos de Prenda" />
              <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
              <FlowStep label="2. Breve formulario" />
              <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
              <FlowStep label="3. IA Liviana" accent />
              <div style={{ color: '#00D2A0', fontSize: '1.5rem' }}>↓</div>
              <FlowStep label="4. Valoración y QR" />
            </div>
          </div>

          {/* Columna Derecha: Contenido de Valor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', flex: 1 }}>
            <BigNumber 
              value="< 90s" 
              label="Tiempo estimado desde la foto hasta la oferta"
            />

            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#00D2A0', marginBottom: '8px' }}>{'>'} EXPERIENCIA DE USUARIO</div>
              <div style={{ color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                Eliminación de la fricción
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#00D2A0', marginBottom: '8px' }}>{'>'} RECOMPENSA</div>
              <div style={{ color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                Feedback instantáneo
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.8rem', color: '#00D2A0', marginBottom: '8px' }}>{'>'} TRAZABILIDAD</div>
              <div style={{ color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                Identificador único
              </div>
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