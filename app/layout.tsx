import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import { getMetadataBase } from "@/lib/site-url";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "İşYolum | Staj ve Çalışma Hayatını Düzenle",
  description: "İşYolum; staj günlerini, çalışma kayıtlarını, günlüklerini, belgelerini ve hatırlatıcılarını tek yerde yönetmeni sağlayan gizlilik odaklı mobil uygulamadır.",
  openGraph: {
    title: "İşYolum | Staj ve Çalışma Hayatını Düzenle",
    description: "İşYolum; staj günlerini, çalışma kayıtlarını, günlüklerini, belgelerini ve hatırlatıcılarını tek yerde yönetmeni sağlayan gizlilik odaklı mobil uygulamadır.",
    url: "/",
    siteName: "İşYolum",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İşYolum | Staj ve Çalışma Hayatını Düzenle",
    description: "İşYolum; staj günlerini, çalışma kayıtlarını, günlüklerini, belgelerini ve hatırlatıcılarını tek yerde yönetmeni sağlayan gizlilik odaklı mobil uygulamadır.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-clip`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {children}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
