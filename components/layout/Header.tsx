"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { prefersReducedMotion, isMobile } = useMotionPrefs();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      const next = window.scrollY > 10;
      setIsScrolled((prev) => (prev !== next ? next : prev));
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  const isDarkTheme = (resolvedTheme ?? theme) === "dark";
  const themeToggleTransition = prefersReducedMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 420, damping: 26 };

  const navLinks = [
    { name: t.nav.internship, href: "#demo" },
    { name: t.nav.features, href: "#features" },
    { name: t.nav.privacy, href: "#privacy" },
    { name: t.faq.title, href: "#faq" },
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
          : "bg-background/55 backdrop-blur-xl border border-border/70 shadow-[0_10px_34px_rgba(15,23,42,0.07)] py-3 px-4 md:px-6"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="İşYolum ana sayfa"
            className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src="/images/store/app-icon.png"
              alt="İşYolum"
              width={34}
              height={34}
              className="size-8.5 rounded-xl object-cover shadow-[0_0_16px_rgba(37,99,235,0.38)]"
              priority
            />
            <span className="text-sm font-semibold tracking-tight text-foreground">İşYolum</span>
          </a>
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
            <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label={t.nav.languageSwitch} className="h-auto py-1 px-2 font-bold text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
              {language === "tr" ? "EN" : "TR"}
            </Button>
          </div>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
              aria-label={isDarkTheme ? t.nav.themeToLight : t.nav.themeToDark}
              aria-pressed={isDarkTheme}
              className="relative h-9 w-[4.5rem] overflow-hidden rounded-full border border-border/80 bg-surface/75 p-0 shadow-inner hover:bg-surface"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(250,204,21,0.23),transparent_28%),radial-gradient(circle_at_74%_72%,rgba(59,130,246,0.34),transparent_31%)]" />
              <Sun aria-hidden="true" className="absolute left-2 h-3.5 w-3.5 text-amber-500/75" />
              <Moon aria-hidden="true" className="absolute right-2 h-3.5 w-3.5 text-primary/75" />
              <motion.span
                initial={false}
                animate={{ x: isDarkTheme ? 34 : 0, rotate: isDarkTheme ? 22 : 0 }}
                transition={themeToggleTransition}
                className="absolute left-1 grid size-7 place-items-center rounded-full bg-background text-foreground shadow-md"
              >
                {isDarkTheme ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
              </motion.span>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : isMobile ? 0.18 : 0.22 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border border-border absolute top-[calc(100%+10px)] left-0 right-0 rounded-2xl py-4 px-4 flex flex-col gap-4 shadow-xl max-h-[min(70dvh,calc(100dvh-8rem))] overflow-y-auto overscroll-contain"
          >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-foreground py-2 px-2 md:hover:bg-surface rounded-lg transition-colors tap-scale"
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
                <Button variant="ghost" size="sm" onClick={toggleLanguage} aria-label={t.nav.languageSwitch} className="h-auto py-1 px-2 font-bold text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
                  {language === "tr" ? "EN" : "TR"}
                </Button>
              </div>
              {mounted && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
                  aria-label={isDarkTheme ? t.nav.themeToLight : t.nav.themeToDark}
                  aria-pressed={isDarkTheme}
                >
                  {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}
            </div>
            <Button size="sm" asChild className="rounded-full">
              <a href="#early-access" onClick={(e) => handleNavClick(e, "#early-access")}>{t.nav.earlyAccess}</a>
            </Button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
