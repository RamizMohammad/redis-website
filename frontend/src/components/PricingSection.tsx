import { Check, Plus } from "lucide-react";
import { PrimaryLink, Section, SectionHeader, SecondaryLink } from "@/components/site/Primitives";
import { CONTACT_EMAIL, LIMITS, SIGNUP_URL } from "@/lib/site";

const FREE_FEATURES = [
  `${LIMITS.projects} project`,
  `${LIMITS.keys.toLocaleString()} keys`,
  `${LIMITS.storage} storage`,
  `${LIMITS.requestsPerMonth.toLocaleString()} requests / month`,
  `${LIMITS.apiKeysPerProject} API keys`,
  "Full dashboard, browser, and console",
];

const MORE_FEATURES = ["Multiple projects", "Raised limits", "Direct support"];

export default function PricingSection() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="Free while we grow."
        description="One project per account, generous limits, and no card. Paid tiers arrive when there's something worth charging for."
      />

      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:items-start">
        <div className="relative rounded-xl border-2 border-[var(--redis)] bg-white p-7">
          <span className="absolute -top-3 left-7 rounded bg-[var(--redis)] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
            Available now
          </span>

          <h3 className="text-xl font-semibold text-[var(--ink)]">Free</h3>
          <p className="mt-3 flex items-baseline gap-1.5">
            <span className="font-mono text-[44px] font-bold leading-none text-[var(--ink)]">
              $0
            </span>
            <span className="text-sm text-[var(--subtle)]">/month</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--body)]">
            Everything you need for a side project or a small service.
          </p>

          <PrimaryLink href={SIGNUP_URL} className="mt-6 w-full">
            Create your account
          </PrimaryLink>

          <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6">
            {FREE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                <Check className="mt-0.5 size-4 shrink-0 text-[var(--redis)]" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[12.5px] leading-relaxed text-[var(--subtle)]">
            Limits aren&rsquo;t enforced during beta. You&rsquo;ll get an email well before that
            changes.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--line)] bg-white p-7">
          <h3 className="text-xl font-semibold text-[var(--ink)]">More than one project</h3>
          <p className="mt-3 text-[28px] font-semibold leading-none text-[var(--ink)]">
            Let&rsquo;s talk
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--body)]">
            Multiple projects, higher limits, or something specific to your setup — send a note and
            we&rsquo;ll sort it out.
          </p>

          <SecondaryLink
            href={`mailto:${CONTACT_EMAIL}?subject=Central%20Redis%20—%20higher%20limits`}
            className="mt-6 w-full"
          >
            Email the founder
          </SecondaryLink>

          <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6">
            {MORE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--body)]">
                <Plus className="mt-0.5 size-4 shrink-0 text-[var(--subtle)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
