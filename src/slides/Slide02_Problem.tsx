import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { BigNumber } from '../components/BigNumber'
import { Chip } from '../components/Chip'
import { AccentLine } from '../components/AccentLine'

export function Slide02_Problem() {
  return (
    <SlideContainer background="black" slideNumber={2}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Titular accionable */}
        <Headline dark>
          Inditex no puede esperar — la regulación obliga, el mercado tira y la oportunidad expira.
        </Headline>

        {/* Tres números protagonistas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          <BigNumber 
            value="244.000 M€" 
            label="Mercado segunda mano global (Est. 2025)"
          />
          <BigNumber 
            value=">5.500 M€/año" 
            label="Mercado segunda mano España (10% retail 2025)"
          />
          <BigNumber 
            value="218 M" 
            label="Apps Inditex activas (Base explotable día 1)"
          />
        </div>

        <div style={{ display: 'flex', gap: '80px', marginTop: '20px' }}>
          {/* Bullets de cuerpo */}
          <AccentLine>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              color: 'white', 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <li>• For&From no escala: solo discapacidad e intermediación local</li>
              <li>• Vinted captura valor con 10% de comisión fuera de Inditex</li>
              <li>• Sin canal C2B propio, Inditex pierde la prenda y al cliente</li>
            </ul>
          </AccentLine>

          {/* Marco normativo */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontFamily: "'Share Tech Mono', monospace", 
              fontSize: '0.65rem', 
              color: '#00D2A0', 
              marginBottom: '16px' 
            }}>
              {'>'} MARCO_NORMATIVO_COMPLIANCE
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['ESPR (UE 2024/1781)', 'DPP', 'RGPD', 'LOPD-GDD', 'NIS2', 'AI Act', 'CSRD', 'LGDCU', 'LSSI-CE', 'DSA', 'PCI DSS'].map(norm => (
                <Chip key={norm} label={norm} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  )
}