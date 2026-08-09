import { CodeBlock, tok, type CodeLine } from "@/components/site/CodeBlock";
import { Section, SectionHeader } from "@/components/site/Primitives";
import { EXAMPLE_PROJECT } from "@/lib/site";

const STEP_TWO: CodeLine[] = [
  [tok.cmd("curl"), tok.p(" -X POST $BASE/set/cart:42 \\")],
  [tok.p("  -H "), tok.str('"x-api-key: $KEY"'), tok.p(" \\")],
  [tok.p("  -d "), tok.str(`'{"value": {"items": 3}, "ttl": 3600}'`)],
];

const STEP_THREE: CodeLine[] = [
  [tok.cmd("curl"), tok.p(" $BASE/get/cart:42 -H "), tok.str('"x-api-key: $KEY"')],
  [],
  [tok.ok(`{"key":"cart:42","value":{"items":3},"exists":true}`)],
];

export default function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="How it works"
        title="Three steps. Zero ops."
        description="From signing up to storing your first key is about a minute."
      />

      <div className="grid gap-10 md:grid-cols-3 md:gap-0">
        <Step
          number="01"
          title="Create a project"
          body="Pick an ID. You get an isolated namespace and an API key, shown once."
        >
          <div className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white p-2">
            <span className="flex-1 rounded-md border border-[var(--line-strong)] px-3 py-2 font-mono text-[12.5px] text-[var(--ink)]">
              {EXAMPLE_PROJECT}
            </span>
            <span className="rounded-md bg-[var(--redis)] px-3 py-2 text-[12.5px] font-medium text-white">
              Create
            </span>
          </div>
        </Step>

        <Step
          number="02"
          title="Store something"
          body="Any JSON value, with an optional TTL in seconds."
          bordered
        >
          <CodeBlock lines={STEP_TWO} />
        </Step>

        <Step
          number="03"
          title="Read it back"
          body="Values round-trip as JSON. Objects come back as objects, not strings."
          bordered
        >
          <CodeBlock lines={STEP_THREE} />
        </Step>
      </div>
    </Section>
  );
}

function Step({
  number,
  title,
  body,
  bordered,
  children,
}: {
  number: string;
  title: string;
  body: string;
  bordered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={bordered ? "md:border-l md:border-[var(--line)] md:pl-8 md:ml-8" : "md:pr-8"}>
      <p className="font-mono text-[40px] font-semibold leading-none text-[var(--redis)]/20">
        {number}
      </p>
      <h3 className="mt-4 text-xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--body)]">{body}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
