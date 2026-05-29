# Mesón Alegría · Granada

> Asador granadino desde 1979.
> Carnes a la brasa con carbón de encina · C/ Moras 4 · Centro de Granada

Web emblema de la gastronomía andaluza — Next.js 15 + React 19 + TypeScript,
con **7 idiomas** y la tipografía + colores oficiales de la marca.

🌐 Repo: <https://github.com/alturedigital/meson-alegria>

---

## Stack

| | |
|---|---|
| Framework | Next.js 15.1.6 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 3 |
| Motion | Framer Motion 11 + GSAP 3 |
| Fonts | **Bagnard Sans** (display, local OTF) + **Jost** (body, local OTF) + Caveat + JetBrains Mono |
| Brand color | `#00a376` (verde granada oficial, del motivo-meson.svg) |

## Idiomas

`es` · `en` · `fr` · `de` · `zh` · `ko` · `ja`

Toda la copy traducida a mano en todos los idiomas. La carta lleva el
**lang-chip** con el nombre castellano debajo en cada idioma no-ES — el
camarero entiende al ojo qué te ha pedido el cliente extranjero.

## Páginas

```
/[lang]                            Home magazine editorial (8 secciones)
/[lang]/historia                   Hero + Timeline + Carmen In Memoriam + Press dossier
/[lang]/carta                      9 secciones + 2 intermisiones fotográficas
/[lang]/vinos                      7 secciones + intermisión bodega
/[lang]/grupos                     8 menús de grupo en grid 2-col
/[lang]/visita                     Mapa + horarios + cómo llegar
/[lang]/corpus                     Caseta Alegría Corpus 2026 + calendario 6 días
/[lang]/novedades                  Index de noticias + dossier prensa Ideal
/[lang]/novedades/[slug]           Detalle de noticia (SSG)
```

Build: **56 páginas estáticas pre-renderizadas** + **35 páginas detail SSG**.
First Load JS shared: **105 kB**.

## SEO

- `sitemap.xml` dinámico — todas las URLs × 7 idiomas + detail pages
- `robots.txt` allow-all con referencia al sitemap
- JSON-LD `Restaurant` schema (Schema.org) en cada locale
- `hreflang` alternates en cada página
- OpenGraph en `[lang]/layout.tsx`

## Redirects de URLs Webflow → /es/...

Configurados en `next.config.mjs` con `permanent: true` (HTTP 308):

```
/index.html                       → /es
/carta-sp.html                    → /es/carta
/menu.html                        → /es/carta
/notre-menu.html                  → /es/carta
/wo-men-de-cai-dan.html           → /es/carta
/uriyi-heonjang.html              → /es/carta
/vinos.html                       → /es/vinos
/menus-para-grupos.html           → /es/grupos
/caseta-alegria-corpus-2026.html  → /es/corpus
/detail_news.html                 → /es/novedades
```

---

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
npm run type-check   # tsc --noEmit
npm run build        # build de producción
```

---

## Deploy a Netlify

El repo ya está en GitHub. Para conectarlo a Netlify y desplegar:

### Opción A · Una sola tarjeta (recomendado)

1. Entra en <https://app.netlify.com/start>
2. **Import from GitHub** → busca `meson-alegria` → **Deploy**
3. Netlify detecta automáticamente el `netlify.toml` y el plugin oficial
   `@netlify/plugin-nextjs`. Pulsa **Deploy site** y listo.

### Opción B · Por CLI

```bash
npm install -g netlify-cli
netlify login
netlify init      # selecciona "Create & configure a new site"
netlify deploy --build               # preview
netlify deploy --build --prod        # producción
```

### Configuración automática

`netlify.toml` ya define:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

### Dominio personalizado

Una vez desplegado:

```
Site settings → Domain management → Add custom domain → mesonalegria.com
```

DNS recommended:
- `A` record `mesonalegria.com` → IP que dé Netlify
- `CNAME` `www` → `<tu-sitio>.netlify.app`

SSL automático vía Let's Encrypt (sin intervención).

### Variable de entorno (opcional)

Si más adelante quieres que el sitemap apunte a un dominio distinto al de
producción:

```
NEXT_PUBLIC_SITE_URL = https://mesonalegria.com
```

---

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx               Fuentes Bagnard + Jost + Caveat + JetBrains Mono
│  ├─ page.tsx                 redirect → /es
│  ├─ globals.css              Design system (250 líneas)
│  ├─ sitemap.ts               URLs × locales + slugs dinámicos
│  ├─ robots.ts                Allow-all + sitemap
│  └─ [lang]/
│     ├─ layout.tsx            Nav + Footer + RestaurantSchema (JSON-LD)
│     ├─ page.tsx              Home
│     ├─ historia/
│     ├─ carta/
│     ├─ vinos/
│     ├─ grupos/
│     ├─ visita/
│     ├─ corpus/
│     └─ novedades/[slug]/
├─ components/
│  ├─ shell/      Navigation · Footer · LanguageSwitcher
│  ├─ home/       Hero · ManifestoGrid · FoundersBlock · ReservaInline · PressQuotes · EventsGrid · Faq · Closer
│  ├─ historia/   HeroHistoria · Timeline · CarmenInMemoriam · PressDossier
│  ├─ menu/       CartaHero · MenuView · MenuSection · MenuItem
│  ├─ vinos/      WineList
│  ├─ grupos/     GroupMenuCard
│  ├─ ui/         Motivo (el motivo granadino reusable)
│  └─ seo/        RestaurantSchema (JSON-LD Schema.org)
├─ lib/
│  ├─ i18n/       config + 7 dictionaries
│  ├─ data/       menu · wines · groups · news · corpus · press · home-extras · page-extras
│  └─ utils/cn.ts
└─ types/i18n.ts

public/
├─ images/      19 fotos carta + carmen.webp + 60-aniversario.jpg + corpus-2026.jpg
├─ video/       hero.mp4 (patio mesón)
├─ svg/         motivo-meson.svg + granada + hojas
├─ fonts/       Bagnard Sans + Jost (.otf locales)
├─ logo/        logo.svg / logo-white.svg / logo-black.svg
└─ prensa/      5 PDFs del Diario Ideal
```

---

**Forjado a mano. Granada.**

© Mesón Alegría · C/ Moras, 4 · 18009 Granada · +34 958 222 794
