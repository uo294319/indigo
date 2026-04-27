# IndiGo — Contenido de la Presentación Técnico-Comercial

> Documento maestro con el contenido por diapositiva. 12 slides · ~75 s/slide · ~15 min total
> Identidad visual: **Proyecto.02** (PY.2). Cliente: **Inditex, S.A.**
> Fuentes: `Indigo_Memoria.pdf`, `Indigo_Presupuesto.pdf`, `Enunciado.pdf`

> **Estilo visual:** todos los fondos son **lisos** (sin patrones, sin gradientes, sin cuadrículas). Solo se usan los colores planos del sistema de marca.

---

## Slide 1 · Presentación

**Inicia:** Ángel
**Tipo:** Portada (fondo liso `#111827`)

**Titular accionable:**
> Convertimos cada prenda usada de Inditex en una segunda venta — sin fricción, en circuito cerrado.

**Elementos clave en pantalla:**
- Isologo grande **PY.2 / PROYECTO.02** centrado
- Nombre del proyecto: **Inditex Go → IndiGo** (en `Share Tech Mono`, blanco)
- Tagline: *"Plataforma C2B de moda circular para Inditex"*
- Etiqueta inferior: `> CLIENTE: INDITEX, S.A.` · `> REF: PY2-IndiGo-v2.0` · `> ABRIL 2026`

**Equipo del proyecto (footer de portada):**

| Rol | Nombre |
|---|---|
| Director de Proyecto | **Yago Rueda** |
| Director de Proyecto | **Ángel Arróspide** |
| Subdirector Técnico | **Marcos Rato** |

**Notas de presentación:**
- "Buenas tardes. Soy Ángel, junto con mi compañero Yago dirigimos el proyecto IndiGo."
- "Marcos Rato lidera la dirección técnica."
- "En los próximos 15 minutos vamos a explicarles por qué IndiGo es la única respuesta sistémica al reto de la circularidad para Inditex."

---

## Slide 2 · Problema Base — Justificación + Normativa

**Tipo:** Datos de impacto (fondo liso `#111827`)

**Titular accionable:**
> Inditex no puede esperar — la regulación obliga, el mercado tira y la oportunidad expira.

**Tres números protagonistas (`Share Tech Mono` grande, `#00D2A0`):**

| Métrica | Valor | Contexto |
|---|---|---|
| Mercado segunda mano global | **244.000 M€** | Estimación 2025 |
| Mercado segunda mano España | **>5.500 M€/año** | 10% del retail moda en 2025 |
| Apps Inditex activas | **218 M** | Base instalada explotable desde día 1 |

**Bullets de cuerpo (≤ 8 palabras cada uno):**
- For&From no escala: solo personas con discapacidad, intermediación local
- Vinted captura valor con **10%** de comisión — fuera de Inditex
- Sin canal C2B propio, Inditex pierde la prenda y al cliente

**Marco normativo de obligado cumplimiento (chips/badges, `#334155`):**
`ESPR (UE 2024/1781) · DPP` · `RGPD` · `LOPD-GDD` · `NIS2` · `AI Act` · `CSRD` · `LGDCU` · `LSSI-CE` · `DSA` · `PCI DSS`

**Idea clave para el orador:**
- ESPR + Pasaporte Digital del Producto = trazabilidad obligatoria desde 2030
- IndiGo nace ya cumpliendo esa obligación → ventaja regulatoria

---

## Slide 3 · Marketplace

**Tipo:** Diagrama / arquitectura comercial (fondo liso `#F8FAFC`)

**Titular accionable:**
> Un marketplace C2B nativo: el cliente entrega, Inditex revende, la marca recupera la prenda.

**Diagrama central (SVG horizontal — flujo de 4 nodos):**

