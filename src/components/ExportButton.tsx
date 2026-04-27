export function ExportButton() {
  const handleExport = () => {
    const printAll = document.querySelector<HTMLElement>('.print-all')
    const wrapper = document.querySelector<HTMLElement>('.slide-wrapper')
    const navArrows = document.querySelector<HTMLElement>('.nav-arrows')

    // Show all slides, hide interactive layer
    if (printAll)   printAll.style.display = 'block'
    if (wrapper)    wrapper.style.display = 'none'
    if (navArrows)  navArrows.style.display = 'none'

    // Restore once the print dialog closes (fires on confirm AND cancel)
    const restore = () => {
      if (printAll)  printAll.style.display = 'none'
      if (wrapper)   wrapper.style.removeProperty('display')
      if (navArrows) navArrows.style.removeProperty('display')
      window.removeEventListener('afterprint', restore)
    }
    window.addEventListener('afterprint', restore)

    window.print()
  }

  return (
    <button
      className="export-btn"
      onClick={handleExport}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 100,
        background: '#111827',
        color: 'white',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.75rem',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        borderBottom: '2px solid #00D2A0',
        letterSpacing: '0.05em',
      }}
    >
      {'> EXPORT_PDF'}
    </button>
  )
}
