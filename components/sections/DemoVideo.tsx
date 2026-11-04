"use client";

import { useLanguage } from "@/lib/i18n";
import { ArrowRight, CalendarDays, Check, FileText, NotebookPen } from "lucide-react";

export function DemoVideo() {
  const { language } = useLanguage();
  const copy = language === "tr"
    ? {
        eyebrow: "NASIL ÇALIŞIR",
        title: "Stajını birikmeden, her gün tamamla.",
        description: "İşYolum, günü takip etmekten teslim edilebilir staj defterine kadar tüm süreci aynı ritimde tutar.",
        steps: [
          { title: "Takvimini kur", description: "Başlangıç tarihini ve hedef iş günü sayını ekle. Kalan günlerini tek bakışta gör.", tag: "1 dakika" },
          { title: "Gününü not et", description: "Yaptıklarını gün bitmeden kaydet; yarın neyi tamamlayacağını açıkça gör.", tag: "Her gün" },
          { title: "Defterini hazırla", description: "Kayıtlarını kronolojik bir PDF staj defterine dönüştürmeye hazır tut.", tag: "Teslim zamanı" },
        ],
        done: "Tamamlandı",
        add: "Yeni kayıt",
        ready: "PDF'e hazır",
      }
    : {
        eyebrow: "HOW IT WORKS",
        title: "Finish your internship, one day at a time.",
        description: "İşYolum keeps the full journey in one rhythm, from tracking the day to a deliverable internship journal.",
        steps: [
          { title: "Set your calendar", description: "Add your start date and target work days. See what remains at a glance.", tag: "1 minute" },
          { title: "Log your day", description: "Capture your work before the day ends and know exactly what comes next.", tag: "Every day" },
          { title: "Prepare your journal", description: "Keep your records ready to turn into a chronological PDF journal.", tag: "When it is due" },
        ],
        done: "Complete",
        add: "New entry",
        ready: "Ready for PDF",
      };
  const icons = [CalendarDays, NotebookPen, FileText];

  return (
    <section id="demo" className="relative overflow-hidden py-20 md:py-28 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_62%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{copy.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{copy.description}</p>
        </div>

        <ol className="relative mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-[16.7%] right-[16.7%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {copy.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li key={step.title} className="relative rounded-[1.6rem] border border-border/70 bg-card/65 p-5 shadow-[0_14px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">0{index + 1}</span>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{step.tag}</span>
                </div>
                <div className="mt-6 rounded-2xl border border-border/70 bg-background/60 p-3.5">
                  {index === 0 && (
                    <div className="grid grid-cols-5 gap-1.5">
                      {["P", "S", "Ç", "P", "C", "C", "P", "S", "Ç", "P"].map((day, dayIndex) => (
                        <div key={`${day}-${dayIndex}`} className={`flex h-8 items-center justify-center rounded-lg text-[9px] font-bold ${dayIndex === 2 || dayIndex === 6 ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground"}`}>{day}</div>
                      ))}
                    </div>
                  )}
                  {index === 1 && (
                    <div className="space-y-2.5 py-1">
                      <div className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white"><Check className="size-3" /></span><span className="h-2 w-3/4 rounded-full bg-foreground/70" /></div>
                      <div className="h-1.5 w-full rounded-full bg-surface" />
                      <div className="h-1.5 w-5/6 rounded-full bg-surface" />
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2 py-1 text-[9px] font-bold text-primary"><NotebookPen className="size-3" /> {copy.add}</div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="space-y-2.5 py-0.5">
                      {["1", "2", "3"].map((page, pageIndex) => (
                        <div key={page} className="flex items-center gap-2 rounded-lg bg-surface/80 px-2.5 py-2"><FileText className={`size-3.5 ${pageIndex === 2 ? "text-primary" : "text-muted-foreground"}`} /><span className="flex-1 text-[10px] font-medium text-foreground">Gün {page}</span><Check className="size-3.5 text-emerald-500" /></div>
                      ))}
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2 py-1 text-[9px] font-bold text-primary"><Check className="size-3" /> {copy.ready}</div>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-4" /></div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < copy.steps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary md:block" />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
