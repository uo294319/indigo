import { useState } from 'react'
import './App.css'
import './styles/print.css'
import { useKeyboardNav } from './hooks/useKeyboardNav'
import { ExportButton } from './components/ExportButton'
import { NavArrows } from './components/NavArrows'
import { Slide01_Presentation } from './slides/Slide01_Presentation'
import { Slide02_Problem } from './slides/Slide02_Problem'
import { Slide03_Solution } from './slides/Slide03_Solution'
import { Slide04_Marketplace } from './slides/Slide04_Marketplace'
import { Slide05_Capacity } from './slides/Slide05_Capacity'
import { Slide06_Logistics } from './slides/Slide06_Logistics'
import { Slide07_Backbone } from './slides/Slide07_Backbone'
import { Slide08_Backoffice } from './slides/Slide08_Backoffice'
import { Slide09_Budget } from './slides/Slide09_Budget'
import { Slide10_Management } from './slides/Slide10_Management'
import { Slide11_Planning } from './slides/Slide11_Planning'
import { Slide12_Summary } from './slides/Slide12_Summary'
import { Demo } from './slides/Demo'

const slides = [
  Slide01_Presentation,
  Slide02_Problem,
  Slide03_Solution,
  Slide04_Marketplace,
  Slide05_Capacity,
  Slide06_Logistics,
  Slide07_Backbone,
  Slide08_Backoffice,
  Slide09_Budget,
  Slide10_Management,
  Slide11_Planning,
  Slide12_Summary,
  Demo,
]

function App() {
  const [current, setCurrent] = useState(0)
  useKeyboardNav(current, slides.length, setCurrent)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX
    if (x > window.innerWidth / 2) {
      setCurrent(c => Math.min(c + 1, slides.length - 1))
    } else {
      setCurrent(c => Math.max(c - 1, 0))
    }
  }

  return (
    <div 
      className="app-shell" 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        overflow: 'hidden', 
        position: 'relative',
        background: '#1a1a1a', // Fondo oscuro para contrastar con la "hoja"
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ExportButton />

      {/* Contenedor de previsualización: imita el A4 landscape de print.css */}
      <div 
        className="slide-preview-container"
        onClick={handleClick}
        style={{ 
          cursor: 'pointer',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)',
          // Estas dimensiones igualan a las de .slide en print.css
          width: '297mm',
          height: '210mm',
          // Asegura que quepa en pantallas pequeñas escalando el contenido
          maxWidth: '95vw',
          maxHeight: '95vh',
          display: 'flex',
          overflow: 'hidden',
          backgroundColor: '#fff' 
        }}
      >
        <div style={{ transform: 'scale(var(--preview-scale, 1))', transformOrigin: 'top left', width: '297mm', height: '210mm' }}>
          {slides.map((SlideComp, i) => (
            <div
              key={i}
              style={{ 
                display: i === current ? 'block' : 'none',
                width: '100%',
                height: '100%'
              }}
              className="slide-active-only"
            >
              <SlideComp />
            </div>
          ))}
        </div>
      </div>

      {/* Vista de impresión (oculta en pantalla) */}
      <div className="print-all" style={{ display: 'none' }}>
        {slides.map((SlideComp, i) => (
          <SlideComp key={i} />
        ))}
      </div>

      <NavArrows
        current={current}
        total={slides.length}
        onPrev={() => setCurrent(c => Math.max(c - 1, 0))}
        onNext={() => setCurrent(c => Math.min(c + 1, slides.length - 1))}
      />
    </div>
  )
}

export default App