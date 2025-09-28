# Generation AI — Reviews, Training, Community

Professional, boutique-style site for AI application reviews, hands‑on training, and community building. Built for clarity, speed, and easy publishing.

- Live (sandbox): https://3000-imfye0hiz8ogblake5n76-6532622b.e2b.dev
- GitHub: https://github.com/geeohme/gs-genai_website

## What’s inside
- Hono (Cloudflare Workers) + JSX renderer
- Cloudflare Pages deployment via Wrangler
- Tailwind CSS (CDN) + a tiny custom stylesheet
- Simple API endpoint for community signups (placeholder)

## Features (current)
- Home with hero, featured reviews, featured training, latest articles, about teaser, and community signup
- Reviews
  - Catalog: `/reviews`
  - Detail pages: `/reviews/:slug` (rating, pros/cons, optional YouTube embed)
- Training
  - Courses: `/training`
  - Course: `/training/:slug`
  - Lesson: `/training/:slug/:lesson` (includes lab instructions)
- Blog/Articles: `/blog`
- About: `/about`
- Community: `/community` (email capture)
- Links: `/links`
- Contact: `/contact`

## Project structure
```
webapp/
├─ public/
│  └─ static/
│     ├─ style.css        # small custom overrides
│     ├─ app.js           # enhances signup form UX
│     └─ logo.pdf         # provided logo asset (use png/svg for inline <img>)
├─ src/
│  ├─ index.tsx           # routes and pages
│  ├─ renderer.tsx        # global layout (head/nav/footer)
│  └─ data.ts             # reviews, courses, articles, socials (edit here)
├─ dist/                  # built worker (generated)
├─ ecosystem.config.cjs   # PM2 dev runner for sandbox
├─ wrangler.jsonc         # Cloudflare config
├─ package.json
└─ vite.config.ts
```

## Content — where to edit
Edit `src/data.ts`:
- `reviews`: your written reviews (slug, name, tagline, rating, pros/cons, summary, optional `videoUrl`, `website`)
- `courses`: title, level, duration, lessons with labs
- `articles`: external links to posts
- `socials`: LinkedIn, YouTube, TikTok, X, etc.

## Branding
- A logo file has been placed at `public/static/logo.pdf` (downloadable). Browsers don’t render PDF in `<img>`. For inline display in the header, add `public/static/logo.png` (or `.svg`) and replace the brand text in `src/renderer.tsx` with:
  ```jsx
  <a href="/" class="flex items-center gap-2 font-semibold tracking-tight">
    <img src="/static/logo.png" alt="Generation AI" class="h-8 w-auto" />
  </a>
  ```
- Color scheme: Tailwind is via CDN. You can tune accents quickly by swapping classes (e.g., `emerald-500` → `amber-500`). Minimal custom CSS lives in `public/static/style.css`.

## Local development
- Node 18+ recommended
- Install deps and run the Vite dev server (for JSX authoring):
  ```bash
  npm install
  npm run dev
  ```
- Production build (Workers bundle):
  ```bash
  npm run build
  ```
- Preview with Wrangler locally (Cloudflare emulation):
  ```bash
  npx wrangler pages dev dist
  ```

## Deploy to Cloudflare Pages (Workers runtime)
Prereqs:
- Cloudflare account with Workers/Pages enabled
- Wrangler installed: `npm i -g wrangler` (or use local dev dependency)
- Authenticated: `wrangler login` OR set `CLOUDFLARE_API_TOKEN`

Steps:
1) Build the project
   ```bash
   npm run build
   ```
2) Create a Pages project (one-time)
   ```bash
   npx wrangler pages project create generation-ai \
     --production-branch main \
     --compatibility-date 2024-01-01
   ```
   - If `generation-ai` is taken, pick a variant (e.g., `generation-ai-site`).
3) Deploy
   ```bash
   npx wrangler pages deploy dist --project-name generation-ai
   ```
4) Test
   ```bash
   # production and branch URLs are printed after deploy
   curl https://<your-project>.pages.dev/
   ```
5) Optional: Add a custom domain
   ```bash
   npx wrangler pages domain add generationai.app --project-name generation-ai
   ```

## Persist signups (optional, recommended)
Current `/api/signup` just validates and returns a thank-you. To persist emails, use Cloudflare KV.

1) Create KV namespaces
```bash
npx wrangler kv:namespace create GENAI_SIGNUPS
npx wrangler kv:namespace create GENAI_SIGNUPS --preview
```
2) Bind KV in `wrangler.jsonc`
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "webapp",
  "compatibility_date": "2024-01-01",
  "pages_build_output_dir": "./dist",
  "compatibility_flags": ["nodejs_compat"],
  "kv_namespaces": [
    { "binding": "GENAI_SIGNUPS", "id": "<kv-id>", "preview_id": "<kv-preview-id>" }
  ]
}
```
3) Update endpoint (example)
```ts
// src/index.tsx (inside app.post('/api/signup', ...))
await c.env.GENAI_SIGNUPS.put(`email:${email}`, JSON.stringify({ email, ts: Date.now() }))
return c.json({ ok: true, message: "Thanks for joining! We'll be in touch." })
```
4) Rebuild & redeploy
```bash
npm run build
npx wrangler pages deploy dist --project-name generation-ai
```

## Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "wrangler pages dev",
    "deploy": "npm run build && wrangler pages deploy"
  }
}
```

## Roadmap
- SEO: per-page titles/OG tags, sitemap, robots.txt
- Filters/search for reviews; category pages
- Analytics: Plausible or Cloudflare Web Analytics
- Authoring: MD/MDX long-form reviews and lesson content
- Newsletter: integrate Buttondown/Beehiiv for `/api/signup`
- Community: Meetup integration + calendar page

## License
All rights reserved unless otherwise noted. Reach out to the author for licensing/usage.
