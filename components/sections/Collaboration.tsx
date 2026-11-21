"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, GraduationCap, Sparkles, Users } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Collaboration() {
  const { t, language } = useLanguage();
  const {
    hiddenScale,
    visibleScale,
    hiddenFadeUp,
    visibleFadeUp,
    viewport,
    sectionDuration,
    staggerDelay,
    transition,
  } = useMotionPrefs();

  const icons = [GraduationCap, Briefcase, Users, Sparkles];

  const modeDetails = language === "tr"
    ? {
        badge: "PROFİL VE KULLANICI MODU SEÇİMİ",
        assistantTitle: "Kariyer Asistanım",
        assistantStats: ["Başvuru Takibi", "Günlük Notu", "Saklanan Belge"],
        caption: "Stajyer, İş Arayan ve Çalışan modları arasında tek dokunuşla geçiş yap.",
      }
    : {
        badge: "PROFILE & USER MODE SELECTION",
        assistantTitle: "My Career Assistant",
        assistantStats: ["Applications", "Daily Notes", "Stored Documents"],
        caption: "Switch seamlessly between Intern, Job Seeker, and Employee modes.",
      };

  return (
    <section id="collaboration" className="py-20 md:py-28 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {modeDetails.badge}
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              {t.collaboration.title}
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              {t.collaboration.description}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.collaboration.cards.map((card, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={index}
                    initial={hiddenScale}
                    whileInView={visibleScale}
                    viewport={viewport}
                    transition={transition(staggerDelay(index, 0.05), sectionDuration * 0.7)}
                    className="group rounded-2xl bg-card/75 border border-border/80 p-5 flex flex-col gap-2.5 md:hover:border-primary/45 md:hover:shadow-[0_14px_38px_rgba(37,99,235,0.12)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="size-4.5" />
                      </div>
                      <CheckCircle2 className="size-4 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-foreground">{card.title}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{card.description}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Button size="lg" className="h-12 rounded-full px-7 font-bold" asChild>
                <a href="/downloads/IsYolum-Erken-Erisim.apk" download="IsYolum-Erken-Erisim.apk">
                  {t.collaboration.ctaPrimary}
                  <ArrowRight className="ml-2 size-4.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full px-7" asChild>
                <a href="#demo">
                  {t.collaboration.ctaSecondary}
                  <ArrowRight className="ml-2 size-4.5" />
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={hiddenFadeUp}
            whileInView={visibleFadeUp}
            viewport={viewport}
            transition={transition(0.15, sectionDuration)}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/15 blur-3xl" />
            <div className="rounded-[2rem] border border-border/80 bg-card/80 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
                <span className="text-xs font-bold text-foreground">{modeDetails.assistantTitle}</span>
                <div className="flex flex-wrap gap-1.5">
                  {modeDetails.assistantStats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto aspect-[9/15] w-full overflow-hidden rounded-[1.4rem] border border-border/70 bg-white shadow-lg">
                <Image
                  src="/images/store/screen-profile-modes.png"
                  alt="İşYolum Profilini ve Modunu Yönet"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-3 text-center text-xs font-medium text-muted-foreground">
                {modeDetails.caption}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
