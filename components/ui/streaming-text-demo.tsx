import StreamingText from "@/components/ui/streaming-text";

export default function StreamingTextDemo() {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center bg-background p-8">
      <StreamingText
        lead="Günlükler, iş kayıtları, başvurular ve ayarlar cihazındaki şifreli veritabanında tutulur."
        continuation="Eklenen dosyalar uygulamanın özel alanında kalır. Android OCR metni göndermez; teknik kullanım ölçümleri Google'a iletilebilir."
        sources={[
          { name: "Cihazda saklama", domain: "KAYITLAR", href: "#privacy" },
          { name: "Belge tarama", domain: "OCR", href: "#privacy" },
          { name: "İşYolum", domain: "ÖZELLİKLER", href: "#features" },
        ]}
        followUps={[
          { text: "Veriler nerede tutulur?", href: "#privacy" },
          { text: "Uygulama neler yapıyor?", href: "#features" },
        ]}
        sourcesLabel="yerel katman"
        followUpsLabel="Devam"
        copyLabel="Kopyala"
        copiedLabel="Kopyalandı"
        copyFailedLabel="Kopyalama başarısız"
        retryLabel="Yeniden oynat"
        usefulLabel="Faydalı"
        notUsefulLabel="Faydalı değil"
        usefulSelectedLabel="Faydalı olarak işaretlendi"
        notUsefulSelectedLabel="Faydalı değil olarak işaretlendi"
        feedbackThanksLabel="Geri bildirimin bu sayfada kaldı."
      />
    </div>
  );
}
