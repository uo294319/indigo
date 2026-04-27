import type { ReactNode } from 'react'

interface HeadlineProps {
  children: ReactNode
  dark?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Headline({ children, dark = false, size = 'md' }: HeadlineProps) {
  const sizes = { sm: '1.25rem', md: '1.6rem', lg: '2rem' }
  return (
    <h2
      style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: sizes[size],
        lineHeight: 1.25,
        color: dark ? 'white' : '#111827',
        margin: '0 0 32px 0',
        fontWeight: 'normal',
        maxWidth: '80%',
      }}
    >
      {children}
    </h2>
  )
}
