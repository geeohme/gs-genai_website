export type Review = {
  slug: string
  name: string
  tagline: string
  categories: string[]
  rating: number
  summary: string
  pros: string[]
  cons: string[]
  videoUrl?: string
  website?: string
}

export type Course = {
  slug: string
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  description: string
  lessons: { slug: string; title: string; lab: string }[]
}

export type Article = {
  title: string
  href: string
  source: string
}

export const reviews: Review[] = [
  {
    slug: 'acme-chat-assistant',
    name: 'Acme Chat Assistant',
    tagline: 'Multi‑modal chat with robust tools + team controls',
    categories: ['Chatbot', 'Productivity'],
    rating: 4.5,
    summary:
      'A polished chat UI with plugins, agent handoffs, and great prompt tooling. Excellent for SMB teams starting with AI.',
    pros: ['Clean UX', 'Team workspaces', 'Reasonable pricing'],
    cons: ['Limited enterprise governance', 'Few export formats'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    website: '#'
  },
  {
    slug: 'pixel-gen-studio',
    name: 'PixelGen Studio',
    tagline: 'Fast image generation with style control and brand kits',
    categories: ['Image', 'Marketing'],
    rating: 4.2,
    summary:
      'Great presets and brand kits make repeatable imagery easy. Not the best for photorealism, but superb for campaigns.',
    pros: ['Style consistency', 'Batching', 'Simple rights model'],
    cons: ['Lower fine detail', 'No inpainting'],
    website: '#'
  },
  {
    slug: 'scribe-flow',
    name: 'ScribeFlow',
    tagline: 'RAG toolkit for your docs with dashboards',
    categories: ['RAG', 'Docs'],
    rating: 4.0,
    summary:
      'Turn internal docs into secure Q&A with analytics. Easy pipelines, decent evals, great for knowledge bases.',
    pros: ['Data pipelines', 'Analytics', 'Sane defaults'],
    cons: ['Indexing can be slow', 'Few vector backends'],
    videoUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    website: '#'
  }
]

export const courses: Course[] = [
  {
    slug: 'prompting-foundations',
    title: 'Prompting Foundations for Busy Teams',
    level: 'Beginner',
    duration: '90 minutes',
    description:
      'A practical, no‑fluff intro to prompting that sticks. Build reliable workflows you can actually reuse at work.',
    lessons: [
      {
        slug: 'principles',
        title: 'The 5 Principles of Reliable Prompts',
        lab: 'Rewrite a vague request into a task‑ready instruction using role, format, constraints, and examples.'
      },
      {
        slug: 'frameworks',
        title: 'Frameworks: CRAFT, ReACT, and Critique Loops',
        lab: 'Take a real task from your day job and apply a critique loop with objective acceptance criteria.'
      },
      {
        slug: 'patterns',
        title: 'Reusable Patterns: Checklists and Templates',
        lab: 'Build a reusable checklist prompt and test it on 3 variants of a task.'
      }
    ]
  },
  {
    slug: 'rag-zero-to-one',
    title: 'RAG Zero‑to‑One (Hands‑On)',
    level: 'Intermediate',
    duration: '3 hours',
    description:
      'Plan a small RAG system end‑to‑end: ingestion, chunking, embeddings, retrieval, and evaluation. Tool‑agnostic.',
    lessons: [
      {
        slug: 'ingestion',
        title: 'Ingestion and Chunking Tradeoffs',
        lab: 'Compare 3 chunking strategies on a sample doc set and measure retrieval hit rate.'
      },
      {
        slug: 'evals',
        title: 'Evals and Guardrails',
        lab: 'Design a quick‑and‑dirty eval set and run pass@k with grounding checks.'
      }
    ]
  }
]

export const articles: Article[] = [
  { title: 'How to brief an AI like a pro', href: '#', source: 'LinkedIn' },
  { title: 'RAG pitfalls nobody tells you about', href: '#', source: 'Blog' },
  { title: 'Turning teams into AI co‑pilots', href: '#', source: 'Medium' }
]

export const socials = [
  { label: 'LinkedIn', href: '#', icon: 'fa-brands fa-linkedin' },
  { label: 'YouTube', href: '#', icon: 'fa-brands fa-youtube' },
  { label: 'TikTok', href: '#', icon: 'fa-brands fa-tiktok' },
  { label: 'X / Twitter', href: '#', icon: 'fa-brands fa-x-twitter' }
]
