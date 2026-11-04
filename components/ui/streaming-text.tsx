"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Copy,
  CornerDownRight,
  Database,
  FolderLock,
  RotateCw,
  ScanText,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useReducedMotion } from "motion/react";

const WORD_MS = 80;
const HOLD_MS = 3400;

export type StreamingSource = {
  name: string;
  domain: string;
  href: string;
};

export type StreamingFollowUp = {
  text: string;
  href: string;
};

export type StreamingTextProps = {
  lead: string;
  continuation: string;
  sources: StreamingSource[];
  followUps: StreamingFollowUp[];
  sourcesLabel: string;
  followUpsLabel: string;
  copyLabel: string;
  copiedLabel: string;
  retryLabel: string;
  usefulLabel: string;
  notUsefulLabel: string;
};

type Token = { text: string; cite?: boolean };

const SOURCE_ICONS = [Database, ScanText, FolderLock];

function toTokens(lead: string, continuation: string): Token[] {
  return [
    ...lead.split(" ").filter(Boolean).map((text) => ({ text })),
    { text: "", cite: true },
    ...continuation.split(" ").filter(Boolean).map((text) => ({ text })),
  ];
}

function SourceChip({ source }: { source: StreamingSource }) {
  const Icon = SOURCE_ICONS[0];
  return (
    <a
      href={source.href}
      className="ml-0 mr-1 inline-flex h-[18px] translate-y-[-1px] items-center gap-1 rounded-[5px] bg-inset pr-1.5 pl-[3px] align-middle font-mono text-[10.5px] text-ink-2 shadow-hairline transition-colors duration-150 hover:bg-hover hover:text-ink"
      style={{ animation: "st-pop-in 250ms cubic-bezier(0.23,1,0.32,1) both" }}
    >
      <Icon className="size-3 rounded-[3px] text-primary" aria-hidden="true" />
      <span>{source.domain}</span>
    </a>
  );
}

export default function StreamingText({
  lead,
  continuation,
  sources,
  followUps,
  sourcesLabel,
  followUpsLabel,
  copyLabel,
  copiedLabel,
  retryLabel,
  usefulLabel,
  notUsefulLabel,
}: StreamingTextProps) {
  const tokens = useMemo(() => toTokens(lead, continuation), [lead, continuation]);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [count, setCount] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const visibleCount = prefersReducedMotion ? tokens.length : count;
  const done = visibleCount >= tokens.length;
  const fullText = `${lead} ${continuation}`.trim();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = window.setTimeout(
      () => setCount((current) => (current >= tokens.length ? 0 : current + 1)),
      done ? HOLD_MS : WORD_MS
    );
    return () => window.clearTimeout(timeout);
  }, [count, done, prefersReducedMotion, tokens.length]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const actions: { id: string; label: string; icon: ReactNode; onClick?: () => void }[] = [
    {
      id: "copy",
      label: copied ? copiedLabel : copyLabel,
      icon: <Copy className="size-[15px]" />,
      onClick: handleCopy,
    },
    {
      id: "retry",
      label: retryLabel,
      icon: <RotateCw className="size-[15px]" />,
      onClick: () => {
        setCount(0);
        setSourcesOpen(false);
      },
    },
    { id: "useful", label: usefulLabel, icon: <ThumbsUp className="size-[15px]" /> },
    { id: "not-useful", label: notUsefulLabel, icon: <ThumbsDown className="size-[15px]" /> },
  ];

  return (
    <div className="streaming-text min-h-[13rem] w-full max-w-[23.75rem]">
      <p className="text-[13px] leading-relaxed text-ink">
        {tokens.slice(0, visibleCount).map((token, index) =>
          token.cite ? (
            sources[0] ? <SourceChip key={index} source={sources[0]} /> : null
          ) : (
            <span
              key={index}
              className="inline"
              style={
                prefersReducedMotion
                  ? undefined
                  : { animation: "st-fade-in 250ms ease-out both" }
              }
            >
              {token.text}{" "}
            </span>
          )
        )}
        {!done && (
          <span
            className="ml-0.5 inline-block h-3 w-0.5 translate-y-0.5 rounded-full bg-ink"
            style={{ animation: "st-fade-in 150ms ease-out both" }}
          />
        )}
      </p>

      <div
        className="mt-2 flex items-center gap-0.5 transition-opacity duration-400"
        style={{ opacity: done ? 1 : 0, pointerEvents: done ? "auto" : "none" }}
      >
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            aria-label={action.label}
            onClick={action.onClick}
            className="flex size-6 items-center justify-center rounded-[6px] text-ink-3 transition-colors duration-100 hover:bg-hover-2 hover:text-ink-2"
          >
            {action.icon}
          </button>
        ))}
        <button
          type="button"
          aria-expanded={sourcesOpen}
          onClick={() => setSourcesOpen((current) => !current)}
          className="ml-1.5 flex items-center gap-1.5 rounded-[6px] px-1 py-0.5 text-left transition-colors duration-150 hover:bg-hover"
        >
          <span className="flex -space-x-1">
            {sources.map((source, index) => {
              const Icon = SOURCE_ICONS[index % SOURCE_ICONS.length];
              return (
                <span
                  key={source.domain}
                  className="flex size-3.5 items-center justify-center rounded-full bg-surface text-primary shadow-[0_0_0_1.5px_var(--background)]"
                >
                  <Icon className="size-2.5" aria-hidden="true" />
                </span>
              );
            })}
          </span>
          <span className="text-[12px] text-ink-2">
            {sources.length} {sourcesLabel}
          </span>
        </button>
      </div>

      <div
        className="grid transition-[grid-template-rows,opacity] duration-300"
        style={{
          gridTemplateRows: done && sourcesOpen ? "1fr" : "0fr",
          opacity: done && sourcesOpen ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-1.5 flex flex-col rounded-control bg-inset p-1 shadow-hairline">
            {sources.map((source, index) => {
              const Icon = SOURCE_ICONS[index % SOURCE_ICONS.length];
              return (
                <a
                  key={source.domain}
                  href={source.href}
                  className="flex items-center gap-2 rounded-[6px] px-1.5 py-1 text-[12px] text-ink-2 transition-colors duration-150 hover:bg-hover hover:text-ink"
                >
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  <span className="underline-offset-2 hover:underline">{source.name}</span>
                  <span className="ml-auto font-mono text-[10.5px] text-ink-3">{source.domain}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="mt-2.5 transition-opacity duration-400"
        style={{ opacity: done ? 1 : 0, pointerEvents: done ? "auto" : "none" }}
      >
        <p className="text-[12px] font-medium text-ink-2">{followUpsLabel}</p>
        <div className="mt-0.5 flex flex-col">
          {followUps.map((item, index) => (
            <a
              key={item.href + item.text}
              href={item.href}
              className="-mx-1.5 flex items-center gap-2 border-b border-line px-1.5 py-1.5 text-left text-[12.5px] text-ink transition-colors duration-100 hover:bg-hover-2"
              style={
                done && !prefersReducedMotion
                  ? {
                      animation: `st-fade-up 350ms cubic-bezier(0.23,1,0.32,1) ${index * 90}ms both`,
                    }
                  : done
                    ? undefined
                    : { opacity: 0 }
              }
            >
              <CornerDownRight className="size-[11px] shrink-0 text-ink-3" aria-hidden="true" />
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
