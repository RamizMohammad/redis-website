import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-surface text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-redis animate-pulse" />
            Currently in private use — public access coming soon
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          One Redis layer.
          <br />
          <span className="text-gradient-redis">Every project.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Central Redis is a multi-tenant Redis API platform. Isolated storage,
          per-project API keys, and a clean admin layer — without managing Redis
          infrastructure for every build.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#waitlist"
            className="px-8 py-3.5 rounded-lg bg-redis text-redis-foreground font-semibold text-sm tracking-wide glow-redis-sm transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            Request Early Access
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm transition-colors hover:bg-surface"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Code snippet preview */}
        <motion.div
          className="mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="rounded-xl border border-border bg-surface overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-redis/30" />
              <div className="w-3 h-3 rounded-full bg-muted" />
              <div className="w-3 h-3 rounded-full bg-muted" />
              <span className="ml-2 text-xs text-muted-foreground font-mono-code">API Request</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed font-mono-code overflow-x-auto">
              <code>
                <span className="text-muted-foreground">POST</span>{" "}
                <span className="text-redis">/api/set</span>{"\n"}
                <span className="text-muted-foreground">X-API-Key:</span>{" "}
                <span className="text-foreground/60">proj_sk_abc123...</span>{"\n\n"}
                <span className="text-muted-foreground">{"{"}</span>{"\n"}
                {"  "}<span className="text-redis">"key"</span>: <span className="text-foreground/70">"session:user:42"</span>,{"\n"}
                {"  "}<span className="text-redis">"value"</span>: <span className="text-foreground/70">"active"</span>,{"\n"}
                {"  "}<span className="text-redis">"ttl"</span>: <span className="text-foreground/70">3600</span>{"\n"}
                <span className="text-muted-foreground">{"}"}</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
