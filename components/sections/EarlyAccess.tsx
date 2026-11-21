"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  CalendarClock,
  CheckCircle2,
  Download,
  FileArchive,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import * as motion from "motion/react-client";
import { useMotionPrefs } from "@/hooks/use-motion-prefs";

export function EarlyAccess() {
  const { t, language } = useLanguage();
  const { hiddenFadeUp, visibleFadeUp, viewport, transition, prefersReducedMotion } = useMotionPrefs();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "inactive">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copy = language === "tr"
    ? {
        proudBanner: "İŞ YOLUM İÇİN ERKEN ERİŞİM BAŞLADI!",
        proudSub: "Uygulamamızın son derlenen Android sürümü artık doğrudan indirilebilir durumda. Hemen telefonuna kur, staj ve çalışma hayatını tek yerden yönetmeye başla!",
        downloadBtn: "Erken Erişim APK'sını Hemen İndir",
        fileName: "IsYolum-Erken-Erisim.apk",
        specs: [
          { label: "Son Derleme Tarihi", value: "16 Kasım 2026 · 13:14", Icon: CalendarClock },
          { label: "Paket Boyutu", value: "112.23 MB · Android APK", Icon: FileArchive },
          { label: "Uyumluluk", value: "Android 8.0+ Cihazlar", Icon: Smartphone },
          { label: "Veri Güvenliği", value: "SQLCipher Yerel Şifreleme", Icon: ShieldCheck },
        ],
        stepsTitle: "3 Adımda Hızlı Kurulum",
        steps: [
          "Yukarıdaki 'Erken Erişim APK'sını Hemen İndir' butonuna dokunarak kurulum paketini Android cihazına indir.",
          "İndirilen IsYolum-Erken-Erisim.apk dosyasına dokun (gerekirse tarayıcın için 'Bilinmeyen uygulamaları yükle' iznini onayla).",
          "Uygulamayı aç, sana uygun modu (Stajyer, İş Arayan veya Çalışan) seç ve kayıtlarını tutmaya başla!",
        ],
        feedbackHeading: "Geri Bildirim & Yeni Sürüm Bildirimi",
        feedbackSub: "Uygulamayı indirdikten sonra görüşlerini paylaşmak veya Google Play mağaza sürümü yayınlandığında haberdar olmak için bilgilerini bırakabilirsin.",
      }
    : {
        proudBanner: "EARLY ACCESS FOR İŞYOLUM HAS STARTED!",
        proudSub: "The latest compiled Android build of İşYolum is now available for direct download. Install it on your phone today and manage your internship and work life in one place!",
        downloadBtn: "Download Early Access APK Now",
        fileName: "IsYolum-Erken-Erisim.apk",
        specs: [
          { label: "Last Compiled", value: "Nov 16, 2026 · 13:14", Icon: CalendarClock },
          { label: "Package Size", value: "112.23 MB · Android APK", Icon: FileArchive },
          { label: "Compatibility", value: "Android 8.0+ Devices", Icon: Smartphone },
          { label: "Data Security", value: "SQLCipher Local Encryption", Icon: ShieldCheck },
        ],
        stepsTitle: "Quick Installation in 3 Steps",
        steps: [
          "Tap the 'Download Early Access APK Now' button above to save the package to your Android device.",
          "Open IsYolum-Erken-Erisim.apk (if prompted, allow 'Install unknown apps' for your browser).",
          "Launch İşYolum, choose your mode (Intern, Job Seeker, or Employee), and start organizing your records!",
        ],
        feedbackHeading: "Feedback & New Release Notifications",
        feedbackSub: "After downloading the APK, leave your details below to share feedback or get notified when new updates and the Google Play release arrive.",
      };

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

      const result = await response.json().catch(() => null) as { code?: string } | null;
      if (response.status === 503 && result?.code === "CONTACT_UNAVAILABLE") {
        setStatus("inactive");
        return;
      }

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.16),transparent_65%)] pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={hiddenFadeUp}
          whileInView={visibleFadeUp}
          viewport={viewport}
          transition={transition(0)}
          className="bg-card/75 backdrop-blur-2xl border-2 border-primary/35 p-6 sm:p-8 md:p-12 rounded-[2.25rem] flex flex-col gap-8 shadow-[0_25px_90px_rgba(37,99,235,0.2)] relative overflow-hidden mx-auto"
        >
          {/* Decorative glow */}
          <div className="absolute -top-32 -right-32 w-64 md:w-80 h-64 md:h-80 bg-primary/20 rounded-full blur-[60px] md:blur-[95px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 md:w-80 h-64 md:h-80 bg-primary/12 rounded-full blur-[60px] md:blur-[95px] pointer-events-none" />

          {/* Proud Early Access Announcement Header */}
          <div className="text-center relative z-10 flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-sm">
              <Sparkles className="size-4" />
              <span>{language === "tr" ? "ERKEN ERİŞİM YAYINDA" : "EARLY ACCESS IS LIVE"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {copy.proudBanner}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {copy.proudSub}
            </p>
          </div>

          {/* Official Google Play Store Feature Banner */}
          <div className="relative z-10 overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/images/store/feature-graphic.png"
              alt="İşYolum — Tüm çalışma hayatın, tek bir yerde"
              width={1024}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Direct APK Download Box */}
          <div className="relative z-10 rounded-3xl border border-border bg-surface/65 p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                <Image
                  src="/images/store/app-icon.png"
                  alt="İşYolum APK"
                  width={72}
                  height={72}
                  className="size-18 rounded-2xl object-cover shadow-[0_8px_24px_rgba(37,99,235,0.35)] shrink-0"
                />
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    <CheckCircle2 className="size-3.5" />
                    {language === "tr" ? "Doğrudan İndirilebilir APK" : "Direct APK Download"}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-foreground">
                    İşYolum Android ({copy.fileName})
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {language === "tr"
                      ? "Son derleme: 16 Kasım 2026, Saat 13:14 · Boyut: 112.23 MB"
                      : "Last compiled: Nov 16, 2026, 13:14 · Size: 112.23 MB"}
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full lg:w-auto h-14 rounded-2xl px-8 text-base font-bold shrink-0"
                asChild
              >
                <a href="/downloads/IsYolum-Erken-Erisim.apk" download="IsYolum-Erken-Erisim.apk">
                  <Download className="mr-2.5 size-5" />
                  {copy.downloadBtn}
                </a>
              </Button>
            </div>

            {/* Build Metadata Specs Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {copy.specs.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 p-3.5"
                >
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="mt-0.5 truncate text-xs font-semibold text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3-Step Install Guide */}
            <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                {copy.stepsTitle}
              </p>
              <ol className="grid gap-3 sm:grid-cols-3">
                {copy.steps.map((stepText, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{stepText}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Feedback & Release Updates Form */}
          <div className="relative z-10 border-t border-border/70 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {copy.feedbackHeading}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                {copy.feedbackSub}
              </p>
            </div>

            {status === "success" ? (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={transition(0, 0.35)}
                role="status"
                aria-live="polite"
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
                    <option value="" disabled>{t.form.selectPrompt}</option>
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
                    rows={3}
                    disabled={status === "submitting"}
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "form-error" : undefined}
                    className="bg-surface/50 border border-border/50 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none disabled:opacity-50 transition-colors"
                  ></textarea>
                </div>

                <label htmlFor="consent" className="flex items-start sm:items-center gap-2.5 md:gap-3 p-2 md:p-3 -ml-2 md:-ml-3 cursor-pointer group md:hover:bg-surface/40 rounded-xl transition-colors mt-1 md:mt-2">
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
                  <span className="text-[10px] md:text-xs text-muted-foreground md:group-hover:text-foreground transition-colors select-none leading-relaxed">
                    {t.form.consent}
                  </span>
                </label>
                <a
                  href="/isyolum-gizlilik-politikasi"
                  className="-mt-4 w-fit rounded text-xs font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {t.form.privacyLink}
                </a>

                <Button
                  type="submit"
                  variant="secondary"
                  disabled={status === "submitting"}
                  className="mt-1 font-bold uppercase tracking-widest w-full h-12 rounded-xl disabled:opacity-70 text-xs"
                >
                  {status === "submitting" ? t.form.submitting : t.form.submit}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
