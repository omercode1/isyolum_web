"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import {
  Bell,
  Briefcase,
  BookOpen,
  CalendarDays,
  Check,
  ClipboardList,
  Clock3,
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
        eyebrow: "İŞ VE KARİYER DÜZENİ",
        subtitle: "Takviminden başvurularına, kariyer hafızandan belge kasana kadar tüm çalışma hayatını tek yerde tut.",
        dashboard: "Gerçek uygulama görünümü",
        careerTags: ["İş/Staj", "Proje", "Beceri", "Başarı", "Kanıt"],
        timelineLabel: "Zaman Çizelgesi · Aktif Dönem",
        statusSaved: "Cihazda şifreli",
      }
    : {
        eyebrow: "WORK AND CAREER, ORGANIZED",
        subtitle: "Keep your entire work life in one place, from your calendar and applications to your career memory and document vault.",
        dashboard: "Real app view",
        careerTags: ["Work/Intern", "Projects", "Skills", "Achievements", "Proof"],
        timelineLabel: "Timeline · Active Period",
        statusSaved: "Encrypted on-device",
      };

  const cards: Array<{
    title: string;
    description: string;
    Icon: typeof CalendarDays;
    className: string;
    primary: boolean;
    image?: string;
    secondaryImage?: string;
  }> = [
    {
      ...t.features.cards[0],
      Icon: CalendarDays,
      className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
      primary: true,
      image: "/images/store/screen-career-memory.png",
      secondaryImage: "/images/store/screen-home-staj.png",
    },
    {
      ...t.features.cards[1],
      Icon: Clock3,
      className: "lg:col-span-2",
      primary: false,
      image: "/images/store/screen-home-staj.png",
    },
    { ...t.features.cards[2], Icon: BookOpen, className: "lg:col-span-1", primary: false },
    { ...t.features.cards[3], Icon: Briefcase, className: "lg:col-span-1", primary: false },
    {
      ...t.features.cards[4],
      Icon: ClipboardList,
      className: "lg:col-span-2",
      primary: false,
      image: "/images/store/screen-applications.png",
    },
    {
      ...t.features.cards[5],
      Icon: FolderLock,
      className: "lg:col-span-2",
      primary: false,
      image: "/images/store/screen-vault-documents.png",
    },
    { ...t.features.cards[6], Icon: ScanText, className: "lg:col-span-2", primary: false },
    { ...t.features.cards[7], Icon: Bell, className: "lg:col-span-2", primary: false },
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
                  <div className="relative flex h-full min-h-[24rem] flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                          <Icon className="size-4.5" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">{card.title}</h3>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-primary">
                        {copy.dashboard}
                      </span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{card.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {copy.careerTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-primary/20 bg-primary/8 px-2.5 py-1 text-[10px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid flex-1 grid-cols-2 gap-3 rounded-2xl border border-border/80 bg-background/60 p-3">
                      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-xl border border-border/60 bg-white shadow-md">
                        <Image
                          src="/images/store/screen-home-staj.png"
                          alt="İşYolum Ana Sayfa"
                          fill
                          sizes="(max-width: 768px) 45vw, 240px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-xl border border-border/60 bg-white shadow-md">
                        <Image
                          src="/images/store/screen-career-memory.png"
                          alt="İşYolum Kariyer Hafızası"
                          fill
                          sizes="(max-width: 768px) 45vw, 240px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-primary/15 bg-primary/5 px-3 py-2.5">
                      <span className="text-[10px] font-medium text-muted-foreground">{copy.timelineLabel}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary">
                        <Check className="size-3" /> {copy.statusSaved}
                      </span>
                    </div>
                  </div>
                ) : card.image ? (
                  <div className="relative grid h-full items-center gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid size-10 place-items-center rounded-2xl border border-primary/15 bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-110">
                          <Icon className="size-4.5" />
                        </div>
                        <span className="text-[10px] font-bold text-primary/70">0{index + 1}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                      <div className="mt-auto pt-4">
                        <span className="block h-px w-full bg-border" />
                        <span className="mt-2.5 block h-1.5 w-2/5 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-3/5" />
                      </div>
                    </div>
                    <div className="relative mx-auto aspect-[9/13] w-full max-w-[11rem] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-lg">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="180px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-10 place-items-center rounded-2xl border border-primary/15 bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-[10px] font-bold text-primary/70">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                    <div className="mt-auto pt-5">
                      <span className="block h-px w-full bg-border" />
                      <span className="mt-3 block h-1.5 w-2/5 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-3/5" />
                    </div>
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
