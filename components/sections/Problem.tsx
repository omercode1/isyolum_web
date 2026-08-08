"use client";

import { useLanguage } from "@/lib/i18n";
import { AlertCircle, CalendarOff, FileQuestion, Calculator, Clock, CheckSquare } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Problem() {
  const { t } = useLanguage();
  const {
    hiddenFadeUp,
    visibleFadeUp,
    hiddenScale,
    visibleScale,
    viewport,
    sectionDuration,
    staggerDelay,
    transition,
  } = useMotionPrefs();

  const icons = [
    CalendarOff,
    Clock,
    FileQuestion,
    Calculator,
    AlertCircle,
    CheckSquare
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-surface/30 border-y border-border/50 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[min(100vw,400px)] md:w-[600px] h-[min(100vw,400px)] md:h-[600px] bg-red-500/5 rounded-full blur-[48px] md:blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={hiddenFadeUp}
            whileInView={visibleFadeUp}
            viewport={viewport}
            transition={transition(0, sectionDuration)}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              {t.problem.title}
            </h2>
            <div className="h-1 w-12 md:w-16 bg-red-500/20 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-1/2 rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.problem.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={hiddenFadeUp}
                whileInView={visibleFadeUp}
                viewport={viewport}
                transition={transition(staggerDelay(index % 3), sectionDuration)}
                className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-border/60 flex flex-col gap-4 md:gap-5 group md:hover:border-red-500/30 md:hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)] transition-[border-color,box-shadow] duration-500 ease-out tap-scale"
              >
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 md:group-hover:bg-red-500 md:group-hover:text-white md:group-hover:shadow-lg md:group-hover:scale-110 md:group-hover:-rotate-3 transition-all duration-500">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-foreground tracking-wide md:group-hover:text-red-500 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <motion.div
            initial={hiddenScale}
            whileInView={visibleScale}
            viewport={viewport}
            transition={transition(0, sectionDuration)}
          >
            <p className="text-xs md:text-sm font-semibold text-primary bg-primary/5 inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full border border-primary/20 shadow-sm leading-relaxed max-w-2xl">
              {t.problem.footer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
