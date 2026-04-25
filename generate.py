#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, textwrap

OUT  = r"C:\Users\angel\Documents\IndigoPresentación\output"
SLD  = os.path.join(OUT, "slides")
os.makedirs(SLD, exist_ok=True)

# ─────────────────────────────────────────
# SHARED ASSETS
# ─────────────────────────────────────────
FONTS = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">'

LOGO_D = '''<svg width="18" height="18" viewBox="0 0 100 100" fill="none"><path d="M20 20H80V80H20V20Z" stroke="white" stroke-width="6"/><rect x="28" y="28" width="12" height="12" fill="white"/><rect x="44" y="28" width="12" height="12" fill="white"/><rect x="28" y="44" width="12" height="12" fill="white"/><rect x="60" y="60" width="12" height="12" fill="#00D2A0"/></svg><span style="color:white">PROYECTO<span style="color:#00D2A0">.</span>02</span>'''

LOGO_L = '''<svg width="18" height="18" viewBox="0 0 100 100" fill="none"><path d="M20 20H80V80H20V20Z" stroke="#111827" stroke-width="6"/><rect x="28" y="28" width="12" height="12" fill="#111827"/><rect x="44" y="28" width="12" height="12" fill="#111827"/><rect x="28" y="44" width="12" height="12" fill="#111827"/><rect x="60" y="60" width="12" height="12" fill="#00D2A0"/></svg><span style="color:#111827">PROYECTO<span style="color:#00D2A0">.</span>02</span>'''

# ─────────────────────────────────────────
# SHARED CSS (used in every file)
# ─────────────────────────────────────────
SHARED_CSS = """
:root{--bk:#111827;--ac:#00D2A0;--te:#334155;--sl:#94A3B8;--sf:#F8FAFC;--wh:#fff}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
a{color:inherit;text-decoration:none}
/* ── Canvas ── */
.sc{width:1280px;height:720px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:50px 72px;font-family:'Inter',sans-serif}
.dark{background:var(--bk);color:#fff}
.light{background:var(--wh);color:var(--bk)}
.surf{background:var(--sf);color:var(--bk)}
.tech-bg{background-color:var(--bk)!important;background-image:linear-gradient(0deg,transparent 24%,rgba(0,210,160,.05) 25%,rgba(0,210,160,.05) 26%,transparent 27%,transparent 74%,rgba(0,210,160,.05) 75%,rgba(0,210,160,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(0,210,160,.05) 25%,rgba(0,210,160,.05) 26%,transparent 27%,transparent 74%,rgba(0,210,160,.05) 75%,rgba(0,210,160,.05) 76%,transparent 77%,transparent);background-size:50px 50px}
/* ── Typography ── */
.lbl{font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--ac);letter-spacing:.15em;margin-bottom:14px}
.ac{color:var(--ac)}
.sl{color:var(--sl)}
h1.t{font-family:'Share Tech Mono',monospace;font-size:40px;line-height:1.1;margin-bottom:22px;color:#fff}
h2.t{font-family:'Inter',sans-serif;font-weight:900;font-size:34px;line-height:1.15;margin-bottom:22px}
/* ── Grids ── */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:18px;width:100%}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;width:100%}
.g4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;width:100%}
/* ── Cards ── */
.cd{background:rgba(255,255,255,.05);border:1px solid rgba(0,210,160,.2);padding:16px}
.cl{background:#fff;border:1px solid #E2E8F0;padding:16px;box-shadow:0 2px 4px rgba(0,0,0,.05)}
.ca{background:rgba(0,210,160,.08);border:1px solid rgba(0,210,160,.4);padding:16px}
.ct{font-family:'Share Tech Mono',monospace;font-size:10px;color:var(--ac);margin-bottom:5px;letter-spacing:.05em}
.cb{font-family:'Inter',sans-serif;font-size:12.5px;line-height:1.5;color:var(--sl)}
.cbd{font-family:'Inter',sans-serif;font-size:12.5px;line-height:1.5;color:#CBD5E1}
/* ── Metrics ── */
.mv{font-family:'Share Tech Mono',monospace;font-size:50px;color:var(--ac);line-height:1}
.ml{font-family:'Inter',sans-serif;font-size:11px;color:var(--sl);margin-top:4px}
.bn{font-family:'Share Tech Mono',monospace;font-size:62px;color:var(--ac);line-height:1}
.bnl{font-family:'Inter',sans-serif;font-size:11px;color:var(--sl);margin-top:4px;line-height:1.4}
/* ── Lists ── */
.bul{list-style:none;display:flex;flex-direction:column;gap:9px}
.bul li{font-family:'Inter',sans-serif;font-size:13px;display:flex;align-items:flex-start;gap:8px}
.bul li::before{content:'>';font-family:'Share Tech Mono',monospace;color:var(--ac);flex-shrink:0}
/* ── Accent border ── */
.ab{position:relative;padding-left:18px}
.ab::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--ac)}
/* ── Logo corner ── */
.logoc{position:absolute;bottom:18px;left:24px;display:flex;align-items:center;gap:7px}
.logoc span{font-family:'Share Tech Mono',monospace;font-size:11px}
/* ── Slide number ── */
.sno{position:absolute;bottom:18px;right:24px;font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--sl)}
.sno .c{color:var(--ac)}
/* ── Pipeline ── */
.pipe{display:flex;align-items:stretch;width:100%;margin-top:10px}
.ps{flex:1;text-align:center;padding:12px 4px;background:rgba(255,255,255,.04);border:1px solid rgba(0,210,160,.15);position:relative}
.ps:not(:last-child)::after{content:'→';position:absolute;right:-13px;top:50%;transform:translateY(-50%);color:var(--ac);font-family:'Share Tech Mono',monospace;font-size:16px;z-index:1}
.pi{font-family:'Share Tech Mono',monospace;font-size:18px;color:var(--ac);margin-bottom:4px}
.pl{font-family:'Inter',sans-serif;font-size:10px;color:#94A3B8;line-height:1.3}
/* ── Timeline ── */
.tl{display:flex;width:100%;margin-top:10px}
.tp{flex:1;border-top:3px solid var(--te);padding-top:12px;padding-right:12px}
.tp.ap{border-top-color:var(--ac)}
.td{font-family:'Share Tech Mono',monospace;font-size:10px;color:var(--ac);margin-bottom:3px}
.tlh{font-family:'Inter',sans-serif;font-weight:600;font-size:13px;margin-bottom:3px}
.tx{font-family:'Inter',sans-serif;font-size:11px;color:var(--sl);line-height:1.4}
/* ── Compare table ── */
.cr{display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid rgba(255,255,255,.06);padding:9px 0;align-items:center}
.cc{font-family:'Inter',sans-serif;font-size:12px;color:var(--sl)}
.co{font-family:'Inter',sans-serif;font-size:12px;color:#EF4444;text-align:center}
.cn{font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--ac);text-align:center}
/* ── Budget ── */
.bi{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.bl3{font-family:'Inter',sans-serif;font-size:12px;color:var(--sl);width:155px;flex-shrink:0}
.bw{flex:1;height:6px;background:rgba(0,0,0,.08)}
.bb{height:100%;background:var(--ac)}
.bv{font-family:'Share Tech Mono',monospace;font-size:12px;width:120px;text-align:right;flex-shrink:0}
/* ── Team ── */
.tme{display:flex;align-items:center;gap:8px;padding:7px 8px;border:1px solid rgba(255,255,255,.06)}
.tid{font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--ac);width:24px;text-align:center;flex-shrink:0}
.tnm{font-family:'Inter',sans-serif;font-size:12px;color:#fff;font-weight:600}
.trl{font-family:'Inter',sans-serif;font-size:10px;color:var(--sl)}
"""

