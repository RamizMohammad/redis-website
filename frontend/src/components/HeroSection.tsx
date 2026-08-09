import { Check } from "lucide-react";
import { CodeBlock, tok, type CodeLine } from "@/components/site/CodeBlock";
import { PrimaryLink, SecondaryLink, StatusDot } from "@/components/site/Primitives";
import { DOCS_URL, EXAMPLE_BASE, LIMITS, SIGNUP_URL } from "@/lib/site";

const HERO_SNIPPET: CodeLine[] = [
  [tok.cmd("curl"), tok.p(" -X POST "), tok.p(`${EXAMPLE_BASE}/set/cart:42`), tok.p(" \\")],
  [tok.p("  -H "), tok.str('"x-api-key: sk_live_8Kd…"'), tok.p(" \\")],
  [tok.p("  -H "), tok.str('"Content-Type: application/json"'), tok.p(" \\")],
  [tok.p("  -d "), tok.str(`'{"value": {"items": 3}, "ttl": 3600}'`)],
  [],
  [tok.comment("# 200 OK · 11 ms")],
  [tok.ok(`{"ok": true, "key": "cart:42", "ttl": 3600}`)],
];

const COPY_TEXT = `curl -X POST ${EXAMPLE_BASE}/set/cart:42 \\
  -H "x-api-key: sk_live_8Kd…" \\
  -H "Content-Type: application/json" \\
  -d '{"value": {"items": 3}, "ttl": 3600}'`;

const REASSURANCE = ["No credit card", "Live in under a minute", "Your data stays namespaced"];

const BUILT_ON = ["FastAPI", "Redis", "MongoDB Atlas", "Python", "Render"];

export default function HeroSection() {
  return (
    <div id="top" className="hero-wash">
      <div className="container-page grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[52fr_48fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--redis-tint)] px-3 py-1.5 font-mono text-[12px] text-[var(--ink)]">
            <StatusDot />
            Live in production — free while in beta
          </span>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink)] sm:text-[52px] lg:text-[56px]">
            One Redis layer.
            <br />
            <span className="text-[var(--redis)]">Every project you ship.</span>
          </h1>

          <p className="prose-measure mt-6 text-[17px] leading-relaxed text-[var(--body)]">
            Isolated namespaces, per-project API keys, and a REST endpoint for every Redis
            operation. No connection strings. No instance to babysit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={SIGNUP_URL}>Start free — {LIMITS.projects} project</PrimaryLink>
            <SecondaryLink href={DOCS_URL}>Read the docs</SecondaryLink>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-[13px] text-[var(--subtle)]">
                <Check className="size-3.5 text-[var(--redis)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <CodeBlock
            title="cURL / checkout_svc"
            lines={HERO_SNIPPET}
            copyText={COPY_TEXT}
            className="shadow-prominent"
          />
        </div>
      </div>

      <div className="border-t border-[var(--line)] bg-white/60">
        <div className="container-page py-8">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--subtle)]">
            Built on
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {BUILT_ON.map((item) => (
              <li key={item} className="text-[15px] font-medium text-[var(--subtle)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
