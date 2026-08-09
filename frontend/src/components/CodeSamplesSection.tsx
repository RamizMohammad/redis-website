import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CodeBlock, tok, type CodeLine } from "@/components/site/CodeBlock";
import { Section } from "@/components/site/Primitives";
import { DOCS_URL, EXAMPLE_BASE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Sample = { label: string; lines: CodeLine[]; plain: string };

const CURL: Sample = {
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
    [tok.p("  -H "), tok.str('"x-api-key: $CENTRAL_KEY"')],
  ],
  plain: `curl -X POST ${EXAMPLE_BASE}/set/cart:42 \\
  -H "x-api-key: $CENTRAL_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"value": {"items": 3}, "ttl": 3600}'

curl ${EXAMPLE_BASE}/get/cart:42 \\
  -H "x-api-key: $CENTRAL_KEY"`,
};

const JAVASCRIPT: Sample = {
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
      tok.p(" })"),
    ],
    [tok.p("});")],
    [],
    [tok.comment("// read it back")],
    [
      tok.kw("const"),
      tok.p(" res = "),
      tok.kw("await"),
      tok.p(" fetch(`${BASE}/get/cart:42`, { headers });"),
    ],
    [
      tok.kw("const"),
      tok.p(" { value } = "),
      tok.kw("await"),
      tok.p(" res.json();  "),
      tok.comment("// { items: 3 }"),
    ],
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
const { value } = await res.json();`,
};

const PYTHON: Sample = {
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
      tok.p("]}"),
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
      tok.p(": 3600},"),
    ],
    [tok.p(")")],
    [],
    [tok.comment("# read it back")],
    [
      tok.p("value = requests.get(f"),
      tok.str('"{BASE}/get/cart:42"'),
      tok.p(", headers=headers).json()["),
    ],
    [tok.p("    "), tok.str('"value"'), tok.p("]")],
  ],
  plain: `import os, requests

BASE = "${EXAMPLE_BASE}"
headers = {"x-api-key": os.environ["CENTRAL_KEY"]}

requests.post(
    f"{BASE}/set/cart:42",
    headers=headers,
    json={"value": {"items": 3}, "ttl": 3600},
)

value = requests.get(f"{BASE}/get/cart:42", headers=headers).json()["value"]`,
};

const GO: Sample = {
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
      tok.p(": 3600}`)"),
    ],
    [],
    [tok.kw("req"), tok.p(", _ := http.NewRequest(")],
    [
      tok.p("    "),
      tok.str('"POST"'),
      tok.p(", "),
      tok.str(`"${EXAMPLE_BASE}/set/cart:42"`),
      tok.p(", body,"),
    ],
    [tok.p(")")],
    [
      tok.p("req.Header.Set("),
      tok.str('"x-api-key"'),
      tok.p(", os.Getenv("),
      tok.str('"CENTRAL_KEY"'),
      tok.p("))"),
    ],
    [
      tok.p("req.Header.Set("),
      tok.str('"Content-Type"'),
      tok.p(", "),
      tok.str('"application/json"'),
      tok.p(")"),
    ],
    [],
    [tok.kw("res"), tok.p(", err := http.DefaultClient.Do(req)")],
  ],
  plain: `body := strings.NewReader(\`{"value": {"items": 3}, "ttl": 3600}\`)

req, _ := http.NewRequest(
    "POST", "${EXAMPLE_BASE}/set/cart:42", body,
)
req.Header.Set("x-api-key", os.Getenv("CENTRAL_KEY"))
req.Header.Set("Content-Type", "application/json")

res, err := http.DefaultClient.Do(req)`,
};

const RUBY: Sample = {
  label: "Ruby",
  lines: [
    [
      tok.kw("require"),
      tok.p(" "),
      tok.str('"net/http"'),
      tok.p("; "),
      tok.kw("require"),
      tok.p(" "),
      tok.str('"json"'),
    ],
    [],
    [tok.p("uri = URI("), tok.str(`"${EXAMPLE_BASE}/set/cart:42"`), tok.p(")")],
    [tok.p("req = Net::HTTP::Post.new(uri)")],
    [
      tok.p("req["),
      tok.str('"x-api-key"'),
      tok.p("] = ENV.fetch("),
      tok.str('"CENTRAL_KEY"'),
      tok.p(")"),
    ],
    [tok.p("req["), tok.str('"Content-Type"'), tok.p("] = "), tok.str('"application/json"')],
    [
      tok.p("req.body = { value: { items: "),
      tok.kw("3"),
      tok.p(" }, ttl: "),
      tok.kw("3600"),
      tok.p(" }.to_json"),
    ],
    [],
    [
      tok.p("Net::HTTP.start(uri.host, uri.port, use_ssl: "),
      tok.kw("true"),
      tok.p(") { |h| h.request(req) }"),
    ],
  ],
  plain: `require "net/http"; require "json"

uri = URI("${EXAMPLE_BASE}/set/cart:42")
req = Net::HTTP::Post.new(uri)
req["x-api-key"] = ENV.fetch("CENTRAL_KEY")
req["Content-Type"] = "application/json"
req.body = { value: { items: 3 }, ttl: 3600 }.to_json

Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |h| h.request(req) }`,
};

const SAMPLES = [CURL, JAVASCRIPT, PYTHON, GO, RUBY];

export default function CodeSamplesSection() {
  const [active, setActive] = useState(1);
  const sample = SAMPLES[active];

  return (
    <Section id="integration">
      <div className="grid items-center gap-12 lg:grid-cols-[40fr_60fr] lg:gap-14">
        <div>
          <span className="eyebrow">Integration</span>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.15] text-[var(--ink)] sm:text-4xl">
            It&rsquo;s just HTTP.
          </h2>
          <p className="prose-measure mt-5 text-base leading-relaxed text-[var(--body)]">
            No client library to install, no connection pool to size, no TLS config. If your
            language can make an HTTP request, it can use Central Redis.
          </p>
          <p className="prose-measure mt-4 text-base leading-relaxed text-[var(--body)]">
            Values are stored as JSON when they parse as JSON, and as raw strings when they
            don&rsquo;t. Reads reverse it, so what you put in is what you get back.
          </p>
          <a
            href={DOCS_URL}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--redis)] hover:underline"
          >
            Full API reference
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap gap-1">
            {SAMPLES.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-md px-3 py-1.5 font-mono text-[12.5px] transition-colors",
                  index === active
                    ? "bg-[var(--redis-tint)] font-medium text-[var(--redis)]"
                    : "text-[var(--body)] hover:bg-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <CodeBlock
            title={sample.label}
            lines={sample.lines}
            copyText={sample.plain}
            className="shadow-prominent"
          />
        </div>
      </div>
    </Section>
  );
}