# ─────────────────────────────────────────
# SLIDE DEFINITIONS
# Each entry: (bg_classes, logo_variant, inner_html)
# logo_variant: 'D' = dark bg logo, 'L' = light bg logo
# ─────────────────────────────────────────

S = []   # list of (bg, logo, html)

# ── SLIDE 01: PORTADA ──
S.append(("dark tech-bg","D","""
<div style="display:flex;flex-direction:column;align-items:center;width:100%;gap:26px">
  <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
    <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
      <path d="M20 20H80V80H20V20Z" stroke="white" stroke-width="4"/>
      <rect x="28" y="28" width="12" height="12" fill="white"/>
      <rect x="44" y="28" width="12" height="12" fill="white"/>
      <rect x="28" y="44" width="12" height="12" fill="white"/>
      <rect x="60" y="60" width="12" height="12" fill="#00D2A0"/>
    </svg>
    <span style="font-family:'Share Tech Mono';font-size:2.6rem;color:white;letter-spacing:-.03em">PY<span style="color:#00D2A0">.</span>2</span>
    <span style="font-family:'Share Tech Mono';font-size:.65rem;color:#334155;letter-spacing:.25em">PROYECTO.02</span>
  </div>
  <div style="width:380px;height:1px;background:rgba(255,255,255,.1)"></div>
  <div style="text-align:center">
    <div class="lbl" style="text-align:center;margin-bottom:10px">> PROPUESTA TÉCNICA Y ECONÓMICA — INDITEX S.A.</div>
    <h1 style="font-family:'Share Tech Mono';font-size:5rem;color:#fff;line-height:1;letter-spacing:-.02em">Indi<span style="color:#00D2A0">Go</span></h1>
    <p style="font-family:'Inter';font-size:1.05rem;color:#94A3B8;margin-top:12px;font-weight:300;letter-spacing:.04em">Plataforma de Economía Circular Textil · Inditex</p>
  </div>
  <div style="display:flex;gap:36px;margin-top:4px">
    <div style="text-align:center">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">€4.4M</div>
      <div style="font-family:'Inter';font-size:.65rem;color:#94A3B8;margin-top:3px">Presupuesto total</div>
    </div>
    <div style="width:1px;background:rgba(255,255,255,.1)"></div>
    <div style="text-align:center">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">24 m</div>
      <div style="font-family:'Inter';font-size:.65rem;color:#94A3B8;margin-top:3px">Plazo de ejecución</div>
    </div>
    <div style="width:1px;background:rgba(255,255,255,.1)"></div>
    <div style="text-align:center">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">Jul 2026</div>
      <div style="font-family:'Inter';font-size:.65rem;color:#94A3B8;margin-top:3px">Deadline ESPR</div>
    </div>
  </div>
</div>
"""))

# ── SLIDE 02: SITUACIÓN ──
S.append(("dark","D","""
<div class="lbl">> SITUACIÓN_01 // EL CONTEXTO</div>
<h2 class="t" style="color:white">Inditex lidera la moda global, pero <span class="ac">la regulación cambia las reglas</span> en julio&nbsp;2026</h2>
<div class="g4" style="margin-bottom:24px">
  <div><div class="mv">5.500<span style="font-size:1.4rem">+</span></div><div class="ml">tiendas en 93 países</div></div>
  <div><div class="mv">€38,6B</div><div class="ml">ventas FY2024</div></div>
  <div><div class="mv">2040</div><div class="ml">meta cero emisiones netas</div></div>
  <div><div class="mv">100%</div><div class="ml">fibras sostenibles en 2030</div></div>
</div>
<div class="g2">
  <div class="ca">
    <div class="ct">> REGULACIÓN ESPR — EN VIGOR JULIO 2026</div>
    <p style="font-family:'Inter';font-size:13px;color:white;line-height:1.5">El Reglamento (UE)&nbsp;2024/1781 <strong>prohíbe destruir excedentes textiles</strong> no vendidos y obliga a implementar el <span class="ac">Pasaporte Digital del Producto (DPP)</span> para toda la mercancía textil en la UE.</p>
  </div>
  <div class="cd">
    <div class="ct">> FOR&amp;FROM — EL MODELO ACTUAL</div>
    <p style="font-family:'Inter';font-size:13px;color:#CBD5E1;line-height:1.5">Programa desde 2002 con <strong>17 puntos de venta físicos</strong> en España, Portugal, Italia y México. Ha creado 1.000 empleos y recaudado <span class="ac">€9M</span> para iniciativas sociales — pero no puede escalar digitalmente ni cumplir el DPP.</p>
  </div>
</div>
"""))