```
[USUARIO] ──depositar──▶ [TIENDA / LOCKER] ──validar IA──▶ [CENTRO INDIGO] ──publicar──▶ [APP INDITEX]
   ▲                                                                                          │
   └──────────────────────────── recompensa hídrica + saldo ────────────────────────────────┘
```

**Tres bullets de propuesta (las 3 C):**
- **Comodidad** — Envío directo desde el particular, sin desplazamientos
- **Recompensas** — Tasación dinámica con IA (estado + talla)
- **Confianza** — A diferencia de Vinted, hay una empresa validadora detrás

**Datos prominentes (`#00D2A0`):**
- **3** centros de distribución
- **6** marcas Inditex unificadas en un único catálogo de segunda mano
- **0%** comisión al usuario — la economía circular se monetiza en margen

---

## Slide 4 · Gamificación

**Tipo:** Datos clave + visual de niveles (fondo liso `#111827`)

**Titular accionable:**
> Incentivamos a "entrar en la rueda" de la economía circular.

**Concepto central:** Gamificación hídrica. Cada prenda depositada se traduce a **litros de agua ahorrados** — métrica con anclaje emocional y narrativa ESG (CSRD-ready).

**Dos mecánicas combinadas:**

1. **Flujo (la rueda):**
   `Venta → Obtención de puntos → Canjeo por cupones → Compra en el marketplace → Venta de nuevo`
2. **Fidelización (la escalera):**
   `Saldo histórico → Niveles → Ventajas y mejores ofertas`

**Cuatro niveles (visual en escalera, accent `#00D2A0` en el activo):**

| Nivel | Beneficio típico |
|---|---|
| **Bronce** | Recompensa base |
| **Plata** | Bonificaciones puntuales |
| **Oro** | Acceso anticipado a colecciones |
| **Platino** | Eventos cerrados + multiplicadores |

**Sistema de saldo dual (mitiga riesgo financiero R-011 / R-013):**
- **Saldo histórico** — permanente, valor reputacional (litros acumulados)
- **Saldo disponible** — caduca a **6 meses**, controla el pasivo de tesorería
- Aviso "Control de Caducidad" en la app **7 días** antes

**Bullets de apoyo:**
- Tasación con bonificación por nivel — fideliza al usuario activo
- Alineado con CSRD: cada acción es reporte de sostenibilidad auditable

---

## Slide 5 · Capacidad

**Tipo:** Datos / impacto (fondo liso `#111827`)

**Titular accionable:**
> Diseñado para 6,5k prendas/día desde el día uno — y para multiplicar por 5 en pico.

**Cuatro números protagonistas (`Share Tech Mono`, `#00D2A0`):**

| Métrica | Valor |
|---|---|
| Prendas procesadas por centro/día (año 1) | **6.500** |
| Multiplicador en picos | **×3 — ×5** |
| Transacciones por día (estable) | **50k — 70k** |
| Transacciones en pico | **350.000** |

**Proyección de crecimiento (mini-tabla):**

| Indicador | Año 1 | Año 3 |
|---|---|---|
| Prendas/año | **2,5 M** | **12 M** |
| GMV | **45 M€** | **264 M€** |
| Ingresos netos | **4,5 M€** | **26,4 M€** |

**Cierre / pase de testigo:**
> "Estos números son la clave de las decisiones técnicas que os explicará a continuación **Marcos**."

---

## Slide 6 · Logística

**Inicia:** Marcos
**Tipo:** Diagrama de proceso (fondo liso `#F8FAFC`)

**Titular accionable:**
> Subcontratación híbrida en primera milla, automatización total en el centro.

**Diagrama de proceso (5 pasos en horizontal):**

```
1. RECOGIDA       2. ESCANEO         3. CUSTODIA       4. PROCESADO      5. REVENTA
   Multi-operador    Arco láser         "Nido de Abeja"    AS/RS + Sorter    App Inditex
   Correos/SEUR/     en muelle          7 días             G2P picking        + DPP por prenda
   InPost/DHL
```

