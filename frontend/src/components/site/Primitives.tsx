import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6", className)} aria-hidden="true">
      <path fill="#DC382D" d="M12 1.8l9.1 5.25v10.5L12 22.8l-9.1-5.25V7.05z" />
      <path fill="#fff" fillOpacity="0.9" d="M12 6.6l5 2.9-5 2.9-5-2.9z" />
      <path fill="#fff" fillOpacity="0.55" d="M12 13.1l5-2.9v3.3l-5 2.9-5-2.9v-3.3z" />
    </svg>
  );
}

export function Section({
  id,
  alt,
  className,
  children,
}: {
  id?: string;
  /** White background instead of the warm page background. */
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-y",
        alt ? "bg-[var(--surface-alt)]" : "bg-[var(--surface)]",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-[18ch] text-[30px] font-semibold leading-[1.15] text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "prose-measure text-base leading-relaxed text-[var(--body)]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const BUTTON_BASE =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--redis)] focus-visible:ring-offset-2";

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        BUTTON_BASE,
        "bg-[var(--redis)] text-white hover:bg-[var(--redis-hover)]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        BUTTON_BASE,
        "border border-[var(--line-strong)] bg-white text-[var(--ink)] hover:bg-[var(--surface)]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--line)] bg-white p-6 transition-colors hover:border-[var(--line-strong)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MonoTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-[var(--redis-tint)] px-1.5 py-0.5 font-mono text-[11px] font-medium text-[var(--redis)]">
      {children}
    </span>
  );
}

export function StatusDot({ tone = "ok" }: { tone?: "ok" | "warn" }) {
  return (
    <span
      className="size-1.5 shrink-0 rounded-full"
      style={{ background: tone === "ok" ? "var(--ok)" : "var(--warn)" }}
    />
  );
}
