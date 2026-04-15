import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Multi-Tenant by Default",
    description:
      "Every project gets its own isolated namespace. Keys never collide. Data never leaks.",
  },
  {
    title: "One API, Full Redis Power",
    description:
      "GET, SET, DELETE, TTL, increment, lists, hashes, key listing, flush — all through a single REST API.",
  },
  {
    title: "Per-Project API Keys",
    description:
      "Each project authenticates independently. Rotate keys, manage access, control everything.",
  },
  {
    title: "Admin Dashboard",
    description:
      "See all projects, manage configs, and monitor usage from a single control plane.",
  },
];

export default function WhatItDoesSection() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-redis mb-3">
            What It Does
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Redis infrastructure, abstracted
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Central Redis gives you everything you need to use Redis across
            multiple projects — without provisioning, configuring, or babysitting
            a single instance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-6 rounded-xl border border-border bg-surface hover:border-redis/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-redis transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