# ── SLIDE 03: COMPLICACIÓN ──
S.append(("light","L","""
<div class="lbl" style="color:#334155">> COMPLICACIÓN_02 // EL PROBLEMA</div>
<h2 class="t" style="color:#111827">For&amp;From no puede escalar: <span style="color:#00D2A0">4 brechas críticas</span> lo impiden</h2>
<div class="g2" style="gap:16px;margin-bottom:20px">
  <div class="cl" style="border-left:3px solid #EF4444">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#EF4444;margin-bottom:5px">✕ ALCANCE GEOGRÁFICO RESTRINGIDO</div>
    <p style="font-family:'Inter';font-size:13px;color:#334155">Solo 17 tiendas físicas. Sin presencia digital. Sin cobertura nacional.</p>
  </div>
  <div class="cl" style="border-left:3px solid #EF4444">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#EF4444;margin-bottom:5px">✕ SIN CANAL C2B</div>
    <p style="font-family:'Inter';font-size:13px;color:#334155">Solo gestiona excedentes B2C. El consumidor no puede devolver prendas usadas al circuito.</p>
  </div>
  <div class="cl" style="border-left:3px solid #EF4444">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#EF4444;margin-bottom:5px">✕ ESCALABILIDAD FÍSICA LIMITADA</div>
    <p style="font-family:'Inter';font-size:13px;color:#334155">Incapaz de absorber picos de demanda. Sin arquitectura cloud. Sin automatización.</p>
  </div>
  <div class="cl" style="border-left:3px solid #EF4444">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#EF4444;margin-bottom:5px">✕ VACÍO EN CUMPLIMIENTO DPP</div>
    <p style="font-family:'Inter';font-size:13px;color:#334155">Sin trazabilidad digital por artículo. No puede emitir el Pasaporte Digital del Producto.</p>
  </div>
</div>
<div style="padding:18px 20px;background:#FEF2F2;border-left:3px solid #EF4444">
  <p style="font-family:'Inter';font-size:14px;color:#111827;font-weight:600">Sin una solución digital antes de julio 2026, Inditex incumple el Reglamento ESPR — con consecuencias legales y reputacionales directas.</p>
</div>
"""))

# ── SLIDE 04: SOLUCIÓN ──
S.append(("dark tech-bg","D","""
<div class="lbl">> SOLUCIÓN_03 // INDIGO</div>
<h1 class="t">IndiGo cierra el ciclo de vida textil:<br><span class="ac">plataforma C2B + B2C nativa en cloud</span></h1>
<div class="g3" style="margin-bottom:20px">
  <div class="cd" style="display:flex;flex-direction:column;gap:10px">
    <div style="font-size:1.6rem;text-align:center">📱</div>
    <div class="ct" style="text-align:center">> APP USUARIO (C2B/B2C)</div>
    <p class="cbd" style="text-align:center">El consumidor dona prendas usadas, recibe tasación IA en &lt;3 segundos y canjea puntos en el marketplace integrado.</p>
  </div>
  <div class="cd" style="display:flex;flex-direction:column;gap:10px">
    <div style="font-size:1.6rem;text-align:center">🏭</div>
    <div class="ct" style="text-align:center">> BACK-OFFICE INDUSTRIAL</div>
    <p class="cbd" style="text-align:center">Sistema logístico para centros de distribución: recepción, pesaje, clasificación, trazabilidad y envío. Opera offline con sincronización automática.</p>
  </div>
  <div class="cd" style="display:flex;flex-direction:column;gap:10px">
    <div style="font-size:1.6rem;text-align:center">☁️</div>
    <div class="ct" style="text-align:center">> INFRAESTRUCTURA CLOUD</div>
    <p class="cbd" style="text-align:center">Microservicios en Azure Spain Central. Escalado elástico hasta 350.000&nbsp;tx/día. SLA&nbsp;99,9%. Soporte nativo al DPP por artículo.</p>
  </div>
</div>
<div style="padding:18px 20px;background:rgba(0,210,160,.08);border:1px solid rgba(0,210,160,.3)">
  <p style="font-family:'Inter';font-size:13.5px;color:white;line-height:1.6"><span class="ac" style="font-family:'Share Tech Mono'">> PROPUESTA DE VALOR:</span> IndiGo no compite con For&amp;From — <strong>lo digitaliza</strong>. Convierte excedentes en activos circulantes, fideliza al consumidor y garantiza cumplimiento normativo ESPR desde el primer día.</p>
</div>
"""))

# ── SLIDE 05: CÓMO FUNCIONA ──
S.append(("dark","D","""
<div class="lbl">> FUNCIONAMIENTO_04 // FLUJO DEL SISTEMA</div>
<h2 class="t" style="color:white">Del armario del usuario al marketplace en <span class="ac">5 pasos automatizados</span></h2>
<div class="pipe" style="margin-bottom:28px">
  <div class="ps"><div class="pi">📸</div><div style="font-family:'Share Tech Mono';font-size:9px;color:#00D2A0;margin-bottom:3px">> 01</div><div class="pl">Usuario fotografía prenda en la app</div></div>
  <div class="ps"><div class="pi">🤖</div><div style="font-family:'Share Tech Mono';font-size:9px;color:#00D2A0;margin-bottom:3px">> 02</div><div class="pl">IA reconoce modelo, talla y estado &lt;3s</div></div>
  <div class="ps"><div class="pi">📦</div><div style="font-family:'Share Tech Mono';font-size:9px;color:#00D2A0;margin-bottom:3px">> 03</div><div class="pl">Logística inversa: locker o recogida</div></div>
  <div class="ps"><div class="pi">🏭</div><div style="font-family:'Share Tech Mono';font-size:9px;color:#00D2A0;margin-bottom:3px">> 04</div><div class="pl">Centro procesa, clasifica y emite DPP</div></div>
  <div class="ps"><div class="pi">🛍️</div><div style="font-family:'Share Tech Mono';font-size:9px;color:#00D2A0;margin-bottom:3px">> 05</div><div class="pl">Marketplace B2C + puntos de fidelización</div></div>
</div>
<div class="g3">
  <div style="display:flex;flex-direction:column;gap:5px">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0">> TASACIÓN IA</div>
    <div style="font-family:'Inter';font-size:13px;color:#CBD5E1">Motor algorítmico por estado, precio original y antigüedad. Tasación dinámica en tiempo real.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:5px">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0">> FIDELIZACIÓN GAMIFICADA</div>
    <div style="font-family:'Inter';font-size:13px;color:#CBD5E1">Niveles Bronce→Platino. Saldo dual: puntos históricos + cupones con caducidad 6 meses.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:5px">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0">> MODO SUPERVIVENCIA</div>
    <div style="font-family:'Inter';font-size:13px;color:#CBD5E1">Buffer SQLite con AES-256 en nodos locales. Sincronización automática al recuperar conectividad.</div>
  </div>
</div>
"""))

