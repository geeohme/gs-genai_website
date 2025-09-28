import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  const pageTitle = title ? `${title} · Generation AI` : 'Generation AI — Reviews, Training, Community'
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content="Generation AI: boutique reviews of AI apps, hands‑on training, and a community for AI practitioners and business leaders." />
        <link href="/static/style.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body class="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
        <script src="/static/app.js" defer></script>
        <header class="border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40 sticky top-0 z-40">
          <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-semibold tracking-tight">
              <span class="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span>Generation AI</span>
            </a>
            <nav class="hidden md:flex items-center gap-6 text-sm">
              <a class="hover:text-emerald-400" href="/reviews">Reviews</a>
              <a class="hover:text-emerald-400" href="/training">Training</a>
              <a class="hover:text-emerald-400" href="/blog">Articles</a>
              <a class="hover:text-emerald-400" href="/about">About</a>
              <a class="inline-flex items-center gap-2 bg-emerald-500 text-black px-3 py-1.5 rounded-md hover:bg-emerald-400" href="/community">
                <i class="fa-solid fa-users"></i>
                Community
              </a>
            </nav>
          </div>
        </header>

        <main class="flex-1">
          {children}
        </main>

        <footer class="border-t border-neutral-800/70">
          <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div class="md:col-span-2">
              <div class="flex items-center gap-2 mb-3 font-semibold">
                <span class="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
                Generation AI
              </div>
              <p class="text-neutral-400">AI product reviews, training, and edge‑of‑the‑curve insights by George, Solution Architect and AI enthusiast. Built for curious teams and bold builders.</p>
            </div>
            <div>
              <div class="font-semibold mb-3">Explore</div>
              <ul class="space-y-2 text-neutral-300">
                <li><a class="hover:text-emerald-400" href="/reviews">Reviews</a></li>
                <li><a class="hover:text-emerald-400" href="/training">Training</a></li>
                <li><a class="hover:text-emerald-400" href="/blog">Articles</a></li>
              </ul>
            </div>
            <div>
              <div class="font-semibold mb-3">Connect</div>
              <ul class="space-y-2 text-neutral-300">
                <li><a class="hover:text-emerald-400" href="/links">Socials</a></li>
                <li><a class="hover:text-emerald-400" href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="text-center text-xs text-neutral-500 py-6 border-t border-neutral-900/60">
            © {new Date().getFullYear()} Generation AI. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
})
