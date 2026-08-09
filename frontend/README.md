# Central Redis — marketing site

TanStack Start + React 19 + Tailwind v4. Prerendered to static HTML at build
time, deployed to Vercel.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ — prerenders / to static HTML
```

## Before you deploy

Two environment variables point the site at the app. Without them the build
falls back to placeholder subdomains that don't resolve, and every "Start free"
button leads nowhere.

```bash
VITE_APP_URL=https://your-dashboard-host      # /signup, /login, /docs
VITE_API_BASE=https://your-api-host           # used in every code sample
```

Set both in Vercel's project settings. Everything else the site claims lives in
`src/lib/site.ts`.

## Structure

```
src/lib/site.ts                 URLs, limits, and every product claim in one place
src/components/site/            Primitives — Logo, Section, buttons, CodeBlock
src/components/*Section.tsx     One file per page section
src/routes/index.tsx            Composes the sections in order
src/styles.css                  Design tokens, shared with the dashboard
```

Sections in page order: Hero → ProductShowcase → FeatureGrid → HowItWorks →
CodeSamples → Playground → Pricing → Founder → FAQ → Roadmap → FinalCta →
Footer.

## Things that are deliberate

**Every number is real.** The limits in `src/lib/site.ts` mirror
`app/config.py` in the API repo. If a limit changes there, change it here. The
site makes no claim about uptime, customer count, or API latency, because none
of those can be substantiated yet — and a developer audience checks.

**The dashboard "screenshot" is live markup, not an image.** It stays sharp on
retina, weighs nothing, and can be fixed in a diff when the real UI moves on.
See `ProductShowcaseSection.tsx`.

**The playground runs in the browser.** There's no public sandbox project to
call, so rather than fake a round trip and invent a latency figure, it runs a
small real key-value store client-side: `set` then `get` returns what you
stored, TTLs expire, `incr` fails on a non-integer. Request and response shapes
match the API exactly. If you later expose a real sandbox project, swap
`run()` in `PlaygroundSection.tsx` for a `fetch`.

**FAQ answers stay in the DOM when collapsed.** They're hidden by collapsing a
grid row rather than being conditionally rendered, so the page's most
searchable content is in the served HTML.

**The footer only links to pages that exist.** No Careers, Case Studies, or
status page until there are any.