# ── SLIDE 06: ARQUITECTURA ──
S.append(("surf","L","""
<div class="lbl" style="color:#334155">> ARQUITECTURA_05 // STACK TÉCNICO</div>
<h2 class="t" style="color:#111827">Arquitectura híbrida cloud-edge: <span style="color:#00D2A0">350.000&nbsp;tx/día, 99,9%&nbsp;SLA</span></h2>
<div style="width:100%;margin-bottom:18px">
<svg viewBox="0 0 960 220" style="width:100%;max-height:195px" xmlns="http://www.w3.org/2000/svg">
  <!-- App Móvil -->
  <rect x="8" y="55" width="140" height="110" rx="2" fill="#F8FAFC" stroke="#00D2A0" stroke-width="1.5"/>
  <text x="78" y="82" text-anchor="middle" font-family="Share Tech Mono" font-size="9" fill="#00D2A0">> APP MÓVIL</text>
  <text x="78" y="97" text-anchor="middle" font-family="Inter" font-size="8" fill="#334155">.NET MAUI</text>
  <text x="78" y="110" text-anchor="middle" font-family="Inter" font-size="8" fill="#334155">iOS + Android</text>
  <text x="78" y="123" text-anchor="middle" font-family="Inter" font-size="7.5" fill="#94A3B8">C2B / B2C</text>
  <text x="78" y="136" text-anchor="middle" font-family="Inter" font-size="7.5" fill="#94A3B8">Multilíngüe</text>
  <!-- Arrow -->
  <line x1="148" y1="110" x2="188" y2="110" stroke="#00D2A0" stroke-width="1.5" marker-end="url(#ar)"/>
  <text x="168" y="104" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#94A3B8">REST+JWT</text>
  <!-- Azure Cloud -->
  <rect x="188" y="18" width="380" height="196" rx="2" fill="#F1F5F9" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="378" y="35" text-anchor="middle" font-family="Share Tech Mono" font-size="8" fill="#334155">AZURE SPAIN CENTRAL — .NET 8 (C#)</text>
  <!-- Microservices -->
  <rect x="202" y="44" width="78" height="42" rx="1" fill="#fff" stroke="#00D2A0" stroke-width="1"/>
  <text x="241" y="61" text-anchor="middle" font-family="Share Tech Mono" font-size="7.5" fill="#00D2A0">Identity</text>
  <text x="241" y="74" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#334155">Auth / MFA</text>
  <rect x="290" y="44" width="78" height="42" rx="1" fill="#fff" stroke="#00D2A0" stroke-width="1"/>
  <text x="329" y="61" text-anchor="middle" font-family="Share Tech Mono" font-size="7.5" fill="#00D2A0">Vision IA</text>
  <text x="329" y="74" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#334155">Tasación &lt;3s</text>
  <rect x="378" y="44" width="78" height="42" rx="1" fill="#fff" stroke="#00D2A0" stroke-width="1"/>
  <text x="417" y="61" text-anchor="middle" font-family="Share Tech Mono" font-size="7.5" fill="#00D2A0">Catalog</text>
  <text x="417" y="74" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#334155">DPP / Cosmos DB</text>
  <rect x="466" y="44" width="78" height="42" rx="1" fill="#fff" stroke="#00D2A0" stroke-width="1"/>
  <text x="505" y="61" text-anchor="middle" font-family="Share Tech Mono" font-size="7.5" fill="#00D2A0">Loyalty</text>
  <text x="505" y="74" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#334155">Puntos/Cupones</text>
  <!-- Service Bus -->
  <rect x="202" y="104" width="342" height="28" rx="1" fill="#334155"/>
  <text x="373" y="122" text-anchor="middle" font-family="Share Tech Mono" font-size="7.5" fill="#00D2A0">Azure Service Bus — Mensajería Asíncrona</text>
  <!-- DBs -->
  <rect x="202" y="148" width="100" height="38" rx="1" fill="#fff" stroke="#334155" stroke-width="1"/>
  <text x="252" y="163" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#334155">Azure SQL</text>
  <text x="252" y="176" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">ACID Transaccional</text>
  <rect x="312" y="148" width="100" height="38" rx="1" fill="#fff" stroke="#334155" stroke-width="1"/>
  <text x="362" y="163" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#334155">Cosmos DB</text>
  <text x="362" y="176" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">Catálogo flexible</text>
  <rect x="422" y="148" width="122" height="38" rx="1" fill="#fff" stroke="#334155" stroke-width="1"/>
  <text x="483" y="163" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#334155">Blob Storage + CDN</text>
  <text x="483" y="176" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">Imágenes multimedia</text>
  <!-- Arrow 2 -->
  <line x1="568" y1="110" x2="608" y2="110" stroke="#00D2A0" stroke-width="1.5" marker-end="url(#ar)"/>
  <text x="588" y="104" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#94A3B8">WiFi/5G</text>
  <!-- BackOffice -->
  <rect x="608" y="55" width="152" height="110" rx="2" fill="#F8FAFC" stroke="#334155" stroke-width="1.5"/>
  <text x="684" y="80" text-anchor="middle" font-family="Share Tech Mono" font-size="8.5" fill="#334155">> BACK-OFFICE</text>
  <text x="684" y="94" text-anchor="middle" font-family="Inter" font-size="7.5" fill="#334155">.NET MAUI + PDAs</text>
  <text x="684" y="107" text-anchor="middle" font-family="Inter" font-size="7" fill="#94A3B8">Básculas / Escáneres</text>
  <text x="684" y="120" text-anchor="middle" font-family="Share Tech Mono" font-size="7" fill="#00D2A0">SQLite AES-256</text>
  <text x="684" y="133" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">Thin Edge offline</text>
  <text x="684" y="146" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">AS/RS + Sorter</text>
  <!-- Arrow 3 -->
  <line x1="760" y1="110" x2="800" y2="110" stroke="#00D2A0" stroke-width="1.5" marker-end="url(#ar)"/>
  <!-- Analytics -->
  <rect x="800" y="65" width="148" height="90" rx="2" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
  <text x="874" y="90" text-anchor="middle" font-family="Share Tech Mono" font-size="8" fill="#334155">> ANALYTICS</text>
  <text x="874" y="104" text-anchor="middle" font-family="Inter" font-size="7.5" fill="#94A3B8">Power BI</text>
  <text x="874" y="117" text-anchor="middle" font-family="Inter" font-size="7" fill="#94A3B8">Azure Analytics</text>
  <text x="874" y="130" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#94A3B8">Impacto ecológico</text>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#00D2A0"/></marker></defs>
</svg>
</div>
<div class="g4">
  <div style="text-align:center"><div style="font-family:'Share Tech Mono';font-size:1.2rem;color:#00D2A0">350K</div><div style="font-family:'Inter';font-size:10px;color:#94A3B8;margin-top:3px">tx/día capacidad</div></div>
  <div style="text-align:center"><div style="font-family:'Share Tech Mono';font-size:1.2rem;color:#00D2A0">99,9%</div><div style="font-family:'Inter';font-size:10px;color:#94A3B8;margin-top:3px">SLA garantizado</div></div>
  <div style="text-align:center"><div style="font-family:'Share Tech Mono';font-size:1.2rem;color:#00D2A0">&lt;3 seg</div><div style="font-family:'Inter';font-size:10px;color:#94A3B8;margin-top:3px">tasación IA</div></div>
  <div style="text-align:center"><div style="font-family:'Share Tech Mono';font-size:1.2rem;color:#00D2A0">AES-256</div><div style="font-family:'Inter';font-size:10px;color:#94A3B8;margin-top:3px">cifrado offline</div></div>
</div>
"""))

