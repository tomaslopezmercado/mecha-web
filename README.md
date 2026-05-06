# mecha · sitio web institucional

Sitio one-pager para Mecha, agencia digital de Buenos Aires.
Stack: **Astro 4 + Tailwind CSS 4**. Output estático, cero dependencias de runtime.

---

## Correr en local

```bash
npm install
npm run dev
```

Abre en `http://localhost:4321`.

---

## Buildear

```bash
npm run build
```

El output queda en `dist/`. Para previsualizar antes de deployar:

```bash
npm run preview
```

---

## Deployar

### Vercel (recomendado)

1. Subí el proyecto a GitHub
2. Conectá el repo en [vercel.com](https://vercel.com)
3. Framework: **Astro** (se detecta automático)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Netlify

1. Subí el proyecto a GitHub
2. Conectá el repo en [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Spark.astro          # Asterisco SVG reutilizable
│   ├── IntroOverlay.astro   # Splash de carga (1.4s)
│   ├── Navbar.astro         # Navegación sticky + hamburger mobile
│   ├── Hero.astro           # Sección hero con wordmark 140px
│   ├── Divider.astro        # Línea divisora con asterisco
│   ├── Servicio.astro       # Planes Encendido / Llama
│   ├── Proceso.astro        # 3 pasos en sección carbón
│   ├── Preguntas.astro      # 6 FAQs en dos columnas
│   ├── CtaFinal.astro       # CTA sobre fondo lima
│   └── Footer.astro         # Footer carbón
├── layouts/
│   └── Layout.astro         # Base HTML, SEO completo, fonts, schema.org
├── pages/
│   └── index.astro          # Página principal
├── scripts/
│   └── animations.ts        # Intro splash + parallax + prefers-reduced-motion
└── styles/
    └── global.css           # Reset, variables de marca, keyframes de animación
public/
├── favicon.svg              # Isotipo: m + asterisco lima sobre carbón
└── robots.txt
```

---

## Cosas pendientes antes de lanzar

- **WhatsApp:** reemplazá `https://wa.me/` por `https://wa.me/5491112345678`
  - Buscar en: `Navbar.astro`, `Hero.astro`, `CtaFinal.astro`, `Footer.astro`
- **Email:** reemplazá `hola@mecha.com.ar` en `Footer.astro` y `Layout.astro`
- **Instagram:** reemplazá `https://instagram.com/` en `Footer.astro`
- **og:image:** agregá `public/og-image.png` de 1200×630px
- **Site URL:** en `astro.config.mjs`, actualizá `site` al dominio final
