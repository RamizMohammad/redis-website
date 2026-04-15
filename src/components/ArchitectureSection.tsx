import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Create a Project",
    description: "Spin up a new project in the admin dashboard. Instantly get an isolated namespace and API key.",
  },
  {
    num: "02",
    title: "Hit the API",
    description: "Use simple REST endpoints for any Redis operation — GET, SET, lists, hashes, TTL, and more.",
  },
  {
    num: "03",
    title: "Scale Without Thinking",
    description: "All projects share one managed Redis layer. No provisioning, no config drift, no maintenance.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-32 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-redis mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Three steps. Zero ops.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <span className="text-5xl font-bold text-redis/15 font-mono-code">{step.num}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stack badges */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {["FastAPI", "Redis", "MongoDB Atlas", "REST API", "Namespaced Storage"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-xs font-mono-code rounded-full border border-border text-muted-foreground bg-surface"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
