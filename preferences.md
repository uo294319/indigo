# Preferencias e instrucciones de implementación — Proyecto IndiGo

> Documento de preferencias técnicas para construir la presentación IndiGo como proyecto **React + TypeScript + Tailwind** generado con **Vite + npm**. Este documento se lee junto a `CLAUDE.md` (sistema de marca Proyecto.02) y `contents.md` (contenido por diapositiva).

---

## 1. Stack técnico

| Capa | Tecnología | Versión sugerida |
|---|---|---|
| Bundler / scaffolding | **Vite** | 5.x |
| Gestor de paquetes | **npm** | 10.x |
| Framework | **React** | 18.x |
| Lenguaje | **TypeScript** | 5.x (strict) |
| Estilos | **Tailwind CSS** | 3.x |
| Iconos | `lucide-react` | última estable |
| Linter / formato | ESLint + Prettier (opcional) | — |

**Comando de creación (referencia, no ejecutar dentro del agente):**
```bash
npm create vite@latest indigo-presentation -- --template react-ts
```

---

## 2. Estructura de carpetas obligatoria

```
indigo-presentation/
├── public/
│   └── (favicon, fuentes locales si las hubiera)
├── src/
│   ├── components/                 ← componentes reutilizables
│   │   ├── Logo.tsx                ← isologo PY.2 / PROYECTO.02 (3 variantes: full, horizontal, dark)
│   │   ├── SlideContainer.tsx      ← wrapper estándar 100vw × 100vh con fondo y logo en esquina
│   │   ├── ProgressIndicator.tsx   ← "03 / 12" en Share Tech Mono
│   │   ├── ExportButton.tsx        ← botón fixed top-right "> EXPORT_PDF"
│   │   ├── NavArrows.tsx           ← flechas de navegación (← →)
│   │   ├── AccentLine.tsx          ← línea vertical de acento #00D2A0 (24px padding)
│   │   ├── TechLabel.tsx           ← "> LABEL_TEXTO" en Share Tech Mono color accent
│   │   ├── BigNumber.tsx           ← número protagonista en Share Tech Mono accent
│   │   ├── KpiCard.tsx             ← tarjeta de dato (label + valor grande)
│   │   ├── Chip.tsx                ← chip/badge para normativas y stack técnico
│   │   ├── PrimaryButton.tsx       ← botón primario (negro + borde inferior accent)
│   │   ├── SecondaryButton.tsx     ← botón secundario (accent + shadow offset)
│   │   ├── DataTable.tsx           ← tabla limpia reutilizable
│   │   ├── Headline.tsx            ← titular accionable (Share Tech Mono o Inter Black)
│   │   ├── BulletList.tsx          ← lista de bullets compacta (≤3, ≤8 palabras)
│   │   ├── MicroservicesDiagram.tsx← diagrama SVG de microservicios (slide 7)
│   │   ├── MarketplaceFlow.tsx     ← flujo SVG horizontal (slide 3)
│   │   ├── LogisticsFlow.tsx       ← flujo SVG 5 pasos (slide 6)
│   │   ├── GanttRelative.tsx       ← Gantt simplificado en meses relativos (slide 11)
│   │   └── RiskMatrix.tsx          ← semáforo de riesgos Mosler (slide 10)
│   ├── slides/                     ← UN ARCHIVO POR DIAPOSITIVA
│   │   ├── Slide01_Presentation.tsx
│   │   ├── Slide02_Problem.tsx
│   │   ├── Slide03_Marketplace.tsx
│   │   ├── Slide04_Gamification.tsx
│   │   ├── Slide05_Capacity.tsx
│   │   ├── Slide06_Logistics.tsx
│   │   ├── Slide07_Backbone.tsx
│   │   ├── Slide08_Backoffice.tsx
│   │   ├── Slide09_Budget.tsx
│   │   ├── Slide10_Management.tsx
│   │   ├── Slide11_Planning.tsx
│   │   └── Slide12_Summary.tsx
│   ├── hooks/
│   │   └── useKeyboardNav.ts       ← hook para navegación con flechas teclado
│   ├── styles/
│   │   ├── tokens.ts               ← tokens de marca (colores, fuentes, spacing)
│   │   └── print.css               ← @media print A4 landscape
│   ├── App.tsx                     ← orquestador: estado de slide actual + render condicional
│   ├── main.tsx                    ← entry point Vite
│   └── index.css                   ← Tailwind directives + Google Fonts import
├── tailwind.config.ts              ← extends con colores/fuentes de marca
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── index.html                      ← <link> a Google Fonts en <head>
```

**Regla:** un archivo `.tsx` por diapositiva. Sin excepciones. Cada slide importa los componentes que necesita de `components/`.

---

## 3. Sistema de tokens (Tailwind config)

`tailwind.config.ts` debe extender el tema con:

```ts
colors: {
  brand: {
    black:   '#111827',  // Obsidiana — fondos oscuros, texto principal
    accent:  '#00D2A0',  // Menta Digital — CTA, números clave
    tech:    '#334155',  // Azul Acero — UI, gráficos, iconos
    slate:   '#94A3B8',  // Gris Niebla — metadatos, secundario
    surface: '#F8FAFC',  // Nube de Datos — fondos secundarios
    canvas:  '#FFFFFF',  // Blanco Puro — fondo principal
  },
},
fontFamily: {
  display: ['"Share Tech Mono"', 'monospace'],  // titulares, números, labels
  sans:    ['Inter', 'sans-serif'],             // cuerpo de texto
},
```

**Importar en `index.html`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

---

## 4. Reglas de estilo

