"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight, CalendarDays, FolderLock, NotebookPen } from "lucide-react";

export function DemoVideo() {
  const { language } = useLanguage();
  const copy = language === "tr"
    ? {
        eyebrow: "NASIL ÇALIŞIR",
        title: "Hedefini belirle, ilerlemeni gün gün gör.",
        description: "İş ve staj dönemini kur; çalışma durumunu, günlük notlarını, kariyer hafızanı ve belgelerini aynı uygulamada yönet.",
        steps: [
          {
            title: "Bugünkü staj ve çalışma kaydını işaretle",
            description: "Ana sayfada çalışma durumunu (Çalışıldı, Yarım Gün) tek dokunuşla kaydet, günlük yaz ve haftalık özetini anında gör.",
            tag: "Ana Sayfa",
            image: "/images/store/screen-home-staj.png",
            alt: "İşYolum Ana Sayfa — Staj Takibini Kolaylaştır",
          },
          {
            title: "Günlük notlarını dönemlere göre tut",
            description: "Gün içinde yaptıklarını Günlüğüm ekranında not et; aktif dönem veya tüm dönemler filtresiyle staj defterine hazırla.",
            tag: "Günlüğüm",
            image: "/images/store/screen-journal-notes.png",
            alt: "İşYolum Günlüğüm — Günlüklerini Hızlıca Kaydet",
          },
          {
            title: "Belgelerini İş Kasam'da sakla ve kariyerine ekle",
            description: "CV, evrak ve dosyalarını optimize ederek sakla, cihaz içi OCR ile tara ve tek dokunuşla Kariyer Hafızana bağla.",
            tag: "İş Kasam",
            image: "/images/store/screen-vault-documents.png",
            alt: "İşYolum İş Kasam — Belgelerini Güvenle Sakla",
          },
        ],
      }
    : {
        eyebrow: "HOW IT WORKS",
        title: "Set a goal and see your progress day by day.",
        description: "Set up your work or internship period, then manage daily work status, journal notes, career memory, and documents in one app.",
        steps: [
          {
            title: "Mark today's internship & work status",
            description: "Log your work status (Worked, Half Day) on the home screen, write your daily note, and check your weekly summary at a glance.",
            tag: "Home Screen",
            image: "/images/store/screen-home-staj.png",
            alt: "İşYolum Home Screen — Simplify Internship Tracking",
          },
          {
            title: "Keep daily notes organized by period",
            description: "Record what you accomplished in the Journal tab and filter by active or all periods so your entries are ready for export.",
            tag: "My Journal",
            image: "/images/store/screen-journal-notes.png",
            alt: "İşYolum Journal — Record Daily Logs Quickly",
          },
          {
            title: "Store files in Work Vault & link to Career",
            description: "Optimize and store CVs and documents, scan text on-device with OCR, and attach proof directly to your Career Memory.",
            tag: "Work Vault",
            image: "/images/store/screen-vault-documents.png",
            alt: "İşYolum Work Vault — Store Documents Safely",
          },
        ],
      };
  const icons = [CalendarDays, NotebookPen, FolderLock];

  return (
    <section id="demo" className="relative overflow-hidden py-20 md:py-28 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_62%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{copy.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{copy.description}</p>
        </div>

        <ol className="relative mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.7%] right-[16.7%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {copy.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li
                key={step.title}
                className="group relative flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 p-5 shadow-[0_14px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 md:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                    {step.tag}
                  </span>
                </div>

                <div className="relative mt-5 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-sky-500/10 to-background p-2">
                  <div className="relative size-full overflow-hidden rounded-xl">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {index < copy.steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary md:block" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