**Decisiones técnicas clave (3 bullets):**
- **Multi-operador** mitiga riesgo de huelga / SLA (R-007)
- **AS/RS vertical** + **Sorter automático** — Goods-to-Person elimina cuellos
- **Estaciones Put-to-Light** estandarizan el doblado y la calidad

---

## Slide 7 · Backbone — Microservicios + Arquitectura Híbrida

**Tipo:** Arquitectura técnica (fondo liso `#F8FAFC`)

**Titular accionable:**
> Cloud-first sin renunciar al almacén — un edge resiliente para que la línea no pare.

**Por qué microservicios:**
> Los microservicios son la respuesta natural a la capacidad del slide anterior — permiten escalar cada componente de forma independiente y absorber los picos x5 sin sobrecostes.

**Stack técnico (chips):**
`Azure Container Apps` · `.NET 8` · `Azure Service Bus` · `SignalR` · `JWT` · `Azure Spain Central` · `.NET MAUI`

**Diagrama de microservicios (6 cápsulas + bus):**

```
┌─────────── AZURE SERVICE BUS (mensajería asíncrona) ───────────┐
│                                                                │
│   [Identity]  [Wallet/Rewards]  [Shipping]  [Inventory]        │
│   [Catalog]   [AI Vision]                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
       │                                     │
   ┌───▼───┐                             ┌───▼───┐
   │Azure  │                             │Cosmos │
   │ SQL   │                             │  DB   │
   │(trans)│                             │(catal)│
   └───────┘                             └───────┘
                  ┌──────────┐
                  │Blob Stor.│ (imágenes)
                  └──────────┘
```

**Arquitectura híbrida — Thin Edge (3 bullets):**
- **Buffer Local de Supervivencia** — SQLite cifrado **AES-256** en cada centro
- Operación offline garantizada → al recuperar conexión: sincronización masiva diferida
- BackOffice industrial en **.NET MAUI**, MVVM con CommunityToolkit

**Persistencia políglota:**
Azure SQL (transaccional) · Cosmos DB (catálogo flexible + DPP) · Blob Storage (1 TB hot)

---

## Slide 8 · Backoffice — Estadísticas de Explotación

**Tipo:** Mockup / dashboard (fondo liso `#F8FAFC`)

**Titular accionable:**
> Power BI conectado al dato vivo — Inditex toma decisiones por hora, no por mes.

**KPIs visibles en el dashboard (4 cards):**

| KPI | Origen |
|---|---|
| **Prendas/hora** por centro | Inventory + Shipping |
| **Tasa de aceptación IA** | AI Vision (calidad del modelo) |
| **Litros de agua ahorrados** | Wallet/Rewards |
| **GMV en tiempo real** | Catalog + Order |

**Capacidades del Backoffice (3 bullets):**
- App industrial **.NET MAUI** sobre PDAs rugerizadas — no PC en planta
- Power BI integrado nativamente con Azure SQL + Cosmos DB
- Vistas por rol: operario, supervisor, dirección

**Métricas de explotación incluidas:**
- Trazabilidad por prenda (Pasaporte Digital del Producto integrado)
- Detección de mermas en tiempo real
- Alertas de SLA logístico por operador

---

## Slide 9 · Presupuesto

**Tipo:** Datos económicos (fondo liso `#111827`)

**Titular accionable:**
> 4,44 M€ IVA incluido para tres centros — el ROI llega antes del fin del primer año operativo.

**Número protagonista (gigante, `#00D2A0`):**

# **4.444.507 €**
*Presupuesto total del proyecto · IVA incluido*

**Desglose por capítulos (tabla limpia):**

| Capítulo | Importe |
|---|---|
| 1. Materiales y hardware | **2.737.800 €** |
| 2. Servicios profesionales (14 perfiles, 22 meses, 8.338 h) | **500.094 €** |
| 4. Mantenimiento y SLAs primer año (incl. infra cloud 31.702 €) | **429.303 €** |
| **Presupuesto de Ejecución Material (PEM)** | **3.673.146 €** |
| IVA 21% s/ PEM | 771.361 € |
| **TOTAL** | **4.444.507 €** |

