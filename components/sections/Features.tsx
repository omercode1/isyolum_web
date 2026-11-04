"use client";

import { useLanguage } from "@/lib/i18n";
import {
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  FileText,
  FolderLock,
  ScanText,
} from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Features() {
  const { t, language } = useLanguage();
  const {
    hiddenFadeUp,
    visibleFadeUp,
    viewport,
    sectionDuration,
    staggerDelay,
    transition,
  } = useMotionPrefs();

  const copy = language === "tr"
    ? {
        eyebrow: "TEK BİR DÜZEN",
        subtitle: "Günlük işlerini tamamla; kayıtların, belgelerin ve teslimin hep aynı yerde kalsın.",
        dashboard: "Bugünün görünümü",
        journal: "Günlük kaydı",
        task: "API testlerini dokümante et",
        time: "15 dk önce",
        done: "Hazır",
        month: "Ağustos",
      }
    : {
        eyebrow: "ONE ORGANIZED FLOW",
        subtitle: "Complete today’s work and keep your records, documents, and delivery in the same place.",
        dashboard: "Today at a glance",
        journal: "Daily entry",
        task: "Document API tests",
        time: "15 minutes ago",
        done: "Ready",
        month: "August",
      };

  const cards = [
    { ...t.features.cards[0], Icon: CalendarDays, className: "sm:col-span-2 lg:col-span-2 lg:row-span-2", primary: true },
    { ...t.features.cards[1], Icon: BookOpen, className: "lg:col-span-2", primary: false },
    { ...t.features.cards[2], Icon: FolderLock, className: "lg:col-span-1", primary: false },
    { ...t.features.cards[3], Icon: FileText, className: "lg:col-span-1", primary: false },
    { ...t.features.cards[4], Icon: ScanText, className: "lg:col-span-2", primary: false },
    { ...t.features.cards[8], Icon: Bell, className: "lg:col-span-2", primary: false },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-20 md:py-32 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-surface/25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{t.features.title}</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{copy.subtitle}</p>
        </div>

        <ul className="mt-12 grid auto-rows-[minmax(190px,auto)] gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {cards.map((card, index) => {
            const { Icon } = card;
            return (
              <motion.li
                key={card.title}
                initial={hiddenFadeUp}
                whileInView={visibleFadeUp}
                viewport={viewport}
                transition={transition(staggerDelay(index % 4), sectionDuration)}
                className={`group relative overflow-hidden rounded-[1.65rem] border border-border/70 bg-card/70 p-5 shadow-[0_12px_38px_rgba(0,0,0,0.07)] backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_45px_rgba(37,99,235,0.13)] md:p-6 ${card.className}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.13),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {card.primary ? (
                  <div className="relative flex h-full min-h-[22rem] flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><Icon className="size-4.5" /></div>
                        <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-primary">{copy.dashboard}</span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{card.description}</p>

                    <div className="mt-6 grid flex-1 grid-cols-[0.82fr_1.18fr] gap-3 rounded-2xl border border-border/80 bg-background/60 p-3 sm:p-4">
                      <div className="rounded-xl bg-surface/70 p-3">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground"><span>{copy.month}</span><span className="text-primary">18/40</span></div>
                        <div className="mt-4 grid grid-cols-5 gap-1.5">
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((day) => <span key={day} className={`h-5 rounded-md ${day === 2 || day === 6 || day === 7 ? "bg-primary" : "bg-border/80"}`} />)}
                        </div>
                        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-border"><div className="h-full w-[45%] rounded-full bg-primary" /></div>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-card p-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{copy.journal}</p>
                        <p className="mt-2 text-xs font-medium leading-relaxed text-foreground">{copy.task}</p>
                        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3"><span className="text-[10px] text-muted-foreground">{copy.time}</span><span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-500"><Check className="size-3" /> {copy.done}</span></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-10 place-items-center rounded-2xl border border-primary/15 bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-110"><Icon className="size-4.5" /></div>
                      <span className="text-[10px] font-bold text-primary/70">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                    <div className="mt-auto pt-5"><span className="block h-px w-full bg-border" /><span className="mt-3 block h-1.5 w-2/5 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-3/5" /></div>
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
