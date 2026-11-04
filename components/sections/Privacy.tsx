"use client";

import { useLanguage } from "@/lib/i18n";
import { ArrowRight, Check, Database, FileKey2, Fingerprint, Search, ShieldCheck, Smartphone } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Privacy() {
  const { t, language } = useLanguage();
  const {
    hiddenFadeLeft,
    visibleFadeLeft,
    hiddenFadeUp,
    visibleFadeUp,
    viewport,
    sectionDuration,
    transition,
  } = useMotionPrefs();

  const labels = language === "tr"
    ? {
        eyebrow: "GİZLİLİK ÖNCE GELİR",
        device: "Senin cihazın",
        deviceNote: "Kayıtların burada kalır",
        entries: "Günlükler",
        files: "Belgeler",
        search: "Arama",
        local: "Cihaz içinde",
        note: "Bilmen gereken",
      }
    : {
        eyebrow: "PRIVACY COMES FIRST",
        device: "Your device",
        deviceNote: "Your records stay here",
        entries: "Daily logs",
        files: "Documents",
        search: "Search",
        local: "On your device",
        note: "Good to know",
      };
  const itemIcons = [Database, FileKey2, Smartphone, Search, Fingerprint, ShieldCheck];
  const flowItems = [
    { label: labels.entries, Icon: FileKey2 },
    { label: labels.files, Icon: Database },
    { label: labels.search, Icon: Search },
  ];

  return (
    <section id="privacy" className="relative overflow-hidden border-y border-border/60 bg-surface/25 py-20 md:py-28 scroll-mt-20">
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[32rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={hiddenFadeLeft}
          whileInView={visibleFadeLeft}
          viewport={viewport}
          transition={transition(0, sectionDuration)}
        >
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">{labels.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{t.privacy.title}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.privacy.description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.privacy.items.map((item, index) => {
              const Icon = itemIcons[index];
              return (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/55 p-3.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-4" /></span>
                  <span className="pt-1 text-xs font-medium leading-relaxed text-foreground">{item}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/7 p-4">
            <p className="text-xs leading-relaxed text-amber-600 dark:text-amber-400"><span className="mr-2 font-bold">{labels.note}:</span>{t.privacy.note}</p>
          </div>
        </motion.div>

        <motion.div
          initial={hiddenFadeUp}
          whileInView={visibleFadeUp}
          viewport={viewport}
          transition={transition(0.12, sectionDuration)}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 p-5 shadow-[0_24px_65px_rgba(0,0,0,0.17)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><ShieldCheck className="size-5" /></span>
                <div><p className="text-sm font-semibold text-foreground">{labels.device}</p><p className="mt-0.5 text-[11px] text-muted-foreground">{labels.deviceNote}</p></div>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-500">{labels.local}</span>
            </div>

            <div className="relative mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {flowItems.map(({ label, Icon }, index) => (
                <div key={label} className="relative flex min-w-0 flex-col items-center rounded-2xl border border-border/70 bg-background/70 px-2 py-4 text-center">
                  <span className="grid size-9 place-items-center rounded-xl bg-surface text-primary"><Icon className="size-4" /></span>
                  <p className="mt-2 text-[10px] font-semibold leading-tight text-foreground">{label}</p>
                  {index < flowItems.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-card p-0.5 text-primary sm:block" />}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/7 p-4">
              <div className="flex items-center gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/25 bg-background text-primary"><Fingerprint className="size-5" /></div>
                <div className="min-w-0 flex-1"><p className="text-xs font-semibold text-foreground">{language === "tr" ? "Kontrol sende kalır" : "You stay in control"}</p><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{language === "tr" ? "Günlükler, belgeler ve arama akışı; anlatılan modelde cihaz içinde çalışır." : "Daily logs, documents, and search operate on-device in the stated model."}</p></div>
                <Check className="size-4 shrink-0 text-emerald-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
