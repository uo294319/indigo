# Presentation Generator — Proyecto.02

## Objetivo
Generar una presentación de **15 minutos** en formato **HTML exportable a PDF**, estilo McKinsey con la identidad visual de **Proyecto.02**. Texto mínimo, impacto máximo. El objetivo es vender el proyecto.

---

## Estructura esperada del proyecto

```
/
├── CLAUDE.md              ← este archivo (instrucciones para Claude Code)
├── sources/
│   ├── documento1.pdf     ← documentos fuente del proyecto
│   ├── documento2.md
│   └── ...
└── output/
    └── presentation.html  ← archivo generado
```

---

## Tarea

Lee todos los archivos en `sources/` y genera `output/presentation.html`.

### Pasos que debes seguir

1. **Leer y sintetizar** todos los documentos en `sources/`. Extrae:
   - Propuesta de valor central
   - Problema que resuelve
   - Solución técnica (con suficiente rigor para audiencia técnica)
   - Diferenciadores clave frente a alternativas
   - Tracción, validación o resultados si los hay
   - Llamada a la acción (qué queremos del oyente)

2. **Diseñar la narrativa** en formato McKinsey:
   - Máximo **12–15 slides**
   - Cada slide tiene **1 idea principal** expresada en el titular (accionable, no descriptivo)
   - El cuerpo visual apoya el titular, no lo repite
   - Flujo: Situación → Complicación → Resolución (pirámide de Minto)

3. **Generar `output/presentation.html`** siguiendo las especificaciones de identidad visual y técnicas de abajo.

---

## Sistema de Identidad Visual — Proyecto.02

> Toda la presentación debe respetar estrictamente el sistema de marca de Proyecto.02. Esta es la empresa, no un cliente.

### Paleta de color

```css
--brand-black:   #111827;   /* Obsidiana — fondo oscuro, texto principal, bordes fuertes */
--brand-accent:  #00D2A0;   /* Menta Digital — CTA, puntos de atención, highlights numéricos */
--brand-tech:    #334155;   /* Azul Acero — UI elements, gráficos, iconos inactivos */
--brand-slate:   #94A3B8;   /* Gris Niebla — metadatos, placeholders, texto de apoyo */
--brand-surface: #F8FAFC;   /* Nube de Datos — fondos de tarjetas, áreas secundarias */
--brand-canvas:  #FFFFFF;   /* Blanco Puro — fondo principal, contenedores de alto contraste */
```

**Filosofía de uso:**
- Las slides de alto impacto usan fondo `#111827` (Obsidiana) con texto blanco y acento `#00D2A0`
- Las slides de datos/diagramas pueden usar fondo `#F8FAFC` (Nube de Datos) con texto `#111827`
- El acento `#00D2A0` se usa con disciplina: solo para el dato/elemento más importante de cada slide
- Nunca usar el acento en más de 2–3 elementos por slide

### Tipografía

```html
<!-- Importar en el <head> -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

| Rol | Familia | Uso |
|-----|---------|-----|
| **Identidad / Display** | `Share Tech Mono` (monospace) | Logotipo, titulares técnicos, números destacados, labels de datos, código |
| **Texto / Lectura** | `Inter` (sans-serif) | Bullets, descripciones, subtítulos de apoyo |

**Regla:** Si hay un número importante en el slide, va en `Share Tech Mono`. Los titulares de slide van en `Share Tech Mono` o `Inter Black (900)` según el contexto.

### Logotipo (inline SVG — usar en portada y en esquina de cada slide)

```html
<!-- Isologo completo — para portada -->
<div style="display:flex;flex-direction:column;align-items:center;">
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
    <path d="M20 20H80V80H20V20Z" stroke="#111827" stroke-width="4"/>
    <rect x="28" y="28" width="12" height="12" fill="#111827"/>
    <rect x="44" y="28" width="12" height="12" fill="#111827"/>
    <rect x="28" y="44" width="12" height="12" fill="#111827"/>
    <rect x="60" y="60" width="12" height="12" fill="#00D2A0"/>
  </svg>
  <span style="font-family:'Share Tech Mono';font-size:2.5rem;color:#111827;letter-spacing:-0.05em;">PY<span style="color:#00D2A0;">.</span>2</span>
  <span style="font-family:'Share Tech Mono';font-size:0.75rem;color:#334155;letter-spacing:0.2em;">PROYECTO.02</span>
