"use client";

import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const {
    hiddenFadeUp,
    visibleFadeUp,
    viewport,
    prefersReducedMotion,
    isMobile,
    staggerDelay,
    transition,
    sectionDuration,
  } = useMotionPrefs();

  const accordionTransition = prefersReducedMotion
    ? { duration: 0.01 }
    : { duration: isMobile ? 0.2 : 0.3, ease: [0.21, 0.47, 0.32, 0.98] as const };

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface/30 border-t border-border overflow-hidden scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded shadow-[0_0_8px_rgba(37,99,235,0.5)]"></span>
            QUERY_INDEX
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-2">
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={hiddenFadeUp}
              whileInView={visibleFadeUp}
              viewport={viewport}
              transition={transition(staggerDelay(index, 0.05), sectionDuration * 0.7)}
              className="border border-border bg-card rounded overflow-hidden"
            >
              <button
                className="group w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none md:hover:bg-surface/50 transition-colors duration-300 tap-scale"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3 pr-4 min-w-0">
                  <span className="text-[10px] text-muted-foreground font-mono md:group-hover:text-primary transition-colors duration-300 shrink-0">Q{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wide md:group-hover:text-primary transition-colors duration-300">{item.q}</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={accordionTransition}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 ml-9 text-xs text-muted-foreground leading-relaxed font-mono">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
