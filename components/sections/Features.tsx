"use client";

import { useLanguage } from "@/lib/i18n";
import { 
  CalendarDays, BookOpen, FolderLock, FileText, ScanText, 
  Search, CheckCircle2, BarChart3, Bell, Fingerprint 
} from "lucide-react";
import * as motion from "motion/react-client";

export function Features() {
  const { t } = useLanguage();

  const icons = [
    CalendarDays, BookOpen, FolderLock, FileText, ScanText, 
    Search, CheckCircle2, BarChart3, Bell, Fingerprint
  ];

  return (
    <section id="features" className="py-20 md:py-32 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-surface/30 pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
              {t.features.title}
            </h2>
            <div className="h-1 w-16 md:w-20 bg-primary/20 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2 rounded-full" />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.features.cards.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: (index % 3) * 0.1 }}
                className="group relative p-6 md:p-8 bg-card/50 backdrop-blur-sm rounded-[2rem] border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-all duration-500 ease-out flex flex-col overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center mb-6 md:mb-8 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-surface border border-border/50 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4 tracking-wide relative z-10 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10 mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
