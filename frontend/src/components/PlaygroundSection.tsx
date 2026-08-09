import { useMemo, useRef, useState } from "react";
import { Send } from "lucide-react";
import { PrimaryLink, Section, SectionHeader } from "@/components/site/Primitives";
import { EXAMPLE_BASE, SIGNUP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * An honest playground.
 *
 * There is no public sandbox project to call, and inventing fake latency
 * numbers against a server that was never contacted would be a lie in the one
 * place a developer is most likely to check. So this runs a real (if tiny)
 * key-value store in the browser: `set` then `get` genuinely returns what you
 * stored, TTLs genuinely expire, and `incr` genuinely fails on a non-integer.
 * The request and response shapes match the real API exactly.
 */

type StoredValue =
  | { type: "string"; value: unknown }
  | { type: "list"; value: unknown[] }
  | { type: "hash"; value: Record<string, unknown> };

type Entry = StoredValue & { expiresAt: number | null };

type Operation = {
  name: string;
  method: "GET" | "POST" | "DELETE";
  path: (key: string) => string;
  needsKey: boolean;
  body?: string;
};

const OPERATIONS: Operation[] = [
  { name: "get", method: "GET", path: (k) => `/get/${k}`, needsKey: true },
  {
    name: "set",
    method: "POST",
    path: (k) => `/set/${k}`,
    needsKey: true,
    body: '{\n  "value": { "items": 3 },\n  "ttl": 3600\n}',
  },
  { name: "ttl", method: "GET", path: (k) => `/ttl/${k}`, needsKey: true },
  {
    name: "incr",
    method: "POST",
    path: (k) => `/incr/${k}`,
    needsKey: true,
    body: '{\n  "by": 1\n}',
  },
  { name: "delete", method: "DELETE", path: (k) => `/delete/${k}`, needsKey: true },
  {
    name: "lpush",
    method: "POST",
    path: (k) => `/lpush/${k}`,
    needsKey: true,
    body: '{\n  "values": ["first", "second"]\n}',
  },
  { name: "lrange", method: "GET", path: (k) => `/lrange/${k}`, needsKey: true },
  {
    name: "hset",
    method: "POST",
    path: (k) => `/hset/${k}`,
    needsKey: true,
    body: '{\n  "mapping": { "status": "paid" }\n}',
  },
  { name: "hgetall", method: "GET", path: (k) => `/hgetall/${k}`, needsKey: true },
  { name: "keys", method: "GET", path: () => "/keys", needsKey: false },
];

const METHOD_STYLES: Record<Operation["method"], string> = {
  GET: "bg-[#F2F6FA] text-[#2563A8]",
  POST: "bg-[#EAF6F0] text-[#1B8A5A]",
  DELETE: "bg-[var(--redis-tint)] text-[var(--redis)]",
};

function JsonView({ value }: { value: unknown }) {
  const text = JSON.stringify(value, null, 2) ?? "";
  const html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/("(?:\\.|[^"\\])*"(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?)/g, (match) => {
      let cls = "text-[#2563A8]";
      if (/^"/.test(match)) cls = /:$/.test(match) ? "text-[#A03028]" : "text-[#1B7A4B]";
      else if (/true|false|null/.test(match)) cls = "text-[#8A5CC7]";
      return `<span class="${cls}">${match}</span>`;
    });

  return (
    <pre
      className="overflow-x-auto rounded-lg border border-[var(--line)] bg-white p-3.5 font-mono text-[12.5px] leading-[1.7]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function PlaygroundSection() {
  const store = useRef(new Map<string, Entry>());
  const [operation, setOperation] = useState(OPERATIONS[1]);
  const [key, setKey] = useState("demo:1");
  const [body, setBody] = useState(OPERATIONS[1].body ?? "");
  const [result, setResult] = useState<{ status: number; payload: unknown } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const path = useMemo(
    () => (operation.needsKey ? operation.path(key || "{key}") : operation.path("")),
    [operation, key],
  );

  function selectOperation(next: Operation) {
    setOperation(next);
    setBody(next.body ?? "");
    setError(null);
  }

  function readEntry(name: string): Entry | null {
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

    let parsed: Record<string, unknown> = {};
    if (body.trim()) {
      try {
        parsed = JSON.parse(body) as Record<string, unknown>;
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
          expiresAt: ttl ? Date.now() + ttl * 1000 : null,
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
            exists: Boolean(entry),
          },
        });
        return;
      }
      case "ttl": {
        const seconds = !entry
          ? -2
          : entry.expiresAt === null
            ? -1
            : Math.max(0, Math.round((entry.expiresAt - Date.now()) / 1000));
        setResult({ status: 200, payload: { key: name, ttl: seconds } });
        return;
      }
      case "incr": {
        const by = typeof parsed.by === "number" ? parsed.by : 1;
        const current = entry && entry.type === "string" ? entry.value : 0;
        if (entry && typeof current !== "number") {
          setResult({
            status: 409,
            payload: { detail: `Key '${name}' does not hold an integer` },
          });
          return;
        }
        const next = (typeof current === "number" ? current : 0) + by;
        store.current.set(name, {
          type: "string",
          value: next,
          expiresAt: entry?.expiresAt ?? null,
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
          payload: { key: name, values: entry && entry.type === "list" ? entry.value : [] },
        });
        return;
      }
      case "hset": {
        const mapping =
          parsed.mapping && typeof parsed.mapping === "object"
            ? (parsed.mapping as Record<string, unknown>)
            : {};
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
          payload: { key: name, value: entry && entry.type === "hash" ? entry.value : {} },
        });
        return;
      }
      case "keys": {
        const names = [...store.current.keys()].filter((candidate) => readEntry(candidate));
        setResult({
          status: 200,
          payload: { project: "sandbox", keys: names, count: names.length, done: true },
        });
        return;
      }
      default:
        return;
    }
  }

  const statusTone =
    result && result.status < 300
      ? "bg-[#EAF6F0] text-[#1B8A5A]"
      : "bg-[#FDF4E7] text-[var(--warn)]";

  return (
    <Section id="playground" alt>
      <SectionHeader
        eyebrow="Try it"
        title="Run a request right now."
        description="This runs entirely in your browser — no account, nothing sent anywhere. Same request and response shapes as the real API, so set then get really does return what you stored."
      />

      <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-prominent">
        <div className="grid lg:grid-cols-2">
          {/* Request */}
          <div className="space-y-4 border-b border-[var(--line)] p-6 lg:border-b-0 lg:border-r">
            <div className="flex flex-wrap gap-1.5">
              {OPERATIONS.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => selectOperation(item)}
                  className={cn(
                    "rounded-full px-2.5 py-1 font-mono text-[12px] transition-colors",
                    item.name === operation.name
                      ? "bg-[var(--redis)] text-white"
                      : "border border-[var(--line-strong)] text-[var(--body)] hover:border-[var(--redis)] hover:text-[var(--redis)]",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded px-2 py-1.5 font-mono text-[11px] font-bold",
                  METHOD_STYLES[operation.method],
                )}
              >
                {operation.method}
              </span>
              <div className="flex min-w-0 flex-1 items-stretch">
                <span className="flex items-center rounded-l-lg border border-r-0 border-[var(--line-strong)] bg-[var(--surface)] px-2.5 font-mono text-[12px] text-[var(--subtle)]">
                  /sandbox
                </span>
                <input
                  value={operation.needsKey ? key : ""}
                  onChange={(event) => setKey(event.target.value)}
                  disabled={!operation.needsKey}
                  aria-label="Key"
                  className="min-w-0 flex-1 rounded-r-lg border border-[var(--line-strong)] px-2.5 py-2 font-mono text-[12.5px] text-[var(--ink)] outline-none focus:border-[var(--redis)] disabled:bg-[var(--surface)]"
                  placeholder="demo:1"
                />
              </div>
            </div>

            <p className="font-mono text-[11px] text-[var(--subtle)]">{path}</p>

            {operation.body !== undefined ? (
              <div>
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]">
                  Body
                </p>
                <textarea
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  spellCheck={false}
                  rows={6}
                  aria-label="Request body"
                  className="w-full rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] p-3 font-mono text-[12.5px] leading-relaxed text-[var(--ink)] outline-none focus:border-[var(--redis)]"
                />
              </div>
            ) : (
              <p className="text-[13px] text-[var(--subtle)]">This operation takes no body.</p>
            )}

            {error ? <p className="text-[13px] text-[var(--redis)]">{error}</p> : null}

            <button
              type="button"
              onClick={run}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--redis)] text-sm font-medium text-white transition-colors hover:bg-[var(--redis-hover)]"
            >
              <Send className="size-4" />
              Send request
            </button>
          </div>

          {/* Response */}
          <div className="space-y-4 bg-[var(--surface)] p-6">
            <div className="flex items-center gap-2">
              {result ? (
                <>
                  <span
                    className={cn(
                      "rounded px-2 py-0.5 font-mono text-[11px] font-bold",
                      statusTone,
                    )}
                  >
                    {result.status}
                  </span>
                  <span className="font-mono text-[11.5px] text-[var(--subtle)]">
                    · in-browser · no network
                  </span>
                </>
              ) : (
                <span className="text-[13px] text-[var(--subtle)]">
                  Send a request to see the response.
                </span>
              )}
            </div>

            {result ? <JsonView value={result.payload} /> : null}

            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--subtle)]">
                The same call, for real
              </p>
              <pre className="overflow-x-auto rounded-lg bg-[var(--code)] p-3.5 font-mono text-[11.5px] leading-[1.7] text-[#f5efec]">
                <code>
                  <span className="text-[#f0857d]">curl</span>
                  {operation.method === "GET" ? "" : ` -X ${operation.method}`} {EXAMPLE_BASE}
                  {path} \{"\n"} -H{" "}
                  <span className="text-[#8fd19e]">&quot;x-api-key: $CENTRAL_KEY&quot;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3">
        <p className="text-center text-[13px] text-[var(--subtle)]">
          Nothing here is stored on a server. Create a project for a namespace that&rsquo;s yours.
        </p>
        <PrimaryLink href={SIGNUP_URL}>Create your project</PrimaryLink>
      </div>
    </Section>
  );
}