**Tres ideas para el orador:**
- Hardware logístico (AS/RS, Sorter, cintas) representa el **89%** del Capítulo 1 — inversión productiva, no consumo
- Equipo de **14 profesionales** durante **22 meses** = entrega cerrada, no consultoría abierta
- Coste cloud absorbido en mantenimiento (sin sorpresas en factura recurrente)

---

## Slide 10 · Gestión

**Tipo:** Modelo de gestión (fondo liso `#FFFFFF`)

**Titular accionable:**
> Híbrido Waterfall + Scrum — gobernanza para el cliente, agilidad para el código.

**Foco del slide:** metodología (Scrum) + control de riesgos. **No incluir organigrama de equipo** — los nombres reflejados en la memoria no son los que ejecutarán el proyecto.

**Tres bullets clave (metodología):**
- **Waterfall en hitos contractuales** (M1–M8) — el cliente firma cada fase
- **Scrum en desarrollo** — sprints de **2 semanas** sobre Azure DevOps
- **3 niveles de comunicación** — operativo (diario) · táctico (semanal) · estratégico (mensual)

**Análisis de Riesgos · Método Mosler (visual protagonista, semáforo):**

| Nivel | Nº de riesgos | Color |
|---|---|---|
| Muy Bajo | **18** | `#00D2A0` |
| Bajo | **3** | `#94A3B8` |
| Medio | **1** | acento de atención |
| Alto / Muy Alto | **0** | — |

**Único riesgo nivel Medio:**
> **R-014 · Brecha de seguridad y fuga de datos de usuarios**
> Mitigación: MFA en roles privilegiados · TLS 1.2+ · hashing Argon2id / bcrypt · cifrado AES-256 en buffer local

**Garantías de calidad:**
- Azure DevOps end-to-end (board, repos, pipelines, artifacts) — trazabilidad total
- **22 riesgos** identificados y tratados (mitigar / transferir / evitar / aceptar)
- Reserva global de gestión: **3 semanas** distribuidas en los últimos hitos

---

## Slide 11 · Planificación

**Tipo:** Cronograma / timeline (fondo liso `#FFFFFF`)

**Titular accionable:**
> En el mes 11 entregamos el backend funcional. En el mes 17, IndiGo está vivo en producción.

**Convención:** todas las referencias temporales son **relativas al kickoff (Mes 0)**. Sin fechas concretas en pantalla.

**Datos clave del cronograma (4 cards):**

| Parámetro | Valor |
|---|---|
| Duración total | **22 meses** |
| Go-Live producción (M7) | **Mes 17** |
| Fin contractual | **Mes 21** |
| Esfuerzo total | **7.818 h-persona ≈ 48,9 personas-mes** |

**Línea de tiempo relativa (Gantt simplificado):**

```
Mes 0 ─────────────── Mes 11 ─────────────── Mes 17 ──── Mes 21
│                                                            │
│ Diseño & Arquitectura                                      │
│ ──── 3 meses ────                                          │
│         Infraestructura Azure                              │
│         ── 2 meses ──                                      │
│         Backend microservicios .NET 8                      │
│         ────────── 8 meses ──────────                      │
│         App móvil .NET MAUI                                │
│         ────── 6 meses ──────                              │
│           BackOffice industrial                            │
│           ────── 6 meses ──────                            │
│                       Integración logística               │
│                       ── 3 meses ──                       │
│                          Testing & QA                      │
│                          ── 3 meses ──                     │
│                              Piloto + Go-to-Market         │
│                              ── 7 sem ──                   │
│                                ★ M7 GO-LIVE (Mes 17)       │
│                                  Soporte post-lanzamiento  │
│                                  ── 4 meses ──             │
```

