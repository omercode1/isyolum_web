"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Hero() {
  const { t } = useLanguage();
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

  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,400px)] md:w-[800px] h-[min(100vw,400px)] md:h-[800px] bg-primary/10 rounded-full hero-ambient-blur opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={hiddenFadeUp}
            animate={visibleFadeUp}
            transition={transition(0, heroDuration)}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div 
              initial={prefersReducedMotion || isMobile ? hiddenFade : { opacity: 0, scale: 0.9 }}
              animate={prefersReducedMotion || isMobile ? visibleFade : { opacity: 1, scale: 1 }}
              transition={transition(heroDelay(0.2), isMobile ? 0.3 : 0.5)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-6 lg:mb-8 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {t.hero.title.split(' ').map((word: string, i: number) => {
                const isSpecial = i === t.hero.title.split(' ').length - 1;
                return (
                  <span key={i} className={`inline-block mr-[0.2em] ${isSpecial ? 'italic text-primary' : ''}`}>
                    {word}
                  </span>
                )
              })}
            </h1>
            
            <motion.p 
              initial={hiddenFade}
              animate={visibleFade}
              transition={transition(heroDelay(0.3), heroDuration)}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed font-sans"
            >
              {t.hero.description}
            </motion.p>

            <motion.p 
              initial={hiddenFade}
              animate={visibleFade}
              transition={transition(heroDelay(0.4), heroDuration)}
              className="text-xs sm:text-sm font-mono text-primary mb-8 lg:mb-10 max-w-lg tracking-wide uppercase"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div 
              initial={prefersReducedMotion ? hiddenFade : { opacity: 0, y: isMobile ? 12 : 20 }}
              animate={prefersReducedMotion ? visibleFade : { opacity: 1, y: 0 }}
              transition={transition(heroDelay(0.5), isMobile ? 0.35 : 0.5)}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-[0_0_30px_rgba(37,99,235,0.3)] md:hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-shadow duration-300" asChild>
                <a href="#early-access">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-border md:hover:bg-surface transition-colors duration-300" asChild>
                <a href="#features">{t.hero.ctaSecondary}</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion || isMobile ? hiddenFade : { opacity: 0, scale: 0.95, rotateY: 15 }}
            animate={prefersReducedMotion || isMobile ? visibleFade : { opacity: 1, scale: 1, rotateY: 0 }}
            transition={transition(heroDelay(0.3), isMobile ? 0.4 : 1)}
            className="relative flex items-center justify-center md:perspective-[1200px] mt-8 lg:mt-0 max-w-full"
          >
            <div className="animate-float w-[85%] sm:w-full max-w-sm lg:max-w-md relative z-10 mx-auto">
              <div className="relative w-full aspect-[9/16] bg-card/60 backdrop-blur-2xl border border-border/60 rounded-[2rem] p-4 sm:p-6 shadow-2xl flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-500 md:hover:scale-[1.02] md:hover:border-primary/40 group tap-scale">
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1.5 bg-foreground/10 rounded-full" />
                
                <div className="mt-6 sm:mt-8 flex-1 flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border/50">
                    <div className="text-[10px] sm:text-xs text-foreground font-semibold tracking-wide">Workspace</div>
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-[8px] sm:text-[9px] font-bold text-primary uppercase tracking-widest">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 bg-surface/50 rounded-2xl border border-border/50 shadow-inner">
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-2 sm:mb-3">Overall Progress</div>
                    <div className="flex items-end gap-2 mb-2 sm:mb-3">
                      <span className="text-3xl sm:text-4xl font-serif text-foreground leading-none">12</span>
                      <span className="text-[10px] sm:text-xs font-medium text-primary mb-1">/ 40 DAYS</span>
                    </div>
                    <div className="h-1.5 sm:h-2 w-full bg-background rounded-full overflow-hidden shadow-inner">
                      {prefersReducedMotion || isMobile ? (
                        <div className="h-full w-[30%] bg-primary rounded-full" />
                      ) : (
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "30%" }}
                          transition={transition(heroDelay(1), 1.5)}
                          className="h-full bg-primary rounded-full" 
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2 sm:gap-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        initial={prefersReducedMotion ? hiddenFade : { opacity: 0, x: isMobile ? 8 : 20 }}
                        animate={visibleFade}
                        transition={transition(heroDelay(0.8 + (i * 0.1)), isMobile ? 0.3 : 0.5)}
                        key={i} 
                        className="p-3 sm:p-4 bg-surface/40 rounded-2xl border border-border/40 flex items-center gap-3 sm:gap-4 md:hover:bg-surface/80 transition-colors cursor-pointer tap-scale"
                      >
                        <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${i === 1 ? 'bg-primary/20 text-primary' : 'bg-background border border-border/50 text-muted-foreground'}`}>
                          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
                          <div className={`h-2 sm:h-2.5 rounded-full ${i === 1 ? 'w-3/4 bg-foreground/80' : 'w-2/3 bg-muted-foreground/40'}`} />
                          <div className="h-1 sm:h-1.5 w-1/2 bg-muted-foreground/20 rounded-full" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="h-12 sm:h-14 mt-3 sm:mt-4 bg-background/50 backdrop-blur-md rounded-2xl border border-border/50 flex items-center justify-around px-2 shadow-lg">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-xl transition-colors ${i === 1 ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground md:hover:bg-surface'}`}>
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${i===1 ? 'bg-current' : 'border-2 border-current'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] max-w-[120%] h-[110%] bg-primary/20 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