# ── SLIDE 07: DIFERENCIADORES ──
S.append(("dark","D","""
<div class="lbl">> DIFERENCIADORES_06 // POR QUÉ GANAMOS</div>
<h2 class="t" style="color:white">IndiGo supera a cualquier alternativa en <span class="ac">7 ejes decisivos</span></h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;width:100%;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.12)">
  <span style="font-family:'Share Tech Mono';font-size:10px;color:#94A3B8">CAPACIDAD</span>
  <span style="font-family:'Share Tech Mono';font-size:10px;color:#EF4444;text-align:center">✕ FOR&amp;FROM</span>
  <span style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0;text-align:center">✓ INDIGO</span>
</div>
<div class="cr"><span class="cc">Alcance geográfico</span><span class="co">17 puntos físicos</span><span class="cn">Nacional 100% online</span></div>
<div class="cr"><span class="cc">Canal C2B</span><span class="co">No disponible</span><span class="cn">App C2B nativa</span></div>
<div class="cr"><span class="cc">Escalabilidad</span><span class="co">Limitada físicamente</span><span class="cn">350.000 tx/día cloud</span></div>
<div class="cr"><span class="cc">Cumplimiento ESPR/DPP</span><span class="co">Sin soporte digital</span><span class="cn">Nativo desde día 1</span></div>
<div class="cr"><span class="cc">Tasación de prendas</span><span class="co">Manual y variable</span><span class="cn">IA algorítmica &lt;3 seg</span></div>
<div class="cr"><span class="cc">Fidelización usuario</span><span class="co">No existe</span><span class="cn">Puntos + Marketplace</span></div>
<div class="cr" style="border-bottom:none"><span class="cc">Modo offline</span><span class="co">No aplica</span><span class="cn">SQLite AES-256 sync</span></div>
"""))

# ── SLIDE 08: MERCADO ──
S.append(("dark","D","""
<div class="lbl">> MERCADO_07 // LA OPORTUNIDAD</div>
<h2 class="t" style="color:white">El mercado de ropa de segunda mano <span class="ac">crece 3× más rápido</span> que la moda tradicional</h2>
<div class="g3" style="margin-bottom:24px">
  <div style="text-align:center;padding:20px;border:1px solid rgba(0,210,160,.2)">
    <div class="bn">$350B</div>
    <div class="bnl">Mercado global segunda mano 2028<br><span style="font-size:10px">(proyección ThredUp 2024)</span></div>
  </div>
  <div style="text-align:center;padding:20px;border:1px solid rgba(0,210,160,.2)">
    <div class="bn">3×</div>
    <div class="bnl">Velocidad de crecimiento vs moda nueva<br><span style="font-size:10px">CAGR 15% hasta 2028</span></div>
  </div>
  <div style="text-align:center;padding:20px;border:1px solid rgba(0,210,160,.3);background:rgba(0,210,160,.05)">
    <div class="bn" style="font-size:50px">Jul<br>2026</div>
    <div class="bnl">Entrada en vigor ESPR<br><span style="font-size:10px">Deadline regulatorio inamovible</span></div>
  </div>
</div>
<div class="g2">
  <div class="ab">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0;margin-bottom:6px">> PALANCA REGULATORIA</div>
    <p style="font-family:'Inter';font-size:13px;color:#CBD5E1;line-height:1.5">El ESPR convierte el cumplimiento en una obligación de negocio. Inditex necesita la solución antes de julio 2026 o enfrenta sanciones.</p>
  </div>
  <div class="ab">
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#00D2A0;margin-bottom:6px">> PALANCA ECONÓMICA</div>
    <p style="font-family:'Inter';font-size:13px;color:#CBD5E1;line-height:1.5">Los excedentes pasan de ser un coste (destrucción) a ser un <strong>activo monetizable</strong> a través del marketplace circular de IndiGo.</p>
  </div>
</div>
"""))

