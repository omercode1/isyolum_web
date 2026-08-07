"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  const navLinks = [
    { name: t.nav.features, href: "#features" },
    { name: t.nav.privacy, href: "#privacy" },
    { name: t.nav.collaboration, href: "#collaboration" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg py-2 px-4 md:px-6"
          : "bg-transparent py-4 px-4 md:px-6 border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            İ
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">İşYolum</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-surface border border-border rounded p-0.5">
            <span className="px-2 py-1 rounded-sm bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              {language === "tr" ? "TR" : "EN"}
            </span>
            <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label="Toggle Language" className="h-auto py-1 px-2 font-bold text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
              {language === "tr" ? "EN" : "TR"}
            </Button>
          </div>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button asChild className="rounded-full">
            <a href="#early-access" onClick={(e) => handleNavClick(e, "#early-access")}>{t.nav.earlyAccess}</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Menüyü kapat / Close menu" : "Menüyü aç / Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-card/95 backdrop-blur-xl border border-border absolute top-[calc(100%+10px)] left-0 right-0 rounded-2xl py-4 px-4 flex flex-col gap-4 shadow-xl overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-foreground py-2 px-2 hover:bg-surface rounded-lg transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex gap-2">
              <div className="flex items-center gap-1 bg-surface border border-border rounded p-0.5">
                <span className="px-2 py-1 rounded-sm bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {language === "tr" ? "TR" : "EN"}
                </span>
                <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label="Toggle Language" className="h-auto py-1 px-2 font-bold text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
                  {language === "tr" ? "EN" : "TR"}
                </Button>
              </div>
              {mounted && (
                <Button variant="outline" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}
            </div>
            <Button size="sm" asChild className="rounded-full">
              <a href="#early-access" onClick={(e) => handleNavClick(e, "#early-access")}>{t.nav.earlyAccess}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
