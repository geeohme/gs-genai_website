import { Hono } from 'hono'
import { renderer } from './renderer'
import { reviews, courses, articles, socials } from './data'

const app = new Hono()

app.use(renderer)

// Home
app.get('/', (c) => {
  return c.render(
    <div>
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),rgba(0,0,0,0))]"></div>
        <div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Generation AI
              </h1>
              <p class="mt-4 text-neutral-300 text-lg">
                Reviews that cut through hype. Training that makes teams dangerous. Community that ships.
              </p>
              <div class="mt-6 flex gap-3">
                <a href="/reviews" class="inline-flex items-center gap-2 bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400">
                  <i class="fa-solid fa-star"></i>
                  Explore Reviews
                </a>
                <a href="/training" class="inline-flex items-center gap-2 border border-neutral-800 px-4 py-2 rounded-md hover:border-neutral-700">
                  <i class="fa-solid fa-flask"></i>
                  Hands‑on Training
                </a>
              </div>
            </div>
            <div class="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
              <div class="text-sm text-neutral-400 mb-3">Fresh picks</div>
              <div class="grid gap-4">
                {reviews.slice(0,3).map((r) => (
                  <a href={`/reviews/${r.slug}`} class="flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-800/60 border border-neutral-800">
                    <div class="w-10 h-10 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
                    <div>
                      <div class="font-semibold">{r.name}</div>
                      <div class="text-xs text-neutral-400">{r.tagline}</div>
                    </div>
                    <div class="ml-auto text-emerald-400 text-sm">{r.rating.toFixed(1)}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-4 py-16">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Popular Courses</h2>
          <a href="/training" class="text-sm text-neutral-400 hover:text-emerald-400">All courses →</a>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          {courses.slice(0,2).map((c) => (
            <a href={`/training/${c.slug}`} class="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50">
              <div class="text-xs text-neutral-400">{c.level} · {c.duration}</div>
              <div class="mt-2 font-semibold">{c.title}</div>
              <p class="mt-2 text-neutral-300 text-sm">{c.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-4 pb-16">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold">Latest Articles</h2>
          <a href="/blog" class="text-sm text-neutral-400 hover:text-emerald-400">All articles →</a>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a href={a.href} class="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50">
              <div class="font-medium">{a.title}</div>
              <div class="text-xs text-neutral-400 mt-2">{a.source}</div>
            </a>
          ))}
        </div>
      </section>

      <section class="border-y border-neutral-800/70">
        <div class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div class="text-sm text-neutral-400">About George</div>
            <h3 class="mt-1 text-2xl font-semibold">Telecom architect turned AI sherpa</h3>
            <p class="mt-3 text-neutral-300">30+ years building critical systems. Now focused on applied AI: automation, RAG, chat, and real‑world change. Based in HCMC, working globally.</p>
            <div class="mt-5 flex flex-wrap gap-3 text-sm">
              {socials.map((s) => (
                <a href={s.href} class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700">
                  <i class={s.icon}></i>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div class="bg-[conic-gradient(at_top_left,_#10b981_20%,_transparent_20%_40%,_#22d3ee_40%_60%,_transparent_60%_80%,_#10b981_80%)] rounded-xl aspect-video" />
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-4 py-16">
        <div class="rounded-xl border border-neutral-800 p-8 bg-neutral-900/50">
          <h3 class="text-2xl font-semibold">Join the community</h3>
          <p class="mt-2 text-neutral-300">Monthly live sessions, hands‑on labs, and meetups. Get notified when we kick off.</p>
          <form method="post" action="/api/signup" class="mt-4 flex gap-3">
            <input name="email" type="email" required placeholder="you@company.com" class="flex-1 bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500" />
            <button class="bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400">Notify me</button>
          </form>
        </div>
      </section>
    </div>
  )
})

// Reviews list
app.get('/reviews', (c) => {
  return c.render(
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">AI App Reviews</h1>
      <p class="mt-2 text-neutral-300">Opinionated, hands‑on takes. No fluff.</p>
      <div class="mt-8 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <a href={`/reviews/${r.slug}`} class="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
              <div class="flex-1">
                <div class="font-semibold">{r.name}</div>
                <div class="text-xs text-neutral-400">{r.tagline}</div>
                <div class="mt-2 text-sm text-emerald-400">{r.rating.toFixed(1)} / 5</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
})

// Review detail
app.get('/reviews/:slug', (c) => {
  const slug = c.req.param('slug')
  const r = reviews.find((x) => x.slug === slug)
  if (!r) return c.notFound()
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <a href="/reviews" class="text-sm text-neutral-400 hover:text-emerald-400">← All reviews</a>
      <h1 class="mt-2 text-3xl font-bold">{r.name}</h1>
      <div class="mt-1 text-neutral-300">{r.tagline}</div>
      <div class="mt-2 text-sm text-emerald-400">Rating: {r.rating.toFixed(1)} / 5</div>
      <p class="mt-6 text-neutral-200 leading-7">{r.summary}</p>

      {r.videoUrl && (
        <div class="mt-8 aspect-video rounded-xl overflow-hidden border border-neutral-800">
          <iframe class="w-full h-full" src={r.videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      )}

      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div class="rounded-xl border border-neutral-800 p-5 bg-neutral-900/40">
          <div class="font-semibold">Pros</div>
          <ul class="mt-2 list-disc list-inside text-neutral-300">
            {r.pros.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
        </div>
        <div class="rounded-xl border border-neutral-800 p-5 bg-neutral-900/40">
          <div class="font-semibold">Cons</div>
          <ul class="mt-2 list-disc list-inside text-neutral-300">
            {r.cons.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div class="mt-8 flex gap-3">
        {r.website && <a href={r.website} class="inline-flex items-center gap-2 bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400"><i class="fa-solid fa-up-right-from-square"></i> Visit site</a>}
        <a href="/reviews" class="inline-flex items-center gap-2 border border-neutral-800 px-4 py-2 rounded-md hover:border-neutral-700">More reviews</a>
      </div>
    </div>
  )
})

// Training
app.get('/training', (c) => {
  return c.render(
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">Training</h1>
      <p class="mt-2 text-neutral-300">Guided, self‑paced lessons with labs. Live options available.</p>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        {courses.map((crs) => (
          <a href={`/training/${crs.slug}`} class="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50">
            <div class="text-xs text-neutral-400">{crs.level} · {crs.duration}</div>
            <div class="mt-2 font-semibold">{crs.title}</div>
            <p class="mt-2 text-neutral-300 text-sm">{crs.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
})

app.get('/training/:slug', (c) => {
  const slug = c.req.param('slug')
  const crs = courses.find((x) => x.slug === slug)
  if (!crs) return c.notFound()
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <a href="/training" class="text-sm text-neutral-400 hover:text-emerald-400">← All training</a>
      <h1 class="mt-2 text-3xl font-bold">{crs.title}</h1>
      <div class="mt-1 text-neutral-300">{crs.level} · {crs.duration}</div>
      <p class="mt-6 text-neutral-200 leading-7">{crs.description}</p>

      <div class="mt-8">
        <div class="font-semibold mb-2">Lessons</div>
        <ol class="space-y-3">
          {crs.lessons.map((l) => (
            <li>
              <a href={`/training/${crs.slug}/${l.slug}`} class="block p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40">
                <div class="font-medium">{l.title}</div>
                <div class="text-sm text-neutral-400">Lab: {l.lab}</div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
})

app.get('/training/:slug/:lesson', (c) => {
  const slug = c.req.param('slug')
  const lesson = c.req.param('lesson')
  const crs = courses.find((x) => x.slug === slug)
  const l = crs?.lessons.find((x) => x.slug === lesson)
  if (!crs || !l) return c.notFound()
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <a href={`/training/${crs.slug}`} class="text-sm text-neutral-400 hover:text-emerald-400">← {crs.title}</a>
      <h1 class="mt-2 text-3xl font-bold">{l.title}</h1>
      <div class="mt-6 rounded-xl border border-neutral-800 p-5 bg-neutral-900/40">
        <div class="font-semibold">Lab Exercise</div>
        <p class="mt-2 text-neutral-300">{l.lab}</p>
        <div class="mt-4 text-sm text-neutral-400">Tip: Keep a prompt journal. Write your intent, constraints, and acceptance criteria before you ask.</div>
      </div>
    </div>
  )
})

// Blog
app.get('/blog', (c) => {
  return c.render(
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">Articles & Links</h1>
      <p class="mt-2 text-neutral-300">Published pieces and posts from around the web.</p>
      <div class="mt-8 grid md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <a href={a.href} class="block p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50">
            <div class="font-medium">{a.title}</div>
            <div class="text-xs text-neutral-400 mt-2">{a.source}</div>
          </a>
        ))}
      </div>
    </div>
  )}
)

// About
app.get('/about', (c) => {
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">About George</h1>
      <p class="mt-4 text-neutral-300 leading-7">Telecom IT Consultant, Solution Architect, and AI Enthusiast. Based in HCMC (District 2, Masteri Thao Dien), working with global teams to bring AI into everyday operations with clarity and outcomes.</p>
      <ul class="mt-4 text-neutral-300 list-disc list-inside">
        <li>30+ years in billing, provisioning, integrations</li>
        <li>8 years as Solution Architect</li>
        <li>Focus: boutique automation, AI integration, RAG, chatbots, optimization</li>
      </ul>
    </div>
  )
})

// Community teaser
app.get('/community', (c) => {
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">Community</h1>
      <p class="mt-2 text-neutral-300">Were exploring a lightweight, real‑life community model: monthly live sessions (YouTube), rotating hands‑on labs, and partner meetups via Meetup.com. Register interest below.</p>
      <form method="post" action="/api/signup" class="mt-6 flex gap-3">
        <input name="email" type="email" required placeholder="you@company.com" class="flex-1 bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500" />
        <button class="bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400">Join waitlist</button>
      </form>
    </div>
  )
})

// Links placeholder
app.get('/links', (c) => {
  return c.render(
    <div class="max-w-3xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">Links & Socials</h1>
      <ul class="mt-6 grid md:grid-cols-2 gap-4">
        {socials.map((s) => (
          <li>
            <a href={s.href} class="flex items-center gap-3 p-4 border border-neutral-800 rounded-lg hover:border-neutral-700">
              <i class={s.icon}></i>
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
})

// Contact placeholder
app.get('/contact', (c) => {
  return c.render(
    <div class="max-w-2xl mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold">Contact</h1>
      <p class="mt-2 text-neutral-300">Want a review, training, or consulting? Drop your email and Ill reply.</p>
      <form method="post" action="/api/signup" class="mt-6 grid gap-3">
        <input name="email" type="email" required placeholder="you@company.com" class="bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500" />
        <textarea name="message" placeholder="How can I help?" class="min-h-[120px] bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-sm outline-none focus:border-emerald-500"></textarea>
        <button class="bg-emerald-500 text-black px-4 py-2 rounded-md hover:bg-emerald-400 w-fit">Send</button>
      </form>
    </div>
  )
})

// Simple signup endpoint (in-memory placeholder)
app.post('/api/signup', async (c) => {
  const contentType = c.req.header('content-type') || ''
  let email = ''
  if (contentType.includes('application/json')) {
    const body = await c.req.json()
    email = body.email
  } else {
    const form = await c.req.formData()
    email = (form.get('email') as string) || ''
  }
  // TODO: swap to KV/D1 later; this is just a thank-you response
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return c.json({ ok: false, error: 'Invalid email' }, 400)
  }
  return c.json({ ok: true, message: 'Thanks for joining! We\'ll be in touch.' })
})

export default app
