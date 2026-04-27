import { SlideContainer } from '../components/SlideContainer'

export function Slide01_Presentation() {
  return (
    <SlideContainer background="black" slideNumber={1}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>

        {/* Logo + marca */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
              <path d="M20 20H80V80H20V20Z" stroke="white" strokeWidth="4"/>
              <rect x="28" y="28" width="12" height="12" fill="white"/>
              <rect x="44" y="28" width="12" height="12" fill="white"/>
              <rect x="28" y="44" width="12" height="12" fill="white"/>
              <rect x="60" y="60" width="12" height="12" fill="#00D2A0"/>
            </svg>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#334155', letterSpacing: '0.3em' }}>
              PROYECTO.02
            </span>
          </div>
        </div>

        {/* Título principal */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#00D2A0', letterSpacing: '0.18em', marginBottom: 24 }}>
            {'>'} CLIENT: INDITEX, S.A. &nbsp;·&nbsp; REF: PY2-INDIGO-v2.0 &nbsp;·&nbsp; ABRIL 2026
          </div>
          <h1 style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '4.8rem',
            color: 'white',
            margin: '0 0 12px 0',
            fontWeight: 'normal',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}>
            Inditex Go <span style={{ color: '#00D2A0' }}>→</span> <span style={{ color: '#00D2A0' }}>IndiGo</span>
          </h1>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '1.05rem',
            color: '#94A3B8',
            marginBottom: 12,
            letterSpacing: '0.04em',
          }}>
            Plataforma C2B de moda circular para Inditex
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            color: '#475569',
            maxWidth: 580,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Convertimos cada prenda usada de Inditex en una segunda venta — sin fricción, en circuito cerrado.
          </div>
        </div>

        {/* Equipo */}
        <div>
          <div style={{ height: 1, background: '#1E2939', marginBottom: 28 }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 72 }}>
            {[
              { rol: 'DIRECTOR DE PROYECTO', nombre: 'Yago Rueda' },
              { rol: 'DIRECTOR DE PROYECTO', nombre: 'Ángel Arróspide' },
              { rol: 'SUBDIRECTOR TÉCNICO',  nombre: 'Marcos Rato' },
            ].map(({ rol, nombre }) => (
              <div key={nombre} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', color: '#00D2A0', letterSpacing: '0.14em', marginBottom: 8 }}>
                  {rol}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', color: 'white', fontWeight: 600 }}>
                  {nombre}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideContainer>
  )
}
