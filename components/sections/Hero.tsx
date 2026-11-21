"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Download,
  FolderLock,
  Home,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
} from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Hero() {
  const { t, language } = useLanguage();
  const [activeScreen, setActiveScreen] = useState(0);
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

  const screens = language === "tr"
    ? [
        {
          id: "home",
          tab: "Ana Sayfa",
          title: "Staj Takibini Kolaylaştır",
          subtitle: "Günlük kayıtlar, çalışma durumu ve haftalık özetler tek ekranda.",
          badge: "Bugünkü Staj Kaydı",
          image: "/images/store/screen-home-staj.png",
          Icon: Home,
        },
        {
          id: "career",
          tab: "Kariyerim",
          title: "Kariyer Hafızanı Oluştur",
          subtitle: "Deneyimlerini, projelerini, becerilerini ve kanıtlarını zaman çizelgesinde biriktir.",
          badge: "Kişisel Kariyer Hafızan",
          image: "/images/store/screen-career-memory.png",
          Icon: Award,
        },
        {
          id: "applications",
          tab: "Başvurularım",
          title: "Başvurularını Takip Et",
          subtitle: "İş ve staj başvurularını tek yerden kaydet, izle ve düzenli ilerle.",
          badge: "Başvuru Yönetimi",
          image: "/images/store/screen-applications.png",
          Icon: Briefcase,
        },
        {
          id: "vault",
          tab: "İş Kasam",
          title: "Belgelerini Güvenle Sakla",
          subtitle: "CV, evrak ve dosyalarını dönemlere göre topla, optimize et ve yönet.",
          badge: "Belge & OCR Kasası",
          image: "/images/store/screen-vault-documents.png",
          Icon: FolderLock,
        },
        {
          id: "journal",
          tab: "Günlük",
          title: "Günlüklerini Hızlıca Kaydet",
          subtitle: "Günlük notlarını ekle, dönemlerini filtrele ve staj defterine hazır tut.",
          badge: "Staj & İş Günlüğüm",
          image: "/images/store/screen-journal-notes.png",
          Icon: BookOpen,
        },
        {
          id: "profile",
          tab: "Profil",
          title: "Profilini ve Modunu Yönet",
          subtitle: "Stajyer, iş arayan ve çalışan modları arasında kolayca geçiş yap.",
          badge: "Kullanıcı Modu Seçimi",
          image: "/images/store/screen-profile-modes.png",
          Icon: UserCheck,
        },
      ]
    : [
        {
          id: "home",
          tab: "Home",
          title: "Simplify Internship Tracking",
          subtitle: "Daily logs, work status, and weekly summaries on a single screen.",
          badge: "Today's Internship Log",
          image: "/images/store/screen-home-staj.png",
          Icon: Home,
        },
        {
          id: "career",
          tab: "My Career",
          title: "Build Your Career Memory",
          subtitle: "Collect experiences, projects, skills, and proof along your timeline.",
          badge: "Personal Career Memory",
          image: "/images/store/screen-career-memory.png",
          Icon: Award,
        },
        {
          id: "applications",
          tab: "Applications",
          title: "Track Your Applications",
          subtitle: "Save and monitor job and internship applications in one place.",
          badge: "Application Tracker",
          image: "/images/store/screen-applications.png",
          Icon: Briefcase,
        },
        {
          id: "vault",
          tab: "Work Vault",
          title: "Store Documents Safely",
          subtitle: "Gather, optimize, and manage your CVs, files, and records by period.",
          badge: "Document & OCR Vault",
          image: "/images/store/screen-vault-documents.png",
          Icon: FolderLock,
        },
        {
          id: "journal",
          tab: "Journal",
          title: "Record Daily Logs Quickly",
          subtitle: "Add daily notes, filter by period, and keep entries ready for export.",
          badge: "Daily Work Journal",
          image: "/images/store/screen-journal-notes.png",
          Icon: BookOpen,
        },
        {
          id: "profile",
          tab: "Profile",
          title: "Manage Profile & Modes",
          subtitle: "Switch seamlessly between Intern, Job Seeker, and Employee modes.",
          badge: "User Mode Selection",
          image: "/images/store/screen-profile-modes.png",
          Icon: UserCheck,
        },
      ];

  const currentScreen = screens[activeScreen];
  const secondaryScreen = screens[(activeScreen + 1) % screens.length];

  const highlights = language === "tr"
    ? {
        protected: "SQLCipher şifreli yerel veritabanı",
        modes: "Stajyer · İş Arayan · Çalışan modları",
        pdfReady: "A4 PDF staj defteri ve İş Kasam",
        livePreview: "Gerçek uygulama ekranları · Sekmeye dokun",
      }
    : {
        protected: "SQLCipher encrypted local database",
        modes: "Intern · Job Seeker · Employee modes",
        pdfReady: "A4 PDF journal & Work Vault",
        livePreview: "Real app screens · Tap a tab to switch",
      };

  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden pb-20 pt-32 sm:pt-36 md:pb-28 lg:min-h-[780px] lg:pt-38">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_at_70%_35%,rgba(37,99,235,0.22),transparent_54%),radial-gradient(ellipse_at_15%_65%,rgba(59,130,246,0.12),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8">
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
            className="mb-6 inline-flex items-center gap-2.5 rounded-2xl border border-primary/30 bg-card/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary shadow-[0_8px_28px_rgba(37,99,235,0.14)] backdrop-blur-md"
          >
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <Image
              src="/images/store/app-icon.png"
              alt="İşYolum"
              width={20}
              height={20}
              className="size-5 rounded-md object-cover shadow-sm"
            />
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
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> {highlights.protected}</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> {highlights.modes}</span>
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-primary" /> {highlights.pdfReady}</span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? hiddenFade : { opacity: 0, y: isMobile ? 12 : 20 }}
            animate={prefersReducedMotion ? visibleFade : { opacity: 1, y: 0 }}
            transition={transition(heroDelay(0.5), isMobile ? 0.32 : 0.46)}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button size="lg" className="h-14 rounded-2xl px-7 text-base font-bold" asChild>
              <a href="/downloads/IsYolum-Erken-Erisim.apk" download="IsYolum-Erken-Erisim.apk">
                <Download className="mr-2.5 size-5" />
                {t.hero.ctaPrimary}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-2xl border-border bg-card/95 px-7 text-base font-semibold text-foreground shadow-sm hover:border-primary/45 hover:bg-surface hover:text-primary"
              asChild
            >
              <a href="#early-access">
                {language === "tr" ? "Kurulum & Erken Erişim" : "Install Guide & Early Access"}
                <ArrowRight className="ml-2 size-4.5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={hiddenFade}
            animate={visibleFade}
            transition={transition(heroDelay(0.58), heroDuration)}
            className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-2xl border border-border bg-card/90 px-4 py-2.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5 font-bold text-primary">
              <Smartphone className="size-3.5" />
              <span>IsYolum-Erken-Erisim.apk</span>
            </span>
            <span aria-hidden="true" className="h-3.5 w-px bg-border" />
            <span className="font-semibold text-foreground">112.2 MB</span>
            <span aria-hidden="true" className="h-3.5 w-px bg-border" />
            <span className="text-muted-foreground">
              {language === "tr" ? "Son Derleme: 16 Kasım 2026" : "Built: Nov 16, 2026"}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion || isMobile ? hiddenFade : { opacity: 0, y: 20, scale: 0.97 }}
          animate={prefersReducedMotion || isMobile ? visibleFade : { opacity: 1, y: 0, scale: 1 }}
          transition={transition(heroDelay(0.25), isMobile ? 0.4 : 0.75)}
          className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -right-8 top-12 hidden size-44 rounded-full bg-primary/20 blur-3xl sm:block" />
          <div className="absolute -bottom-8 left-4 size-44 rounded-full bg-sky-400/15 blur-3xl" />

          {/* Secondary stacked screen preview on desktop */}
          <button
            type="button"
            onClick={() => setActiveScreen((activeScreen + 1) % screens.length)}
            aria-label={secondaryScreen.title}
            className="group absolute -right-4 top-10 z-0 hidden w-48 rotate-6 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/80 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:rotate-3 hover:scale-[1.03] xl:block"
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.35rem]">
              <Image
                src={secondaryScreen.image}
                alt={secondaryScreen.title}
                fill
                sizes="200px"
                className="object-cover object-top opacity-85 transition-opacity group-hover:opacity-100"
              />
            </div>
          </button>

          <div className="relative z-10 rounded-[2rem] border border-border/75 bg-card/80 p-3 shadow-[0_28px_85px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  <Sparkles className="size-3" />
                  {currentScreen.badge}
                </span>
                <span className="hidden text-[11px] font-medium text-muted-foreground sm:inline">
                  {highlights.livePreview}
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold text-muted-foreground">
                0{activeScreen + 1} / 0{screens.length}
              </span>
            </div>

            {/* Interactive App Navigation Tabs matching the real bottom bar */}
            <div
              role="tablist"
              aria-label={language === "tr" ? "Uygulama ekranları" : "App screens"}
              className="mb-3 grid grid-cols-3 gap-1.5 rounded-2xl border border-border/70 bg-background/70 p-1.5 sm:grid-cols-6"
            >
              {screens.map((item, idx) => {
                const TabIcon = item.Icon;
                const isSelected = idx === activeScreen;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveScreen(idx)}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[10px] font-semibold transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <TabIcon className="size-3.5 shrink-0" />
                    <span className="truncate max-w-full">{item.tab}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Store Screenshot Display */}
            <div className="relative mx-auto overflow-hidden rounded-[1.5rem] border border-border/70 bg-gradient-to-b from-sky-500/10 via-background to-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.24 }}
                  className="grid items-center gap-4 p-3 sm:grid-cols-[0.56fr_0.44fr] sm:p-4"
                >
                  <div className="relative mx-auto aspect-[9/16] w-full max-w-[16.5rem] overflow-hidden rounded-2xl border border-border/60 bg-white shadow-xl">
                    <Image
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      fill
                      priority={activeScreen === 0}
                      sizes="(max-width: 640px) 260px, 280px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-3 text-left">
                    <div className="rounded-2xl border border-border/70 bg-card/90 p-3.5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        {currentScreen.tab}
                      </p>
                      <h2 className="mt-1 text-base font-bold tracking-tight text-foreground sm:text-lg">
                        {currentScreen.title}
                      </h2>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {currentScreen.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-border/70 bg-surface/60 p-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        <span>{highlights.protected}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <ShieldCheck className="size-4 shrink-0 text-primary" />
                        <span>{highlights.modes}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveScreen((activeScreen - 1 + screens.length) % screens.length)
                        }
                        className="rounded-xl border border-border bg-background/80 px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {language === "tr" ? "← Önceki" : "← Prev"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveScreen((activeScreen + 1) % screens.length)}
                        className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {language === "tr" ? "Sonraki ekran →" : "Next screen →"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