**Fondos siempre lisos.** No usar patrones, gradientes ni cuadrículas decorativas. Solo los tres colores: `brand-black`, `brand-surface`, `brand-canvas`.

**Tipografía por contexto:**
- Titulares accionables → `font-display` o `font-sans font-black` (Inter 900)
- Números protagonistas → `font-display` color `brand-accent`, tamaño grande (text-6xl o más)
- Cuerpo y bullets → `font-sans` (Inter regular/semibold)
- Labels técnicos → `font-display` text-xs color `brand-accent` con prefijo `> `

**Disciplina del color accent:**
- Solo en 2–3 elementos por slide
- Reservado al dato/elemento más importante

**Layout base de cada slide (componente `SlideContainer`):**
- `w-screen h-screen` (100vw × 100vh)
- Padding interno generoso (p-12 o p-16)
- Logo PY.2 horizontal en esquina inferior izquierda (variante dark/light según fondo)
- Indicador de progreso `NN / 12` en esquina inferior derecha

---

## 5. Navegación e interacción

**Hook `useKeyboardNav`:**
- `←` / `→` → slide anterior / siguiente
- `Home` / `End` → primera / última slide
- Click en mitad derecha de pantalla → siguiente; mitad izquierda → anterior (opcional)

**Botón Export PDF (componente `ExportButton`):**
- `position: fixed; top: 20px; right: 20px; z-index: 100`
- Etiqueta `> EXPORT_PDF`, font-display, fondo `brand-black`, borde inferior `brand-accent`
- `onClick={() => window.print()}`
- Oculto en `@media print`

**Print CSS (`src/styles/print.css`):**
```css
@media print {
  @page { size: A4 landscape; margin: 0; }
  .slide { page-break-after: always; width: 100vw; height: 100vh; }
  .controls, .export-btn, .nav-arrows, .progress { display: none !important; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
```

**Render para impresión:** en modo print, **renderizar todas las slides apiladas** (no solo la activa) para que `window.print()` exporte las 12 páginas.

---

## 6. Patrón de cada `Slide0X_Nombre.tsx`

Estructura tipo:

```tsx
import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
import { BigNumber } from '../components/BigNumber'
// ... otros componentes

export function Slide02_Problem() {
  return (
    <SlideContainer background="black" slideNumber={2}>
      <Headline>
        Inditex no puede esperar — la regulación obliga, el mercado tira y la oportunidad expira.
      </Headline>
      {/* ... contenido específico ... */}
    </SlideContainer>
  )
}
```

**Reglas:**
- Cada slide es un componente funcional con export nombrado
- Sin estado interno (el estado de navegación vive en `App.tsx`)
- Recibe sus datos hardcodeados (no fetch, no props complejas)
- El contenido textual literal viene de `contents.md` — mantener fidelidad

---

## 7. Mapa de slides (referencia rápida)

| # | Componente | Fondo | Tipo |
|---|---|---|---|
| 01 | `Slide01_Presentation` | `brand-black` | Portada con isologo y equipo |
| 02 | `Slide02_Problem` | `brand-black` | 3 números + chips de normativa |
| 03 | `Slide03_Marketplace` | `brand-surface` | Flujo SVG + 3 C's |
| 04 | `Slide04_Gamification` | `brand-black` | Niveles + saldo dual |
| 05 | `Slide05_Capacity` | `brand-black` | 4 KPIs + proyección 3 años |
| 06 | `Slide06_Logistics` | `brand-surface` | Flujo 5 pasos |
| 07 | `Slide07_Backbone` | `brand-surface` | Diagrama microservicios + Thin Edge |
| 08 | `Slide08_Backoffice` | `brand-surface` | Dashboard mockup con 4 KPIs |
| 09 | `Slide09_Budget` | `brand-black` | Número gigante + tabla desglose |
| 10 | `Slide10_Management` | `brand-canvas` | Scrum + matriz Mosler |
| 11 | `Slide11_Planning` | `brand-canvas` | Gantt relativo (Mes 0 → Mes 21) |
| 12 | `Slide12_Summary` | `brand-black` | 5 razones + CTA |

---

## 8. Dependencias `package.json`

**Mínimas:**
```
react ^18
react-dom ^18
typescript ^5
vite ^5
@vitejs/plugin-react
tailwindcss ^3
postcss
autoprefixer
lucide-react
```

**Scripts:**
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

---

## 9. Criterios de aceptación

- [ ] `npm install && npm run dev` arranca sin errores
- [ ] El build TypeScript pasa en modo `strict`
- [ ] Las 12 slides existen como archivos separados en `src/slides/`
- [ ] Navegación con flechas del teclado funciona
- [ ] Botón `> EXPORT_PDF` exporta a PDF A4 landscape con las 12 slides
- [ ] No hay patrones ni gradientes — todos los fondos son lisos
- [ ] El logo PY.2 aparece en cada slide en esquina inferior izquierda
- [ ] El indicador `NN / 12` aparece en cada slide
- [ ] Los números protagonistas usan `Share Tech Mono` color `#00D2A0`
- [ ] Los titulares son accionables (concluyen, no describen) — fidelidad a `contents.md`
- [ ] Funciona offline (todo autocontenido salvo Google Fonts)

---

## 10. Cosas que **no** hacer

- No usar bibliotecas de slides (Reveal.js, Spectacle…). Implementación nativa.
- No usar localStorage / sessionStorage.
- No animaciones decorativas. Transiciones simples (opacidad/translate) o ninguna.
- No iconos genéricos para rellenar — solo si aportan información.
- No emojis en la presentación final.
- No traducir el contenido — todo en español como en `contents.md`.
- No improvisar datos: si un valor no está en `contents.md` o `CLAUDE.md`, preguntar.
