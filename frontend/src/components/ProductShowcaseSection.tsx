import { BarChart3, Database, Gauge, KeyRound, Settings, Terminal } from "lucide-react";
import { Logo, Section, SectionHeader } from "@/components/site/Primitives";
import { APP_URL, EXAMPLE_PROJECT } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The dashboard is rendered as live markup rather than a screenshot.
 *
 * A PNG would go stale the moment the product changes, and it blurs on retina
 * displays unless it's shipped at 2x. This stays sharp, weighs nothing, and can
 * be corrected in a diff when the real UI moves on.
 */

const NAV = [
  { icon: Gauge, label: "Overview", active: true },
  { icon: Database, label: "Data Browser" },
  { icon: Terminal, label: "API Console" },
  { icon: KeyRound, label: "API Keys" },
  { icon: BarChart3, label: "Usage" },
  { icon: Settings, label: "Settings" },
];

const STATS = [
  { label: "Total keys", value: "1,284" },
  { label: "Memory used", value: "4.2 MB" },
  { label: "Requests 24h", value: "18,342" },
  { label: "Error rate", value: "0.03%" },
];

/** Request volume per hour, shaped like a real day of traffic. */
const SERIES = [
  8, 11, 9, 6, 5, 7, 14, 22, 31, 38, 42, 39, 44, 51, 47, 55, 61, 58, 49, 40, 33, 27, 19, 13,
];

function Sparkline() {
  const width = 640;
  const height = 132;
  const max = Math.max(...SERIES);
  const step = width / (SERIES.length - 1);
  const points = SERIES.map((value, index) => [
    index * step,
    height - (value / max) * (height - 12) - 6,
  ]);
  const line = points
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="showcase-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DC382D" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#DC382D" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((fraction) => (
        <line
          key={fraction}
          x1="0"
          x2={width}
          y1={height * fraction}
          y2={height * fraction}
          stroke="#E8E2DF"
          strokeDasharray="2 4"
        />
      ))}
      <path d={area} fill="url(#showcase-fill)" />
      <path d={line} fill="none" stroke="#DC382D" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function BrowserChrome({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-prominent">
      <div className="flex items-center gap-3 border-b border-[var(--line)] bg-[var(--surface)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[var(--line-strong)]" />
          <span className="size-2.5 rounded-full bg-[var(--line-strong)]" />
          <span className="size-2.5 rounded-full bg-[var(--line-strong)]" />
        </div>
        <div className="mx-auto w-full max-w-sm rounded-md bg-white px-3 py-1 text-center font-mono text-[11px] text-[var(--subtle)]">
          {path}
        </div>
      </div>
      {children}
    </div>
  );
}

function TypeBadge({ type }: { type: "STR" | "LST" | "HSH" | "SET" }) {
  const styles = {
    STR: "bg-[#F2F6FA] text-[#2563A8]",
    LST: "bg-[#F3EFFA] text-[#7546C0]",
    HSH: "bg-[#FDF4E7] text-[#C77A11]",
    SET: "bg-[#EAF6F0] text-[#1B8A5A]",
  };
  return (
    <span className={cn("rounded px-1 py-0.5 font-mono text-[9px] font-bold", styles[type])}>
      {type}
    </span>
  );
}

