import { motion } from "framer-motion";

const roadmapItems = [
  { label: "Now", title: "Private internal use", description: "Battle-tested on real projects. Stable API. Admin dashboard live.", active: true },
  { label: "Next", title: "Public API & onboarding", description: "Self-serve project creation, usage-based billing, and developer docs.", active: false },
  { label: "Later", title: "SDKs, webhooks & more", description: "Client libraries, event hooks, pub/sub, and extended data structures.", active: false },
];

export default function RoadmapSection() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-redis mb-3">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for now. Growing for later.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Central Redis runs in production today. The goal is to open it up —
            carefully, deliberately — when the foundation is rock solid.
          </p>
        </motion.div>

        <div className="space-y-6">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={item.label}
              className={`flex gap-6 p-6 rounded-xl border transition-colors ${
                item.active
                  ? "border-redis/40 bg-redis/5"
                  : "border-border bg-surface"
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    item.active
                      ? "bg-redis text-redis-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
