"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Sparkles, Code2, Download, Smartphone } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

function FounderPathAnimation({ reducedMotion }: { reducedMotion: boolean }) {
  const draw = reducedMotion
    ? { duration: 0.01 }
    : { duration: 1.45, ease: [0.21, 0.47, 0.32, 0.98] as const };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute -right-6 top-3 hidden h-56 w-80 opacity-70 md:block">
      <svg viewBox="0 0 320 224" fill="none" className="size-full overflow-visible">
        <defs>
          <linearGradient id="founder-path" x1="24" y1="0" x2="285" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="0.52" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <motion.path
          d="M61 56L33 94L61 132M91 56L119 94L91 132"
          initial={{ pathLength: reducedMotion ? 1 : 0, opacity: reducedMotion ? 0.55 : 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true }}
          transition={draw}
          stroke="url(#founder-path)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[76, 100, 76].map((width, index) => (
          <motion.path
            key={width + index}
            d={`M147 ${65 + index * 24}H${147 + width}`}
            initial={{ pathLength: reducedMotion ? 1 : 0, opacity: reducedMotion ? 0.45 : 0 }}
            whileInView={{ pathLength: 1, opacity: 0.45 }}
            viewport={{ once: true }}
            transition={{ ...draw, delay: reducedMotion ? 0 : 0.22 + index * 0.1 }}
            stroke="url(#founder-path)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        <motion.path
          d="M36 171C77 135 113 195 155 161C194 129 233 191 281 151"
          initial={{ pathLength: reducedMotion ? 1 : 0, opacity: reducedMotion ? 0.7 : 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ ...draw, delay: reducedMotion ? 0 : 0.35 }}
          stroke="url(#founder-path)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {[36, 155, 281].map((cx, index) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={index === 0 ? 171 : index === 1 ? 161 : 151}
            r="5"
            initial={{ scale: reducedMotion ? 1 : 0, opacity: reducedMotion ? 0.85 : 0 }}
            whileInView={{ scale: 1, opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 18, delay: reducedMotion ? 0 : 0.95 + index * 0.16 }}
            fill="currentColor"
          />
        ))}
        {!reducedMotion && (
          <motion.circle
            cx="0"
            cy="0"
            r="3"
            fill="currentColor"
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.8, delay: 1.3, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
            style={{ offsetPath: "path('M36 171C77 135 113 195 155 161C194 129 233 191 281 151')" }}
          />
        )}
      </svg>
    </div>
  );
}

export function Founder() {
  const { t, language } = useLanguage();
  const { hiddenFadeUp, visibleFadeUp, viewport, transition, sectionDuration, prefersReducedMotion } = useMotionPrefs();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-surface/20 border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={hiddenFadeUp}
          whileInView={visibleFadeUp}
          viewport={viewport}
          transition={transition(0, sectionDuration)}
          className="relative rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/50 p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl group md:hover:border-primary/30 transition-colors duration-500"
        >
          <FounderPathAnimation reducedMotion={prefersReducedMotion} />

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left relative z-10">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-tr from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden md:group-hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-shadow duration-500 p-2">
                <Image
                  src="/images/store/app-icon.png"
                  alt="İşYolum"
                  width={112}
                  height={112}
                  className="size-full rounded-2xl object-cover md:group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-full border border-border flex items-center justify-center shadow-lg">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4">
                <Sparkles className="w-3 h-3" />
                <span>{language === "tr" ? "Kurucudan" : "A note from the founder"}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1 md:mb-2">
                Ömer Faruk Temurtaş
              </h3>
              <p className="text-xs sm:text-sm text-primary font-medium mb-5 md:mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
                  {language === "tr" ? "Kurucu ve geliştirici" : "Founder and developer"}
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> 
                <span className="text-muted-foreground">İşYolum</span>
              </p>
              
              <div className="relative">
                <span className="text-4xl md:text-6xl text-primary/10 absolute -top-4 md:-top-6 -left-2 md:-left-4 font-serif leading-none">&quot;</span>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed italic relative z-10">
                  {t.founder.text}
                </p>
              </div>
              
              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface/70 px-3.5 py-2 text-xs font-semibold text-foreground">
                  <Smartphone className="size-4 text-primary shrink-0" />
                  <span>{language === "tr" ? "İşYolum Android · 16 Kasım 2026 Derlemesi" : "İşYolum Android · Nov 16, 2026 Build"}</span>
                </div>
                <Button size="sm" className="h-10 rounded-xl px-5 text-xs font-bold shadow-md w-full sm:w-auto" asChild>
                  <a
                    href="/downloads/IsYolum-Erken-Erisim.apk"
                    download="IsYolum-Erken-Erisim.apk"
                  >
                    <Download className="mr-2 size-4" />
                    {language === "tr" ? "Erken Erişim APK İndir" : "Download Early Access APK"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
