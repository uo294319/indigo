import { useState, useEffect } from 'react'
import './App.css'
import './styles/print.css'
import { useKeyboardNav } from './hooks/useKeyboardNav'
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

const MM_TO_PX = 96 / 25.4
const SLIDE_W  = 297 * MM_TO_PX
const SLIDE_H  = 210 * MM_TO_PX

function App() {
  const [current, setCurrent] = useState(0)
  const [presentMode, setPresentMode] = useState(false)
  const [presentScale, setPresentScale] = useState(1)

  useKeyboardNav(current, slides.length, setCurrent)

  // Compute scale factor so the A4 slide fits the viewport in present mode
  useEffect(() => {
    if (!presentMode) return
    const update = () => {
      setPresentScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [presentMode])

  // Exit present mode when browser exits fullscreen (ESC or browser chrome button)
  useEffect(() => {
    const onFsChange = () => {
      if (!document.fullscreenElement) setPresentMode(false)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const enterPresent = () => {
    document.documentElement.requestFullscreen?.().catch(() => {})
    setPresentMode(true)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX
    if (x > window.innerWidth / 2) {
      setCurrent(c => Math.min(c + 1, slides.length - 1))
    } else {
      setCurrent(c => Math.max(c - 1, 0))
    }
  }

  const handleExport = () => {
    const printAll  = document.querySelector<HTMLElement>('.print-all')
    const preview   = document.querySelector<HTMLElement>('.slide-preview-container')
    const controls  = document.querySelector<HTMLElement>('.band-controls')
    const navArrows = document.querySelector<HTMLElement>('.nav-arrows')
    if (printAll)  printAll.style.display  = 'block'
    if (preview)   preview.style.display   = 'none'
    if (controls)  controls.style.display  = 'none'
    if (navArrows) navArrows.style.display  = 'none'
    const restore = () => {
      if (printAll)  printAll.style.display  = 'none'
      if (preview)   preview.style.removeProperty('display')
      if (controls)  controls.style.removeProperty('display')
      if (navArrows) navArrows.style.removeProperty('display')
      window.removeEventListener('afterprint', restore)
    }
    window.addEventListener('afterprint', restore)
    window.print()
  }

  // ── Present mode ────────────────────────────────────────────────────────────
  if (presentMode) {
    return (
      <div
        style={{ width: '100vw', height: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <div style={{ width: SLIDE_W, height: SLIDE_H, transform: `scale(${presentScale})`, transformOrigin: 'center', flexShrink: 0 }}>
          {slides.map((SlideComp, i) => (
            <div key={i} style={{ display: i === current ? 'block' : 'none', width: '100%', height: '100%' }}>
              <SlideComp />
            </div>
          ))}
        </div>
        <div className="print-all" style={{ display: 'none' }}>
          {slides.map((SlideComp, i) => <SlideComp key={i} />)}
        </div>
      </div>
    )
  }

  // ── Preview mode (default) ───────────────────────────────────────────────────
  return (
    <div
      className="app-shell"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Contenedor de previsualización: imita el A4 landscape de print.css */}
      <div
        className="slide-preview-container"
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)',
          width: '297mm',
          height: '210mm',
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
              style={{ display: i === current ? 'block' : 'none', width: '100%', height: '100%' }}
              className="slide-active-only"
            >
              <SlideComp />
            </div>
          ))}
        </div>
      </div>

      {/* Vista de impresión (oculta en pantalla) */}
      <div className="print-all" style={{ display: 'none' }}>
        {slides.map((SlideComp, i) => <SlideComp key={i} />)}
      </div>

      {/* Controles en la banda — esquina inferior derecha */}
      <div
        className="band-controls"
        style={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', gap: 8, zIndex: 100, alignItems: 'center' }}
      >
        <button
          onClick={handleExport}
          style={{
            background: 'transparent',
            border: '1px solid #334155',
            color: '#94A3B8',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.65rem',
            padding: '5px 12px',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          EXPORT_PDF
        </button>
        <button
          onClick={enterPresent}
          style={{
            background: '#111827',
            border: 'none',
            borderBottom: '2px solid #00D2A0',
            color: 'white',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '0.65rem',
            padding: '5px 12px',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          {'> PRESENTAR'}
        </button>
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