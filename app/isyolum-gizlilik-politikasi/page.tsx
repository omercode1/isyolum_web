"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPolicyPage() {
  const { t, language, setLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <main className="relative z-10 min-h-screen overflow-x-clip pb-16">
      <header className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 pb-8 pt-8 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="grid size-9 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground">İ</span>
          <span className="text-sm font-semibold text-foreground">İşYolum</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            aria-label={t.nav.languageSwitch}
            className="rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {language === "tr" ? "EN" : "TR"}
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
            aria-label={isDarkTheme ? t.nav.themeToLight : t.nav.themeToDark}
            aria-pressed={isDarkTheme}
            className="rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isDarkTheme ? (language === "tr" ? "Açık tema" : "Light theme") : (language === "tr" ? "Koyu tema" : "Dark theme")}
          </button>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-border/70 bg-card/75 p-6 shadow-xl backdrop-blur-xl sm:p-10 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {language === "tr" ? "Uygulama ve web sitesi" : "App and website"}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.policy.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{t.policy.lastUpdated}</p>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">{t.policy.intro}</p>

          <div className="mt-10 space-y-9">
            {t.policy.sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`policy-section-${index}`}>
                <h2
                  id={`policy-section-${index}`}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            {t.policy.contact}{" "}
            <a
              href="mailto:contact@temurcode.com.tr"
              className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              contact@temurcode.com.tr
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
