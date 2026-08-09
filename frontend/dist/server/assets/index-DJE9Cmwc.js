import { clsx } from "clsx";
import { ArrowRight, BarChart3, Braces, Check, ChevronDown, Copy, Database, Gauge, Github, Globe, KeyRound, Layers, LineChart, Linkedin, Menu, Plus, Search, Send, Settings, ShieldCheck, Terminal, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Logo({ className }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: cn("size-6", className), "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { fill: "#DC382D", d: "M12 1.8l9.1 5.25v10.5L12 22.8l-9.1-5.25V7.05z" }),
    /* @__PURE__ */ jsx("path", { fill: "#fff", fillOpacity: "0.9", d: "M12 6.6l5 2.9-5 2.9-5-2.9z" }),
    /* @__PURE__ */ jsx("path", { fill: "#fff", fillOpacity: "0.55", d: "M12 13.1l5-2.9v3.3l-5 2.9-5-2.9v-3.3z" })
  ] });
}
function Section({
  id,
  alt,
  className,
  children
}) {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id,
      className: cn(
        "section-y",
        alt ? "bg-[var(--surface-alt)]" : "bg-[var(--surface)]",
        className
      ),
      children: /* @__PURE__ */ jsx("div", { className: "container-page", children })
    }
  );
}
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start"
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "max-w-[18ch] text-[30px] font-semibold leading-[1.15] text-[var(--ink)] sm:text-4xl", children: title }),
        description ? /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "prose-measure text-base leading-relaxed text-[var(--body)]",
              align === "center" && "mx-auto"
            ),
            children: description
          }
        ) : null
      ]
    }
  );
}
const BUTTON_BASE = "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--redis)] focus-visible:ring-offset-2";
function PrimaryLink({
  href,
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: cn(
        BUTTON_BASE,
        "bg-[var(--redis)] text-white hover:bg-[var(--redis-hover)]",
        className
      ),
      children
    }
  );
}
function SecondaryLink({
  href,
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: cn(
        BUTTON_BASE,
        "border border-[var(--line-strong)] bg-white text-[var(--ink)] hover:bg-[var(--surface)]",
        className
      ),
      children
    }
  );
}
function Card({ className, children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "rounded-xl border border-[var(--line)] bg-white p-6 transition-colors hover:border-[var(--line-strong)]",
        className
      ),
      children
    }
  );
}
function StatusDot({ tone = "ok" }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "size-1.5 shrink-0 rounded-full",
      style: { background: tone === "ok" ? "var(--ok)" : "var(--warn)" }
    }
  );
}
const APP_URL = "https://api.redis.mohammadramiz.in";
const API_BASE = "https://api.redis.mohammadramiz.in";
const SIGNUP_URL = `${APP_URL}/signup`;
const SIGNIN_URL = `${APP_URL}/login`;
const DOCS_URL = `${APP_URL}/docs`;
const CONTACT_EMAIL = "ramizanas6@gmail.com";
const GITHUB_URL = "https://github.com/RamizMohammad";
const LINKEDIN_URL = "https://www.linkedin.com/in/ramizmohammad";
const PORTFOLIO_URL = "https://www.mohammadramiz.in";
const LIMITS = {
  projects: 1,
  keys: 1e4,
  storage: "100 MB",
  requestsPerMonth: 1e6,
  apiKeysPerProject: 10
};
const EXAMPLE_PROJECT = "checkout_svc";
const EXAMPLE_BASE = `${API_BASE}/${EXAMPLE_PROJECT}`;
const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Playground", href: "#playground" },
  { label: "Pricing", href: "#pricing" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "header",
      {
        className: cn(
          "fixed inset-x-0 top-0 z-50 bg-[var(--surface)]/85 backdrop-blur-md transition-colors",
          scrolled ? "border-b border-[var(--line)]" : "border-b border-transparent"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "container-page flex h-[68px] items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Logo, {}),
            /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-tight text-[var(--ink)]", children: "Central Redis" })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 md:flex", children: [
            NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]",
                children: link.label
              },
              link.href
            )),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: DOCS_URL,
                className: "text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]",
                children: "Docs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: SIGNIN_URL,
                className: "text-sm font-medium text-[var(--body)] transition-colors hover:text-[var(--ink)]",
                children: "Sign in"
              }
            ),
            /* @__PURE__ */ jsx(PrimaryLink, { href: SIGNUP_URL, className: "h-9 px-4", children: "Start free" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:hidden", children: [
            /* @__PURE__ */ jsx(PrimaryLink, { href: SIGNUP_URL, className: "h-9 px-3.5 text-[13px]", children: "Start free" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen(true),
                "aria-label": "Open menu",
                className: "grid size-9 place-items-center rounded-md text-[var(--ink)]",
                children: /* @__PURE__ */ jsx(Menu, { className: "size-5" })
              }
            )
          ] })
        ] })
      }
    ),
    open ? /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60] bg-[var(--surface)] md:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-page flex h-[68px] items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-[var(--ink)]", children: "Central Redis" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpen(false),
            "aria-label": "Close menu",
            className: "grid size-9 place-items-center rounded-md text-[var(--ink)]",
            children: /* @__PURE__ */ jsx(X, { className: "size-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container-page flex flex-col gap-6 pt-8", children: [
        NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            onClick: () => setOpen(false),
            className: "text-[22px] font-medium text-[var(--ink)]",
            children: link.label
          },
          link.href
        )),
        /* @__PURE__ */ jsx("a", { href: DOCS_URL, className: "text-[22px] font-medium text-[var(--ink)]", children: "Docs" }),
        /* @__PURE__ */ jsx("a", { href: SIGNIN_URL, className: "text-[22px] font-medium text-[var(--ink)]", children: "Sign in" }),
        /* @__PURE__ */ jsx(PrimaryLink, { href: SIGNUP_URL, className: "mt-4 w-full", children: "Start free" })
      ] })
    ] }) : null
  ] });
}
const TOKEN_CLASS = {
  cmd: "text-[#f0857d]",
  str: "text-[#8fd19e]",
  kw: "text-[#e8b33a]",
  comment: "text-[#9a908b]",
  ok: "text-[#8fd19e]",
  plain: "text-[#f5efec]"
};
function lineToText(line) {
  return line.map((token) => "v" in token ? token.v : "").join("");
}
function CodeBlock({
  title,
  lines,
  className,
  copyText
}) {
  const [copied, setCopied] = useState(false);
  const plain = copyText ?? lines.map(lineToText).join("\n");
  async function copy() {
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "overflow-hidden rounded-xl border border-black/40 bg-[var(--code)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-white/8 bg-[var(--code-alt)] px-4 py-2.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-white/15" }),
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-white/15" }),
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-white/15" })
          ] }),
          title ? /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] tracking-wide text-[#9a908b]", children: title }) : null,
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: copy,
              "aria-label": "Copy code",
              className: "flex items-center gap-1.5 rounded px-2 py-1 font-mono text-[11px] text-[#9a908b] transition-colors hover:bg-white/10 hover:text-[#f5efec]",
              children: [
                copied ? /* @__PURE__ */ jsx(Check, { className: "size-3" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3" }),
                copied ? "Copied" : "Copy"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("pre", { className: "overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.75] text-[#f5efec]", children: /* @__PURE__ */ jsx("code", { children: lines.map((line, index) => /* @__PURE__ */ jsx("div", { className: "min-h-[1.75em] whitespace-pre", children: line.map(
          (token, tokenIndex) => "v" in token ? /* @__PURE__ */ jsx("span", { className: TOKEN_CLASS[token.t], children: token.v }, tokenIndex) : null
        ) }, index)) }) })
      ]
    }
  );
}
const tok = {
  cmd: (v) => ({ t: "cmd", v }),
  str: (v) => ({ t: "str", v }),
  kw: (v) => ({ t: "kw", v }),
  comment: (v) => ({ t: "comment", v }),
  ok: (v) => ({ t: "ok", v }),
  p: (v) => ({ t: "plain", v })
};
const HERO_SNIPPET = [
  [tok.cmd("curl"), tok.p(" -X POST "), tok.p(`${EXAMPLE_BASE}/set/cart:42`), tok.p(" \\")],
  [tok.p("  -H "), tok.str('"x-api-key: sk_live_8Kd…"'), tok.p(" \\")],
  [tok.p("  -H "), tok.str('"Content-Type: application/json"'), tok.p(" \\")],
  [tok.p("  -d "), tok.str(`'{"value": {"items": 3}, "ttl": 3600}'`)],
  [],
  [tok.comment("# 200 OK · 11 ms")],
  [tok.ok(`{"ok": true, "key": "cart:42", "ttl": 3600}`)]
];
const COPY_TEXT = `curl -X POST ${EXAMPLE_BASE}/set/cart:42 \\
  -H "x-api-key: sk_live_8Kd…" \\
  -H "Content-Type: application/json" \\
  -d '{"value": {"items": 3}, "ttl": 3600}'`;
