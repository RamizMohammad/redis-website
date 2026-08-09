import {
  Braces,
  KeyRound,
  Layers,
  LineChart,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, Section, SectionHeader } from "@/components/site/Primitives";
import { EXAMPLE_PROJECT, LIMITS } from "@/lib/site";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  mono?: string;
  chips?: string[];
};

/**
 * Every claim here is true of the running service. Notably absent: sorted sets
 * and streams, which the browser can display but the API does not expose yet.
 */
const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "Namespaced by default",
    body: "Every key is stored as project_id:key. Two projects can both use session:1 without ever seeing each other.",
    mono: `${EXAMPLE_PROJECT}:session:1`,
  },
  {
    icon: KeyRound,
    title: "Keys you can rotate",
    body: `Up to ${LIMITS.apiKeysPerProject} named API keys per project. Rotate or revoke one without touching the others. Stored hashed — shown once.`,
    mono: "sk_live_••••••••3f9a",
  },
  {
    icon: Braces,
    title: "Real data types",
    body: "Strings, lists, hashes, and sets. TTLs, atomic counters, batch reads and writes.",
    chips: ["GET", "SET", "LPUSH", "HSET", "SADD", "INCR"],
  },
  {
    icon: LineChart,
    title: "Usage you can see",
    body: "Request volume, error rate, and p50/p95/p99 latency per project, broken down by operation.",
    mono: "p50 8ms · p95 34ms",
  },
  {
    icon: Search,
    title: "A browser for your keys",
    body: "Filter by glob pattern, inspect any value, edit JSON in place. Cursor paginated, so a large keyspace stays responsive.",
    mono: "cart:*",
  },
  {
    icon: ShieldCheck,
    title: "Isolation that's enforced",
    body: "A project's key only ever authenticates that project. Wrong project, wrong key, revoked key — all rejected at the edge.",
    mono: "401 Invalid API key",
  },
];

export default function FeatureGridSection() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="What you get"
        title="Built for the way you actually use Redis."
        description="Every Redis primitive you reach for, exposed over HTTP and scoped to one project."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="flex flex-col">
            <feature.icon className="size-[22px] text-[var(--redis)]" strokeWidth={1.7} />
            <h3 className="mt-4 text-[17px] font-semibold text-[var(--ink)]">{feature.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--body)]">{feature.body}</p>

            <div className="mt-5 border-t border-[var(--line)] pt-3">
              {feature.chips ? (
                <div className="flex flex-wrap gap-1.5">
                  {feature.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded bg-[var(--redis-tint)] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--redis)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="font-mono text-[11.5px] text-[var(--subtle)]">{feature.mono}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
