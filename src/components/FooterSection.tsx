import { motion } from "framer-motion";
import { useState } from "react";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

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
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                You're on the list!
              </h2>
              <p className="mt-4 text-muted-foreground">
                Thanks for signing up. We'll notify you as soon as early access opens.
              </p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get on the list.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Central Redis is currently invite-only. Drop your email to be first
                in line when we open up access.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            </>
          )}
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="mt-24 pt-8 border-t border-border max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-redis" />
          <span className="font-semibold text-foreground">Central Redis</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.mohammadramiz.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="https://github.com/RamizMohammad" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ramizmohammad" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:ramizanas6@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <p>© {new Date().getFullYear()} Central Redis. Built with intent.</p>
      </div>
    </section>
  );
}
