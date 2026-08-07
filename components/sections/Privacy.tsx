"use client";

import { useLanguage } from "@/lib/i18n";
import { ShieldCheck, Database, FileKey2, Smartphone, Search, Fingerprint } from "lucide-react";
import * as motion from "motion/react-client";

export function Privacy() {
  const { t, language } = useLanguage();

  const icons = [Database, FileKey2, Smartphone, Search, Fingerprint, ShieldCheck];

  return (
    <section id="privacy" className="py-16 md:py-24 bg-surface/30 border-y border-border overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-surface border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3 h-3" />
              <span>SECURE_LOCAL_ENV</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 uppercase">
              {t.privacy.title}
            </h2>
            
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-mono">
              {t.privacy.description}
            </p>

            <ul className="space-y-4 mb-8">
              {t.privacy.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <li key={index} className="flex items-center gap-3 group p-2 -ml-2 rounded hover:bg-surface/50 transition-colors duration-300">
                    <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-foreground font-mono group-hover:text-primary transition-colors duration-300">{item}</span>
                  </li>
                );
              })}
            </ul>

            <div className="p-4 rounded bg-surface border border-border border-l-4 border-l-amber-500 hover:border-l-amber-400 transition-colors duration-300">
              <p className="text-[10px] text-amber-500 font-mono uppercase tracking-widest">
                {language === "tr" ? "DİKKAT! :" : "WARNING_NOTE:"} {t.privacy.note}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Abstract representation of device storage */}
            <div className="aspect-square max-w-md mx-auto relative rounded-full border border-border bg-surface/50 flex items-center justify-center p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="relative w-48 h-64 bg-card border border-border rounded p-4 flex flex-col items-center justify-center gap-4 z-10">
                <ShieldCheck className="w-12 h-12 text-primary" />
                <div className="text-center">
                  <div className="text-xs font-bold text-foreground uppercase tracking-widest">Local Storage</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-1">Encrypted (SQLCipher)</div>
                </div>
                <div className="w-full space-y-2 mt-4 font-mono text-[8px] text-primary/50 text-center leading-tight">
                  <div>0x4F 0x2A 0x11 ...</div>
                  <div>0x9B 0x7C 0x33 ...</div>
                  <div>0x1A 0x8F 0x44 ...</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
