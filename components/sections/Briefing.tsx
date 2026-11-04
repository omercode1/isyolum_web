"use client";

import { useLanguage } from "@/lib/i18n";
import StreamingText from "@/components/ui/streaming-text";

export function Briefing() {
  const { t } = useLanguage();
  const briefing = t.hero.briefing;

  return (
    <section
      id="briefing"
      className="border-y border-border bg-surface/30 py-12 md:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-primary">
            {briefing.kicker}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {briefing.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {briefing.note}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl">
          <StreamingText
            lead={briefing.lead}
            continuation={briefing.continuation}
            sources={briefing.sources}
            followUps={briefing.followUps}
            sourcesLabel={briefing.sourcesLabel}
            followUpsLabel={briefing.followUpsLabel}
            copyLabel={briefing.copy}
            copiedLabel={briefing.copied}
            retryLabel={briefing.retry}
            usefulLabel={briefing.useful}
            notUsefulLabel={briefing.notUseful}
          />
        </div>
      </div>
    </section>
  );
}
