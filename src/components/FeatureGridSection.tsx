import { motion } from "framer-motion";
import { Zap, KeyRound, Database, ShieldCheck, LayoutDashboard, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Redis-backed, sub-millisecond reads. No cold starts, no connection pooling headaches.",
  },
  {
    icon: KeyRound,
    title: "Per-Project Keys",
    description: "Every project authenticates with its own API key. Full isolation, zero crosstalk.",
  },
  {
    icon: Database,
    title: "Rich Data Types",
    description: "Strings, lists, hashes, counters, TTLs — all the Redis primitives you need, via REST.",
  },
  {
    icon: ShieldCheck,
    title: "Namespace Isolation",
    description: "Projects can't see each other's data. Namespacing is enforced at the platform level.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Create projects, rotate keys, flush data, and view operations — all from one panel.",
  },
  {
    icon: RefreshCw,
    title: "Keep-Alive Built In",
    description: "Deployment-stable with built-in keep-alive. No dropped connections on serverless hosts.",
  },
];

export default function FeatureGridSection() {
  return (
    <section id="features" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-redis mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Developer-first, by design
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group p-6 rounded-xl border border-border bg-surface hover:border-redis/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-redis/10 flex items-center justify-center group-hover:bg-redis/20 transition-colors">
                <f.icon className="w-5 h-5 text-redis" />
              </div>
              <h3 className="font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
