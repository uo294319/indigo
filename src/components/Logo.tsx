import principalRaw from '../logos/Proyecto02_Logo_Principal.svg?raw'
import horizontalRaw from '../logos/Proyecto02_Logo_Horizontal.svg?raw'
import negativoRaw from '../logos/Proyecto02_Logo_Negativo.svg?raw'

export type LogoVariant = 'cover' | 'horizontal' | 'dark'

// aspect ratios: cover = 200:220, horizontal/dark = 300:60
const HEIGHT_RATIO: Record<LogoVariant, number> = {
  cover:      220 / 200,
  horizontal: 60  / 300,
  dark:       60  / 300,
}

const DEFAULT_WIDTH: Record<LogoVariant, number> = {
  cover:      200,
  horizontal: 140,
  dark:       140,
}

function prepareSvg(raw: string, w: number, h: number): string {
  return raw
    .replace(/@import[^;]+;/g, '')
    .replace(/(<svg[^>]*)\swidth="[^"]*"/, `$1 width="${w}"`)
    .replace(/(<svg[^>]*)\sheight="[^"]*"/, `$1 height="${h}"`)
}

interface LogoProps {
  variant?: LogoVariant
  width?: number
}

export function Logo({ variant = 'horizontal', width }: LogoProps) {
  const w = width ?? DEFAULT_WIDTH[variant]
  const h = Math.round(w * HEIGHT_RATIO[variant])
  const raw =
    variant === 'cover' ? principalRaw :
    variant === 'dark'  ? negativoRaw  :
    horizontalRaw

  return (
    <div
      style={{ display: 'inline-block', lineHeight: 0 }}
      dangerouslySetInnerHTML={{ __html: prepareSvg(raw, w, h) }}
    />
  )
}
