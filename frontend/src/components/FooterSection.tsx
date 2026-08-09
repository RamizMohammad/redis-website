import { Logo } from "@/components/site/Primitives";
import {
  CONTACT_EMAIL,
  DOCS_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
  SIGNIN_URL,
  SIGNUP_URL,
} from "@/lib/site";

/**
 * Only links that resolve. The generated design included Careers, Case Studies,
 * Customers, Webinars, and a status page — none of which exist. A footer full
 * of dead links reads as a template, which is the opposite of the intent.
 */
const COLUMNS = [
  {
    label: "Product",
    links: [
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" },
      { text: "Playground", href: "#playground" },
      { text: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    label: "Developers",
    links: [
      { text: "Documentation", href: DOCS_URL },
      { text: "How it works", href: "#how-it-works" },
      { text: "FAQ", href: "#faq" },
      { text: "Sign in", href: SIGNIN_URL },
    ],
  },
  {
    label: "Elsewhere",
    links: [
      { text: "GitHub", href: GITHUB_URL },
      { text: "LinkedIn", href: LINKEDIN_URL },
      { text: "Portfolio", href: PORTFOLIO_URL },
      { text: "Email", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#16110f]">
      <div className="container-page pb-8 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="size-[22px]" />
              <span className="text-base font-semibold text-white">Central Redis</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-[#9a908b]">
              Multi-tenant Redis, exposed over HTTP. Built and run by one person.
            </p>
            <a
              href={SIGNUP_URL}
              className="mt-5 inline-flex h-9 items-center rounded-md bg-[var(--redis)] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[var(--redis-hover)]"
            >
              Start free
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#f5efec]">
                {column.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#9a908b] transition-colors hover:text-[#f5efec]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#2a2320] pt-6 sm:flex-row">
          <p className="text-[12px] text-[#6b605c]">© 2026 Central Redis. Built with intent.</p>
          <p className="font-mono text-[12px] text-[#6b605c]">
            Made by{" "}
            <a
              href={PORTFOLIO_URL}
              className="text-[#9a908b] transition-colors hover:text-[#f5efec]"
            >
              Mohammad Ramiz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
