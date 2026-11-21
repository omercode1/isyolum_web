import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İşYolum Gizlilik Politikası",
  description: "İşYolum uygulaması ve web sitesi iletişim formunun veri saklama, OCR, bildirim ve gizlilik uygulamaları.",
  alternates: {
    canonical: "/isyolum-gizlilik-politikasi",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
