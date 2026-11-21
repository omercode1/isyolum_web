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
import { BackToTop } from "@/components/layout/BackToTop";
import KineticGrid from "@/components/ui/kinetic-grid";
import { ThemeAtmosphere } from "@/components/ui/theme-atmosphere";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col overflow-x-clip">
      <ThemeAtmosphere />
      <KineticGrid className="opacity-65" />
      <Header />
      <main className="flex-1">
        <Hero />
        <Briefing />
        <div className="border-b border-border/40" />
        <DemoVideo />
        <div className="border-b border-border/40" />
        <Problem />
        <div className="border-b border-border/40" />
        <Features />
        <div className="border-b border-border/40" />
        <Privacy />
        <div className="border-b border-border/40" />
        <Collaboration />
        <div className="border-b border-border/40" />
        <Founder />
        <div className="border-b border-border/40" />
        <FAQ />
        <div className="border-b border-border/40" />
        <EarlyAccess />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