</div>

<!-- Logo horizontal — para header de slides sobre fondo claro -->
<div style="display:flex;align-items:center;gap:10px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
    <path d="M20 20H80V80H20V20Z" stroke="#111827" stroke-width="6"/>
    <rect x="28" y="28" width="12" height="12" fill="#111827"/>
    <rect x="44" y="28" width="12" height="12" fill="#111827"/>
    <rect x="28" y="44" width="12" height="12" fill="#111827"/>
    <rect x="60" y="60" width="12" height="12" fill="#00D2A0"/>
  </svg>
  <span style="font-family:'Share Tech Mono';font-size:1rem;color:#111827;">PROYECTO<span style="color:#00D2A0;">.</span>02</span>
</div>

<!-- Logo Dark Mode — para slides sobre fondo #111827 -->
<div style="display:flex;align-items:center;gap:10px;">
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
    <path d="M20 20H80V80H20V20Z" stroke="white" stroke-width="6"/>
    <rect x="28" y="28" width="12" height="12" fill="white"/>
    <rect x="44" y="28" width="12" height="12" fill="white"/>
    <rect x="28" y="44" width="12" height="12" fill="white"/>
    <rect x="60" y="60" width="12" height="12" fill="#00D2A0"/>
  </svg>
  <span style="font-family:'Share Tech Mono';font-size:1rem;color:white;">PROYECTO<span style="color:#00D2A0;">.</span>02</span>
</div>
```

### Elementos gráficos de identidad

**Patrón técnico de fondo** (para slides de portada y transición):
```css
background-image:
  linear-gradient(0deg, transparent 24%, rgba(0,210,160,.05) 25%, rgba(0,210,160,.05) 26%, transparent 27%,
    transparent 74%, rgba(0,210,160,.05) 75%, rgba(0,210,160,.05) 76%, transparent 77%, transparent),
  linear-gradient(90deg, transparent 24%, rgba(0,210,160,.05) 25%, rgba(0,210,160,.05) 26%, transparent 27%,
    transparent 74%, rgba(0,210,160,.05) 75%, rgba(0,210,160,.05) 76%, transparent 77%, transparent);
background-size: 50px 50px;
```

**Línea de acento izquierda** (para titulares y citas importantes):
```html
<div style="position:relative;padding-left:24px;">
  <div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:#00D2A0;"></div>
  <!-- contenido -->
</div>
```

**Label técnico de referencia** (estilo terminal, para metadatos y labels):
```html
<span style="font-family:'Share Tech Mono';font-size:0.65rem;color:#00D2A0;">> LABEL_TEXTO</span>
```

**Botón primario** (borde inferior de acento):
```html
<button style="background:#111827;color:white;font-family:'Share Tech Mono';border-bottom:2px solid #00D2A0;padding:12px 24px;border-top:none;border-left:none;border-right:none;">
  > ACCIÓN
</button>
```

**Botón secundario** (shadow offset):
```html
<button style="background:#00D2A0;color:#111827;font-family:'Inter';font-weight:700;box-shadow:4px 4px 0px 0px #111827;padding:12px 24px;border:none;">
  Acción Secundaria
</button>
```

---

## Especificaciones McKinsey de contenido

### Reglas de cada slide
- **Titular accionable** (≤12 palabras): comunica la conclusión, no el tema
  - ✅ *"El mercado IIoT crece 3× antes de 2028 — sin solución ML nativa"*
  - ❌ *"Análisis de mercado"*
- Máximo **3 bullets** por slide; cada uno ≤8 palabras
- Los **números son el protagonista** → `Share Tech Mono` grande, color `#00D2A0`
- Cero texto decorativo

### Fondos por tipo de slide

| Tipo de slide | Fondo | Texto principal |
|---|---|---|
| Portada | `#111827` + patrón técnico | Blanco / `#00D2A0` |
| Impacto / datos clave | `#111827` | Blanco / `#00D2A0` |
| Diagrama / arquitectura | `#F8FAFC` | `#111827` |
| Transición / separador | `#111827` | `#00D2A0` |
| Contenido / bullets | `#FFFFFF` | `#111827` |

