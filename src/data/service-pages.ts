import type { ServicePage } from "@/types/service-page";

export const servicePages: ServicePage[] = [
  {
    slug: "gunluk-arac-kiralama",
    name: "Günlük Araç Kiralama",
    h1: "Günlük Araç Kiralama",
    badge: "Kısa Süreli",
    intro:
      "Velora Rent ile İstanbul'da günlük araç kiralama hizmeti alın. Yeni model filomuz, şeffaf fiyatlandırma ve 7/24 destek ile kısa süreli ihtiyaçlarınız için hızlı ve güvenilir çözüm sunuyoruz.",
    description:
      "Günlük araç kiralama; iş ziyareti, şehir turu, acil ulaşım veya kısa tatil planları için en esnek seçenektir. Rezervasyonunuzu dakikalar içinde tamamlayın, aracınızı belirlediğiniz noktada teslim alın. Tam kasko dahil tüm araçlarımız bakımlı ve temiz teslim edilir.",
    metaTitle: "Günlük Araç Kiralama",
    metaDescription:
      "Yeni model araç filosu ile günlük araç kiralama hizmeti. Hızlı rezervasyon, uygun fiyat ve 7/24 müşteri desteği.",
    advantages: [
      {
        title: "Anında Esneklik",
        description:
          "1 günden itibaren kiralama; programınıza göre teslim ve iade planı.",
      },
      {
        title: "Şeffaf Günlük Fiyat",
        description:
          "Gizli ücret yok; rezervasyon öncesi net toplam maliyet bilgisi.",
      },
      {
        title: "Hızlı Onay",
        description:
          "Online veya WhatsApp ile dakikalar içinde rezervasyon onayı.",
      },
    ],
    faqs: [
      {
        id: "daily-1",
        question: "Günlük kiralama minimum süresi nedir?",
        answer:
          "Standart günlük kiralama 24 saat üzerinden hesaplanır. Daha kısa süreli talepler için destek hattımızla iletişime geçebilirsiniz.",
      },
      {
        id: "daily-2",
        question: "Günlük kiralama için hangi belgeler gerekli?",
        answer:
          "Geçerli sürücü belgesi, kimlik veya pasaport ile kredi kartı yeterlidir.",
      },
      {
        id: "daily-3",
        question: "Günlük kiralama uzatılabilir mi?",
        answer:
          "Evet. Müsaitlik durumuna göre kiralama sürenizi uzatabilirsiniz.",
      },
    ],
  },
  {
    slug: "haftalik-arac-kiralama",
    name: "Haftalık Araç Kiralama",
    h1: "Haftalık Araç Kiralama",
    badge: "Orta Süreli",
    intro:
      "Tatil, iş seyahati veya proje bazlı ihtiyaçlarınız için haftalık araç kiralama paketlerimizle bütçenizi koruyun. Velora Rent, 7 gün ve üzeri kiralamalarda avantajlı birim fiyat sunar.",
    description:
      "Haftalık kiralama; bölge turu, uzun iş ziyareti veya aile tatili gibi 7–30 gün arası kullanımlar için idealdir. Günlük kiralamaya kıyasla daha düşük birim maliyet elde edersiniz. Filomuzda ekonomik hatchback'ten lüks sedan'a kadar geniş seçenek bulunur.",
    metaTitle: "Haftalık Araç Kiralama",
    metaDescription:
      "Haftalık araç kiralama paketleri ile tatil ve iş seyahatlerinizde avantajlı fiyat. Yeni model filo ve 7/24 destek.",
    advantages: [
      {
        title: "Avantajlı Birim Fiyat",
        description:
          "7 gün ve üzeri kiralamalarda günlük maliyet düşer.",
      },
      {
        title: "Tatil ve İş Seyahati",
        description:
          "Hafta sonu kaçamağı veya proje bazlı işler için ideal süre.",
      },
      {
        title: "Esnek Teslim Noktaları",
        description:
          "Havalimanı, otel veya şehir içi teslim seçenekleri.",
      },
    ],
    faqs: [
      {
        id: "weekly-1",
        question: "Haftalık kiralama kaç günden başlar?",
        answer:
          "Haftalık paketler genellikle 7 gün ve üzeri kiralamalar için geçerlidir.",
      },
      {
        id: "weekly-2",
        question: "Haftalık kiralamada km sınırı var mı?",
        answer:
          "Paket koşulları araç segmentine göre değişir; rezervasyon sırasında detay paylaşılır.",
      },
      {
        id: "weekly-3",
        question: "Haftalık kiralama iptal edilebilir mi?",
        answer:
          "İptal koşulları rezervasyon tarihine göre belirlenir; destek hattından bilgi alabilirsiniz.",
      },
    ],
  },
  {
    slug: "aylik-arac-kiralama",
    name: "Aylık Araç Kiralama",
    h1: "Aylık Araç Kiralama",
    badge: "Uzun Dönem",
    intro:
      "30 gün ve üzeri ihtiyaçlarınız için aylık araç kiralama çözümleri. Velora Rent, uzun dönem kiralamada en ekonomik birim fiyatı ve bakımlı filo garantisi sunar.",
    description:
      "Aylık kiralama; geçici görevlendirme, sağlık tedavisi, araçsız kalınan dönemler veya uzun proje ihtiyaçları için idealdir. Araç sahibi olmadan sabit aylık maliyetle ulaşım ihtiyacınızı karşılayın. Kurumsal müşterilerimize özel filo seçenekleri de mevcuttur.",
    metaTitle: "Aylık Araç Kiralama",
    metaDescription:
      "Aylık araç kiralama ile uzun dönem ekonomik çözümler. Bakımlı filo, şeffaf fiyat ve 7/24 destek.",
    advantages: [
      {
        title: "En Düşük Birim Maliyet",
        description:
          "30 gün ve üzeri kiralamalarda günlük maliyet minimum seviyeye iner.",
      },
      {
        title: "Bakım ve Sigorta Dahil",
        description:
          "Tam kasko kapsamı ile uzun dönemde güvenli kullanım.",
      },
      {
        title: "Araç Değiştirme Esnekliği",
        description:
          "İhtiyaç değiştiğinde segment yükseltme veya değiştirme talebi değerlendirilir.",
      },
    ],
    faqs: [
      {
        id: "monthly-1",
        question: "Aylık kiralama kimler için uygundur?",
        answer:
          "Geçici görevlendirme, sağlık tedavisi, proje bazlı işler ve araçsız kaldığınız dönemler için idealdir.",
      },
      {
        id: "monthly-2",
        question: "Aylık kiralama fiyatı nasıl hesaplanır?",
        answer:
          "Araç segmenti, kiralama süresi ve teslim noktasına göre özel teklif hazırlanır.",
      },
      {
        id: "monthly-3",
        question: "Kurumsal aylık kiralama yapılıyor mu?",
        answer:
          "Evet. Şirketlere özel filo ve faturalandırma seçenekleri sunuyoruz.",
      },
    ],
  },
  {
    slug: "kurumsal-arac-kiralama",
    name: "Kurumsal Araç Kiralama",
    h1: "Kurumsal Araç Kiralama",
    badge: "Kurumsal",
    intro:
      "Şirketiniz için filo kiralama, uzun dönem araç çözümleri ve kurumsal faturalandırma. Velora Rent, işletmenizin ulaşım ihtiyaçlarını tek noktadan yönetmenizi sağlar.",
    description:
      "Kurumsal araç kiralama hizmetimiz; personel ulaşımı, müşteri ziyaretleri, proje bazlı operasyonlar ve yönetici araçları için tasarlanmıştır. Özel filo planı, toplu rezervasyon, aylık raporlama ve kurumsal sözleşme seçenekleri sunuyoruz.",
    metaTitle: "Kurumsal Araç Kiralama",
    metaDescription:
      "Şirketler için filo kiralama ve kurumsal araç çözümleri. Özel teklif, faturalandırma ve 7/24 destek.",
    advantages: [
      {
        title: "Özel Filo Planı",
        description:
          "İhtiyacınıza göre segment ve araç sayısı belirlenir.",
      },
      {
        title: "Kurumsal Faturalandırma",
        description:
          "Şirket unvanına fatura, sözleşmeli çalışma imkânı.",
      },
      {
        title: "Dedicated Destek",
        description:
          "Kurumsal müşteriler için öncelikli iletişim hattı.",
      },
    ],
    faqs: [
      {
        id: "corp-1",
        question: "Kurumsal kiralama minimum araç sayısı var mı?",
        answer:
          "Tek araçtan filo kiralamaya kadar esnek çözümler sunuyoruz; ihtiyacınıza göre plan oluşturulur.",
      },
      {
        id: "corp-2",
        question: "Kurumsal sözleşme süresi ne kadar?",
        answer:
          "Aylık, 6 aylık ve yıllık sözleşme seçenekleri değerlendirilebilir.",
      },
      {
        id: "corp-3",
        question: "Şoförlü kurumsal hizmet var mı?",
        answer:
          "Talep üzerine değerlendirilir; detay için kurumsal satış ekibimizle iletişime geçin.",
      },
    ],
  },
  {
    slug: "havalimani-arac-kiralama",
    name: "Havalimanı Araç Kiralama",
    h1: "Havalimanı Araç Kiralama",
    badge: "Havalimanı Teslim",
    intro:
      "İstanbul Havalimanı ve Sabiha Gökçen'de hızlı araç teslimi ve iadesi. Velora Rent ile uçuş sonrası beklemeden yolculuğunuza başlayın.",
    description:
      "Havalimanı araç kiralama hizmetimiz; terminal teslim, uçuş saatine göre planlama ve bagaj dostu filo seçenekleri içerir. İş ve tatil seyahatlerinde taksi kuyruğu veya aktarma derdi olmadan doğrudan hedefinize ulaşın.",
    metaTitle: "Havalimanı Araç Kiralama",
    metaDescription:
      "İstanbul havalimanlarında hızlı araç teslimi ve iadesi. Terminal teslim, yeni model filo ve 7/24 destek.",
    advantages: [
      {
        title: "Terminal Teslim",
        description:
          "Varış saatinize göre planlanan hızlı araç teslimi.",
      },
      {
        title: "7/24 Karşılama",
        description:
          "Gece ve sabah erken uçuşlarında da hizmet devam eder.",
      },
      {
        title: "Havalimanına İade",
        description:
          "Dönüş uçuşunuza uygun iade noktası planlaması.",
      },
    ],
    faqs: [
      {
        id: "airport-1",
        question: "Hangi havalimanlarında hizmet veriyorsunuz?",
        answer:
          "İstanbul Havalimanı (IST) ve Sabiha Gökçen (SAW) havalimanlarında teslim ve iade yapılmaktadır.",
      },
      {
        id: "airport-2",
        question: "Uçuş gecikmesinde ne yapmalıyım?",
        answer:
          "Destek hattımızı arayarak güncel varış saatinizi bildirmeniz yeterlidir.",
      },
      {
        id: "airport-3",
        question: "Havalimanı teslim ek ücretli mi?",
        answer:
          "Teslim noktasına göre ücretlendirme değişebilir; rezervasyon sırasında net bilgi verilir.",
      },
    ],
  },
  {
    slug: "ekonomik-arac-kiralama",
    name: "Ekonomik Araç Kiralama",
    h1: "Ekonomik Araç Kiralama",
    badge: "Ekonomik Filo",
    intro:
      "Bütçe dostu araç kiralama seçenekleriyle şehir içi ve kısa mesafe yolculuklarınızı ekonomik hale getirin. Velora Rent, düşük yakıt tüketimli modellerle uygun fiyat garantisi sunar.",
    description:
      "Ekonomik araç kiralama segmentimiz; Renault Clio, Fiat Egea ve Hyundai i20 gibi hatchback modelleri kapsar. Düşük günlük maliyet, kolay park ve verimli yakıt tüketimi arayanlar için idealdir. Tam kasko dahil tüm araçlarımız bakımlı teslim edilir.",
    metaTitle: "Ekonomik Araç Kiralama",
    metaDescription:
      "Uygun fiyatlı ekonomik araç kiralama. Düşük yakıt tüketimi, hatchback modeller ve hızlı rezervasyon.",
    carCategoryFilter: "Ekonomik",
    advantages: [
      {
        title: "Uygun Günlük Fiyat",
        description:
          "B segment araçlarla bütçe dostu kiralama.",
      },
      {
        title: "Düşük Yakıt Tüketimi",
        description:
          "Şehir içi kullanımda ekonomik hatchback modeller.",
      },
      {
        title: "Kolay Park",
        description:
          "Kompakt boyut sayesinde dar alanlarda pratik kullanım.",
      },
    ],
    faqs: [
      {
        id: "eco-1",
        question: "Ekonomik segmentte hangi araçlar var?",
        answer:
          "Renault Clio, Fiat Egea ve benzeri hatchback modeller filomuzda yer alır.",
      },
      {
        id: "eco-2",
        question: "Ekonomik araçlar tam kasko dahil mi?",
        answer:
          "Evet. Tüm segmentlerde tam kasko sigortası dahildir.",
      },
      {
        id: "eco-3",
        question: "En uygun fiyat için ne zaman rezervasyon yapmalıyım?",
        answer:
          "Özellikle yaz sezonu ve bayram dönemlerinde erken rezervasyon önerilir.",
      },
    ],
  },
  {
    slug: "luks-arac-kiralama",
    name: "Lüks Araç Kiralama",
    h1: "Lüks Araç Kiralama",
    badge: "Premium Filo",
    intro:
      "Premium sürüş deneyimi için lüks araç kiralama hizmeti. Velora Rent filosunda BMW, Mercedes-Benz ve üst segment sedan modelleriyle konfor ve prestij bir arada.",
    description:
      "Lüks araç kiralama; iş toplantıları, özel günler, VIP transfer ve üst düzey konfor arayanlar için tasarlanmıştır. Deri döşeme, ileri sürüş destek sistemleri ve geniş iç hacim sunan modellerimizle yolculuğunuzu ayrıcalıklı kılın.",
    metaTitle: "Lüks Araç Kiralama",
    metaDescription:
      "Premium lüks araç kiralama hizmeti. BMW, Mercedes ve üst segment modeller, tam kasko ve 7/24 destek.",
    carCategoryFilter: "Lüks",
    advantages: [
      {
        title: "Premium Filo",
        description:
          "BMW 3 Series, Mercedes C Class ve üst segment modeller.",
      },
      {
        title: "Üst Düzey Konfor",
        description:
          "Deri döşeme, gelişmiş multimedya ve sürüş destek sistemleri.",
      },
      {
        title: "Prestijli Deneyim",
        description:
          "İş seyahati ve özel günler için profesyonel izlenim.",
      },
    ],
    faqs: [
      {
        id: "lux-1",
        question: "Lüks segmentte hangi modeller mevcut?",
        answer:
          "BMW 3 Series, Mercedes-Benz C Class ve benzeri premium sedan modeller sunuyoruz.",
      },
      {
        id: "lux-2",
        question: "Lüks araç kiralama depozitosu farklı mı?",
        answer:
          "Segment ve sigorta paketine göre depozito tutarı değişebilir; rezervasyon sırasında bilgi verilir.",
      },
      {
        id: "lux-3",
        question: "Lüks araçlara ek sürücü eklenebilir mi?",
        answer:
          "Evet. Ek sürücü talebi rezervasyon sırasında veya teslim öncesinde iletilebilir.",
      },
    ],
  },
];

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((service) => service.slug);
}
