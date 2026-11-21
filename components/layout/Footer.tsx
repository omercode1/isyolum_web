"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" aria-label="İşYolum ana sayfa" className="mb-4 inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Image
                src="/images/store/app-icon.png"
                alt="İşYolum"
                width={34}
                height={34}
                className="size-8.5 rounded-xl object-cover shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              />
              <span className="text-sm font-semibold tracking-tight text-foreground">İşYolum</span>
            </a>
            <p className="max-w-sm text-xs text-muted-foreground">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-foreground">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.features}</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.privacy}</a></li>
              <li><a href="#collaboration" className="text-muted-foreground hover:text-primary transition-colors">{t.nav.collaboration}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-foreground">{t.footer.earlyAccess}</h4>
            <Button size="sm" variant="secondary" className="h-9 rounded-xl px-4 text-xs font-bold" asChild>
              <a href="/downloads/IsYolum-Erken-Erisim.apk" download="IsYolum-Erken-Erisim.apk">
                <Download className="mr-1.5 size-3.5" />
                {t.nav.earlyAccess}
              </a>
            </Button>
            <a href="/isyolum-gizlilik-politikasi" className="mt-3 block text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              {t.footer.privacy}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} İşYolum. {t.footer.rights}
          </p>
          <div className="flex gap-4 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {t.footer.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
