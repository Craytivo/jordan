# The Jordan Creative

  Premium art portfolio website. Two pages: homepage and gallery archive.

  ## Stack

  - React 19 + Vite 7 + TypeScript
  - Tailwind CSS v4
  - Framer Motion (scroll animations)
  - wouter (client-side routing)
  - Playfair Display + Inter (Google Fonts)

  ## Getting started

  Requires Node.js 18+ and npm/pnpm/yarn.

  ```bash
  # Install dependencies
  npm install
  # or: pnpm install / yarn install

  # Start the dev server
  npm run dev
  ```

  Then open http://localhost:5173 in your browser.

  ## Build for production

  ```bash
  npm run build
  ```

  Output goes to `dist/`.

  ## Pages

  - `/`        — Homepage (hero, approach, featured work, artist story, events, newsletter)
  - `/gallery` — Gallery archive (collections: Portraits, Landscapes, Studies)

  ## Customise

  - **Colors & fonts** — `src/index.css` (CSS custom properties at the top)
  - **Content** — `src/pages/Home.tsx` and `src/pages/Gallery.tsx`
  - **Navigation** — `src/components/Header.tsx`

  ## Contact

  hello@thejordancreative.com
  