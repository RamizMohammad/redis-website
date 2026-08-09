import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export type Token =
  | { t: "cmd" | "str" | "kw" | "comment" | "plain" | "ok"; v: string }
  | { t: "br" };

/**
 * A single line of pre-tokenised code.
 *
 * Tokenising by hand rather than pulling in a syntax highlighter: the site
 * shows six short snippets, and a highlighter would cost more bundle weight
 * than the snippets themselves.
 */
export type CodeLine = Token[];

const TOKEN_CLASS: Record<string, string> = {
  cmd: "text-[#f0857d]",
  str: "text-[#8fd19e]",
  kw: "text-[#e8b33a]",
  comment: "text-[#9a908b]",
  ok: "text-[#8fd19e]",
  plain: "text-[#f5efec]",
};

function lineToText(line: CodeLine): string {
  return line.map((token) => ("v" in token ? token.v : "")).join("");
}

export function CodeBlock({
  title,
  lines,
  className,
  copyText,
}: {
  title?: string;
  lines: CodeLine[];
  className?: string;
  copyText?: string;
}) {
  const [copied, setCopied] = useState(false);
  const plain = copyText ?? lines.map(lineToText).join("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard needs a secure context; failing silently is fine here. */
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-black/40 bg-[var(--code)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/8 bg-[var(--code-alt)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        {title ? (
          <span className="font-mono text-[11px] tracking-wide text-[#9a908b]">{title}</span>
        ) : null}
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded px-2 py-1 font-mono text-[11px] text-[#9a908b] transition-colors hover:bg-white/10 hover:text-[#f5efec]"
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.75] text-[#f5efec]">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="min-h-[1.75em] whitespace-pre">
              {line.map((token, tokenIndex) =>
                "v" in token ? (
                  <span key={tokenIndex} className={TOKEN_CLASS[token.t]}>
                    {token.v}
                  </span>
                ) : null,
              )}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

/** Shorthand builders, so snippet definitions stay readable. */
export const tok = {
  cmd: (v: string): Token => ({ t: "cmd", v }),
  str: (v: string): Token => ({ t: "str", v }),
  kw: (v: string): Token => ({ t: "kw", v }),
  comment: (v: string): Token => ({ t: "comment", v }),
  ok: (v: string): Token => ({ t: "ok", v }),
  p: (v: string): Token => ({ t: "plain", v }),
};
