export const tr = {
  nav: {
    features: "Özellikler",
    internship: "Staj Yönetimi",
    privacy: "Gizlilik",
    roadmap: "Yol Haritası",
    collaboration: "İş Birliği",
    about: "Hakkında",
    earlyAccess: "Erken Erişim"
  },
  hero: {
    badge: "Gizlilik odaklı çalışma ve staj yönetimi",
    title: "Stajından iş hayatına, tüm sürecin tek yerde.",
    description: "İş günlerini takip et, günlüklerini düzenli yaz, belgelerini güvenle sakla ve staj defterini tek dokunuşla PDF’e dönüştür.",
    subtitle: "Verilerin cihazında kalır. İşYolum iş hayatını düzenler, kontrolü sende bırakır.",
    ctaPrimary: "Erken Erişime Katıl",
    ctaSecondary: "Özellikleri İncele",
    collaborationLink: "Destek ve İş Birliği",
    briefing: {
      kicker: "SYS_BRIEFING",
      title: "Cihaz içi mimari, kelime kelime.",
      note: "Hazır istatistik yok. Bu özet, İşYolum’un bugünkü gizlilik modelini anlatır.",
      lead: "İşYolum günlük, belge ve iş günü kayıtlarını temel olarak cihazında tutar.",
      continuation: "OCR ve arama cihaz içinde çalışır. Şifreli yedekleme henüz yok.",
      sourcesLabel: "yerel katman",
      followUpsLabel: "Devam",
      copy: "Kopyala",
      copied: "Kopyalandı",
      retry: "Yeniden oynat",
      useful: "Faydalı",
      notUseful: "Faydalı değil",
      sources: [
        { name: "SQLCipher", domain: "LOCAL_DB", href: "#privacy" },
        { name: "OCR", domain: "DEVICE_ONLY", href: "#features" },
        { name: "İş Kasası", domain: "APP_VAULT", href: "#privacy" }
      ],
      followUps: [
        { text: "Veriler nerede tutulur?", href: "#privacy" },
        { text: "Hangi özellikler hazır?", href: "#features" }
      ]
    }
  },
  problem: {
    title: "Staj ve çalışma süresi neden bu kadar dağınık?",
    cards: [
      { title: "Kopuk İş Günleri", description: "Çalışma günleri ve takvim kayıtları farklı yerlerde tutuluyor." },
      { title: "Geciken Günlükler", description: "Staj günlükleri son güne bırakılıyor ve yapılanlar unutuluyor." },
      { title: "Kaybolan Belgeler", description: "Önemli evraklar farklı uygulamaların içinde kaybolup gidiyor." },
      { title: "Yanlış Hesaplar", description: "Resmî tatiller, izinler ve staj bitiş tarihleri karıştırılıyor." },
      { title: "Zaman Alan PDF'ler", description: "Staj defterini formatına uygun hazırlamak saatler alıyor." },
      { title: "Unutulan Görevler", description: "Hatırlatıcılar ve yapılması gerekenler çalışma bağlamından kopuk." }
    ],
    footer: "İşYolum, birbirinden kopuk tüm bu süreçleri tek bir kişisel çalışma alanında birleştirir."
  },
  features: {
    title: "Her Şey Kontrol Altında",
    cards: [
      { title: "Akıllı Staj Takibi", description: "Başlangıç tarihi ve iş günü hedefini belirle. Tatilleri otomatik düşerek bitiş tarihini hesapla." },
      { title: "Günlük ve Çalışma Kaydı", description: "Her güne özel günlük tut. 'Stajının 9. gününde ne yaptın?' anında gör." },
      { title: "İş Kasası", description: "PDF, Word ve fotoğrafları güvenle cihazında sakla, dönemlere göre grupla." },
      { title: "PDF Staj Defteri", description: "Günlükleri kronolojik sıralayıp tek dokunuşla profesyonel A4 staj defterine dönüştür." },
      { title: "Cihaz İçi OCR", description: "Görsel belgelerindeki metinleri cihazında tara. İnternete veya buluta göndermeden metinleri kopyala." },
      { title: "Genel Arama", description: "Günlükler, belgeler ve OCR içeriklerinde hızlıca Türkçe karakter destekli arama yap." },
      { title: "Bugünü Tamamla", description: "Ana sayfadaki akıllı kontrol listesiyle günlük eksiklerini anında gör ve tamamla." },
      { title: "Haftalık Özet", description: "Haftalık çalışma saatlerini, yazılan günlükleri ve hedeflerini tek bakışta analiz et." },
      { title: "Yerel Hatırlatıcılar", description: "Uygulama kapalıyken bile çalışan cihaz içi bildirimlerle önemli anları kaçırma." },
      { title: "Biyometrik Kilit", description: "Uygulamaya Face ID veya Parmak İzi ile giriş yap, özel verilerini sadece sen gör." }
    ]
  },
  privacy: {
    title: "Verileriniz sizinle kalır.",
    description: "İşYolum, yerel öncelikli bir mimariyle geliştirilir. Günlükleriniz, belgeleriniz ve çalışma kayıtlarınız temel olarak kendi cihazınızda saklanır. Belge OCR işlemleri ve arama özellikleri cihaz içinde çalışır.",
    items: [
      "Şifreli yerel veritabanı (SQLCipher)",
      "Uygulamaya özel dosya alanı",
      "Cihaz içi makine öğrenimi ile OCR",
      "Cihaz içi tam metin arama",
      "Biyometrik uygulama kilidi",
      "Kullanıcı kontrolü öncelikli tasarım"
    ],
    note: "Not: Güvenli şifreli yedekleme özelliği araştırma aşamasındadır. Uygulama silindiğinde yerel veriler de silinebilir."
  },
  collaboration: {
    title: "İşYolum'u birlikte büyütelim.",
    description: "İşYolum, öğrencilerin ve genç çalışanların staj ve çalışma deneyimlerini daha düzenli yönetmesine yardımcı olmayı amaçlayan yayın öncesi bir mobil üründür. Teknik mentorluk, test altyapısı, güvenlik danışmanlığı, girişim programları ve pilot iş birliklerine açığız.",
    cards: [
      "Teknik Mentorluk",
      "Bulut ve CI/CD Kredileri",
      "Güvenlik Denetimi",
      "Üniversite Pilotları",
      "Staj Programı İş Birlikleri",
      "Kullanıcı Testleri",
      "Erişilebilirlik Desteği",
      "Pazara Çıkış Destekleri"
    ],
    ctaPrimary: "İş Birliği İçin İletişime Geç",
    ctaSecondary: "Proje Özetini Görüntüle"
  },
  faq: {
    title: "Sık Sorulan Sorular",
    items: [
      { q: "İşYolum bir iş bulma uygulaması mı?", a: "Hayır. İşYolum iş ilanı sunmaz. Kullanıcının staj, çalışma, başvuru, günlük, belge ve hatırlatıcı süreçlerini düzenlemesine yardımcı olur." },
      { q: "Verilerim nerede saklanır?", a: "Uygulama verileri temel olarak kullanıcının kendi telefonundaki uygulamaya özel alanda saklanır." },
      { q: "İnternet bağlantısı gerekli mi?", a: "Uygulamanın temel özellikleri cihaz içinde çalışacak şekilde tasarlanmıştır. Sürekli internet bağlantısı gerektirmez." },
      { q: "Belge metinleri bir sunucuya gönderiliyor mu?", a: "Hayır. Desteklenen görsel belgelerde OCR işlemi tamamen cihaz içinde gerçekleştirilir." },
      { q: "Uygulama silinirse verilerim ne olur?", a: "Uygulamanın özel alanındaki yerel veriler silinebilir. Güvenli şifreli yedekleme sistemi yol haritasında bulunmaktadır." },
      { q: "Dosya yükleme sınırı nedir?", a: "Mevcut beta sürümünde tek dosya için 20 MB sınırı bulunmaktadır. Gelecekte akıllı görsel sıkıştırma planlanmaktadır." },
      { q: "PDF staj defteri oluşturulabilir mi?", a: "Evet. Staj günlükları ve çalışma kayıtları A4 düzeninde profesyonel PDF staj defterine dönüştürülebilir." },
      { q: "İşYolum hangi platformda yayınlanacak?", a: "İlk aşamada Android için hazırlanmakta, iOS desteği gelecek planları arasında bulunmaktadır." },
      { q: "Uygulama şu anda indirilebilir mi?", a: "Uygulama yayın öncesi beta ve gerçek cihaz testleri aşamasındadır. Erken erişim listesine kayıt olarak süreci takip edebilirsiniz." }
    ]
  },
  founder: {
    text: "İşYolum, staj sürecinde günlüklerin, belgelerin ve iş günü hesaplarının farklı yerlerde tutulmasından doğan gerçek bir ihtiyaçtan ortaya çıktı. Amacım, öğrencilerin ve çalışma hayatına yeni başlayan kişilerin bu süreçleri daha düzenli ve güvenli şekilde yönetmesini sağlamak."
  },
  form: {
    title: "Erken Erişime Katılın",
    description: "Gelişmelerden ilk siz haberdar olun ve kapalı beta testlerine katılın.",
    name: "Adınız (İsteğe Bağlı)",
    email: "E-posta Adresiniz",
    type: "Kullanıcı Tipi",
    types: {
      student: "Öğrenci",
      intern: "Stajyer",
      jobseeker: "İş Arayan",
      worker: "Çalışan",
      freelancer: "Freelancer",
      university: "Üniversite / Şirket",
      supporter: "Destek Programı"
    },
    message: "Mesajınız (İsteğe Bağlı)",
    consent: "Verilerimin iletişim amacıyla işlenmesini kabul ediyorum.",
    submit: "Gönder",
    success: "Başvuru gönderildi.",
    submitting: "Gönderiliyor...",
    inactive: "Erken erişim formu henüz aktif değil.",
    error: "Gönderim başarısız oldu.",
    tryAgain: "Lütfen tekrar deneyin.",
    privacyRequired: "Gizlilik onayı gerekli."
  },
  footer: {
    description: "Çalışma hayatın, düzenli ve kontrolün altında.",
    rights: "Tüm hakları saklıdır."
  }
};

export type Dictionary = typeof tr;
