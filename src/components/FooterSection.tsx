import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section id="waitlist" className="py-32 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial opacity-15 pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get on the list.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Central Redis is currently invite-only. Drop your email to be first
            in line when we open up access.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-redis/50 transition-shadow"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-redis text-redis-foreground font-semibold text-sm tracking-wide glow-redis-sm transition-all hover:brightness-110 hover:scale-[1.02] whitespace-nowrap"
            >
              Request Access
            </button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Just a heads-up when it's your turn.
          </p>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="mt-24 pt-8 border-t border-border max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-redis" />
          <span className="font-semibold text-foreground">Central Redis</span>
        </div>
        <p>© {new Date().getFullYear()} Central Redis. Built with intent.</p>
      </div>
    </section>
  );
}
