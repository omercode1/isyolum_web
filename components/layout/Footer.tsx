"use client";

import { useLanguage } from "@/lib/i18n";
import { Globe, Link, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                İ
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">İşYolum</span>
            </div>
            <p className="text-xs text-muted-foreground font-mono max-w-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.privacy}</a></li>
              <li><a href="#collaboration" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.collaboration}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-muted-foreground md:hover:text-primary md:hover:border-primary/50 md:hover:shadow-md md:hover:-translate-y-1 transition-[color,border-color,box-shadow,transform] duration-300 ease-out tap-scale">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-muted-foreground md:hover:text-primary md:hover:border-primary/50 md:hover:shadow-md md:hover:-translate-y-1 transition-[color,border-color,box-shadow,transform] duration-300 ease-out tap-scale">
                <Link className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-muted-foreground md:hover:text-primary md:hover:border-primary/50 md:hover:shadow-md md:hover:-translate-y-1 transition-[color,border-color,box-shadow,transform] duration-300 ease-out tap-scale">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} İşYolum. {t.footer.rights}
          </p>
          <div className="flex gap-4 text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              Sistem Aktif
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
