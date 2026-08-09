import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

const COLUMNS = [
  {
    label: "Shipped",
    tone: "done" as const,
    items: [
      "Accounts, sessions, and roles",
      "Per-project API keys with rotation",
      "Data browser with pattern search",
      "Usage metrics and latency percentiles",
      "Admin console",
    ],
  },
  {
    label: "In progress",
    tone: "active" as const,
    items: [
      "Client libraries for JS and Python",
      "Password reset and email verification",
      "Sorted sets and streams",
      "Higher limits and paid tiers",
    ],
  },
  {
    label: "Later",
    tone: "future" as const,
    items: [
      "Webhooks on key events",
      "Pub/sub over server-sent events",
      "Team accounts and shared projects",
      "Regional deployments",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <Section id="roadmap" alt>
      <SectionHeader
        eyebrow="What's next"
        title="Shipping in the open."
        description="Here's what exists today and what's being built. No dates — they'd be fiction."
      />

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {COLUMNS.map((column) => (
          <div key={column.label} className={cn(column.tone === "future" && "opacity-70")}>
            <div className="relative mb-6 border-t-2 border-[var(--line)] pt-6">
              <span
                className={cn(
                  "absolute -top-[9px] left-0 grid size-4 place-items-center rounded-full border-2",
                  column.tone === "done" && "border-[var(--redis)] bg-[var(--redis)]",
                  column.tone === "active" && "border-[var(--redis)] bg-white",
                  column.tone === "future" && "border-[var(--line-strong)] bg-white",
                )}
              >
                {column.tone === "done" ? (
                  <Check className="size-2.5 text-white" strokeWidth={3} />
                ) : null}
              </span>
              <p
                className={cn(
                  "font-mono text-[12px] uppercase tracking-[0.08em]",
                  column.tone === "done" && "text-[var(--redis)]",
                  column.tone === "active" && "text-[var(--ink)]",
                  column.tone === "future" && "text-[var(--subtle)]",
                )}
              >
                {column.label}
              </p>
            </div>

            <ul className="space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--body)]">
                  {column.tone === "done" ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--redis)]" />
                  ) : (
                    <span
                      className={cn(
                        "mt-1 size-3 shrink-0 rounded-full border",
                        column.tone === "active"
                          ? "border-[var(--line-strong)]"
                          : "border-[var(--line)]",
                      )}
                    />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