const REASSURANCE = ["No credit card", "Live in under a minute", "Your data stays namespaced"];
const BUILT_ON = ["FastAPI", "Redis", "MongoDB Atlas", "Python", "Render"];
function HeroSection() {
  return /* @__PURE__ */ jsxs("div", { id: "top", className: "hero-wash", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-page grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[52fr_48fr] lg:gap-16 lg:pb-28 lg:pt-24", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-[var(--redis-tint)] px-3 py-1.5 font-mono text-[12px] text-[var(--ink)]", children: [
          /* @__PURE__ */ jsx(StatusDot, {}),
          "Live in production — free while in beta"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--ink)] sm:text-[52px] lg:text-[56px]", children: [
          "One Redis layer.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-[var(--redis)]", children: "Every project you ship." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "prose-measure mt-6 text-[17px] leading-relaxed text-[var(--body)]", children: "Isolated namespaces, per-project API keys, and a REST endpoint for every Redis operation. No connection strings. No instance to babysit." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxs(PrimaryLink, { href: SIGNUP_URL, children: [
            "Start free — ",
            LIMITS.projects,
            " project"
          ] }),
          /* @__PURE__ */ jsx(SecondaryLink, { href: DOCS_URL, children: "Read the docs" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 flex flex-wrap items-center gap-x-5 gap-y-2", children: REASSURANCE.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5 text-[13px] text-[var(--subtle)]", children: [
          /* @__PURE__ */ jsx(Check, { className: "size-3.5 text-[var(--redis)]" }),
          item
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:pl-4", children: /* @__PURE__ */ jsx(
        CodeBlock,
        {
          title: "cURL / checkout_svc",
          lines: HERO_SNIPPET,
          copyText: COPY_TEXT,
          className: "shadow-prominent"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-[var(--line)] bg-white/60", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--subtle)]", children: "Built on" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3", children: BUILT_ON.map((item) => /* @__PURE__ */ jsx("li", { className: "text-[15px] font-medium text-[var(--subtle)]", children: item }, item)) })
    ] }) })
  ] });
}
const NAV = [
  { icon: Gauge, label: "Overview", active: true },
  { icon: Database, label: "Data Browser" },
  { icon: Terminal, label: "API Console" },
  { icon: KeyRound, label: "API Keys" },
  { icon: BarChart3, label: "Usage" },
  { icon: Settings, label: "Settings" }
];
const STATS = [
  { label: "Total keys", value: "1,284" },
  { label: "Memory used", value: "4.2 MB" },
  { label: "Requests 24h", value: "18,342" },
  { label: "Error rate", value: "0.03%" }
];
const SERIES = [
  8,
  11,
  9,
  6,
  5,
  7,
  14,
  22,
  31,
  38,
  42,
  39,
  44,
  51,
  47,
  55,
  61,
  58,
  49,
  40,
  33,
  27,
  19,
  13
];
function Sparkline() {
  const width = 640;
  const height = 132;
  const max = Math.max(...SERIES);
  const step = width / (SERIES.length - 1);
  const points = SERIES.map((value, index) => [
    index * step,
    height - value / max * (height - 12) - 6
  ]);
  const line = points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${width} ${height}`, className: "h-full w-full", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "showcase-fill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#DC382D", stopOpacity: "0.26" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#DC382D", stopOpacity: "0" })
    ] }) }),
    [0.25, 0.5, 0.75].map((fraction) => /* @__PURE__ */ jsx(
      "line",
      {
        x1: "0",
        x2: width,
        y1: height * fraction,
        y2: height * fraction,
        stroke: "#E8E2DF",
        strokeDasharray: "2 4"
      },
      fraction
    )),
    /* @__PURE__ */ jsx("path", { d: area, fill: "url(#showcase-fill)" }),
    /* @__PURE__ */ jsx("path", { d: line, fill: "none", stroke: "#DC382D", strokeWidth: "2", strokeLinejoin: "round" })
  ] });
}
function BrowserChrome({ path, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-prominent", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-[var(--line)] bg-[var(--surface)] px-4 py-2.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-[var(--line-strong)]" }),
        /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-[var(--line-strong)]" }),
        /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-[var(--line-strong)]" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-sm rounded-md bg-white px-3 py-1 text-center font-mono text-[11px] text-[var(--subtle)]", children: path })
    ] }),
    children
  ] });
}
function TypeBadge({ type }) {
  const styles = {
    STR: "bg-[#F2F6FA] text-[#2563A8]",
    LST: "bg-[#F3EFFA] text-[#7546C0]",
    HSH: "bg-[#FDF4E7] text-[#C77A11]",
    SET: "bg-[#EAF6F0] text-[#1B8A5A]"
  };
  return /* @__PURE__ */ jsx("span", { className: cn("rounded px-1 py-0.5 font-mono text-[9px] font-bold", styles[type]), children: type });
}
function ProductShowcaseSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "dashboard", alt: true, children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "The dashboard",
        title: "Everything your keys are doing, in one place.",
        description: "Browse data, run requests, rotate keys, and watch usage — without opening a Redis CLI."
      }
    ),
    /* @__PURE__ */ jsx(BrowserChrome, { path: `${APP_URL.replace(/^https?:\/\//, "")}/app/${EXAMPLE_PROJECT}`, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-[420px] text-left", children: [
      /* @__PURE__ */ jsxs("aside", { className: "hidden w-[210px] shrink-0 flex-col border-r border-[var(--line)] bg-white py-4 md:flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 pb-4", children: [
          /* @__PURE__ */ jsx(Logo, { className: "size-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold text-[var(--ink)]", children: "Central" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-3 pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--ink)]", children: [
          EXAMPLE_PROJECT,
          /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: "⌄" })
        ] }) }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-0.5 px-3", children: NAV.map(({ icon: Icon, label, active }) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: cn(
              "flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[12.5px]",
              active ? "bg-[var(--redis-tint)] font-medium text-[var(--redis)]" : "text-[var(--body)]"
            ),
            children: [
              /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
              label
            ]
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 bg-[var(--surface)] p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-mono text-lg font-semibold text-[var(--ink)]", children: EXAMPLE_PROJECT }),
          /* @__PURE__ */ jsx("span", { className: "rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#1B8A5A]", children: "active" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4", children: STATS.map((stat) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-lg border border-[var(--line)] bg-white px-3.5 py-3",
            children: [
              /* @__PURE__ */ jsx("p", { className: "font-mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--subtle)]", children: stat.label }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 font-mono text-[19px] font-semibold text-[var(--ink)]", children: stat.value })
            ]
          },
          stat.label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-lg border border-[var(--line)] bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[var(--line)] px-4 py-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold text-[var(--ink)]", children: "Requests" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-1 rounded-md bg-[var(--surface)] p-0.5", children: ["24h", "7d", "30d"].map((range, index) => /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "rounded px-2 py-0.5 font-mono text-[10px]",
                  index === 0 ? "bg-white font-medium text-[var(--redis)] shadow-subtle" : "text-[var(--subtle)]"
                ),
                children: range
              },
              range
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[132px] px-2 py-2", children: /* @__PURE__ */ jsx(Sparkline, {}) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(
        ShowcaseCard,
        {
          caption: "Data Browser",
          detail: "Filter by pattern, inspect any key, edit JSON in place.",
          children: /* @__PURE__ */ jsxs("div", { className: "flex h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-[46%] border-r border-[var(--line)]", children: [
              ["STR", "cart:1042", "58m"],
              ["STR", "session:a91f", "2h"],
              ["LST", "queue:emails", "∞"],
              ["HSH", "order:88", "∞"],
              ["SET", "tags:live", "∞"]
            ].map(([type, key, ttl], index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "flex items-center gap-1.5 border-b border-[var(--line)] px-2 py-1.5",
                  index === 0 && "border-l-2 border-l-[var(--redis)] bg-[var(--redis-tint)]"
                ),
                children: [
                  /* @__PURE__ */ jsx(TypeBadge, { type }),
                  /* @__PURE__ */ jsx("span", { className: "flex-1 truncate font-mono text-[9.5px] text-[var(--ink)]", children: key }),
                  /* @__PURE__ */ jsx("span", { className: "font-mono text-[8.5px] text-[var(--subtle)]", children: ttl })
                ]
              },
              key
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-[var(--surface)] p-2 font-mono text-[9px] leading-[1.7]", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[#A03028]", children: "{" }),
              /* @__PURE__ */ jsxs("div", { className: "pl-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#A03028]", children: '"user_id"' }),
                /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: ": " }),
                /* @__PURE__ */ jsx("span", { className: "text-[#2563A8]", children: "1042" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pl-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#A03028]", children: '"items"' }),
                /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: ": " }),
                /* @__PURE__ */ jsx("span", { className: "text-[#2563A8]", children: "3" }),
                ","
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pl-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#A03028]", children: '"currency"' }),
                /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: ": " }),
                /* @__PURE__ */ jsx("span", { className: "text-[#1B7A4B]", children: '"usd"' })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[#A03028]", children: "}" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(ShowcaseCard, { caption: "API Console", detail: "Send real requests without leaving the page.", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#1B8A5A]", children: "POST" }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 truncate rounded border border-[var(--line)] bg-white px-2 py-1 font-mono text-[9px] text-[var(--ink)]", children: "/set/cart:1042" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: ["get", "set", "incr", "lpush", "hset"].map((op, index) => /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "rounded-full px-1.5 py-0.5 font-mono text-[8.5px]",
              index === 1 ? "bg-[var(--redis)] text-white" : "border border-[var(--line-strong)] text-[var(--body)]"
            ),
            children: op
          },
          op
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 pt-1", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded bg-[#EAF6F0] px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#1B8A5A]", children: "200" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[8.5px] text-[var(--subtle)]", children: "· 14 ms · 86 B" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded border border-[var(--line)] bg-[var(--surface)] p-2 font-mono text-[9px] leading-[1.7]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#A03028]", children: '"ok"' }),
            /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: ": " }),
            /* @__PURE__ */ jsx("span", { className: "text-[#8A5CC7]", children: "true" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#A03028]", children: '"ttl"' }),
            /* @__PURE__ */ jsx("span", { className: "text-[var(--subtle)]", children: ": " }),
            /* @__PURE__ */ jsx("span", { className: "text-[#2563A8]", children: "3600" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ShowcaseCard, { caption: "API Keys", detail: "Name, rotate, and revoke keys independently.", children: /* @__PURE__ */ jsx("div", { className: "p-3", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-[1fr_auto] gap-y-2 font-mono text-[9px]", children: [
        ["Production", "2 min ago"],
        ["Staging", "4 hours ago"],
        ["Local dev", "3 days ago"],
        ["CI pipeline", "never"]
      ].map(([name, used]) => /* @__PURE__ */ jsx(ShowcaseKeyRow, { name, used }, name)) }) }) })
    ] })
  ] });
}
function ShowcaseKeyRow({ name, used }) {
  const unused = used === "never";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-b border-[var(--line)] pb-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "font-sans text-[10px] font-medium text-[var(--ink)]", children: name }),
      /* @__PURE__ */ jsx("span", { className: "text-[8.5px] text-[var(--subtle)]", children: "sk_live_••••••••3f9a" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex items-end justify-end border-b border-[var(--line)] pb-1.5 text-[8.5px]",
          unused ? "text-[var(--warn)]" : "text-[var(--subtle)]"
        ),
        children: used
      }
    )
  ] });
}
function ShowcaseCard({
  caption,
  detail,
  children
}) {
  return /* @__PURE__ */ jsxs("figure", { children: [
    /* @__PURE__ */ jsx("div", { className: "h-[168px] overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-subtle", children }),
    /* @__PURE__ */ jsxs("figcaption", { className: "mt-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-[var(--ink)]", children: caption }),
      /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[13px] text-[var(--body)]", children: detail })
    ] })
  ] });
}
const FEATURES = [
  {
    icon: Layers,
    title: "Namespaced by default",
    body: "Every key is stored as project_id:key. Two projects can both use session:1 without ever seeing each other.",
    mono: `${EXAMPLE_PROJECT}:session:1`
  },
  {
    icon: KeyRound,
    title: "Keys you can rotate",
    body: `Up to ${LIMITS.apiKeysPerProject} named API keys per project. Rotate or revoke one without touching the others. Stored hashed — shown once.`,
    mono: "sk_live_••••••••3f9a"
  },
  {
    icon: Braces,
    title: "Real data types",
    body: "Strings, lists, hashes, and sets. TTLs, atomic counters, batch reads and writes.",
    chips: ["GET", "SET", "LPUSH", "HSET", "SADD", "INCR"]
  },
  {
    icon: LineChart,
    title: "Usage you can see",
    body: "Request volume, error rate, and p50/p95/p99 latency per project, broken down by operation.",
    mono: "p50 8ms · p95 34ms"
  },
  {
    icon: Search,
    title: "A browser for your keys",
    body: "Filter by glob pattern, inspect any value, edit JSON in place. Cursor paginated, so a large keyspace stays responsive.",
    mono: "cart:*"
  },
  {
    icon: ShieldCheck,
    title: "Isolation that's enforced",
    body: "A project's key only ever authenticates that project. Wrong project, wrong key, revoked key — all rejected at the edge.",
    mono: "401 Invalid API key"
  }
];
function FeatureGridSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "features", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "What you get",
        title: "Built for the way you actually use Redis.",
        description: "Every Redis primitive you reach for, exposed over HTTP and scoped to one project."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: FEATURES.map((feature) => /* @__PURE__ */ jsxs(Card, { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx(feature.icon, { className: "size-[22px] text-[var(--redis)]", strokeWidth: 1.7 }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-[17px] font-semibold text-[var(--ink)]", children: feature.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-[var(--body)]", children: feature.body }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 border-t border-[var(--line)] pt-3", children: feature.chips ? /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: feature.chips.map((chip) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded bg-[var(--redis-tint)] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--redis)]",
          children: chip
        },
        chip
      )) }) : /* @__PURE__ */ jsx("p", { className: "font-mono text-[11.5px] text-[var(--subtle)]", children: feature.mono }) })
    ] }, feature.title)) })
  ] });
}
const STEP_TWO = [
  [tok.cmd("curl"), tok.p(" -X POST $BASE/set/cart:42 \\")],
  [tok.p("  -H "), tok.str('"x-api-key: $KEY"'), tok.p(" \\")],
  [tok.p("  -d "), tok.str(`'{"value": {"items": 3}, "ttl": 3600}'`)]
];
const STEP_THREE = [
  [tok.cmd("curl"), tok.p(" $BASE/get/cart:42 -H "), tok.str('"x-api-key: $KEY"')],
  [],
  [tok.ok(`{"key":"cart:42","value":{"items":3},"exists":true}`)]
];
function HowItWorksSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "how-it-works", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "How it works",
        title: "Three steps. Zero ops.",
        description: "From signing up to storing your first key is about a minute."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-3 md:gap-0", children: [
      /* @__PURE__ */ jsx(
        Step,
        {
          number: "01",
          title: "Create a project",
          body: "Pick an ID. You get an isolated namespace and an API key, shown once.",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white p-2", children: [
            /* @__PURE__ */ jsx("span", { className: "flex-1 rounded-md border border-[var(--line-strong)] px-3 py-2 font-mono text-[12.5px] text-[var(--ink)]", children: EXAMPLE_PROJECT }),
            /* @__PURE__ */ jsx("span", { className: "rounded-md bg-[var(--redis)] px-3 py-2 text-[12.5px] font-medium text-white", children: "Create" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Step,
        {
          number: "02",
          title: "Store something",
          body: "Any JSON value, with an optional TTL in seconds.",
          bordered: true,
          children: /* @__PURE__ */ jsx(CodeBlock, { lines: STEP_TWO })
        }
      ),
      /* @__PURE__ */ jsx(
        Step,
        {
          number: "03",
          title: "Read it back",
          body: "Values round-trip as JSON. Objects come back as objects, not strings.",
          bordered: true,
          children: /* @__PURE__ */ jsx(CodeBlock, { lines: STEP_THREE })
        }
      )
    ] })
  ] });
}
function Step({
  number,
  title,
  body,
  bordered,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: bordered ? "md:border-l md:border-[var(--line)] md:pl-8 md:ml-8" : "md:pr-8", children: [
    /* @__PURE__ */ jsx("p", { className: "font-mono text-[40px] font-semibold leading-none text-[var(--redis)]/20", children: number }),
    /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-semibold text-[var(--ink)]", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-[15px] leading-relaxed text-[var(--body)]", children: body }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children })
  ] });
}
const CURL = {
  label: "cURL",
  lines: [
    [tok.comment("# write with a one-hour TTL")],
    [tok.cmd("curl"), tok.p(" -X POST "), tok.p(`${EXAMPLE_BASE}/set/cart:42`), tok.p(" \\")],
    [tok.p("  -H "), tok.str('"x-api-key: $CENTRAL_KEY"'), tok.p(" \\")],
    [tok.p("  -H "), tok.str('"Content-Type: application/json"'), tok.p(" \\")],
    [tok.p("  -d "), tok.str(`'{"value": {"items": 3}, "ttl": 3600}'`)],
    [],
    [tok.comment("# read it back")],
    [tok.cmd("curl"), tok.p(` ${EXAMPLE_BASE}/get/cart:42 \\`)],
    [tok.p("  -H "), tok.str('"x-api-key: $CENTRAL_KEY"')]
  ],
  plain: `curl -X POST ${EXAMPLE_BASE}/set/cart:42 \\
  -H "x-api-key: $CENTRAL_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"value": {"items": 3}, "ttl": 3600}'

curl ${EXAMPLE_BASE}/get/cart:42 \\
  -H "x-api-key: $CENTRAL_KEY"`
};
const JAVASCRIPT = {
  label: "JavaScript",
  lines: [
    [tok.kw("const"), tok.p(" BASE = "), tok.str(`"${EXAMPLE_BASE}"`), tok.p(";")],
    [tok.kw("const"), tok.p(" headers = {")],
    [tok.p("  "), tok.str('"x-api-key"'), tok.p(": process.env.CENTRAL_KEY,")],
    [tok.p("  "), tok.str('"Content-Type"'), tok.p(": "), tok.str('"application/json"')],
    [tok.p("};")],
    [],
    [tok.comment("// write with a one-hour TTL")],
    [tok.kw("await"), tok.p(" fetch(`${BASE}/set/cart:42`, {")],
    [tok.p("  method: "), tok.str('"POST"'), tok.p(",")],
    [tok.p("  headers,")],
    [
      tok.p("  body: JSON.stringify({ value: { items: "),
      tok.kw("3"),
      tok.p(" }, ttl: "),
      tok.kw("3600"),
      tok.p(" })")
    ],
    [tok.p("});")],
    [],
    [tok.comment("// read it back")],
    [
      tok.kw("const"),
      tok.p(" res = "),
      tok.kw("await"),
      tok.p(" fetch(`${BASE}/get/cart:42`, { headers });")
    ],
    [
      tok.kw("const"),
      tok.p(" { value } = "),
      tok.kw("await"),
      tok.p(" res.json();  "),
      tok.comment("// { items: 3 }")
    ]
  ],
  plain: `const BASE = "${EXAMPLE_BASE}";
const headers = {
  "x-api-key": process.env.CENTRAL_KEY,
  "Content-Type": "application/json"
};

await fetch(\`\${BASE}/set/cart:42\`, {
  method: "POST",
  headers,
  body: JSON.stringify({ value: { items: 3 }, ttl: 3600 })
});

const res = await fetch(\`\${BASE}/get/cart:42\`, { headers });
const { value } = await res.json();`
};
const PYTHON = {
  label: "Python",
  lines: [
    [tok.kw("import"), tok.p(" os, requests")],
    [],
    [tok.p("BASE = "), tok.str(`"${EXAMPLE_BASE}"`)],
    [
      tok.p("headers = {"),
      tok.str('"x-api-key"'),
      tok.p(": os.environ["),
      tok.str('"CENTRAL_KEY"'),
      tok.p("]}")
    ],
    [],
    [tok.comment("# write with a one-hour TTL")],
    [tok.p("requests.post(")],
    [tok.p("    f"), tok.str('"{BASE}/set/cart:42"'), tok.p(",")],
    [tok.p("    headers=headers,")],
    [
      tok.p("    json={"),
      tok.str('"value"'),
      tok.p(": {"),
      tok.str('"items"'),
      tok.p(": 3}, "),
      tok.str('"ttl"'),
      tok.p(": 3600},")
    ],
    [tok.p(")")],
    [],
    [tok.comment("# read it back")],
    [
      tok.p("value = requests.get(f"),
      tok.str('"{BASE}/get/cart:42"'),
      tok.p(", headers=headers).json()[")
    ],
    [tok.p("    "), tok.str('"value"'), tok.p("]")]
  ],
  plain: `import os, requests

BASE = "${EXAMPLE_BASE}"
headers = {"x-api-key": os.environ["CENTRAL_KEY"]}

requests.post(
    f"{BASE}/set/cart:42",
    headers=headers,
    json={"value": {"items": 3}, "ttl": 3600},
)

value = requests.get(f"{BASE}/get/cart:42", headers=headers).json()["value"]`
};
const GO = {
  label: "Go",
  lines: [
    [
      tok.kw("body"),
      tok.p(" := strings.NewReader(`{"),
      tok.str('"value"'),
      tok.p(": {"),
      tok.str('"items"'),
      tok.p(": 3}, "),
      tok.str('"ttl"'),
      tok.p(": 3600}`)")
    ],
    [],
    [tok.kw("req"), tok.p(", _ := http.NewRequest(")],
    [
      tok.p("    "),
      tok.str('"POST"'),
      tok.p(", "),
      tok.str(`"${EXAMPLE_BASE}/set/cart:42"`),
      tok.p(", body,")
    ],
    [tok.p(")")],
    [
      tok.p("req.Header.Set("),
      tok.str('"x-api-key"'),
      tok.p(", os.Getenv("),
      tok.str('"CENTRAL_KEY"'),
      tok.p("))")
    ],
    [
      tok.p("req.Header.Set("),
      tok.str('"Content-Type"'),
      tok.p(", "),
      tok.str('"application/json"'),
      tok.p(")")
    ],
    [],
    [tok.kw("res"), tok.p(", err := http.DefaultClient.Do(req)")]
  ],
  plain: `body := strings.NewReader(\`{"value": {"items": 3}, "ttl": 3600}\`)

req, _ := http.NewRequest(
    "POST", "${EXAMPLE_BASE}/set/cart:42", body,
)
req.Header.Set("x-api-key", os.Getenv("CENTRAL_KEY"))
req.Header.Set("Content-Type", "application/json")

res, err := http.DefaultClient.Do(req)`
};
const RUBY = {
  label: "Ruby",
  lines: [
    [
      tok.kw("require"),
      tok.p(" "),
      tok.str('"net/http"'),
      tok.p("; "),
      tok.kw("require"),
      tok.p(" "),
      tok.str('"json"')
    ],
    [],
    [tok.p("uri = URI("), tok.str(`"${EXAMPLE_BASE}/set/cart:42"`), tok.p(")")],
    [tok.p("req = Net::HTTP::Post.new(uri)")],
    [
      tok.p("req["),
      tok.str('"x-api-key"'),
      tok.p("] = ENV.fetch("),
      tok.str('"CENTRAL_KEY"'),
      tok.p(")")
    ],
    [tok.p("req["), tok.str('"Content-Type"'), tok.p("] = "), tok.str('"application/json"')],
    [
      tok.p("req.body = { value: { items: "),
      tok.kw("3"),
      tok.p(" }, ttl: "),
      tok.kw("3600"),
      tok.p(" }.to_json")
    ],
    [],
    [
      tok.p("Net::HTTP.start(uri.host, uri.port, use_ssl: "),
      tok.kw("true"),
      tok.p(") { |h| h.request(req) }")
    ]
  ],
  plain: `require "net/http"; require "json"

uri = URI("${EXAMPLE_BASE}/set/cart:42")
req = Net::HTTP::Post.new(uri)
req["x-api-key"] = ENV.fetch("CENTRAL_KEY")
req["Content-Type"] = "application/json"
req.body = { value: { items: 3 }, ttl: 3600 }.to_json

Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |h| h.request(req) }`
};
const SAMPLES = [CURL, JAVASCRIPT, PYTHON, GO, RUBY];
function CodeSamplesSection() {
  const [active, setActive] = useState(1);
  const sample = SAMPLES[active];
  return /* @__PURE__ */ jsx(Section, { id: "integration", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-[40fr_60fr] lg:gap-14", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Integration" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-[30px] font-semibold leading-[1.15] text-[var(--ink)] sm:text-4xl", children: "It’s just HTTP." }),
      /* @__PURE__ */ jsx("p", { className: "prose-measure mt-5 text-base leading-relaxed text-[var(--body)]", children: "No client library to install, no connection pool to size, no TLS config. If your language can make an HTTP request, it can use Central Redis." }),
      /* @__PURE__ */ jsx("p", { className: "prose-measure mt-4 text-base leading-relaxed text-[var(--body)]", children: "Values are stored as JSON when they parse as JSON, and as raw strings when they don’t. Reads reverse it, so what you put in is what you get back." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: DOCS_URL,
          className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--redis)] hover:underline",
          children: [
            "Full API reference",
            /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex flex-wrap gap-1", children: SAMPLES.map((item, index) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setActive(index),
          className: cn(
            "rounded-md px-3 py-1.5 font-mono text-[12.5px] transition-colors",
            index === active ? "bg-[var(--redis-tint)] font-medium text-[var(--redis)]" : "text-[var(--body)] hover:bg-white"
          ),
          children: item.label
        },
        item.label
      )) }),
      /* @__PURE__ */ jsx(
        CodeBlock,
        {
          title: sample.label,
          lines: sample.lines,
          copyText: sample.plain,
          className: "shadow-prominent"
        }
      )
    ] })
  ] }) });
}
const OPERATIONS = [
  { name: "get", method: "GET", path: (k) => `/get/${k}`, needsKey: true },
  {
    name: "set",
    method: "POST",
    path: (k) => `/set/${k}`,
    needsKey: true,
    body: '{\n  "value": { "items": 3 },\n  "ttl": 3600\n}'
  },
  { name: "ttl", method: "GET", path: (k) => `/ttl/${k}`, needsKey: true },
  {
    name: "incr",
    method: "POST",
    path: (k) => `/incr/${k}`,
    needsKey: true,
    body: '{\n  "by": 1\n}'
  },
  { name: "delete", method: "DELETE", path: (k) => `/delete/${k}`, needsKey: true },
  {
    name: "lpush",
    method: "POST",
    path: (k) => `/lpush/${k}`,
    needsKey: true,
    body: '{\n  "values": ["first", "second"]\n}'
  },
  { name: "lrange", method: "GET", path: (k) => `/lrange/${k}`, needsKey: true },
  {
    name: "hset",
    method: "POST",
    path: (k) => `/hset/${k}`,
    needsKey: true,
    body: '{\n  "mapping": { "status": "paid" }\n}'
  },
  { name: "hgetall", method: "GET", path: (k) => `/hgetall/${k}`, needsKey: true },
  { name: "keys", method: "GET", path: () => "/keys", needsKey: false }
];
const METHOD_STYLES = {
  GET: "bg-[#F2F6FA] text-[#2563A8]",
  POST: "bg-[#EAF6F0] text-[#1B8A5A]",
  DELETE: "bg-[var(--redis-tint)] text-[var(--redis)]"
};
function JsonView({ value }) {
  const text = JSON.stringify(value, null, 2) ?? "";
  const html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/("(?:\\.|[^"\\])*"(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?)/g, (match) => {
    let cls = "text-[#2563A8]";
    if (/^"/.test(match)) cls = /:$/.test(match) ? "text-[#A03028]" : "text-[#1B7A4B]";
    else if (/true|false|null/.test(match)) cls = "text-[#8A5CC7]";
    return `<span class="${cls}">${match}</span>`;
  });
  return /* @__PURE__ */ jsx(
    "pre",
    {
      className: "overflow-x-auto rounded-lg border border-[var(--line)] bg-white p-3.5 font-mono text-[12.5px] leading-[1.7]",
      dangerouslySetInnerHTML: { __html: html }
    }
  );
}
function PlaygroundSection() {
  const store = useRef(/* @__PURE__ */ new Map());
  const [operation, setOperation] = useState(OPERATIONS[1]);
  const [key, setKey] = useState("demo:1");
  const [body, setBody] = useState(OPERATIONS[1].body ?? "");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const path = useMemo(
    () => operation.needsKey ? operation.path(key || "{key}") : operation.path(""),
    [operation, key]
  );
  function selectOperation(next) {
    setOperation(next);
    setBody(next.body ?? "");
    setError(null);
  }
  function readEntry(name) {
    const entry = store.current.get(name);
    if (!entry) return null;
    if (entry.expiresAt !== null && entry.expiresAt <= Date.now()) {
      store.current.delete(name);
      return null;
    }
    return entry;
  }
  function run() {
    setError(null);
    let parsed = {};
    if (body.trim()) {
      try {
        parsed = JSON.parse(body);
      } catch {
        setError("Request body is not valid JSON.");
        return;
      }
    }
    const name = key.trim();
    const entry = readEntry(name);
    switch (operation.name) {
      case "set": {
        const ttl = typeof parsed.ttl === "number" ? parsed.ttl : null;
        store.current.set(name, {
          type: "string",
          value: parsed.value ?? null,
          expiresAt: ttl ? Date.now() + ttl * 1e3 : null
        });
        setResult({ status: 200, payload: { ok: true, key: name, ttl } });
        return;
      }
      case "get": {
        setResult({
          status: 200,
          payload: {
            key: name,
            value: entry && entry.type === "string" ? entry.value : null,
            exists: Boolean(entry)
          }
        });
        return;
      }
      case "ttl": {
        const seconds = !entry ? -2 : entry.expiresAt === null ? -1 : Math.max(0, Math.round((entry.expiresAt - Date.now()) / 1e3));
        setResult({ status: 200, payload: { key: name, ttl: seconds } });
        return;
      }
      case "incr": {
        const by = typeof parsed.by === "number" ? parsed.by : 1;
        const current = entry && entry.type === "string" ? entry.value : 0;
        if (entry && typeof current !== "number") {
          setResult({
            status: 409,
            payload: { detail: `Key '${name}' does not hold an integer` }
          });
          return;
        }
        const next = (typeof current === "number" ? current : 0) + by;
        store.current.set(name, {
          type: "string",
          value: next,
          expiresAt: entry?.expiresAt ?? null
        });
        setResult({ status: 200, payload: { key: name, value: next } });
        return;
      }
      case "delete": {
        const existed = store.current.delete(name);
        setResult({ status: 200, payload: { ok: true, deleted: existed } });
        return;
      }
      case "lpush": {
        const values = Array.isArray(parsed.values) ? parsed.values : [];
        if (!values.length) {
          setResult({ status: 400, payload: { detail: "values must not be empty" } });
          return;
        }
        const existing = entry && entry.type === "list" ? entry.value : [];
        const merged = [...[...values].reverse(), ...existing];
        store.current.set(name, { type: "list", value: merged, expiresAt: null });
        setResult({ status: 200, payload: { ok: true, length: merged.length } });
        return;
      }
      case "lrange": {
        setResult({
          status: 200,
          payload: { key: name, values: entry && entry.type === "list" ? entry.value : [] }
        });
        return;
      }
      case "hset": {
        const mapping = parsed.mapping && typeof parsed.mapping === "object" ? parsed.mapping : {};
        if (!Object.keys(mapping).length) {
          setResult({ status: 400, payload: { detail: "mapping must not be empty" } });
          return;
        }
        const existing = entry && entry.type === "hash" ? entry.value : {};
        const merged = { ...existing, ...mapping };
        store.current.set(name, { type: "hash", value: merged, expiresAt: null });
        setResult({ status: 200, payload: { ok: true, fields: Object.keys(mapping).length } });
        return;
      }
      case "hgetall": {
        setResult({
          status: 200,
          payload: { key: name, value: entry && entry.type === "hash" ? entry.value : {} }
        });
        return;
      }
      case "keys": {
        const names = [...store.current.keys()].filter((candidate) => readEntry(candidate));
        setResult({
          status: 200,
          payload: { project: "sandbox", keys: names, count: names.length, done: true }
        });
        return;
      }
      default:
        return;
    }
  }
  const statusTone = result && result.status < 300 ? "bg-[#EAF6F0] text-[#1B8A5A]" : "bg-[#FDF4E7] text-[var(--warn)]";
  return /* @__PURE__ */ jsxs(Section, { id: "playground", alt: true, children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Try it",
        title: "Run a request right now.",
        description: "This runs entirely in your browser — no account, nothing sent anywhere. Same request and response shapes as the real API, so set then get really does return what you stored."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-prominent", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-b border-[var(--line)] p-6 lg:border-b-0 lg:border-r", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: OPERATIONS.map((item) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => selectOperation(item),
            className: cn(
              "rounded-full px-2.5 py-1 font-mono text-[12px] transition-colors",
              item.name === operation.name ? "bg-[var(--redis)] text-white" : "border border-[var(--line-strong)] text-[var(--body)] hover:border-[var(--redis)] hover:text-[var(--redis)]"
            ),
            children: item.name
          },
          item.name
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded px-2 py-1.5 font-mono text-[11px] font-bold",
                METHOD_STYLES[operation.method]
              ),
              children: operation.method
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-stretch", children: [
            /* @__PURE__ */ jsx("span", { className: "flex items-center rounded-l-lg border border-r-0 border-[var(--line-strong)] bg-[var(--surface)] px-2.5 font-mono text-[12px] text-[var(--subtle)]", children: "/sandbox" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: operation.needsKey ? key : "",
                onChange: (event) => setKey(event.target.value),
                disabled: !operation.needsKey,
                "aria-label": "Key",
                className: "min-w-0 flex-1 rounded-r-lg border border-[var(--line-strong)] px-2.5 py-2 font-mono text-[12.5px] text-[var(--ink)] outline-none focus:border-[var(--redis)] disabled:bg-[var(--surface)]",
                placeholder: "demo:1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] text-[var(--subtle)]", children: path }),
        operation.body !== void 0 ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]", children: "Body" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: body,
              onChange: (event) => setBody(event.target.value),
              spellCheck: false,
              rows: 6,
              "aria-label": "Request body",
              className: "w-full rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] p-3 font-mono text-[12.5px] leading-relaxed text-[var(--ink)] outline-none focus:border-[var(--redis)]"
            }
          )
        ] }) : /* @__PURE__ */ jsx("p", { className: "text-[13px] text-[var(--subtle)]", children: "This operation takes no body." }),
        error ? /* @__PURE__ */ jsx("p", { className: "text-[13px] text-[var(--redis)]", children: error }) : null,
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: run,
            className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--redis)] text-sm font-medium text-white transition-colors hover:bg-[var(--redis-hover)]",
            children: [
              /* @__PURE__ */ jsx(Send, { className: "size-4" }),
              "Send request"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 bg-[var(--surface)] p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: result ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded px-2 py-0.5 font-mono text-[11px] font-bold",
                statusTone
              ),
              children: result.status
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[11.5px] text-[var(--subtle)]", children: "· in-browser · no network" })
        ] }) : /* @__PURE__ */ jsx("span", { className: "text-[13px] text-[var(--subtle)]", children: "Send a request to see the response." }) }),
        result ? /* @__PURE__ */ jsx(JsonView, { value: result.payload }) : null,
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]", children: "The same call, for real" }),
          /* @__PURE__ */ jsx("pre", { className: "overflow-x-auto rounded-lg bg-[var(--code)] p-3.5 font-mono text-[11.5px] leading-[1.7] text-[#f5efec]", children: /* @__PURE__ */ jsxs("code", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#f0857d]", children: "curl" }),
            operation.method === "GET" ? "" : ` -X ${operation.method}`,
            " ",
            EXAMPLE_BASE,
            path,
            " \\",
            "\n",
            " -H",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#8fd19e]", children: '"x-api-key: $CENTRAL_KEY"' })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-[13px] text-[var(--subtle)]", children: "Nothing here is stored on a server. Create a project for a namespace that’s yours." }),
      /* @__PURE__ */ jsx(PrimaryLink, { href: SIGNUP_URL, children: "Create your project" })
    ] })
  ] });
}
const FREE_FEATURES = [
  `${LIMITS.projects} project`,
  `${LIMITS.keys.toLocaleString()} keys`,
  `${LIMITS.storage} storage`,
  `${LIMITS.requestsPerMonth.toLocaleString()} requests / month`,
  `${LIMITS.apiKeysPerProject} API keys`,
  "Full dashboard, browser, and console"
];
const MORE_FEATURES = ["Multiple projects", "Raised limits", "Direct support"];
function PricingSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "pricing", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Pricing",
        title: "Free while we grow.",
        description: "One project per account, generous limits, and no card. Paid tiers arrive when there's something worth charging for."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl border-2 border-[var(--redis)] bg-white p-7", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-7 rounded bg-[var(--redis)] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white", children: "Available now" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--ink)]", children: "Free" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[44px] font-bold leading-none text-[var(--ink)]", children: "$0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-[var(--subtle)]", children: "/month" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-[var(--body)]", children: "Everything you need for a side project or a small service." }),
        /* @__PURE__ */ jsx(PrimaryLink, { href: SIGNUP_URL, className: "mt-6 w-full", children: "Create your account" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3 border-t border-[var(--line)] pt-6", children: FREE_FEATURES.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-[var(--ink)]", children: [
          /* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-[var(--redis)]" }),
          feature
        ] }, feature)) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[12.5px] leading-relaxed text-[var(--subtle)]", children: "Limits aren’t enforced during beta. You’ll get an email well before that changes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[var(--line)] bg-white p-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--ink)]", children: "More than one project" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-[28px] font-semibold leading-none text-[var(--ink)]", children: "Let’s talk" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-[var(--body)]", children: "Multiple projects, higher limits, or something specific to your setup — send a note and we’ll sort it out." }),
        /* @__PURE__ */ jsx(
          SecondaryLink,
          {
            href: `mailto:${CONTACT_EMAIL}?subject=Central%20Redis%20—%20higher%20limits`,
            className: "mt-6 w-full",
            children: "Email the founder"
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3 border-t border-[var(--line)] pt-6", children: MORE_FEATURES.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-[var(--body)]", children: [
          /* @__PURE__ */ jsx(Plus, { className: "mt-0.5 size-4 shrink-0 text-[var(--subtle)]" }),
          feature
        ] }, feature)) })
      ] })
    ] })
  ] });
}
const FACTS = [
  { label: "Running since", value: "Apr 2026" },
  { label: "Built with", value: "FastAPI · Redis · MongoDB" },
  { label: "Status", value: "Production" }
];
const SOCIALS = [
  { href: GITHUB_URL, icon: Github, label: "GitHub" },
  { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
  { href: PORTFOLIO_URL, icon: Globe, label: "Portfolio" }
];
function FounderSection() {
  return /* @__PURE__ */ jsx(Section, { alt: true, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[720px]", children: [
    /* @__PURE__ */ jsx("p", { className: "eyebrow text-center", children: "Why this exists" }),
    /* @__PURE__ */ jsx("blockquote", { className: "mt-8 border-l-[3px] border-[var(--redis)] pl-6", children: /* @__PURE__ */ jsx("p", { className: "text-[22px] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--ink)] sm:text-[26px]", children: "“I kept spinning up a Redis instance for every side project. Same config, same connection string in another .env file, same instance sitting idle at 4am. This started as a way to stop repeating myself — one namespaced API across everything I build.”" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-4 pl-6", children: [
      /* @__PURE__ */ jsx("span", { className: "grid size-11 place-items-center rounded-full bg-[var(--redis-tint)] font-semibold text-[var(--redis)]", children: "MR" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[15px] font-semibold text-[var(--ink)]", children: "Mohammad Ramiz" }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-[var(--subtle)]", children: "Builder — Central Redis" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: SOCIALS.map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": label,
          className: "grid size-9 place-items-center rounded-md text-[var(--subtle)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--ink)]",
          children: /* @__PURE__ */ jsx(Icon, { className: "size-[17px]" })
        },
        label
      )) })
    ] }),
    /* @__PURE__ */ jsx("dl", { className: "mt-10 grid gap-6 rounded-xl bg-[var(--surface)] p-6 sm:grid-cols-3", children: FACTS.map((fact) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("dt", { className: "font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]", children: fact.label }),
      /* @__PURE__ */ jsx("dd", { className: "mt-1.5 text-[15px] text-[var(--ink)]", children: fact.value })
    ] }, fact.label)) })
  ] }) });
}
const FAQS = [
  {
    q: "Is my data isolated from other projects?",
    a: "Yes. Every key is stored internally as project_id:key, and a project's API key only ever authenticates that one project. Presenting a valid key for a different project returns 401."
  },
  {
    q: "What happens if I lose an API key?",
    a: "Rotate it from the dashboard. The old value stops working immediately and you get a new one. Keys are stored hashed, so nobody — including us — can read yours back."
  },
  {
    q: "Is this a Redis replacement?",
    a: "No. It's Redis with an HTTP layer and multi-tenancy on top. If you need Lua scripting, pub/sub, or streams, use Redis directly. If you need a key-value store for a handful of projects, this removes the setup."
  },
  {
    q: "How fast is it?",
    a: "Reads are sub-millisecond in Redis; what you actually measure is network latency to the API. Your real p50, p95, and p99 are on the Usage page — measured, not promised."
  },
  {
    q: "What data types are supported?",
    a: "Strings, lists, hashes, and sets, plus TTLs and atomic counters. Sorted sets and streams aren't exposed yet."
  },
  {
    q: "Can I use it from the browser?",
    a: "You shouldn't. An API key in client-side JavaScript is a public API key. Call it from your server."
  },
  {
    q: "What happens when I hit a limit?",
    a: "During beta, nothing — limits are displayed but not enforced, and you'll get an email well before that changes."
  },
  {
    q: "Can I export or delete everything?",
    a: "Yes. Flush a project's data or delete the project outright from the dashboard, and deleting your account removes every project and key with it."
  }
];
function FaqSection() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsxs(Section, { id: "faq", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Questions", title: "Before you sign up." }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[760px]", children: FAQS.map((faq, index) => {
      const expanded = open === index;
      return /* @__PURE__ */ jsxs("div", { className: "border-b border-[var(--line)]", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen(expanded ? -1 : index),
            "aria-expanded": expanded,
            className: "flex w-full items-center justify-between gap-6 py-5 text-left",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-[var(--ink)]", children: faq.q }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn(
                    "size-[18px] shrink-0 text-[var(--subtle)] transition-transform",
                    expanded && "rotate-180"
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "grid transition-[grid-template-rows] duration-200",
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            ),
            children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "prose-measure pb-5 text-[15px] leading-relaxed text-[var(--body)]", children: faq.a }) })
          }
        )
      ] }, faq.q);
    }) })
  ] });
}
const COLUMNS$1 = [
  {
    label: "Shipped",
    tone: "done",
    items: [
      "Accounts, sessions, and roles",
      "Per-project API keys with rotation",
      "Data browser with pattern search",
      "Usage metrics and latency percentiles",
      "Admin console"
    ]
  },
  {
    label: "In progress",
    tone: "active",
    items: [
      "Client libraries for JS and Python",
      "Password reset and email verification",
      "Sorted sets and streams",
      "Higher limits and paid tiers"
    ]
  },
  {
    label: "Later",
    tone: "future",
    items: [
      "Webhooks on key events",
      "Pub/sub over server-sent events",
      "Team accounts and shared projects",
      "Regional deployments"
    ]
  }
];
function RoadmapSection() {
  return /* @__PURE__ */ jsxs(Section, { id: "roadmap", alt: true, children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "What's next",
        title: "Shipping in the open.",
        description: "Here's what exists today and what's being built. No dates — they'd be fiction."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-3 md:gap-8", children: COLUMNS$1.map((column) => /* @__PURE__ */ jsxs("div", { className: cn(column.tone === "future" && "opacity-70"), children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mb-6 border-t-2 border-[var(--line)] pt-6", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "absolute -top-[9px] left-0 grid size-4 place-items-center rounded-full border-2",
              column.tone === "done" && "border-[var(--redis)] bg-[var(--redis)]",
              column.tone === "active" && "border-[var(--redis)] bg-white",
              column.tone === "future" && "border-[var(--line-strong)] bg-white"
            ),
            children: column.tone === "done" ? /* @__PURE__ */ jsx(Check, { className: "size-2.5 text-white", strokeWidth: 3 }) : null
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "font-mono text-[12px] uppercase tracking-[0.08em]",
              column.tone === "done" && "text-[var(--redis)]",
              column.tone === "active" && "text-[var(--ink)]",
              column.tone === "future" && "text-[var(--subtle)]"
            ),
            children: column.label
          }
        )
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: column.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-[var(--body)]", children: [
        column.tone === "done" ? /* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-[var(--redis)]" }) : /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "mt-1 size-3 shrink-0 rounded-full border",
              column.tone === "active" ? "border-[var(--line-strong)]" : "border-[var(--line)]"
            )
          }
        ),
        item
      ] }, item)) })
    ] }, column.label)) })
  ] });
}
function FinalCtaSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[var(--code)]", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-[88px] text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "mx-auto max-w-[16ch] text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[40px]", children: "Stop configuring Redis." }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#9a908b]", children: "One account, one namespace, one key. Free while we’re in beta." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: SIGNUP_URL,
          className: "inline-flex h-11 items-center justify-center rounded-md bg-[var(--redis)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--redis-hover)]",
          children: "Create your account"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: DOCS_URL,
          className: "inline-flex h-11 items-center justify-center rounded-md border border-[#4a403c] px-6 text-sm font-medium text-[#f5efec] transition-colors hover:bg-white/5",
          children: "Read the docs"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-[13px] text-[#9a908b]", children: "No credit card. Delete everything in one click if it isn’t for you." })
  ] }) });
}
const COLUMNS = [
  {
    label: "Product",
    links: [
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" },
      { text: "Playground", href: "#playground" },
      { text: "Roadmap", href: "#roadmap" }
    ]
  },
  {
    label: "Developers",
    links: [
      { text: "Documentation", href: DOCS_URL },
      { text: "How it works", href: "#how-it-works" },
      { text: "FAQ", href: "#faq" },
      { text: "Sign in", href: SIGNIN_URL }
    ]
  },
  {
    label: "Elsewhere",
    links: [
      { text: "GitHub", href: GITHUB_URL },
      { text: "LinkedIn", href: LINKEDIN_URL },
      { text: "Portfolio", href: PORTFOLIO_URL },
      { text: "Email", href: `mailto:${CONTACT_EMAIL}` }
    ]
  }
];
function FooterSection() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#16110f]", children: /* @__PURE__ */ jsxs("div", { className: "container-page pb-8 pt-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx(Logo, { className: "size-[22px]" }),
          /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-white", children: "Central Redis" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-[34ch] text-[13px] leading-relaxed text-[#9a908b]", children: "Multi-tenant Redis, exposed over HTTP. Built and run by one person." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: SIGNUP_URL,
            className: "mt-5 inline-flex h-9 items-center rounded-md bg-[var(--redis)] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[var(--redis-hover)]",
            children: "Start free"
          }
        )
      ] }),
      COLUMNS.map((column) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.08em] text-[#f5efec]", children: column.label }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: column.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "text-[13px] text-[#9a908b] transition-colors hover:text-[#f5efec]",
            children: link.text
          }
        ) }, link.text)) })
      ] }, column.label))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#2a2320] pt-6 sm:flex-row", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[12px] text-[#6b605c]", children: "© 2026 Central Redis. Built with intent." }),
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-[12px] text-[#6b605c]", children: [
        "Made by",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: PORTFOLIO_URL,
            className: "text-[#9a908b] transition-colors hover:text-[#f5efec]",
            children: "Mohammad Ramiz"
          }
        )
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-[68px]", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ProductShowcaseSection, {}),
      /* @__PURE__ */ jsx(FeatureGridSection, {}),
      /* @__PURE__ */ jsx(HowItWorksSection, {}),
      /* @__PURE__ */ jsx(CodeSamplesSection, {}),
      /* @__PURE__ */ jsx(PlaygroundSection, {}),
      /* @__PURE__ */ jsx(PricingSection, {}),
      /* @__PURE__ */ jsx(FounderSection, {}),
      /* @__PURE__ */ jsx(FaqSection, {}),
      /* @__PURE__ */ jsx(RoadmapSection, {}),
      /* @__PURE__ */ jsx(FinalCtaSection, {}),
      /* @__PURE__ */ jsx(FooterSection, {})
    ] })
  ] });
}
export {
  Index as component
};