export default function ProductShowcaseSection() {
  return (
    <Section id="dashboard" alt>
      <SectionHeader
        eyebrow="The dashboard"
        title="Everything your keys are doing, in one place."
        description="Browse data, run requests, rotate keys, and watch usage — without opening a Redis CLI."
      />

      <BrowserChrome path={`${APP_URL.replace(/^https?:\/\//, "")}/app/${EXAMPLE_PROJECT}`}>
        <div className="flex min-h-[420px] text-left">
          {/* Sidebar */}
          <aside className="hidden w-[210px] shrink-0 flex-col border-r border-[var(--line)] bg-white py-4 md:flex">
            <div className="flex items-center gap-2 px-4 pb-4">
              <Logo className="size-5" />
              <span className="text-[13px] font-semibold text-[var(--ink)]">Central</span>
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--ink)]">
                {EXAMPLE_PROJECT}
                <span className="text-[var(--subtle)]">⌄</span>
              </div>
            </div>
            <nav className="flex flex-col gap-0.5 px-3">
              {NAV.map(({ icon: Icon, label, active }) => (
                <span
                  key={label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[12.5px]",
                    active
                      ? "bg-[var(--redis-tint)] font-medium text-[var(--redis)]"
                      : "text-[var(--body)]",
                  )}
                >
                  <Icon className="size-4" />
                  {label}
                </span>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2.5">
              <h3 className="font-mono text-lg font-semibold text-[var(--ink)]">
                {EXAMPLE_PROJECT}
              </h3>
              <span className="rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#1B8A5A]">
                active
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[var(--line)] bg-white px-3.5 py-3"
                >
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--subtle)]">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-mono text-[19px] font-semibold text-[var(--ink)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-[var(--line)] bg-white">
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-2.5">
                <span className="text-[13px] font-semibold text-[var(--ink)]">Requests</span>
                <div className="flex gap-1 rounded-md bg-[var(--surface)] p-0.5">
                  {["24h", "7d", "30d"].map((range, index) => (
                    <span
                      key={range}
                      className={cn(
                        "rounded px-2 py-0.5 font-mono text-[10px]",
                        index === 0
                          ? "bg-white font-medium text-[var(--redis)] shadow-subtle"
                          : "text-[var(--subtle)]",
                      )}
                    >
                      {range}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-[132px] px-2 py-2">
                <Sparkline />
              </div>
            </div>
          </div>
        </div>
      </BrowserChrome>

      {/* Supporting screens */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <ShowcaseCard
          caption="Data Browser"
          detail="Filter by pattern, inspect any key, edit JSON in place."
        >
          <div className="flex h-full">
            <div className="w-[46%] border-r border-[var(--line)]">
              {(
                [
                  ["STR", "cart:1042", "58m"],
                  ["STR", "session:a91f", "2h"],
                  ["LST", "queue:emails", "∞"],
                  ["HSH", "order:88", "∞"],
                  ["SET", "tags:live", "∞"],
                ] as const
              ).map(([type, key, ttl], index) => (
                <div
                  key={key}
                  className={cn(
                    "flex items-center gap-1.5 border-b border-[var(--line)] px-2 py-1.5",
                    index === 0 && "border-l-2 border-l-[var(--redis)] bg-[var(--redis-tint)]",
                  )}
                >
                  <TypeBadge type={type} />
                  <span className="flex-1 truncate font-mono text-[9.5px] text-[var(--ink)]">
                    {key}
                  </span>
                  <span className="font-mono text-[8.5px] text-[var(--subtle)]">{ttl}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-[var(--surface)] p-2 font-mono text-[9px] leading-[1.7]">
              <div className="text-[#A03028]">{"{"}</div>
              <div className="pl-2">
                <span className="text-[#A03028]">"user_id"</span>
                <span className="text-[var(--subtle)]">: </span>
                <span className="text-[#2563A8]">1042</span>,
              </div>
              <div className="pl-2">
                <span className="text-[#A03028]">"items"</span>
                <span className="text-[var(--subtle)]">: </span>
                <span className="text-[#2563A8]">3</span>,
              </div>
              <div className="pl-2">
                <span className="text-[#A03028]">"currency"</span>
                <span className="text-[var(--subtle)]">: </span>
                <span className="text-[#1B7A4B]">"usd"</span>
              </div>
              <div className="text-[#A03028]">{"}"}</div>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard caption="API Console" detail="Send real requests without leaving the page.">
          <div className="space-y-2 p-3">
            <div className="flex items-center gap-1.5">
              <span className="rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#1B8A5A]">
                POST
              </span>
              <span className="flex-1 truncate rounded border border-[var(--line)] bg-white px-2 py-1 font-mono text-[9px] text-[var(--ink)]">
                /set/cart:1042
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {["get", "set", "incr", "lpush", "hset"].map((op, index) => (
                <span
                  key={op}
                  className={cn(
                    "rounded-full px-1.5 py-0.5 font-mono text-[8.5px]",
                    index === 1
                      ? "bg-[var(--redis)] text-white"
                      : "border border-[var(--line-strong)] text-[var(--body)]",
                  )}
                >
                  {op}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#1B8A5A]">
                200
              </span>
              <span className="font-mono text-[8.5px] text-[var(--subtle)]">· 14 ms · 86 B</span>
            </div>
            <div className="rounded border border-[var(--line)] bg-[var(--surface)] p-2 font-mono text-[9px] leading-[1.7]">
              <div>
                <span className="text-[#A03028]">"ok"</span>
                <span className="text-[var(--subtle)]">: </span>
                <span className="text-[#8A5CC7]">true</span>
              </div>
              <div>
                <span className="text-[#A03028]">"ttl"</span>
                <span className="text-[var(--subtle)]">: </span>
                <span className="text-[#2563A8]">3600</span>
              </div>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard caption="API Keys" detail="Name, rotate, and revoke keys independently.">
          <div className="p-3">
            <div className="grid grid-cols-[1fr_auto] gap-y-2 font-mono text-[9px]">
              {(
                [
                  ["Production", "2 min ago"],
                  ["Staging", "4 hours ago"],
                  ["Local dev", "3 days ago"],
                  ["CI pipeline", "never"],
                ] as const
              ).map(([name, used]) => (
                <ShowcaseKeyRow key={name} name={name} used={used} />
              ))}
            </div>
          </div>
        </ShowcaseCard>
      </div>
    </Section>
  );
}

function ShowcaseKeyRow({ name, used }: { name: string; used: string }) {
  const unused = used === "never";
  return (
    <>
      <div className="flex flex-col border-b border-[var(--line)] pb-1.5">
        <span className="font-sans text-[10px] font-medium text-[var(--ink)]">{name}</span>
        <span className="text-[8.5px] text-[var(--subtle)]">sk_live_••••••••3f9a</span>
      </div>
      <div
        className={cn(
          "flex items-end justify-end border-b border-[var(--line)] pb-1.5 text-[8.5px]",
          unused ? "text-[var(--warn)]" : "text-[var(--subtle)]",
        )}
      >
        {used}
      </div>
    </>
  );
}

function ShowcaseCard({
  caption,
  detail,
  children,
}: {
  caption: string;
  detail: string;
  children: React.ReactNode;
}) {
  return (
    <figure>
      <div className="h-[168px] overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-subtle">
        {children}
      </div>
      <figcaption className="mt-3">
        <p className="text-sm font-semibold text-[var(--ink)]">{caption}</p>
        <p className="mt-0.5 text-[13px] text-[var(--body)]">{detail}</p>
      </figcaption>
    </figure>
  );
}
