export const tr = {
  nav: {
    features: "Özellikler",
    internship: "İş ve staj",
    privacy: "Gizlilik",
    roadmap: "Nasıl çalışır?",
    collaboration: "Kimler için?",
    about: "Kurucudan",
    earlyAccess: "Erken Erişim · APK İndir",
    languageSwitch: "Dili İngilizce yap",
    themeToLight: "Açık temaya geç",
    themeToDark: "Koyu temaya geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat"
  },
  hero: {
    badge: "İŞ YOLUM İÇİN ERKEN ERİŞİM BAŞLADI",
    title: "İş günlerini, çalışma saatini ve kariyer geçmişini tek yerde tut.",
    description: "İşYolum artık erken erişimde! Çalışma günlerini ve kalan saatini takip et; günlüklerini, başvurularını, belgelerini ve kariyer kayıtlarını hemen Android cihazına indirip düzenle.",
    subtitle: "İşYolum, çalışma hayatındaki dağınık kayıtları kişisel ve cihaz öncelikli bir düzende bir araya getirir.",
    ctaPrimary: "Erken Erişim APK'sını İndir",
    ctaSecondary: "Nasıl çalıştığını gör",
    collaborationLink: "Test ve iş birliği",
    briefing: {
      kicker: "AÇIK VE NET",
      title: "Verinin nerede durduğunu bil.",
      note: "İşYolum'un çalışma şeklini, cihazda kalan verileri ve OCR kullanıldığında oluşan teknik aktarımı açıkça anlatıyoruz.",
      lead: "Günlükler, iş kayıtları, başvurular ve ayarlar cihazındaki şifreli veritabanında tutulur.",
      continuation: "Eklediğin dosyalar uygulamanın özel alanında kalır. Android OCR metni göndermez; teknik kullanım ölçümleri Google'a iletilebilir.",
      sourcesLabel: "bilgi kaynağı",
      followUpsLabel: "Daha fazlası",
      copy: "Metni kopyala",
      copied: "Kopyalandı",
      retry: "Yeniden göster",
      useful: "Faydalı",
      notUseful: "Faydalı değil",
      usefulSelected: "Faydalı olarak işaretlendi",
      notUsefulSelected: "Faydalı değil olarak işaretlendi",
      feedbackThanks: "Geri bildirimin bu sayfada kaldı.",
      copyFailed: "Kopyalama başarısız",
      sources: [
        { name: "Cihazda saklama", domain: "KAYITLAR", href: "#privacy" },
        { name: "Belge tarama", domain: "OCR", href: "#privacy" },
        { name: "İşYolum", domain: "ÖZELLİKLER", href: "#features" }
      ],
      followUps: [
        { text: "Veriler nasıl saklanıyor?", href: "#privacy" },
        { text: "Uygulama neler yapıyor?", href: "#features" }
      ]
    }
  },
  problem: {
    title: "İş ve staj kayıtları neden ayrı ayrı tutuluyor?",
    cards: [
      { title: "Kalan süreyi kestirmek zor", description: "Hedef iş günü ve çalışma saatini farklı hesaplayınca döneminin ne zaman biteceğini görmek zorlaşır." },
      { title: "Günlükler birikir", description: "Gün sonunda not alınmayınca yaptıkların ve sonradan hatırlaman gereken ayrıntılar unutulabilir." },
      { title: "Başvurular karışır", description: "Hangi şirkete ne zaman başvurduğunu ve sıradaki adımı tek bakışta izlemek güçleşir." },
      { title: "Kariyer izi dağılır", description: "Projeler, öğrendiklerin, başarıların ve belgelerin farklı uygulamalara yayılır." },
      { title: "Belgeler bulunmaz", description: "CV, sertifika ve çalışma belgeleri ihtiyaç duyduğun anda kolayca bulunamayabilir." },
      { title: "Teslim son güne kalır", description: "Günlükleri dönem sonunda toparlamak staj defterini hazırlamayı zorlaştırır." }
    ],
    footer: "İşYolum; takvimini, çalışma süreni, notlarını ve kariyer kayıtlarını aynı kişisel çalışma alanında toplar."
  },
  features: {
    title: "Gününden kariyer geçmişine, aynı yerde",
    cards: [
      { title: "İş günü ve dönem takvimi", description: "Staj ya da çalışma dönemini tanımla; çalışma takvimini, hedef iş gününü ve tahmini bitiş tarihini izle." },
      { title: "Çalışma saati ve kalan süre", description: "Günlük çalışma süreni kaydet; toplam hedefe ne kadar yaklaştığını ve kaç saatin kaldığını gör." },
      { title: "Günlükler ve haftalık özet", description: "Gün içinde yaptıklarını not et; tamamlanma durumunu ve haftalık ilerlemeni gözden geçir." },
      { title: "Kariyer hafızası", description: "İş deneyimlerini, projelerini, görevlerini, becerilerini, sertifikalarını ve başarılarını zaman çizelgende tut." },
      { title: "Başvuru takibi", description: "İş ve staj başvurularını durumlarıyla kaydet; görüşme ve takip tarihlerini hatırlatıcılarla izle." },
      { title: "Belge kasası ve PDF", description: "Belgelerini dönemlere göre düzenle; staj günlüklerini A4 PDF defterine aktar." },
      { title: "OCR ve içerik arama", description: "Desteklenen görsel belgelerdeki metni cihazında tara; günlük, belge ve kayıtlarında ara." },
      { title: "Yerel hatırlatıcılar", description: "Görüşme, teslim ve çalışma günleri için cihazında planlanan bildirimler oluştur." }
    ]
  },
  privacy: {
    title: "Kayıtların öncelikle cihazında kalır.",
    description: "İş, staj, günlük, başvuru, proje ve beceri kayıtları SQLCipher ile şifrelenen yerel veritabanında tutulur. Eklediğin dosyalar uygulamanın özel dosya alanında saklanır; bu dosyalar ayrıca şifrelenmez. İşYolum hesabı veya kendi bulut eşitlemesi sunmaz.",
    items: [
      "Yerel kayıt veritabanı SQLCipher ile şifrelenir",
      "Belgeler uygulamanın özel dosya alanında saklanır",
      "OCR metni geliştiriciye veya Google'a gönderilmez",
      "Android OCR teknik ölçümleri Google'a gidebilir",
      "Hatırlatıcılar cihazda yerel bildirim olarak planlanır",
      "Uygulama kilidi cihazın biyometrik doğrulamasını kullanır"
    ],
    note: "Android'de OCR modeli ilk kez indirilirken internet gerekebilir. ML Kit kullanımında cihaz, uygulama ve tanılama ölçümleri Google'a iletilebilir; belge görseli ve tanınan metin bu ölçümlere dahil değildir. Uygulamayı kaldırmak yerel kayıt ve dosyaları silebilir."
  },
  collaboration: {
    title: "İşYolum çalışma şekline uyum sağlar.",
    description: "Profil ve Ayarlar ekranından amacına uygun kullanıcı modunu seç. Staj, iş arama, mevcut iş ve proje kayıtlarını kendi dönemlerinle düzenle.",
    cards: [
      { title: "Stajyer Modu", description: "Staj süreci, zorunlu staj defteri, günlük çalışma durumu ve haftalık özet takibi." },
      { title: "İş Arayan Modu", description: "İş ve staj başvuruları, mülakat hazırlığı, takip hatırlatıcıları ve CV yönetimi." },
      { title: "Çalışan Modu", description: "İş notları, günlük görevler, çalışma dönemleri ve İş Kasam evrak depolama." },
      { title: "Kariyer Hafızası", description: "İş/Staj, proje, beceri, başarı ve kanıtlarını yıllara göre zaman çizelgesinde biriktir." }
    ],
    ctaPrimary: "Erken Erişim APK'sını İndir",
    ctaSecondary: "Uygulama akışını gör"
  },
  faq: {
    eyebrow: "KISA YANITLAR",
    title: "Sık sorulan sorular",
    items: [
      { q: "İşYolum iş ilanı veya iş bulma uygulaması mı?", a: "Hayır. İşYolum ilan yayınlamaz ve iş bulmayı garanti etmez. Başvurularını, görüşme tarihlerini, çalışma kayıtlarını ve kariyer geçmişini düzenlemene yardımcı olur." },
      { q: "Hangi çalışma sürelerini takip edebilirim?", a: "Bir dönem için hedef iş günü ve isteğe bağlı toplam çalışma süresi belirleyebilir; kaydettiğin günleri, çalıştığın süreyi ve kalan hedefi izleyebilirsin. Takvim hesabında çalışma günlerin ve seçtiğin tatil ayarları dikkate alınır." },
      { q: "Kariyer hafızasında neler tutabilirim?", a: "İş deneyimleri, görevler, projeler, öğrenme kayıtları, beceriler, sertifikalar, başarılar, notlar ve bunlarla ilişkilendirdiğin belgeler." },
      { q: "Başvuru takibi nasıl çalışır?", a: "İş veya staj başvurularını ekleyebilir, durumlarını güncelleyebilir ve görüşme ya da takip tarihleri için hatırlatıcı oluşturabilirsin. İşYolum başvuruyu senin adına göndermez." },
      { q: "Kayıtlarım nerede saklanıyor?", a: "Uygulama kayıtları cihazındaki SQLCipher ile şifrelenen veritabanında tutulur. Eklediğin dosyalar uygulamanın özel alanındadır; dosyaların kendileri ayrıca şifrelenmez." },
      { q: "OCR belgemi veya metnini internete gönderiyor mu?", a: "Desteklenen belgelerde görüntü ve tanınan metin OCR için geliştiriciye veya Google'a gönderilmez. Android'de ML Kit, OCR kullanıldığında cihaz/uygulama bilgileri ve teknik ölçümleri Google'a iletebilir. İlk model indirmesi için internet gerekebilir." },
      { q: "Uygulamayı silersem kayıtlarım kalır mı?", a: "Uygulama verileri cihazda yerel tutulur ve uygulama kaldırıldığında silinebilir. İşYolum hesap eşitlemesi veya kendi bulut yedeklemesini sunmaz." },
      { q: "Staj defterini PDF olarak hazırlayabilir miyim?", a: "Evet. Staj dönemi günlüklerini kronolojik sırayla A4 PDF staj defteri olarak dışa aktarabilirsin." },
      { q: "Bir belge için boyut sınırı var mı?", a: "Belge ekleme ekranında tek dosya için 20 MB sınırı bulunur. Büyük görseller kaydedilmeden önce küçültme için optimize edilebilir." },
      { q: "Uygulamaya nasıl erişebilirim?", a: "İşYolum için Erken Erişim başladı! Sitemizdeki 'Erken Erişim APK'sını İndir' butonuna tıklayarak son derlenen Android APK kurulum paketini (16 Kasım 2026 derlemesi) doğrudan telefonuna indirip hemen kullanmaya başlayabilirsin." }
    ]
  },
  founder: {
    text: "İşYolum, staj günleri, çalışma saatleri, günlükler ve belgeler farklı yerlerde kaldığında ortaya çıkan dağınıklığı azaltmak için geliştiriliyor. Büyük bir heyecanla İşYolum'u erken erişime açtık; artık uygulamanın son sürümünü doğrudan indirip kendi kayıtlarını güvenli ve anlaşılır bir yerde tutmaya başlayabilirsin."
  },
  form: {
    title: "İŞ YOLUM İÇİN ERKEN ERİŞİM BAŞLADI",
    description: "Son derlenen Android APK paketini doğrudan cihazına indirip hemen kullanmaya başlayabilirsin. Ayrıca yeni sürümlerden haberdar olmak ve geri bildirim paylaşmak için aşağıdan kaydolabilirsin.",
    name: "Adın (isteğe bağlı)",
    email: "E-posta adresin",
    type: "Sana en uygun kullanım",
    selectPrompt: "Bir seçenek belirle",
    types: {
      student: "Öğrenci",
      intern: "Stajyer",
      jobseeker: "İş arayan",
      worker: "Çalışan",
      freelancer: "Serbest çalışan",
      university: "Üniversite / şirket",
      supporter: "Diğer"
    },
    message: "Eklemek istediğin bir şey var mı? (İsteğe bağlı)",
    consent: "Başvuru bilgilerimin kapalı test ve bilgilendirme amacıyla işlenmesini kabul ediyorum.",
    privacyLink: "Gizlilik politikasını oku",
    submit: "Talep gönder",
    success: "Talebin kapalı test için iletildi.",
    submitting: "Gönderiliyor...",
    inactive: "Başvuru formu şu anda kullanılamıyor. Lütfen daha sonra tekrar dene.",
    error: "Talebin gönderilemedi.",
    tryAgain: "Lütfen tekrar dene.",
    privacyRequired: "Devam etmek için gizlilik onayı gerekli."
  },
  footer: {
    description: "Çalışma günlerin, saatlerin ve kariyer kayıtların için kişisel düzen.",
    navigation: "Sayfada gezin",
    earlyAccess: "Erken Erişim",
    privacy: "Gizlilik politikası",
    status: "İŞ YOLUM İÇİN ERKEN ERİŞİM BAŞLADI · APK İndirilebilir",
    rights: "Tüm hakları saklıdır."
  },
  policy: {
    title: "İşYolum Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 7 Kasım 2026",
    intro: "Bu politika İşYolum mobil uygulamasının ve bu web sitesindeki kapalı test iletişim formunun kişisel verileri nasıl işlediğini açıklar.",
    sections: [
      {
        title: "Uygulama kayıtları ve dosyalar",
        body: "İş, staj, başvuru, günlük, proje, beceri, hatırlatıcı ve ayar kayıtları cihazınızdaki yerel veritabanında tutulur. Veritabanı, güvenli depolamada korunan cihaz anahtarıyla SQLCipher kullanılarak şifrelenir. Eklediğiniz PDF ve diğer dosyalar uygulamanın özel dosya alanında saklanır; bu dosyalar SQLCipher veritabanının parçası değildir ve ayrıca şifrelenmez."
      },
      {
        title: "Sunucu, hesap ve yedekleme",
        body: "İşYolum uygulama kayıtlarını geliştirici sunucusuna otomatik göndermez. Uygulamada kullanıcı hesabı, uygulama tarafından sunulan bulut eşitlemesi, reklam, geliştirici analitik SDK'sı veya çökme raporlama hizmeti yoktur. Android uygulama verileri Google Drive yedeklemesi ve otomatik cihazdan cihaza aktarım dışında tutulur. iOS cihaz yedeklemeleri Apple sistem ayarlarına tabidir."
      },
      {
        title: "Belge seçimi, OCR ve paylaşım",
        body: "Belgeler cihazın sistem dosya seçicisiyle seçilir. Android'de OCR modeli Google Play Services üzerinden indirilebilir; ilk indirme internet gerektirebilir. Android'de Google ML Kit, iOS'ta Apple Vision seçilen belgeyi cihaz üzerinde işler. Belge görüntüsü ve tanınan metin OCR için geliştiriciye veya Google'a gönderilmez. Model hazır olduğunda Android'de sonraki taramalar çevrimdışı yapılabilir. Uygulama kamera ile belge taramaz ve kamera izni istemez. Bir dosyayı paylaşmayı seçerseniz dosya sistem paylaşım panelinde seçtiğiniz uygulamaya aktarılır."
      },
      {
        title: "Android OCR teknik ölçümleri",
        body: "Android OCR kullanıldığında Google ML Kit SDK'sı; cihaz üreticisi/modeli ve Android sürümü, uygulama paketi/sürümü, kullanılabilir donanım hızlandırıcıları, cihaz/kurulum tanımlayıcıları, işlem süresi, API yapılandırması, girdi/çıktı boyutları, özellik/model sürümü, olay türleri ve hata kodları gibi teknik ölçümleri Google'a gönderebilir. Google bu ölçümleri tanılama ve kullanım analizi için kullandığını, HTTPS ile aktardığını ve üçüncü taraflarla paylaşmadığını bildirir. Bu ölçümlere belge görüntüsü ve OCR metni dahil değildir. İşYolum bu ölçümler için ayrı bir silme kontrolü sunmaz."
      },
      {
        title: "Uygulama kilidi ve bildirimler",
        body: "İsteğe bağlı uygulama kilidi cihazın işletim sistemi doğrulama ekranını kullanır. İşYolum biyometrik görüntü veya şablonlara erişmez ve bunları saklamaz. Hatırlatıcılar cihazda yerel bildirim olarak planlanır; push bildirim sunucusu kullanılmaz."
      },
      {
        title: "Kapalı test iletişim formu",
        body: "Web sitesindeki formu gönderirseniz adınız, e-posta adresiniz, kullanım tipiniz ve isteğe bağlı mesajınız kapalı test ve ürün bilgilendirmesi amacıyla geliştiricinin iletişim e-posta hesabına gönderilir. Form bilgileri İşYolum mobil uygulamasına veya bir uygulama hesabına aktarılmaz; web sitesinde ayrı bir kullanıcı hesabı ya da başvuru veritabanı bulunmaz. İletim için Gmail/Google e-posta hizmeti kullanılır. Formu göndermeyerek bu aktarımı önleyebilirsiniz."
      },
      {
        title: "Web sitesi tercihleri",
        body: "Web sitesi seçtiğiniz dili ve temayı tarayıcınızın yerel depolamasında hatırlar. Bu tercihler iletişim formu gönderilmedikçe geliştiriciye iletilmez."
      },
      {
        title: "Saklama, silme ve iletişim",
        body: "Uygulama kayıtlarınızı uygulama içinden silebilirsiniz; uygulamayı kaldırmak yerel veritabanını ve özel dosya alanını da silebilir. Formla gönderdiğiniz e-posta içeriğinin silinmesini veya gizlilikle ilgili sorularınızı contact@temurcode.com.tr adresine iletebilirsiniz. Google ML Kit tarafından gönderilen teknik ölçümler için İşYolum'da ayrı bir silme kontrolü yoktur."
      }
    ],
    contact: "Gizlilik soruları için"
  }
};

export type Dictionary = typeof tr;