# ── SLIDE 09: PRESUPUESTO ──
S.append(("light","L","""
<div class="lbl" style="color:#334155">> PRESUPUESTO_08 // OFERTA ECONÓMICA</div>
<h2 class="t" style="color:#111827"><span style="color:#00D2A0">€4.444.507</span> todo incluido — 3 centros, 24 meses</h2>
<div style="width:100%;margin-bottom:20px">
  <div class="bi"><div class="bl3">Materiales y hardware</div><div class="bw"><div class="bb" style="width:74%"></div></div><div class="bv" style="color:#111827">2.737.800 €</div></div>
  <div class="bi"><div class="bl3">Servicios profesionales</div><div class="bw"><div class="bb" style="width:14%;background:#334155"></div></div><div class="bv" style="color:#111827">500.094 €</div></div>
  <div class="bi"><div class="bl3">Mantenimiento y SLAs</div><div class="bw"><div class="bb" style="width:12%;background:#94A3B8"></div></div><div class="bv" style="color:#111827">429.303 €</div></div>
  <div style="height:1px;background:#E2E8F0;margin:12px 0"></div>
  <div class="bi"><div class="bl3" style="font-weight:700;color:#111827">PEM (sin IVA)</div><div class="bw"></div><div class="bv" style="font-size:14px;color:#111827">3.673.146 €</div></div>
  <div class="bi"><div class="bl3" style="color:#94A3B8">21% IVA</div><div class="bw"></div><div class="bv" style="color:#94A3B8">771.361 €</div></div>
  <div style="height:1px;background:#E2E8F0;margin:12px 0"></div>
  <div class="bi"><div class="bl3" style="font-family:'Share Tech Mono';font-weight:700;color:#111827;font-size:13px">TOTAL PROYECTO</div><div class="bw"></div><div style="font-family:'Share Tech Mono';font-size:1.5rem;color:#00D2A0;font-weight:700">4.444.507 €</div></div>
</div>
<div class="g3">
  <div class="cl" style="border-top:3px solid #00D2A0">
    <div class="ct" style="color:#334155">> CLOUD AZURE/AÑO</div>
    <div style="font-family:'Share Tech Mono';font-size:1.1rem;color:#00D2A0">31.703 €</div>
    <p class="cb" style="margin-top:3px">Coste fijo anual Spain Central</p>
  </div>
  <div class="cl" style="border-top:3px solid #334155">
    <div class="ct" style="color:#334155">> EQUIPO</div>
    <div style="font-family:'Share Tech Mono';font-size:1.1rem;color:#334155">14 profesionales</div>
    <p class="cb" style="margin-top:3px">8.338 h durante 22 meses</p>
  </div>
  <div class="cl" style="border-top:3px solid #94A3B8">
    <div class="ct" style="color:#334155">> VALIDEZ OFERTA</div>
    <div style="font-family:'Share Tech Mono';font-size:1.1rem;color:#334155">60 días</div>
    <p class="cb" style="margin-top:3px">Desde 24 de abril de 2026</p>
  </div>
</div>
"""))

# ── SLIDE 10: EQUIPO ──
S.append(("dark","D","""
<div class="lbl">> EQUIPO_09 // QUIÉNES SOMOS</div>
<h2 class="t" style="color:white"><span class="ac">14 especialistas</span> en cloud, IA y logística — metodología ágil Scrum</h2>
<div class="g2" style="gap:32px;align-items:start">
  <div>
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#94A3B8;margin-bottom:10px">DIRECCIÓN DEL PROYECTO</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:18px">
      <div class="tme"><div class="tid">YR</div><div><div class="tnm">Yago Rueda</div><div class="trl">Director de Proyecto — Senior</div></div></div>
      <div class="tme"><div class="tid">AA</div><div><div class="tnm">Ángel Arróspide</div><div class="trl">Director de Proyecto — Senior</div></div></div>
    </div>
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#94A3B8;margin-bottom:10px">METODOLOGÍA</div>
    <ul class="bul" style="gap:8px">
      <li><span>Scrum/Scrumban — sprints de 2-4 semanas</span></li>
      <li><span>CI/CD en Azure DevOps — deploy automático</span></li>
      <li><span>Informes mensuales de avance al cliente</span></li>
    </ul>
  </div>
  <div>
    <div style="font-family:'Share Tech Mono';font-size:10px;color:#94A3B8;margin-bottom:10px">PERFILES TÉCNICOS</div>
    <div style="display:flex;flex-direction:column;gap:5px">
      <div class="tme"><div class="tid">MR</div><div><div class="tnm">Marcos Rato</div><div class="trl">Arquitecto Cloud &amp; DevOps — Senior</div></div></div>
      <div class="tme"><div class="tid">IP</div><div><div class="tnm">Ignacio Pujades</div><div class="trl">Ing. Backend .NET — Senior</div></div></div>
      <div class="tme"><div class="tid">SS</div><div><div class="tnm">Sergio Sierra</div><div class="trl">Ing. Backend .NET — Mid</div></div></div>
      <div class="tme"><div class="tid">BC</div><div><div class="tnm">Brais Cerdán</div><div class="trl">Dev App Móvil .NET MAUI — Senior</div></div></div>
      <div class="tme"><div class="tid">IR</div><div><div class="tnm">Ignacio Romero</div><div class="trl">Dev BackOffice .NET MAUI — Mid</div></div></div>
      <div class="tme"><div class="tid">HF</div><div><div class="tnm">Hugo Fernández</div><div class="trl">Especialista IA / Computer Vision</div></div></div>
      <div class="tme"><div class="tid">CL</div><div><div class="tnm">César Llano</div><div class="trl">Analista de Datos &amp; BI</div></div></div>
      <div class="tme"><div class="tid">DF</div><div><div class="tnm">Daniel Francia</div><div class="trl">Especialista QA &amp; Testing</div></div></div>
      <div class="tme"><div class="tid">DA</div><div><div class="tnm">Diego Abella</div><div class="trl">Especialista en Seguridad</div></div></div>
    </div>
  </div>
</div>
"""))

