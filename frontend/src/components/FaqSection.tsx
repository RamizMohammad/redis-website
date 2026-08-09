import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is my data isolated from other projects?",
    a: "Yes. Every key is stored internally as project_id:key, and a project's API key only ever authenticates that one project. Presenting a valid key for a different project returns 401.",
  },
  {
    q: "What happens if I lose an API key?",
    a: "Rotate it from the dashboard. The old value stops working immediately and you get a new one. Keys are stored hashed, so nobody — including us — can read yours back.",
  },
  {
    q: "Is this a Redis replacement?",
    a: "No. It's Redis with an HTTP layer and multi-tenancy on top. If you need Lua scripting, pub/sub, or streams, use Redis directly. If you need a key-value store for a handful of projects, this removes the setup.",
  },
  {
    q: "How fast is it?",
    a: "Reads are sub-millisecond in Redis; what you actually measure is network latency to the API. Your real p50, p95, and p99 are on the Usage page — measured, not promised.",
  },
  {
    q: "What data types are supported?",
    a: "Strings, lists, hashes, and sets, plus TTLs and atomic counters. Sorted sets and streams aren't exposed yet.",
  },
  {
    q: "Can I use it from the browser?",
    a: "You shouldn't. An API key in client-side JavaScript is a public API key. Call it from your server.",
  },
  {
    q: "What happens when I hit a limit?",
    a: "During beta, nothing — limits are displayed but not enforced, and you'll get an email well before that changes.",
  },
  {
    q: "Can I export or delete everything?",
    a: "Yes. Flush a project's data or delete the project outright from the dashboard, and deleting your account removes every project and key with it.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq">
      <SectionHeader eyebrow="Questions" title="Before you sign up." />

      <div className="mx-auto max-w-[760px]">
        {FAQS.map((faq, index) => {
          const expanded = open === index;
          return (
            <div key={faq.q} className="border-b border-[var(--line)]">
              <button
                type="button"
                onClick={() => setOpen(expanded ? -1 : index)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-[var(--ink)]">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "size-[18px] shrink-0 text-[var(--subtle)] transition-transform",
                    expanded && "rotate-180",
                  )}
                />
              </button>
              {/*
                Answers stay in the DOM whether or not they're open, and are
                hidden by collapsing the grid row. Conditionally rendering them
                would keep the page's most searchable content — the actual
                questions people type into Google — out of the served HTML.
              */}
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200",
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="prose-measure pb-5 text-[15px] leading-relaxed text-[var(--body)]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
