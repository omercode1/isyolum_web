"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Shield, GraduationCap, Briefcase, Users, Layout, Rocket } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Collaboration() {
  const { t } = useLanguage();
  const {
    hiddenScale,
    visibleScale,
    viewport,
    sectionDuration,
    staggerDelay,
    transition,
  } = useMotionPrefs();

  const icons = [Code, Server, Shield, GraduationCap, Briefcase, Users, Layout, Rocket];

  return (
    <section id="collaboration" className="py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 uppercase">
            {t.collaboration.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed font-mono">
            {t.collaboration.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.collaboration.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={hiddenScale}
                whileInView={visibleScale}
                viewport={viewport}
                transition={transition(staggerDelay(index, 0.05), sectionDuration * 0.7)}
                className="group p-4 rounded bg-surface border border-border flex flex-col items-center text-center gap-3 md:hover:bg-card md:hover:border-primary/50 md:hover:scale-[1.05] md:hover:shadow-lg transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out tap-scale"
              >
                <div className="w-8 h-8 rounded bg-background flex items-center justify-center text-primary md:group-hover:bg-primary md:group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{card}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-12 px-8" asChild>
            <a href="#early-access">
              {t.collaboration.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 opacity-50 cursor-not-allowed">
            {t.collaboration.ctaSecondary} (Yakında)
          </Button>
        </div>
      </div>
    </section>
  );
}
