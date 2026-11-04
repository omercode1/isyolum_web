import StreamingText from "@/components/ui/streaming-text";

export default function StreamingTextDemo() {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center bg-background p-8">
      <StreamingText
        lead="İşYolum günlük, belge ve iş günü kayıtlarını temel olarak cihazında tutar."
        continuation="OCR ve arama cihaz içinde çalışır. Şifreli yedekleme henüz yok."
        sources={[
          { name: "SQLCipher", domain: "LOCAL_DB", href: "#privacy" },
          { name: "OCR", domain: "DEVICE_ONLY", href: "#features" },
          { name: "İş Kasası", domain: "APP_VAULT", href: "#privacy" },
        ]}
        followUps={[
          { text: "Veriler nerede tutulur?", href: "#privacy" },
          { text: "Hangi özellikler hazır?", href: "#features" },
        ]}
        sourcesLabel="yerel katman"
        followUpsLabel="Devam"
        copyLabel="Kopyala"
        copiedLabel="Kopyalandı"
        retryLabel="Yeniden oynat"
        usefulLabel="Faydalı"
        notUsefulLabel="Faydalı değil"
      />
    </div>
  );
}
