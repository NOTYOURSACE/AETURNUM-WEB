# Aeturnum website (React + Vite + Tailwind + Three.js)

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Make the contact form work

The form posts JSON to whatever URL you set in `VITE_FORM_ENDPOINT`.

1. Create a free form at [formspree.io](https://formspree.io) (or any service that accepts a JSON POST).
2. Copy `.env.example` to `.env` and paste your endpoint and email.
3. Restart `npm run dev`.

If no endpoint is set, the form shows an error instead of pretending to succeed. When deploying
(Netlify, Vercel, Cloudflare Pages), add the same variables in the host's environment settings.

## Before you launch

- Replace the placeholder numbers, benchmarks, testimonials and social links in `src/data/content.js`.
  Only publish results you can back up.
- Add `public/og-image.png` (1200x630) and uncomment the `og:image` tag in `index.html`.
- Add your real domain to the structured data in `index.html` if you want (`"url"`).

## Project structure

```
index.html                     Meta tags, SEO, fonts
src/
  main.jsx                     Entry point
  App.jsx                      Page layout
  index.css                    Tailwind + shared styles (glass cards, gradient text)
  data/content.js              All copy, stats, testimonials, links
  hooks/usePrefersReducedMotion.js
  lib/three-utils.js           Renderer, resize, visibility and animation-loop helpers
  components/
    Navbar.jsx  Hero.jsx  InfinityNodeSection.jsx  Services.jsx
    About.jsx   Results.jsx  Contact.jsx  Footer.jsx
    three/ParticleField.jsx    Hero particle background
    three/InfinityNode.jsx     Interactive torus knot
    ui/Logo.jsx  ui/SectionHeading.jsx
```

## What changed from the single HTML file

- **Form:** real submission with loading, success and error states, spam honeypot, proper labels.
- **Hero particles:** rotation rewritten (steady drift plus smooth cursor lean, frame-rate independent).
- **Performance:** both 3D scenes pause when off-screen or in a background tab, use fewer particles
  and a lower pixel ratio on mobile, load lazily, and clean up their WebGL resources on unmount.
- **Accessibility:** skip link, labelled menu button with Escape to close, visible keyboard focus,
  `prefers-reduced-motion` support, hidden decorative icons, semantic testimonials.
- **Anchor links:** sections no longer hide under the fixed header when you jump to them.
- **3D node:** drag to spin now actually works (mouse and touch); lighting updated for modern Three.js.
- **SEO:** meta description, Open Graph/Twitter tags, favicon, structured data.
- **Production build:** Tailwind compiled via PostCSS instead of the CDN script; Font Awesome and
  Three.js installed from npm instead of CDNs.
- **Copy:** removed unverifiable claims ("WebGL Shaders Active", "60 FPS Engine", "Verified"),
  and renamed the "3D Experience" nav item to "Our Approach".