# ── SLIDE 11: ROADMAP ──
S.append(("surf","L","""
<div class="lbl" style="color:#334155">> ROADMAP_10 // PLANIFICACIÓN</div>
<h2 class="t" style="color:#111827">Entrega parcial en <span style="color:#00D2A0">12 meses</span> — sistema completo en <span style="color:#00D2A0">24 meses</span></h2>
<div class="tl" style="margin-bottom:24px">
  <div class="tp ap">
    <div class="td">> JUN 2026 — JUN 2027</div>
    <div class="tlh" style="color:#111827">FASE 1 — Hito 12 meses</div>
    <div class="tx" style="color:#334155"><strong>E1:</strong> Backend v1.0 en preproducción<br><strong>E2:</strong> App móvil compilada y disponible<br><strong>E3:</strong> BackOffice industrial v1.0 operativo<br><br>3 centros de distribución configurados.</div>
  </div>
  <div class="tp">
    <div class="td" style="color:#334155">> JUL 2027 — MAR 2028</div>
    <div class="tlh" style="color:#111827">FASE 2 — Entrega final</div>
    <div class="tx" style="color:#334155">Sistema completo en producción.<br>Cumplimiento DPP verificado.<br>SLA 99,9% activo.<br><br>Documentación técnica + manuales.</div>
  </div>
  <div class="tp" style="border-top-color:#94A3B8">
    <div class="td" style="color:#94A3B8">> ABR 2028 EN ADELANTE</div>
    <div class="tlh" style="color:#94A3B8">POST-PROYECTO</div>
    <div class="tx">Mantenimiento preventivo y correctivo.<br>Soporte Azure 24/7.<br>Actualizaciones normativas.<br><br>Expansión a nuevos centros.</div>
  </div>
</div>
<div style="padding:16px 20px;background:#ECFDF5;border-left:3px solid #00D2A0">
  <p style="font-family:'Inter';font-size:13.5px;color:#111827;line-height:1.5"><span style="font-family:'Share Tech Mono';color:#00D2A0">> CRITICAL PATH:</span> El hito de 12 meses garantiza los 3 entregables listos antes del cierre del año fiscal de Inditex — con margen para pilotos internos antes del deadline ESPR.</p>
</div>
"""))

# ── SLIDE 12: CTA ──
S.append(("dark tech-bg","D","""
<div style="width:100%;max-width:760px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:22px">
  <div class="lbl" style="text-align:center">> LLAMADA_A_LA_ACCIÓN_11 // PRÓXIMO PASO</div>
  <h1 style="font-family:'Share Tech Mono';font-size:3.5rem;color:white;text-align:center;line-height:1.1">Adjudicar IndiGo hoy.<br><span style="color:#00D2A0">Julio 2026 no espera.</span></h1>
  <p style="font-family:'Inter';font-size:14px;color:#94A3B8;line-height:1.7;text-align:center;max-width:560px">El Reglamento ESPR entra en vigor en <strong style="color:white">15 meses</strong>. IndiGo es la única solución que garantiza cumplimiento normativo, escalabilidad digital y fidelización del consumidor en un solo sistema.</p>
  <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap">
    <div style="text-align:center;padding:18px 24px;border:1px solid rgba(0,210,160,.3)">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">01</div>
      <div style="font-family:'Inter';font-size:11px;color:#94A3B8;margin-top:3px">Adjudicar el contrato</div>
    </div>
    <div style="text-align:center;padding:18px 24px;border:1px solid rgba(0,210,160,.3)">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">02</div>
      <div style="font-family:'Inter';font-size:11px;color:#94A3B8;margin-top:3px">Kick-off en junio 2026</div>
    </div>
    <div style="text-align:center;padding:18px 24px;border:1px solid rgba(0,210,160,.3)">
      <div style="font-family:'Share Tech Mono';font-size:1.4rem;color:#00D2A0">03</div>
      <div style="font-family:'Inter';font-size:11px;color:#94A3B8;margin-top:3px">Primer entregable: 12 meses</div>
    </div>
  </div>
  <div style="display:flex;justify-content:center;gap:16px;margin-top:4px">
    <div style="font-family:'Inter';font-size:12px;color:#94A3B8;text-align:center"><span style="font-family:'Share Tech Mono';color:#00D2A0">Ángel Arróspide</span><br>Director de Proyecto<br>uo294319@uniovi.es</div>
    <div style="width:1px;background:rgba(255,255,255,.1)"></div>
    <div style="font-family:'Inter';font-size:12px;color:#94A3B8;text-align:center"><span style="font-family:'Share Tech Mono';color:#00D2A0">Yago Rueda</span><br>Director de Proyecto<br>uo295464@uniovi.es</div>
  </div>
</div>
"""))

TOTAL = len(S)  # 12

# ─────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────
def logo(variant):
    return LOGO_D if variant == "D" else LOGO_L

def slide_num_html(n, total=12, color_override=None):
    c = color_override or "#00D2A0"
    return f'<div class="sno"><span class="c" style="color:{c}">{str(n).zfill(2)}</span> / {total}</div>'

def slide_logo(variant):
    return f'<div class="logoc">{logo(variant)}</div>'

SCALE_JS = """
const _sc=document.querySelector('.sc');
function _sz(){
  const s=Math.min(window.innerWidth/1280,window.innerHeight/720);
  _sc.style.transform=`scale(${s})`;
}
_sz();window.addEventListener('resize',_sz);
"""

KEY_NAV_JS = """
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown')location.href='__NEXT__';
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')location.href='__PREV__';
  if(e.key==='f'||e.key==='F')document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();
});
"""

STANDALONE_EXTRA_CSS = """
html,body{width:100%;height:100%;overflow:hidden;background:#111;display:flex;align-items:center;justify-content:center}
.sc{transform-origin:center center}
.ctrl{position:fixed;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:10px;padding:8px;z-index:100;background:rgba(0,0,0,.6);backdrop-filter:blur(4px)}
.nbtn{background:rgba(17,24,39,.9);border:1px solid #334155;color:#94A3B8;font-family:'Share Tech Mono',monospace;font-size:11px;padding:5px 12px;cursor:pointer;text-decoration:none;transition:all .15s}
.nbtn:hover{border-color:#00D2A0;color:#00D2A0}
.ninfo{font-family:'Share Tech Mono',monospace;font-size:11px;color:#94A3B8}
.ninfo .c{color:#00D2A0}
@media print{
  @page{size:1280px 720px;margin:0}
  html,body{background:#000;display:block;overflow:visible;width:1280px;height:720px}
  .ctrl{display:none!important}
  .sc{transform:none!important;width:1280px;height:720px}
  *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}
"""

