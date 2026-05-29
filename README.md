# Mesón Alegría — Granada

> Asador granadino desde 1979. Carne a la brasa con carbón de encina, en el centro de Granada.
> Web emblema de la gastronomía andaluza.

Next.js 15 · React 19 · TypeScript · Tailwind · Framer Motion · GSAP · Lenis
7 idiomas (ES / EN / FR / DE / ZH / KO / JA) con rutas `/{locale}`

---

## Empezar en local

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de producción
npm run type-check   # validar tipos
```

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx              fuentes Cormorant / Inter / Caveat / JetBrains Mono
│  ├─ page.tsx                redirect → /es
│  ├─ globals.css             design system (paleta, cenefas, tile, ember, paper grain)
│  └─ [lang]/
│     ├─ layout.tsx           Nav + Footer + SmoothScroll, hreflang alternates
│     ├─ page.tsx             Home cinematográfica
│     ├─ historia/page.tsx
│     ├─ carta/page.tsx       (placeholder, contenido completo próximo)
│     ├─ vinos/page.tsx       (placeholder)
│     ├─ grupos/page.tsx      (placeholder)
│     └─ visita/page.tsx
├─ components/
│  ├─ shell/      Navigation · Footer · LanguageSwitcher
│  ├─ home/       Hero · StoryBlock · Signature · Specialty · MenuCta · VisitCta
│  └─ effects/    SmoothScroll (Lenis) · Cenefa · Marquee · RevealText
├─ lib/i18n/      config + 7 dictionaries
└─ types/i18n.ts  contrato Dictionary
public/
├─ images/        19 fotos de carta + carmen.webp + 60-aniversario.jpg
├─ video/         hero.mp4 (patio mesón)
├─ svg/           granada · hoja · hoja-olivo · cenefa · azulejo-star · tile · motivo-meson · ember
└─ logo/          logo · logo-white · logo-black
```

## Design system

- **Paleta**: bone (#fbf5e9), granada (#00a376 oficial del motivo), wood (#4f2d12), oro (#c89a52), cobalt (#2c6aa3), ink (#1a1410)
- **Tipografía**: Cormorant Garamond (display, italic), Inter (body), Caveat (firma), JetBrains Mono (eyebrows, lang-chip)
- **Motion**: easing `cubic-bezier(0.22, 1, 0.36, 1)` en todo, Lenis para scroll suave, parallax en hero
- **Motivos andaluces**: cenefa azulejo + rodapié de madera entre secciones, estrella nazarí, granada y olivo flotante

## i18n — la moat multilingüe

7 idiomas con SSR + alternates:

| locale | bandera | tagline |
|--------|---------|---------|
| es | ES | Español (default) |
| en | GB | English |
| fr | FR | Français |
| de | DE | Deutsch |
| zh | CN | 中文 |
| ko | KR | 한국어 |
| ja | JP | 日本語 |

En todos los idiomas no-español, cada plato lleva su nombre castellano debajo en un `lang-chip`. El camarero entiende a la primera.

---

## Deploy

Pipeline final: **GitHub → Netlify** (auto-deploy en cada push a `main`).

### 1 · Crear el repo en GitHub

```bash
# desde /meson-alegria/
git init
git add .
git commit -m "Initial — Mesón Alegría web emblema"
git branch -M main

# crear repo nuevo en GitHub (con gh CLI)
gh repo create meson-alegria --public --source=. --remote=origin --push

# o manualmente:
git remote add origin git@github.com:<usuario>/meson-alegria.git
git push -u origin main
```

### 2 · Conectar a Netlify

1. Entra en https://app.netlify.com → **Add new site → Import an existing project**
2. Conecta GitHub y selecciona el repo `meson-alegria`
3. Netlify detectará automáticamente Next.js gracias al `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
4. **Deploy site**

`netlify.toml` ya configura:
- Plugin oficial de Next.js (necesario para App Router + ISR + RSC)
- Cache headers para `/video/*`, `/svg/*`, `/images/*`
- Headers de seguridad básicos (X-Frame, X-Content-Type, Referrer-Policy)

### 3 · Dominio personalizado

```
Settings → Domain management → Add custom domain → mesonalegria.com
```

Configurar DNS (A record + CNAME `www`) según las instrucciones de Netlify. SSL automático vía Let's Encrypt.

### 4 · Variables de entorno

Ahora mismo no hay ninguna. Si en futuro se añade (analytics, reservas API, etc.):
```
Settings → Environment variables
```

---

## Próximos pasos

- [ ] Carta completa con todas las secciones (ensaladas, fríos, calientes, típicos granadinos, ibérico, San Pascual, buey/ternera, cordero, postres)
- [ ] Carta de vinos completa
- [ ] Menús de grupo con datos reales
- [ ] Sección novedades + dossier de prensa (5 PDFs de Ideal disponibles)
- [ ] Sitemap.xml + robots.txt
- [ ] JSON-LD Schema.org Restaurant en cada locale
- [ ] OG images por idioma (`app/[lang]/opengraph-image.tsx`)
- [ ] Lighthouse pass en CJK locales (subsetting de fuentes)

---

**Forjado a mano. Granada.**

© Mesón Alegría · C/ Moras, 4 · 18009 Granada · +34 958 222 794
