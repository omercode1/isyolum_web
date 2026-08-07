"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

export function EarlyAccess() {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "inactive">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = "/api/contact";

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          userType: data.type,
          message: data.message,
          privacyConsent: true,
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus("success");
      formElement.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(t.form.error);
    }
  };

  return (
    <section id="early-access" className="py-20 md:py-32 scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none -z-10" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-card/60 backdrop-blur-xl border border-border/50 p-6 sm:p-8 md:p-12 rounded-[2rem] flex flex-col gap-6 md:gap-8 shadow-2xl relative overflow-hidden mx-auto"
        >
          {/* Decorative blur */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2 md:mb-3">
              {t.form.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {t.form.description}
            </p>
          </div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              role="status" aria-live="polite" 
              className="bg-primary/10 border border-primary/20 p-6 md:p-8 rounded-2xl text-center relative z-10"
            >
              <p className="text-primary font-bold tracking-wide flex flex-col sm:flex-row items-center justify-center gap-3 text-base md:text-lg">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)] animate-pulse"></span>
                {t.form.success}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6 relative z-10">
              
              {status === "inactive" && (
                <div role="status" aria-live="polite" className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                  <p className="text-[10px] md:text-xs text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                    {t.form.inactive}
                  </p>
                </div>
              )}

              {status === "error" && (
                <div id="form-error" role="alert" aria-live="assertive" className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                  <p className="text-[10px] md:text-xs text-rose-500 font-bold uppercase tracking-widest flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)] hidden sm:block"></span>
                    <span>{errorMessage} {t.form.tryAgain}</span>
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="name" className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold ml-1">
                    {t.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    disabled={status === "submitting"}
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "form-error" : undefined}
                    className="bg-surface/50 border border-border/50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="email" className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold ml-1">
                    {t.form.email}*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "submitting"}
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "form-error" : undefined}
                    className="bg-surface/50 border border-border/50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="type" className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold ml-1">
                  {t.form.type}*
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  disabled={status === "submitting"}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "form-error" : undefined}
                  className="bg-surface/50 border border-border/50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none disabled:opacity-50 transition-colors"
                >
                  <option value="" disabled>-- Select --</option>
                  <option value="student">{t.form.types.student}</option>
                  <option value="intern">{t.form.types.intern}</option>
                  <option value="jobseeker">{t.form.types.jobseeker}</option>
                  <option value="worker">{t.form.types.worker}</option>
                  <option value="freelancer">{t.form.types.freelancer}</option>
                  <option value="university">{t.form.types.university}</option>
                  <option value="supporter">{t.form.types.supporter}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <label htmlFor="message" className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold ml-1">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={status === "submitting"}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "form-error" : undefined}
                  className="bg-surface/50 border border-border/50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none disabled:opacity-50 transition-colors"
                ></textarea>
              </div>

              <label htmlFor="consent" className="flex items-start sm:items-center gap-2.5 md:gap-3 p-2 md:p-3 -ml-2 md:-ml-3 cursor-pointer group hover:bg-surface/40 rounded-xl transition-colors mt-1 md:mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  disabled={status === "submitting"}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "form-error" : undefined}
                  className="w-4 h-4 md:w-5 md:h-5 bg-surface border border-border rounded text-primary focus:ring-2 focus:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background shrink-0 disabled:opacity-50 transition-all mt-0.5 sm:mt-0"
                />
                <span className="text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors select-none leading-relaxed">
                  {t.form.consent}
                </span>
              </label>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 md:mt-4 font-bold uppercase tracking-widest w-full h-12 md:h-14 rounded-xl disabled:opacity-70 text-xs md:text-sm shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow"
              >
                {status === "submitting" ? t.form.submitting : t.form.submit}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