**Hitos de control (en meses relativos):**

| Hito | Mes | Significado |
|---|---|---|
| M2 | **+3** | Arquitectura aprobada |
| M3 | **+5** | Azure operativa |
| E2 | **+8** | App móvil v1.0 funcional |
| E3 | **+9** | BackOffice industrial v1.0 funcional |
| **E1** | **+11** | **Backend v1.0 funcional** *(entrega parcial clave)* |
| M4 | **+13** | Integración logística completa |
| M5 | **+16** | Decisión Go / No-Go |
| **M7** | **+17** | **GO-LIVE en producción** |
| M8 | **+21** | Revisión KPIs año 1 |

**Mensaje al cliente (3 hitos visuales destacados):**
- En **mes 8–9** ya hay producto tangible: app móvil + BackOffice operativos
- En **mes 11** el backend entra en producción → integración logística arranca
- En **mes 17** IndiGo está vivo → quedan 4 meses de soporte y revisión de KPIs

**Holguras:** Diseño/Integración 10% · Desarrollo 15% · Testing 20% · Reserva global 3 semanas

---

## Slide 12 · Resumen de lo Importante

**Tipo:** Cierre / Llamada a la acción (fondo liso `#111827`)

**Titular accionable:**
> IndiGo es la pieza que falta — circular por diseño, regulatorio por defecto, rentable por arquitectura.

**Las 5 razones para decir SÍ (lista grande, accent `#00D2A0` en cada número):**

1. **Mercado caliente** — 244.000 M€ globales · canal C2B propio para 218 M apps
2. **Cumplimiento regulatorio** — ESPR + DPP + CSRD desde el día uno
3. **Operativa probada** — 6,5k prendas/día · 350k transacciones en pico
4. **Inversión cerrada** — 4,44 M€ IVA incluido · 22 meses · 3 centros
5. **Riesgo controlado** — 22 riesgos, solo 1 en nivel Medio (mitigado)

**Llamada a la acción (botones de marca):**

```
[> APROBAR_KICKOFF]                [Solicitar dossier ampliado]
 (primario, accent inferior)        (secundario, shadow offset)
```

**Cierre del orador:**
- "El kickoff arranca en el **Mes 0** — su decisión hoy."
- "El Go-Live está al alcance en **Mes 17**."
- "La pregunta no es si Inditex entrará en el C2B circular — es **con quién**."

**Footer de cierre:**
> **Yago Rueda · Ángel Arróspide** — Dirección de Proyecto
> **Marcos Rato** — Subdirección Técnica
> `> CONTACTO: PY.2 · PROYECTO.02`

---

## Apéndice — Reglas de estilo aplicadas

- **Pirámide de Minto** en la narrativa: Situación (2) → Complicación (2) → Resolución (3–8) → Acción (12)
- **Titulares accionables**: cada slide concluye, no describe
- **Números en `Share Tech Mono` color `#00D2A0`** como protagonista visual
- Máximo **3 bullets** por slide, cada uno **≤ 8 palabras**
- **Cuerpo ≤ 40 palabras** total por slide
- Logo PY.2 (versión horizontal dark/light) en esquina inferior izquierda en todas las slides
- Indicador de progreso `01 / 12` … `12 / 12` en `Share Tech Mono`
- **Fondos siempre lisos** — sin patrones, sin gradientes, sin cuadrículas. Solo: `#111827`, `#F8FAFC`, `#FFFFFF`

**Reparto de oradores:**
- **Slides 1–5** → Ángel (visión, problema, mercado, capacidad)
- **Slides 6–8** → Marcos (logística, backbone técnico, backoffice)
- **Slides 9–12** → Yago (presupuesto, gestión, planificación, cierre)

**Cronograma en unidades relativas:** todas las referencias se expresan como "Mes +N desde kickoff", no fechas absolutas.
