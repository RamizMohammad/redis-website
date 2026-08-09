import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, PrimaryLink } from "@/components/site/Primitives";
import { NAV_LINKS, SIGNIN_URL, SIGNUP_URL, DOCS_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A fixed-position menu over a scrollable page is disorienting; lock the body.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-[var(--surface)]/85 backdrop-blur-md transition-colors",
          scrolled ? "border-b border-[var(--line)]" : "border-b border-transparent",
        )}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-base font-semibold tracking-tight text-[var(--ink)]">
              Central Redis
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DOCS_URL}
              className="text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
            >
              Docs
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={SIGNIN_URL}
              className="text-sm font-medium text-[var(--body)] transition-colors hover:text-[var(--ink)]"
            >
              Sign in
            </a>
            <PrimaryLink href={SIGNUP_URL} className="h-9 px-4">
              Start free
            </PrimaryLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <PrimaryLink href={SIGNUP_URL} className="h-9 px-3.5 text-[13px]">
              Start free
            </PrimaryLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-md text-[var(--ink)]"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-[var(--surface)] md:hidden">
          <div className="container-page flex h-[68px] items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-base font-semibold text-[var(--ink)]">Central Redis</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-md text-[var(--ink)]"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="container-page flex flex-col gap-6 pt-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[22px] font-medium text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
            <a href={DOCS_URL} className="text-[22px] font-medium text-[var(--ink)]">
              Docs
            </a>
            <a href={SIGNIN_URL} className="text-[22px] font-medium text-[var(--ink)]">
              Sign in
            </a>
            <PrimaryLink href={SIGNUP_URL} className="mt-4 w-full">
              Start free
            </PrimaryLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
