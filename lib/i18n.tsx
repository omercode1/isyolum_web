"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { tr, type Dictionary } from "../content/tr";
import { en } from "../content/en";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    const storedLang = localStorage.getItem("app_lang") as Language;
    if (storedLang && (storedLang === "tr" || storedLang === "en")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(storedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "tr" || browserLang === "en") {
        setLanguage(browserLang as Language);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = language === "en" ? en : tr;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
