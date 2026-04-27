import { useEffect } from 'react'

export function useKeyboardNav(
  current: number,
  total: number,
  setCurrent: (n: number) => void
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrent(Math.min(current + 1, total - 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrent(Math.max(current - 1, 0))
      } else if (e.key === 'Home') {
        setCurrent(0)
      } else if (e.key === 'End') {
        setCurrent(total - 1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, total, setCurrent])
}