---

## Estructura de slides recomendada

| # | Tipo | Propósito |
|---|------|-----------|
| 1 | **Portada** | Isologo Proyecto.02 grande, tagline, nombre del proyecto |
| 2 | **Situación** | El mundo hoy — datos del problema (números grandes en `#00D2A0`) |
| 3 | **Complicación** | Por qué las soluciones actuales fallan |
| 4 | **Nuestra solución** | Qué hacemos, en una frase + diagrama SVG |
| 5 | **Cómo funciona** | Pipeline / arquitectura técnica en SVG |
| 6 | **Diferenciadores** | 3 razones por las que ganamos |
| 7 | **Resultados / validación** | Métricas y benchmarks (datos protagonistas) |
| 8 | **Mercado** | TAM/SAM/SOM o tamaño de oportunidad |
| 9 | **Go-to-market** | Cómo llegamos al cliente |
| 10 | **Equipo** | Quiénes somos (si aplica) |
| 11 | **Hoja de ruta** | Milestones próximos 12–18 meses |
| 12 | **Llamada a la acción** | Qué pedimos al oyente |

> Adapta, elimina o añade slides según el contenido real de `sources/`. La narrativa manda.

---

## Especificaciones técnicas del HTML

### Navegación
- Slides en pantalla completa (`100vw × 100vh`)
- Navegación con **flechas del teclado** (`←` `→`) y click
- Logo Proyecto.02 (versión horizontal dark/light según fondo) en esquina inferior izquierda de cada slide
- Indicador de progreso con tipografía `Share Tech Mono`:
  ```html
  <span style="font-family:'Share Tech Mono';color:#94A3B8;">
    <span style="color:#00D2A0;">03</span> / 12
  </span>
  ```

### Botón de exportación con estilos de marca
```html
<button onclick="window.print()" style="
  position:fixed;top:20px;right:20px;z-index:100;
  background:#111827;color:white;
  font-family:'Share Tech Mono';font-size:0.75rem;
  padding:10px 20px;cursor:pointer;
  border:none;border-bottom:2px solid #00D2A0;
  letter-spacing:0.05em;
">
  > EXPORT_PDF
</button>
```

### CSS de impresión
```css
@media print {
  @page { size: A4 landscape; margin: 0; }
  .slide { page-break-after: always; width: 100vw; height: 100vh; }
  .controls, .export-btn, .nav-arrows { display: none !important; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
```

### Autocontención
- Todo en **un solo archivo HTML**
- Fuentes via Google Fonts CDN
- SVGs e íconos inline
- Vanilla JS preferido

---

## Checklist de calidad

Antes de entregar, verifica:

- [ ] Logo Proyecto.02 en portada (isologo grande) y en cada slide (versión pequeña)
- [ ] Paleta cromática respeta los 6 colores del sistema de marca exactamente
- [ ] `Share Tech Mono` usada en titulares, números y labels técnicos
- [ ] `Inter` usada en cuerpo de texto y bullets
- [ ] Todos los titulares de slide son accionables (conclusión, no tema)
- [ ] Ningún slide supera 40 palabras de cuerpo
- [ ] Los datos numéricos son prominentes en `#00D2A0`
- [ ] Navegación con teclado funciona
- [ ] Botón `> EXPORT_PDF` presente con estilos de marca
- [ ] `@media print` configurado para A4 landscape
- [ ] El HTML abre en Chrome/Firefox sin servidor
- [ ] No hay dependencias rotas
- [ ] El flujo narrativo cuenta una historia coherente de principio a fin

---

## Notas

- Duración estimada: **~75 segundos por slide** para una presentación de 15 min
- El oyente objetivo es técnico-empresarial: entiende conceptos pero decide con criterios de negocio
- Si hay conflicto entre rigor técnico y claridad comercial, prioriza **claridad comercial con credibilidad técnica**
- El patrón técnico de cuadrícula (`tech-bg`) refuerza la identidad de marca — úsalo en portada y slides de transición
