import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-redis mb-6">
            Why I Built It
          </p>
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90">
            "I kept spinning up Redis for every side project. Same patterns,
            same configs, same overhead. Central Redis started as a way to stop
            repeating myself — one API that handles namespaced storage across all
            my builds."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-redis/20 flex items-center justify-center text-redis font-bold text-sm">
              CR
            </div>
            <div>
              <p className="text-sm font-semibold">Builder & Founder</p>
              <p className="text-xs text-muted-foreground">
                Currently in private use — built for real workloads
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
