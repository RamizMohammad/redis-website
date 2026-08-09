import { Github, Globe, Linkedin } from "lucide-react";
import { Section } from "@/components/site/Primitives";
import { GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL } from "@/lib/site";

const FACTS = [
  { label: "Running since", value: "Apr 2026" },
  { label: "Built with", value: "FastAPI · Redis · MongoDB" },
  { label: "Status", value: "Production" },
];

const SOCIALS = [
  { href: GITHUB_URL, icon: Github, label: "GitHub" },
  { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
  { href: PORTFOLIO_URL, icon: Globe, label: "Portfolio" },
];

export default function FounderSection() {
  return (
    <Section alt>
      <div className="mx-auto max-w-[720px]">
        <p className="eyebrow text-center">Why this exists</p>

        <blockquote className="mt-8 border-l-[3px] border-[var(--redis)] pl-6">
          <p className="text-[22px] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--ink)] sm:text-[26px]">
            &ldquo;I kept spinning up a Redis instance for every side project. Same config, same
            connection string in another .env file, same instance sitting idle at 4am. This started
            as a way to stop repeating myself — one namespaced API across everything I build.&rdquo;
          </p>
        </blockquote>

        <div className="mt-7 flex flex-wrap items-center gap-4 pl-6">
          <span className="grid size-11 place-items-center rounded-full bg-[var(--redis-tint)] font-semibold text-[var(--redis)]">
            MR
          </span>
          <div className="flex-1">
            <p className="text-[15px] font-semibold text-[var(--ink)]">Mohammad Ramiz</p>
            <p className="text-[13px] text-[var(--subtle)]">Builder — Central Redis</p>
          </div>
          <div className="flex gap-1">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-md text-[var(--subtle)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              >
                <Icon className="size-[17px]" />
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-10 grid gap-6 rounded-xl bg-[var(--surface)] p-6 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[15px] text-[var(--ink)]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
