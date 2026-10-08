# CHANGELOG — Lumina Café de Especialidad

## [2026-09-21] — Jornada 2: Pipeline Completo & Maduración del Sistema de Conocimiento

### 🔍 SEO & GEO
- **Fase 3 completada:** Validación de JSON-LD (`CafeOrCoffeeShop` + `FAQPage`) en `<head>` del `index.html`.
- **`llms.txt` generado** en la raíz del proyecto con entidad, servicios y datos de contacto estructurados para parseo directo por LLMs agenticos.
- **`robots.txt`** y **`sitemap.xml`** verificados y alineados con la taxonomía actualizada de bots de IA (Sep 2026).

### 🧠 Knowledge Base del Agente (.agents/)
- **Nueva guía creada:** `.agents/guides/advanced-aeo-seo/GUIDE.md` (v1.0.0). Cubre jerarquía HTML5 semántica, templates JSON-LD anti-keyword-stuffing, accesibilidad WCAG 2.2, taxonomía de bots de IA, robots.txt, llms.txt y checklist de auditoría. Generada con investigación Firecrawl sobre fuentes primarias (Google Search Central, OpenAI Docs, Schema.org).
- **`WORKFLOW.md` refinado** a la **v2.1.0** con los siguientes cambios:
  - Fase 1: solicitud de datos GEO extendida (subtipo Schema.org, coordenadas ≥5 decimales, `sameAs`).
  - Fase 2: referencia dual correcta a `modern-web-guide/GUIDE.md` + `advanced-aeo-seo/GUIDE.md`.
  - Fase 3: advertencia crítica de deprecación de `FAQPage` como rich result en Google (Mayo 2026) y taxonomía de bots corregida.
  - Fase 4: auditoría con checklist explícito de ítems PASS/FAIL.
  - Fase 5: instrucción de empaquetado generalizada (no acoplada a Tailwind).

### 🛡️ Auditoría (Fase 4)
- Auditoría técnica completada con todos los ítems PASS sobre el `index.html` de Lumina Café.

### 📦 Empaquetado (Fase 5)
- Pipeline Syntropy Digital completado al 100% para el proyecto Lumina Café de Especialidad.
- Sin dependencias CDN externas detectadas en el HTML final.



### 🎨 UI & Layout
- Generación de la interfaz visual completa para **Lumina Café de Especialidad** mediante integración MCP con Stitch (Proyecto ID: `4157992872664701413`).
- Aplicación de la paleta de colores oficial: *Warm Oat Milk* (`#F4F0EA`), *Dark Espresso* (`#2C1E16`), *Warm Terracotta* (`#C05C3B`) y *Sage Green* (`#8DA399`).

### ⚡ Modularización & JS / Lógica
- Creación de la arquitectura estandarizada de carpetas en el proyecto:
  - `assets/css/styles.css`: Hoja de estilos principal y utilidades de la marca.
  - `assets/js/main.js`: Lógica cliente independiente para interacción exclusiva en acordeones FAQ.
  - `assets/images/`: Almacenamiento local de recursos gráficos y capturas de prototipos.

### ♿ Accesibilidad & Semántica
- Transformación a HTML5 semántico nativo mediante etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<blockquote>`, `<details>`, `<summary>`, `<address>` y `<footer>`.
- Verificación del cumplimiento de accesibilidad WCAG y navegación por teclado sin librerías pesadas.

### 🔍 SEO & GEO (Generative Engine Optimization)
- Redacción del copy transaccional AEO con `<h1>` único y frase declarativa de entidad en `<blockquote>`.
- Inyección de metadatos estructurados JSON-LD Schema.org (`CafeOrCoffeeShop` + `FAQPage`) en la etiqueta `<head>`.
- Generación del archivo `robots.txt` habilitando explícitamente a los agentes de IA (`GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Applebot`).
- Generación del archivo `sitemap.xml` con protocolo de imágenes para indexación rápida en Google.
- Optimización de las 5 Preguntas Frecuentes (FAQs) con coincidencia 1:1 entre el contenido del DOM y la estructura JSON-LD.
- Generación de `llms.txt` en la raíz del proyecto para proveer un contexto semántico directo a LLMs agenticos.
- Redacción de nueva guía técnica avanzada `.agents/guides/advanced-aeo-seo/GUIDE.md` (Aprobada y consolidada en el pipeline).

### 🐛 Correcciones & Optimizaciones
- Garantía de renderizado SSR estático (cero dependencia de JavaScript en el cliente para mostrar el contenido principal).
- Preparación del entorno para eliminación del script CDN de Tailwind CSS en la Fase 5.
