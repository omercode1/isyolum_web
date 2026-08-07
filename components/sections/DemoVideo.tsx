"use client";

import { useLanguage } from "@/lib/i18n";
import { Play } from "lucide-react";
import Image from "next/image";

export function DemoVideo() {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Uygulamayı Keşfet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İşYolum'un staj ve çalışma hayatınızı nasıl kolaylaştırdığını kısa bir demo ile izleyin.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl aspect-video bg-muted flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02] hover:shadow-primary/20">
          <Image
            src="https://picsum.photos/seed/demo/1920/1080"
            alt="Demo Video Thumbnail"
            fill
            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          <div className="relative z-10 w-20 h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <Play className="w-8 h-8 ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
