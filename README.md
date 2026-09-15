# Portfolio & Blog

Personal portfolio and blog for Vitalis Mutwiri. Astro in SSR mode with React
islands, MongoDB for post storage, deployed to Vercel.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Astro 7, `output: 'server'` |
| UI islands | React 18, Tailwind, shadcn/ui, framer-motion |
| Editor | Tiptap (vendored `minimal-tiptap`) |
| Data | MongoDB (`blogDatabase.posts`) |
| Host | Vercel (`@astrojs/vercel`) |

## Getting started

```sh
nvm use                 # Node >= 22.12
npm install
cp .env.example .env    # then fill in the values
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Production build into `./dist/` |
| `npm run preview` | Preview the build locally |
| `npx astro check` | Type-check `.astro`/`.ts`/`.tsx` |

## Environment

See `.env.example`. `MONGODB_URI`, `ADMIN_USERNAME` and `ADMIN_PASSWORD` are
required; the app throws at startup without the first one.

Set `PUBLIC_SITE_URL` in the Vercel production environment to your real origin.
Without it, `canonical` and `og:url` fall back to the request origin, which on a
preview deployment is the preview URL rather than the production domain.

## Routes

| Route | Notes |
| --- | --- |
| `/` | Hero, horizontally scrolled projects (GSAP), latest 3 posts, skills |
| `/blogs` | All published posts, filterable by category |
| `/blogs/[slug]` | A post. Falls back to lookup by ObjectId for legacy links and backfills the slug |
| `/admin` | Tiptap composer. HTTP Basic auth |
| `/api/admin/upload-blog` | `POST` a new post. Admin only |

## Authorization

`/admin` and everything under `/api/admin/` are protected.

- `src/middleware.ts` is the **edge gate**: it rejects unauthenticated traffic
  early and mints the session cookie. It is an optimisation, not the boundary.
- `src/lib/adminAuth.ts#requireAdmin` is the **boundary**. Every guarded route
  handler calls it directly, so a middleware bypass is not an auth bypass.
- Successful HTTP Basic auth issues an HMAC-signed, httpOnly session cookie
  (8 hours). Browsers do not send Basic credentials from `/admin` to `/api/*`,
  so the cookie is what authorises the composer's upload request.

Any new admin endpoint belongs under `src/pages/api/admin/` and must call
`requireAdmin` itself.

## Content safety

Post HTML is sanitised with `sanitize-html` on write (`src/utils/htmlSanitizer.js`)
and again on read in `BlogDataService.getPostBySlug` — posts written before the
upload endpoint required auth are not trusted.

## Performance

The homepage and `/blogs` ship **zero client-side JavaScript for their content** —
no React island, no framer-motion. Entrance animations live in
`src/styles/animations.css` and run off the stylesheet.

This matters more than it sounds. framer-motion renders its `initial` state into
the SSR markup, so a JS-driven intro ships as `opacity: 0` and the page stays blank
until React hydrates. Keep it that way:

- Reach for CSS (`.a-fade-up`, `.a-fade-in`, `.a-rise-in`, `.a-scale-in`) before a
  JS animation library. Stagger with `style="--a-delay: 0.3s"`.
- An `.astro` component with a small script beats a React island for anything that
  is mostly markup. `Header.astro` and `BlogListingPage.astro` are the pattern.
- Heavy libraries load on demand. GSAP (~108KB) is dynamically imported only when
  the projects track nears the viewport — see the script in `src/pages/index.astro`.
- Pass `preloadImage` to `Layout` on any page with an above-the-fold image.
- The preloader dismisses on `DOMContentLoaded`. Never reintroduce a fixed delay:
  the previous version waited for `window.load` plus 1.8s on every first visit.

## Certificates

Certification cards show a capture of the real certificate from
`public/certificates/*.webp`, linking out to the issuer's verification page.

Captures were made with headless Chrome against each issuer's public share URL
(the Linux Foundation PDF via `sips`), then resized to 1000px and encoded as WebP.
Dates and issuer names on the cards were read off the certificates themselves
rather than taken from the CV, so several entries carry dates the CV omitted.

Two entries have no capture: Udemy sits behind a Cloudflare bot check, and Google
Cloud Quest has no link. Those render a "No preview available" panel at the same
card size. Add `image` to the entry in `src/data/cv/credentials.ts` to fill one in.

## Conventions

- Files stay under 100 lines. Split before you reach it.
- `src/services/` reads data, `src/pages/` stays thin, `src/models/` maps and
  validates documents.
- Never spread a request body into a document; map fields explicitly.
- Public queries filter on `{ isPublished: true }`.