# ─────────────────────────────────────────
# WRITE INDIVIDUAL SLIDE FILES
# ─────────────────────────────────────────
for i, (bg, logo_v, inner) in enumerate(S):
    n       = i + 1
    prev_href = f"slide-{str(i).zfill(2)}.html" if i > 0 else "../presentation.html"
    next_href = f"slide-{str(n+1).zfill(2)}.html" if n < TOTAL else "../presentation.html"

    nav_js = KEY_NAV_JS.replace("__NEXT__", next_href).replace("__PREV__", prev_href)

    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>IndiGo — Slide {str(n).zfill(2)}/{TOTAL}</title>
{FONTS}
<style>
{SHARED_CSS}
{STANDALONE_EXTRA_CSS}
</style>
</head>
<body>
<div class="sc {bg}">
{inner}
{slide_logo(logo_v)}
{slide_num_html(n)}
</div>
<div class="ctrl">
  <a href="{prev_href}" class="nbtn">← PREV</a>
  <span class="ninfo">Slide <span class="c">{str(n).zfill(2)}</span> / {TOTAL}</span>
  <a href="{next_href}" class="nbtn">NEXT →</a>
  <a href="../presentation.html" class="nbtn">≡ TODAS</a>
  <button onclick="window.print()" class="nbtn">&gt; PDF</button>
</div>
<script>
{SCALE_JS}
{nav_js}
</script>
</body>
</html>
"""
    path = os.path.join(SLD, f"slide-{str(n).zfill(2)}.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  ✓ {path}")

# ─────────────────────────────────────────
# WRITE WRAPPER (presentation.html)
# ─────────────────────────────────────────
WRAPPER_EXTRA_CSS = """
html,body{width:100%;height:100%;overflow:hidden;background:#111;margin:0;padding:0}
/* Each slide lives in a host div (full viewport) */
.sh{
  position:fixed;inset:0;
  display:none;align-items:center;justify-content:center;
  background:#111;
}
.sh.active{display:flex}
.sc{transform-origin:center center}
/* Controls */
.ctrl{
  position:fixed;bottom:0;left:0;right:0;z-index:200;
  display:flex;align-items:center;justify-content:space-between;
  padding:8px 24px;background:rgba(0,0,0,.65);backdrop-filter:blur(4px);
}
.ctrl-l,.ctrl-r{display:flex;align-items:center;gap:8px}
.nbtn{background:rgba(17,24,39,.9);border:1px solid #334155;color:#94A3B8;font-family:'Share Tech Mono',monospace;font-size:11px;padding:5px 12px;cursor:pointer;text-decoration:none;transition:all .15s}
.nbtn:hover{border-color:#00D2A0;color:#00D2A0}
.ninfo{font-family:'Share Tech Mono',monospace;font-size:12px;color:#94A3B8}
.ninfo .c{color:#00D2A0}
/* Export button */
.expbtn{
  position:fixed;top:16px;right:16px;z-index:300;
  background:#111827;color:#fff;font-family:'Share Tech Mono',monospace;
  font-size:11px;padding:8px 16px;cursor:pointer;border:none;
  border-bottom:2px solid #00D2A0;letter-spacing:.05em;
}
.expbtn:hover{background:#1f2937}
/* Print — all slides, one per page */
@media print{
  @page{size:1280px 720px;margin:0}
  html,body{
    width:1280px;height:auto;overflow:visible;
    background:#000;display:block;
  }
  .sh{
    display:block!important;position:relative;
    width:1280px;height:720px;
    page-break-after:always;break-after:page;
  }
  .sh:last-child{page-break-after:avoid;break-after:avoid}
  .sc{transform:none!important;width:1280px;height:720px}
  .ctrl,.expbtn{display:none!important}
  *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}
"""

WRAPPER_JS = """
let cur=0;
const hosts=Array.from(document.querySelectorAll('.sh'));
const total=hosts.length;

function go(n){
  hosts[cur].classList.remove('active');
  cur=Math.max(0,Math.min(n,total-1));
  hosts[cur].classList.add('active');
  document.getElementById('snum').textContent=String(cur+1).padStart(2,'0');
  sz();
}

function sz(){
  const s=Math.min(window.innerWidth/1280,window.innerHeight/720);
  hosts.forEach(h=>{
    const sc=h.querySelector('.sc');
    if(sc) sc.style.transform=`scale(${s})`;
  });
}

document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown')go(cur+1);
  if(e.key==='ArrowLeft' ||e.key==='ArrowUp'  )go(cur-1);
  if(e.key==='Home') go(0);
  if(e.key==='End')  go(total-1);
  if(e.key==='f'||e.key==='F')
    document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();
});

sz();
window.addEventListener('resize',sz);
"""

# Build slide hosts
hosts_html = ""
for i, (bg, logo_v, inner) in enumerate(S):
    n = i + 1
    active_cls = " active" if i == 0 else ""
    hosts_html += f"""
<div class="sh{active_cls}" id="h{n}">
  <div class="sc {bg}">
    {inner}
    <div class="logoc">{logo(logo_v)}</div>
    <div class="sno"><span class="c">{str(n).zfill(2)}</span> / {TOTAL}</div>
  </div>
</div>
"""

wrapper = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>IndiGo — Presentación completa | Proyecto.02</title>
{FONTS}
<style>
{SHARED_CSS}
{WRAPPER_EXTRA_CSS}
</style>
</head>
<body>

{hosts_html}

<!-- Controls (hidden on print) -->
<div class="ctrl">
  <div class="ctrl-l">
    <button class="nbtn" onclick="go(cur-1)">← PREV</button>
    <button class="nbtn" onclick="go(cur+1)">NEXT →</button>
  </div>
  <div>
    <span class="ninfo">Slide <span class="c" id="snum">01</span> / {TOTAL}</span>
  </div>
  <div class="ctrl-r">
    <a href="slides/slide-01.html" class="nbtn" target="_blank">&gt; ABRIR DIAPOSITIVA</a>
    <button class="expbtn" onclick="window.print()">&gt; EXPORT_PDF</button>
  </div>
</div>

<script>
{WRAPPER_JS}
</script>
</body>
</html>
"""

wrapper_path = os.path.join(OUT, "presentation.html")
with open(wrapper_path, "w", encoding="utf-8") as f:
    f.write(wrapper)
print(f"  ✓ {wrapper_path}")
print(f"\n✅ Generados {TOTAL} slides + presentation.html")
