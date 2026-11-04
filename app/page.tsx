import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Briefing } from "@/components/sections/Briefing";
import { DemoVideo } from "@/components/sections/DemoVideo";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { Privacy } from "@/components/sections/Privacy";
import { Collaboration } from "@/components/sections/Collaboration";
import { FAQ } from "@/components/sections/FAQ";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Founder } from "@/components/sections/Founder";
import { FadeIn } from "@/components/animations/FadeIn";
import { BackToTop } from "@/components/layout/BackToTop";
import KineticGrid from "@/components/ui/kinetic-grid";
import { ThemeAtmosphere } from "@/components/ui/theme-atmosphere";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col overflow-x-clip">
      <ThemeAtmosphere />
      <KineticGrid className="opacity-70" />
      <Header />
      <main className="flex-1">
        <FadeIn><Hero /></FadeIn>
        <Briefing />
        <div className="border-b border-border/40" />
        <FadeIn><DemoVideo /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><Problem /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><Features /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><Privacy /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><Collaboration /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><Founder /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><FAQ /></FadeIn>
        <div className="border-b border-border/40" />
        <FadeIn><EarlyAccess /></FadeIn>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
