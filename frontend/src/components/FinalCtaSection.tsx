import { DOCS_URL, SIGNUP_URL } from "@/lib/site";

export default function FinalCtaSection() {
  return (
    <section className="bg-[var(--code)]">
      <div className="container-page py-[88px] text-center">
        <h2 className="mx-auto max-w-[16ch] text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[40px]">
          Stop configuring Redis.
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#9a908b]">
          One account, one namespace, one key. Free while we&rsquo;re in beta.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SIGNUP_URL}
            className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--redis)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--redis-hover)]"
          >
            Create your account
          </a>
          <a
            href={DOCS_URL}
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#4a403c] px-6 text-sm font-medium text-[#f5efec] transition-colors hover:bg-white/5"
          >
            Read the docs
          </a>
        </div>

        <p className="mt-6 text-[13px] text-[#9a908b]">
          No credit card. Delete everything in one click if it isn&rsquo;t for you.
        </p>
      </div>
    </section>
  );
}
