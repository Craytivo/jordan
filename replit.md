# The Jordan Creative

Artist portfolio and gallery site for Jordan Creative — original acrylic paintings and sketches exploring memory, identity, landscape, and place.

## Run & Operate

- `pnpm --filter @workspace/jordan-creative run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7 + Tailwind CSS v4 (artifact: `jordan-creative`)
- Routing: wouter
- Animation: framer-motion
- UI: shadcn/ui + Radix UI
- API: Express 5 (artifact: `api-server`)
- DB: PostgreSQL + Drizzle ORM (not currently used — data is static in `src/data/`)
- API codegen: Orval (from OpenAPI spec)

## Where things live

- `artifacts/jordan-creative/src/` — all frontend source
  - `pages/` — route-level components (Home, Gallery, ArtworkDetail, Journal, JournalArticle, About, Contact)
  - `components/` — shared components (Header, Footer, PageTransition, CustomCursor, Preloader, etc.)
  - `data/` — static data files (artworks.ts, artist.ts, journal.ts)
  - `hooks/` — custom React hooks
- `artifacts/jordan-creative/public/` — static assets (hero-bg.jpg, favicon.svg, etc.)
- `artifacts/api-server/src/` — Express API server
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth for API)

## Architecture decisions

- Pure client-side Vite + React app; no SSR. All data is currently static (no DB needed).
- wouter used for routing (already in scaffold), with BASE_URL support for Replit path-based proxy.
- Luxury aesthetic: Cormorant Garamond serif font, Inter sans-serif, warm off-white palette, zero border-radius.
- Preloader animation (1.5s) plays on first load.
- Custom CSS utility classes (.section-luxury, .container-luxury, .text-display, .noise-overlay etc.) defined in index.css.

## Product

- **Home** — hero section with artist statement and featured works
- **Collection / Gallery** — artwork grid with category filtering
- **Artwork Detail** — individual artwork page with "View on Wall" feature
- **Journal** — editorial articles and essays
- **About** — artist biography
- **Contact** — contact form

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The Preloader component shows for 1.5s on load — screenshots taken immediately may only show the preloader.
- All artwork/journal data lives in `src/data/` — static files, no backend queries needed currently.
- The `@workspace/api-client-react` package is included as a dependency but not currently used (no API endpoints beyond healthz).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
