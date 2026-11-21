import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n";
import { getMetadataBase } from "@/lib/site-url";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-jakarta" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair", style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  applicationName: "İşYolum",
  title: "İşYolum | İş, Staj ve Kariyer Kayıtlarını Düzenle",
  description: "İş günlerini ve kalan çalışma saatini takip et; günlük, başvuru, belge ve kariyer kayıtlarını İşYolum'da düzenle.",
  keywords: ["İşYolum", "staj takibi", "çalışma saati takibi", "staj defteri", "başvuru takibi", "kariyer hafızası"],
  openGraph: {
    title: "İşYolum | İş, Staj ve Kariyer Kayıtlarını Düzenle",
    description: "İş günlerini ve kalan çalışma saatini takip et; günlük, başvuru, belge ve kariyer kayıtlarını İşYolum'da düzenle.",
    url: "/",
    siteName: "İşYolum",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/store/feature-graphic.png",
        width: 1024,
        height: 500,
        alt: "İşYolum — Tüm çalışma hayatın, tek bir yerde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İşYolum | İş, Staj ve Kariyer Kayıtlarını Düzenle",
    description: "İş günlerini ve kalan çalışma saatini takip et; günlük, başvuru, belge ve kariyer kayıtlarını İşYolum'da düzenle.",
    images: ["/images/store/feature-graphic.png"],
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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
