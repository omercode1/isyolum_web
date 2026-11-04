"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Hero() {
  const { t, language } = useLanguage();
  const {
    isMobile,
    prefersReducedMotion,
    hiddenFadeUp,
    visibleFadeUp,
    hiddenFade,
    visibleFade,
    heroDuration,
    heroDelay,
    transition,
  } = useMotionPrefs();

  const preview = language === "tr"
    ? {
        label: "Ürün önizlemesi",
        greeting: "Bugün sırada ne var?",
        progress: "Staj ilerlemen",
        days: "18 / 40 gün",
        plan: "Bugünün planı",
        taskOne: "Günlük kaydını tamamla",
        taskTwo: "İzin belgesini ekle",
        complete: "Tamamlandı",
        protected: "Cihazında korunur",
        notification: "Günlük için hatırlatma hazır",
        pdfReady: "PDF'e hazır kayıtlar",
        weeklyPace: "Bu hafta ritmin yerinde.",
        reportName: "Staj defteri · Ağustos",
        exportReady: "PDF'e aktarılabilir",
      }
    : {
        label: "Product preview",
        greeting: "What’s next today?",
        progress: "Internship progress",
        days: "18 / 40 days",
        plan: "Today’s plan",
        taskOne: "Complete your daily log",
        taskTwo: "Add leave document",
        complete: "Complete",
        protected: "Protected on your device",
        notification: "Daily log reminder is ready",
        pdfReady: "Records ready for PDF",
        weeklyPace: "Your pace looks great this week.",
        reportName: "Internship journal · August",
        exportReady: "Ready to export as PDF",
      };

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36 md:pb-28 lg:min-h-[760px] lg:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_70%_35%,rgba(37,99,235,0.2),transparent_52%),radial-gradient(ellipse_at_15%_65%,rgba(59,130,246,0.12),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={hiddenFadeUp}
          animate={visibleFadeUp}
          transition={transition(0, heroDuration)}
          className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
        >
          <motion.div
            initial={prefersReducedMotion || isMobile ? hiddenFade : { opacity: 0, scale: 0.94 }}
            animate={prefersReducedMotion || isMobile ? visibleFade : { opacity: 1, scale: 1 }}
            transition={transition(heroDelay(0.15), isMobile ? 0.28 : 0.45)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary shadow-[0_0_24px_rgba(37,99,235,0.12)]"
          >
            <Sparkles className="size-3.5" />
            <span>{t.hero.badge}</span>
          </motion.div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title.split(" ").map((word: string, index: number, words: string[]) => (
              <span
                key={`${word}-${index}`}
                className={index === words.length - 1 ? "mr-[0.18em] inline-block italic text-primary" : "mr-[0.18em] inline-block"}
              >
                {word}
              </span>
            ))}
          </h1>

          <motion.p
            initial={hiddenFade}
            animate={visibleFade}
            transition={transition(heroDelay(0.28), heroDuration)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={hiddenFade}
            animate={visibleFade}
            transition={transition(heroDelay(0.38), heroDuration)}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> {preview.protected}</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> {preview.pdfReady}</span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? hiddenFade : { opacity: 0, y: isMobile ? 12 : 20 }}
            animate={prefersReducedMotion ? visibleFade : { opacity: 1, y: 0 }}
            transition={transition(heroDelay(0.5), isMobile ? 0.32 : 0.46)}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button size="lg" className="h-14 rounded-full px-7 text-base shadow-[0_10px_32px_rgba(37,99,235,0.3)] transition-shadow hover:shadow-[0_14px_40px_rgba(37,99,235,0.46)]" asChild>
              <a href="#early-access">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 size-4.5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full px-7 text-base" asChild>
              <a href="#demo">{t.hero.ctaSecondary}</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion || isMobile ? hiddenFade : { opacity: 0, y: 20, scale: 0.97 }}
          animate={prefersReducedMotion || isMobile ? visibleFade : { opacity: 1, y: 0, scale: 1 }}
          transition={transition(heroDelay(0.25), isMobile ? 0.4 : 0.75)}
          className="relative mx-auto w-full max-w-[35rem] lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -right-8 top-16 hidden size-36 rounded-full bg-primary/20 blur-3xl sm:block" />
          <div className="absolute -bottom-6 left-4 size-40 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative rounded-[2rem] border border-border/70 bg-card/75 p-3 shadow-[0_28px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-4">
            <div className="overflow-hidden rounded-[1.45rem] border border-border/70 bg-background/80 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{preview.label}</p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">{preview.greeting}</h2>
                </div>
                <div className="flex size-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Bell className="size-4.5" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-2xl border border-border bg-surface/55 p-4">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    <span>{preview.progress}</span>
                    <CalendarDays className="size-3.5 text-primary" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="grid size-[4.6rem] place-items-center rounded-full bg-[conic-gradient(var(--primary)_0deg_162deg,rgba(148,163,184,0.18)_162deg_360deg)] p-1">
                      <div className="grid size-full place-items-center rounded-full bg-card text-sm font-bold text-foreground">45%</div>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-foreground">{preview.days}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{preview.weeklyPace}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{preview.plan}</p>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-500">2 / 3</span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div className="flex items-center gap-2.5 rounded-xl bg-primary/7 p-2.5">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" /></span>
                      <span className="text-xs font-medium text-foreground">{preview.taskOne}</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5">
                      <span className="size-5 shrink-0 rounded-full border border-border" />
                      <span className="text-xs text-muted-foreground">{preview.taskTwo}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border/70 bg-surface/35 p-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><FileCheck2 className="size-4" /></div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-foreground">{preview.reportName}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{preview.complete} · {preview.exportReady}</p>
                </div>
                <CheckCircle2 className="size-4.5 shrink-0 text-emerald-500" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden max-w-56 items-center gap-3 rounded-2xl border border-border/70 bg-card/90 p-3 shadow-xl backdrop-blur-xl sm:flex">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500"><CheckCircle2 className="size-4" /></span>
            <p className="text-[11px] font-medium leading-relaxed text-foreground">{preview.notification}</p>
          </div>
          <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-full border border-border/70 bg-card/90 px-3 py-2 text-[10px] font-bold text-foreground shadow-lg backdrop-blur-xl sm:flex">
            <ShieldCheck className="size-3.5 text-primary" />
            {preview.protected}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
