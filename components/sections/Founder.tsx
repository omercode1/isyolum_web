"use client";

import { useLanguage } from "@/lib/i18n";
import { Sparkles, Terminal, Rocket, Code2, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Founder() {
  const { t } = useLanguage();
  const { hiddenFadeUp, visibleFadeUp, viewport, transition, sectionDuration } = useMotionPrefs();

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
          {/* Decorative abstract elements */}
          <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:group-hover:opacity-10 md:group-hover:scale-110 md:group-hover:rotate-12 transition-all duration-700 ease-out pointer-events-none">
            <Terminal className="w-24 h-24 md:w-32 md:h-32 text-primary" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left relative z-10">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden md:group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-shadow duration-500">
                <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary md:group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-full border border-border flex items-center justify-center shadow-lg">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Founder&apos;s Note</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1 md:mb-2">
                Ömer Faruk Temurtaş
              </h3>
              <p className="text-xs sm:text-sm text-primary font-medium mb-5 md:mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
                Kurucu & Geliştirici 
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> 
                <span className="text-muted-foreground">İşYolum</span>
              </p>
              
              <div className="relative">
                <span className="text-4xl md:text-6xl text-primary/10 absolute -top-4 md:-top-6 -left-2 md:-left-4 font-serif leading-none">&quot;</span>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed italic relative z-10">
                  {t.founder.text}
                </p>
              </div>
              
              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest text-center sm:text-left">
                  Building the future of work
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  Projelerimi İncele <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
