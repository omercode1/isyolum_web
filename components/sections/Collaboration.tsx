"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Shield, GraduationCap, Briefcase, Users, Layout, Rocket } from "lucide-react";
import * as motion from "motion/react-client";

export function Collaboration() {
  const { t } = useLanguage();

  const icons = [Code, Server, Shield, GraduationCap, Briefcase, Users, Layout, Rocket];

  return (
    <section id="collaboration" className="py-16 md:py-24 scroll-mt-20">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-4 rounded bg-surface border border-border flex flex-col items-center text-center gap-3 hover:bg-card hover:border-primary/50 hover:scale-[1.05] hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div className="w-8 h-8 rounded bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
