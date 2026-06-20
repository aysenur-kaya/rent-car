import type { BlogPost } from "@/types/blog";
import { blogCoverImages } from "./images";
import { BLOG_AUTHOR } from "./utils";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "arac-kiralarken-dikkat-edilmesi-gereken-10-nokta",
    title: "Araç Kiralarken Dikkat Edilmesi Gereken 10 Önemli Nokta",
    excerpt:
      "Araç kiralama sürecinde güvenli ve sorunsuz bir deneyim yaşamak için dikkat edilmesi gereken temel kuralları öğrenin.",
    categoryId: "arac-kiralama",
    image: blogCoverImages.carRentalTips,
    imageAlt: "İstanbul'da araç kiralamadan önce sözleşme inceleyen sürücü",
    readTimeMinutes: 9,
    publishedAt: "18 Mart 2026",
    publishedAtISO: "2026-03-18",
    updatedAtISO: "2026-03-20",
    author: BLOG_AUTHOR,
    metaTitle:
      "Araç Kiralarken Dikkat Edilmesi Gereken 10 Nokta | Velora Rent",
    metaDescription:
      "Araç kiralama sözleşmesi, depozito, sigorta ve teslim sürecinde bilmeniz gereken 10 kritik noktayı Velora Rent rehberinde keşfedin.",
    tags: [
      "araç kiralama",
      "rent a car",
      "araç kiralama ipuçları",
      "depozito",
      "kiralama sözleşmesi",
    ],
    sections: [
      {
        id: "neden-onemli",
        heading: "Araç Kiralarken Neden Dikkatli Olmalısınız?",
        level: 2,
        paragraphs: [
          "Araç kiralama, özellikle tatil ve iş seyahatlerinde büyük kolaylık sağlar. Ancak sözleşme detaylarını atlamak, beklenmedik maliyetlere veya teslim sürecinde yaşanan anlaşmazlıklara yol açabilir.",
          "Doğru bilgiyle hareket etmek hem bütçenizi korur hem de yolculuğunuzu stressiz hale getirir. Aşağıdaki 10 madde, Türkiye'de araç kiralayanların en sık karşılaştığı konuları kapsar.",
        ],
      },
      {
        id: "belgeler-sigorta",
        heading: "1. Belgelerinizi ve Sigorta Kapsamını Kontrol Edin",
        level: 2,
        paragraphs: [
          "Geçerli sürücü belgesi, kimlik veya pasaport ile kredi kartı çoğu firmada zorunludur. Uluslararası sürücü belgesi gerekip gerekmediğini önceden teyit edin.",
          "Tam kasko, muafiyet tutarı ve cam-far güvencesi gibi ifadeleri sözleşmede mutlaka okuyun. Ek güvence paketleri maliyeti artırabilir; ihtiyacınıza göre değerlendirin.",
        ],
      },
      {
        id: "depozito-fiyat",
        heading: "2. Depozito ve Gizli Ücretlere Dikkat Edin",
        level: 2,
        paragraphs: [
          "Depozito, kredi kartınızdan provizyon olarak alınır ve araç hasarsız teslim edildiğinde iade edilir. İade süresi bankaya göre 3-10 iş günü sürebilir.",
          "Tek yön ücreti, ek sürücü, bebek koltuğu veya geç teslim bedelleri fiyat teklifinde yer almayabilir. Rezervasyon öncesi toplam maliyeti netleştirin.",
        ],
      },
      {
        id: "arac-segmenti",
        heading: "3. İhtiyacınıza Uygun Araç Segmentini Seçin",
        level: 2,
        paragraphs: [
          "Şehir içi kullanım için kompakt hatchback modeller yakıt ve park açısından avantajlıdır. Uzun yol veya aile seyahatlerinde sedan ve SUV segmentleri daha konforlu olabilir.",
          "Bagaj hacmi, yolcu sayısı ve vites tercihinizi (manuel/otomatik) rezervasyon aşamasında belirleyin; son dakika değişiklikleri ek ücrete tabi olabilir.",
        ],
      },
      {
        id: "teslim-iade",
        heading: "4. Teslim ve İade Sürecini Baştan Planlayın",
        level: 2,
        paragraphs: [
          "Havalimanı, otel veya şehir içi teslim seçeneklerinden size uygun olanı tercih edin. Teslim sırasında aracın dış ve iç durumunu fotoğraflayarak kayıt altına alın.",
          "İade saatini aşmak günlük ek ücret doğurabilir. Yakıt politikasını (full-full veya benzeri) önceden öğrenin ve iade öncesi yakıt seviyesine dikkat edin.",
        ],
      },
      {
        id: "sonuc",
        heading: "Sonuç: Bilinçli Kiralama, Güvenli Yolculuk",
        level: 2,
        paragraphs: [
          "Araç kiralama deneyiminizi sorunsuz hale getirmek için sözleşmeyi okumak, sigortayı anlamak ve teslim sürecini belgelemek en etkili üç adımdır.",
          "Velora Rent olarak şeffaf fiyatlandırma, tam kasko dahil filo ve 7/24 destek ile güvenli bir kiralama süreci sunuyoruz. Hemen rezervasyon yaparak premium araçlarımızı keşfedin.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "uzun-yolculuk-oncesi-arac-kontrol-listesi",
    title: "Uzun Yolculuk Öncesi Araç Kontrol Listesi",
    excerpt:
      "Yola çıkmadan önce aracınızda mutlaka kontrol etmeniz gereken güvenlik ve konfor detayları.",
    categoryId: "seyahat",
    image: blogCoverImages.longTripChecklist,
    imageAlt: "Uzun yolculuk öncesi aracın lastiklerini kontrol eden sürücü",
    readTimeMinutes: 8,
    publishedAt: "15 Mart 2026",
    publishedAtISO: "2026-03-15",
    updatedAtISO: "2026-03-16",
    author: BLOG_AUTHOR,
    metaTitle: "Uzun Yolculuk Öncesi Araç Kontrol Listesi | Velora Rent",
    metaDescription:
      "Uzun yola çıkmadan önce lastik, fren, sıvılar ve acil durum ekipmanı kontrolü. Güvenli yolculuk için eksiksiz kontrol listesi.",
    tags: ["uzun yol", "araç kontrol", "yolculuk güvenliği", "seyahat rehberi"],
    sections: [
      {
        id: "giris",
        heading: "Uzun Yol İçin Neden Ön Kontrol Şart?",
        level: 2,
        paragraphs: [
          "Uzun mesafe sürüşlerinde küçük bir aksaklık bile ciddi gecikmelere veya güvenlik risklerine dönüşebilir. Kiralık araçlarda teslim öncesi firma bakım yapar; yine de yola çıkmadan kısa bir kontrol önerilir.",
          "Bu liste, hem güvenliğiniz hem de konforunuz için yolculuk öncesi uygulayabileceğiniz pratik adımları içerir.",
        ],
      },
      {
        id: "lastik-fren",
        heading: "Lastik ve Fren Kontrolü",
        level: 2,
        paragraphs: [
          "Lastik basıncını üretici önerisine göre kontrol edin; düşük basınç yakıt tüketimini artırır ve patlama riskini yükseltir. Diş derinliği ve yanak hasarlarını gözden geçirin.",
          "Fren pedalının sertliği, el freni ve ABS uyarı lambasının çalışmadığından emin olun. Şüpheli bir durumda kiralama firmasına bildirin.",
        ],
      },
      {
        id: "sivilar-aydinlatma",
        heading: "Sıvı Seviyeleri ve Aydınlatma",
        level: 2,
        paragraphs: [
          "Motor yağı, antifriz, cam suyu ve fren hidroliği seviyelerini kontrol edin. Kiralık araçlarda bu kontroller genelde yapılmış olsa da hızlı bir gözden geçirme faydalıdır.",
          "Far, stop, sinyal ve sileceklerin düzgün çalıştığını doğrulayın. Gece veya yağmurlu hava koşullarında görüş kalitesi hayati önem taşır.",
        ],
      },
      {
        id: "acil-durum",
        heading: "Acil Durum Ekipmanı ve Belgeler",
        level: 2,
        paragraphs: [
          "Stepne, kriko, reflektör ve ilk yardım setinin araçta bulunduğunu teyit edin. Yedek anahtar veya uzaktan kumanda pili durumunu sorun.",
          "Ruhsat, sigorta poliçesi ve kiralama sözleşmesinin araçta veya dijital olarak erişilebilir olduğundan emin olun.",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "ekonomik-arac-kiralama-7-profesyonel-tavsiye",
    title: "Ekonomik Araç Kiralama İçin 7 Profesyonel Tavsiye",
    excerpt:
      "Daha uygun fiyatlarla kaliteli araç kiralamanızı sağlayacak pratik öneriler.",
    categoryId: "ipuclari",
    image: blogCoverImages.budgetRentalTips,
    imageAlt: "Ekonomik kiralık sedan araç ile bütçe dostu seyahat",
    readTimeMinutes: 7,
    publishedAt: "12 Mart 2026",
    publishedAtISO: "2026-03-12",
    updatedAtISO: "2026-03-12",
    author: BLOG_AUTHOR,
    metaTitle: "Ekonomik Araç Kiralama İçin 7 Tavsiye | Velora Rent",
    metaDescription:
      "Uygun fiyatlı araç kiralama için rezervasyon zamanı, segment seçimi ve kampanya ipuçları. Bütçenizi koruyun.",
    tags: ["ekonomik kiralama", "ucuz araç kiralama", "tasarruf", "ipuçları"],
    sections: [
      {
        id: "erken-rezervasyon",
        heading: "1. Erken Rezervasyon Yapın",
        level: 2,
        paragraphs: [
          "Özellikle yaz sezonu ve bayram dönemlerinde erken rezervasyon yapan müşteriler daha geniş araç seçeneği ve uygun fiyat avantajı elde eder.",
          "Son dakika kiralamalarında fiyatlar artabilir ve istediğiniz segment tükenebilir.",
        ],
      },
      {
        id: "segment-secimi",
        heading: "2. Gerçek İhtiyacınıza Göre Segment Seçin",
        level: 2,
        paragraphs: [
          "Lüks segment yerine ekonomik hatchback veya sedan tercih etmek günlük maliyeti önemli ölçüde düşürür. Şehir içi kullanımda kompakt araçlar hem yakıt hem park açısından avantajlıdır.",
          "Gereksiz büyük araç kiralamak bütçenizi zorlayabilir; yolcu ve bagaj ihtiyacınızı gerçekçi hesaplayın.",
        ],
      },
      {
        id: "sure-kampanya",
        heading: "3. Kiralama Süresi ve Kampanyaları Değerlendirin",
        level: 2,
        paragraphs: [
          "Haftalık veya aylık kiralama paketleri günlük kiralamaya göre birim fiyatı düşürebilir. Uzun süreli ihtiyacınız varsa paket fiyatlarını karşılaştırın.",
          "Firma web sitesi ve sosyal medya kanallarındaki dönemsel kampanyaları takip edin.",
        ],
      },
      {
        id: "ek-hizmet",
        heading: "4. Gereksiz Ek Hizmetlerden Kaçının",
        level: 2,
        paragraphs: [
          "GPS, çocuk koltuğu veya ek sürücü gibi hizmetler ihtiyaç duymadığınız sürece maliyeti artırır. Telefonunuzdaki navigasyon uygulamaları çoğu senaryoda yeterlidir.",
          "Sigorta paketlerini ihtiyacınıza göre seçin; çifte kapsam ödemekten kaçının.",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "sehir-ici-kullanim-ideal-arac",
    title: "Şehir İçi Kullanım İçin En İdeal Araç Hangisi?",
    excerpt:
      "Yakıt tüketimi, park kolaylığı ve sürüş konforuna göre şehir içi kullanım için en uygun araçları keşfedin.",
    categoryId: "surus-rehberi",
    image: blogCoverImages.cityDrivingGuide,
    imageAlt: "İstanbul trafiğinde kompakt hatchback ile şehir içi sürüş",
    readTimeMinutes: 8,
    publishedAt: "10 Mart 2026",
    publishedAtISO: "2026-03-10",
    updatedAtISO: "2026-03-11",
    author: BLOG_AUTHOR,
    metaTitle: "Şehir İçi Kullanım İçin İdeal Araç Rehberi | Velora Rent",
    metaDescription:
      "Şehir içi araç kiralama için en uygun modeller: hatchback, sedan ve otomatik vites karşılaştırması.",
    tags: ["şehir içi araç", "hatchback", "ekonomik araç", "sürüş rehberi"],
    sections: [
      {
        id: "kriterler",
        heading: "Şehir İçi Araç Seçiminde Temel Kriterler",
        level: 2,
        paragraphs: [
          "Dar sokaklar, yoğun trafik ve sınırlı park alanları şehir içi kullanımda araç seçimini doğrudan etkiler. Kompakt boyut, düşük yakıt tüketimi ve iyi manevra kabiliyeti ön plana çıkar.",
          "Otomatik vites, stop-and-go trafiğinde sürüş yorgunluğunu azaltır. Manuel vites ise bütçe dostu seçenekler sunar.",
        ],
      },
      {
        id: "hatchback",
        heading: "Hatchback: Şehir İçinin Kralı",
        level: 2,
        paragraphs: [
          "Renault Clio, Hyundai i20 ve Fiat Egea gibi B segment hatchback modeller park etmesi kolay, ekonomik ve pratik çözümler sunar.",
          "Kısa mesafe günlük kullanımda bu segment araçlar hem kiralama hem yakıt maliyeti açısından en verimli tercihtir.",
        ],
      },
      {
        id: "sedan",
        heading: "Sedan: Konfor ve Bagaj Avantajı",
        level: 2,
        paragraphs: [
          "Volkswagen Passat veya benzeri D segment sedanlar, daha geniş bagaj ve üst düzey konfor isteyen şehir içi kullanıcılar için uygundur.",
          "İş toplantıları veya aile kullanımında sedan segmenti profesyonel bir izlenim bırakır.",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "havalimanindan-arac-kiralama-avantajlari",
    title: "Havalimanından Araç Kiralamanın Avantajları",
    excerpt:
      "Zamandan tasarruf edin, seyahatinizi daha konforlu hale getirin. Havalimanı araç kiralamanın tüm avantajlarını inceleyin.",
    categoryId: "seyahat",
    image: blogCoverImages.airportCarRental,
    imageAlt: "Havalimanında araç teslim alan müşteri",
    readTimeMinutes: 7,
    publishedAt: "7 Mart 2026",
    publishedAtISO: "2026-03-07",
    updatedAtISO: "2026-03-10",
    author: BLOG_AUTHOR,
    metaTitle: "Havalimanından Araç Kiralama Avantajları | Velora Rent",
    metaDescription:
      "İstanbul havalimanı araç kiralama ile zaman kazanın. Terminal teslim, esneklik ve konfor avantajları.",
    tags: [
      "havalimanı araç kiralama",
      "istanbul havalimanı",
      "rent a car havalimanı",
    ],
    sections: [
      {
        id: "zaman-tasarrufu",
        heading: "Zaman Tasarrufu ve Esneklik",
        level: 2,
        paragraphs: [
          "Uçağınız indiği anda aracınıza binmek, taksi kuyrukları veya toplu taşıma aktarmalarıyla vakit kaybetmenizi önler. Özellikle iş seyahatlerinde dakikalar bile önemlidir.",
          "Varış ve dönüş saatlerinize göre esnek teslim-iade planı yapabilir, programınızı özgürce yönetebilirsiniz.",
        ],
      },
      {
        id: "konfor",
        heading: "Konfor ve Bagaj Kolaylığı",
        level: 2,
        paragraphs: [
          "Valizlerinizi ve seyahat ekipmanlarınızı rahatça taşıyabilir, birden fazla aktarma yapmadan doğrudan otelinize veya hedef noktanıza ulaşabilirsiniz.",
          "Aileler ve grup seyahatlerinde havalimanı araç kiralama maliyet-fayda açısından sıklıkla daha avantajlıdır.",
        ],
      },
      {
        id: "velora-hizmet",
        heading: "Velora Rent Havalimanı Teslim Hizmeti",
        level: 2,
        paragraphs: [
          "İstanbul Havalimanı ve Sabiha Gökçen'de karşılama ve araç teslimi ile 7/24 hizmet sunuyoruz. Rezervasyonunuzu önceden yaparak indiğiniz anda aracınız hazır olur.",
          "Tam kasko dahil filomuz ve şeffaf fiyatlandırma ile güvenle yolculuğunuza başlayın.",
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "kasko-sigorta-arac-kiralamada-neden-onemli",
    title: "Kasko ve Sigorta Araç Kiralamada Neden Önemlidir?",
    excerpt:
      "Araç kiralarken sunulan sigorta seçenekleri ve kapsamları hakkında bilmeniz gerekenler.",
    categoryId: "guvenlik",
    image: blogCoverImages.insuranceKasko,
    imageAlt: "Araç kiralama sözleşmesinde kasko ve sigorta maddelerini inceleyen sürücü",
    readTimeMinutes: 8,
    publishedAt: "4 Mart 2026",
    publishedAtISO: "2026-03-04",
    updatedAtISO: "2026-03-05",
    author: BLOG_AUTHOR,
    metaTitle: "Kasko ve Sigorta Araç Kiralamada Neden Önemli? | Velora Rent",
    metaDescription:
      "Araç kiralama sigortası, tam kasko, muafiyet ve ek güvence paketleri hakkında bilmeniz gerekenler.",
    tags: ["kasko", "sigorta", "araç kiralama güvenliği", "muafiyet"],
    sections: [
      {
        id: "sigorta-turleri",
        heading: "Araç Kiralamada Sigorta Türleri",
        level: 2,
        paragraphs: [
          "Zorunlu trafik sigortası tüm araçlarda mevcuttur. Tam kasko ise aracın hasar görmesi durumunda onarım masraflarını büyük ölçüde karşılar.",
          "Cam, far, lastik gibi özel parçalar için ek güvence paketleri sunulabilir. Sözleşmede hangi parçaların kapsam dışı olduğunu mutlaka kontrol edin.",
        ],
      },
      {
        id: "muafiyet",
        heading: "Muafiyet Tutarı Nedir?",
        level: 2,
        paragraphs: [
          "Muafiyet, hasar durumunda sizin sorumlu olduğunuz maksimum tutardır. Örneğin 5.000 TL muafiyetli bir poliçede bu tutara kadar olan hasar size aittir.",
          "Sıfır muafiyet paketleri ek ücret karşılığında sunulur; sık sık kiralama yapıyorsanız değerlendirmeye değer.",
        ],
      },
      {
        id: "velora-kasko",
        heading: "Velora Rent'te Tam Kasko Avantajı",
        level: 2,
        paragraphs: [
          "Tüm filomuz tam kasko sigortası ile korunmaktadır. Müşterilerimize şeffaf kapsam ve net sözleşme koşulları sunuyoruz.",
          "Sigorta detayları hakkında sorularınız için 7/24 destek hattımızdan bilgi alabilirsiniz.",
        ],
      },
    ],
  },
  {
    id: "7",
    slug: "gunluk-haftalik-aylik-kiralama-farklari",
    title: "Günlük, Haftalık ve Aylık Araç Kiralama Arasındaki Farklar",
    excerpt:
      "Hangi kiralama modeli sizin için daha avantajlı? İhtiyacınıza göre doğru seçimi yapın.",
    categoryId: "arac-kiralama",
    image: blogCoverImages.rentalPeriods,
    imageAlt: "Günlük, haftalık ve aylık kiralama paketlerini karşılaştıran müşteri",
    readTimeMinutes: 7,
    publishedAt: "1 Mart 2026",
    publishedAtISO: "2026-03-01",
    updatedAtISO: "2026-03-01",
    author: BLOG_AUTHOR,
    metaTitle:
      "Günlük, Haftalık ve Aylık Araç Kiralama Farkları | Velora Rent",
    metaDescription:
      "Günlük, haftalık ve aylık araç kiralama modellerini karşılaştırın. İhtiyacınıza en uygun kiralama süresini seçin.",
    tags: ["günlük kiralama", "aylık kiralama", "uzun dönem kiralama"],
    sections: [
      {
        id: "gunluk",
        heading: "Günlük Kiralama: Kısa Süreli İhtiyaçlar",
        level: 2,
        paragraphs: [
          "Tatil, iş ziyareti veya hafta sonu kaçamağı gibi 1-7 gün arası kullanımlar için idealdir. Minimum esneklik ve hızlı çözüm sunar.",
          "Günlük birim fiyat, uzun dönem kiralamaya göre daha yüksek olabilir; ancak kısa süreli ihtiyaçlarda en pratik seçenektir.",
        ],
      },
      {
        id: "haftalik",
        heading: "Haftalık Kiralama: Dengeli Seçenek",
        level: 2,
        paragraphs: [
          "7-30 gün arası kullanımlarda haftalık paketler günlük kiralamaya göre indirim sunar. Bölge turu veya proje bazlı işler için uygundur.",
          "Araç değiştirme veya uzatma taleplerini önceden firmayla görüşerek planlayın.",
        ],
      },
      {
        id: "aylik",
        heading: "Aylık Kiralama: Uzun Dönem Avantajı",
        level: 2,
        paragraphs: [
          "30 gün ve üzeri kiralamalarda birim maliyet en düşük seviyeye iner. Geçici görevlendirme, sağlık tedavisi veya araçsız kaldığınız dönemler için tercih edilir.",
          "Kurumsal müşterilerimize özel filo ve aylık kiralama çözümleri sunuyoruz.",
        ],
      },
    ],
  },
  {
    id: "8",
    slug: "arac-teslim-alirken-kontrol-edilecekler",
    title: "Araç Teslim Alırken Kontrol Etmeniz Gerekenler",
    excerpt:
      "Teslim sırasında dikkat edeceğiniz küçük detaylar, olası sorunların önüne geçebilir.",
    categoryId: "ipuclari",
    image: blogCoverImages.carPickupChecklist,
    imageAlt: "Kiralık aracı teslim alırken kaporta hasarlarını kontrol eden sürücü",
    readTimeMinutes: 6,
    publishedAt: "26 Şubat 2026",
    publishedAtISO: "2026-02-26",
    updatedAtISO: "2026-02-28",
    author: BLOG_AUTHOR,
    metaTitle: "Araç Teslim Alırken Kontrol Listesi | Velora Rent",
    metaDescription:
      "Kiralık araç teslim alırken hasar, kilometre ve ekipman kontrolü. İade anlaşmazlıklarını önleyin.",
    tags: ["araç teslim", "hasar kontrolü", "kiralama ipuçları"],
    sections: [
      {
        id: "dis-kontrol",
        heading: "Dış Hasar ve Kaporta Kontrolü",
        level: 2,
        paragraphs: [
          "Aracı teslim alırken tüm kaporta, cam, far ve aynaları dolaşarak çizik, göçük veya kırık olup olmadığını kontrol edin. Mevcut hasarları sözleşmeye işletin veya fotoğraflayın.",
          "Fotoğraf ve video kaydı, iade sırasında yaşanabilecek anlaşmazlıkların önüne geçmenin en etkili yoludur.",
        ],
      },
      {
        id: "ic-kontrol",
        heading: "İç Mekan ve Ekipman Kontrolü",
        level: 2,
        paragraphs: [
          "Koltuk, döşeme ve tavan temizliğini kontrol edin. Klima, cam silecekleri, multimedya sistemi ve USB bağlantılarının çalıştığını test edin.",
          "Yakıt seviyesini ve kilometreyi sözleşmedeki değerlerle karşılaştırın.",
        ],
      },
      {
        id: "belge",
        heading: "Belgeleri ve Acil Numaraları Kaydedin",
        level: 2,
        paragraphs: [
          "Kiralama sözleşmesi, sigorta bilgileri ve yol yardım numarasını telefonunuza kaydedin. Acil durumda hızlı erişim kritik önem taşır.",
          "Velora Rent müşterileri 7/24 destek hattımızdan anında yardım alabilir.",
        ],
      },
    ],
  },
  {
    id: "9",
    slug: "yakit-tasarrufu-surus-teknikleri",
    title: "Yakıt Tasarrufu Sağlayan Sürüş Teknikleri",
    excerpt:
      "Doğru sürüş alışkanlıklarıyla yakıt tüketimini azaltın ve ekonomik bir yolculuk yapın.",
    categoryId: "surus-rehberi",
    image: blogCoverImages.fuelSavingDriving,
    imageAlt: "Ekonomik sürüş teknikleriyle yakıt tasarrufu yapan sürücü",
    readTimeMinutes: 7,
    publishedAt: "22 Şubat 2026",
    publishedAtISO: "2026-02-22",
    updatedAtISO: "2026-02-22",
    author: BLOG_AUTHOR,
    metaTitle: "Yakıt Tasarrufu Sürüş Teknikleri | Velora Rent Blog",
    metaDescription:
      "Ekonomik sürüş teknikleri ile yakıt tüketimini %15'e kadar azaltın. Hız, vites ve klima kullanım ipuçları.",
    tags: ["yakıt tasarrufu", "ekonomik sürüş", "sürüş teknikleri"],
    sections: [
      {
        id: "hiz-sabit",
        heading: "Sabit Hız ve Yumuşak Sürüş",
        level: 2,
        paragraphs: [
          "Ani hızlanma ve sert frenleme yakıt tüketimini ciddi oranda artırır. Mümkün olduğunca sabit hızda ve öngörülü sürüş yapın.",
          "Otoyolda cruise control kullanmak, uzun yolculuklarda yakıt verimliliğini artırabilir.",
        ],
      },
      {
        id: "vites-klima",
        heading: "Doğru Vites ve Klima Kullanımı",
        level: 2,
        paragraphs: [
          "Manuel vitesli araçlarda düşük devirde yüksek vites kullanmak motoru zorlar ve tüketimi artırır. Önerilen devir aralığında vites değiştirin.",
          "Klimayı aşırı soğutma modunda kullanmak yakıt tüketimini yükseltir. Orta seviye ayar yeterli konfor sağlar.",
        ],
      },
      {
        id: "bakim-lastik",
        heading: "Lastik Basıncı ve Araç Bakımı",
        level: 2,
        paragraphs: [
          "Düşük lastik basıncı sürüş güvenliğini ve yakıt verimliliğini olumsuz etkiler. Düzenli basınç kontrolü yapın.",
          "Gereksiz ağırlık taşımak (bagajda unutulan eşyalar) tüketimi artırır; sadece ihtiyacınız olanı yanınıza alın.",
        ],
      },
    ],
  },
  {
    id: "10",
    slug: "hafta-sonu-kacamaklari-ideal-arac-secimi",
    title: "Hafta Sonu Kaçamakları İçin En Uygun Araç Seçimi",
    excerpt:
      "Kısa tatiller ve hafta sonu gezileri için ideal araç önerileri.",
    categoryId: "seyahat",
    image: blogCoverImages.weekendGetaway,
    imageAlt: "Hafta sonu kaçamağı için kiralık araç anahtarlarını alan çift",
    readTimeMinutes: 6,
    publishedAt: "18 Şubat 2026",
    publishedAtISO: "2026-02-18",
    updatedAtISO: "2026-02-20",
    author: BLOG_AUTHOR,
    metaTitle: "Hafta Sonu Kaçamakları İçin Araç Seçimi | Velora Rent",
    metaDescription:
      "Hafta sonu tatili için ideal kiralık araç önerileri. SUV, sedan ve hatchback karşılaştırması.",
    tags: ["hafta sonu tatili", "kaçamak", "seyahat", "araç önerisi"],
    sections: [
      {
        id: "planlama",
        heading: "Hafta Sonu Planlaması ve Araç İhtiyacı",
        level: 2,
        paragraphs: [
          "Kaç kişi seyahat edecek, ne kadar bagajınız olacak ve rotanız şehir mi kırsal mı? Bu üç soru araç seçiminin temelini oluşturur.",
          "2-3 kişilik kısa kaçamaklar için hatchback yeterli olurken, 4-5 kişilik aile gezilerinde sedan veya SUV daha konforlu olur.",
        ],
      },
      {
        id: "oneriler",
        heading: "Mesafeye Göre Araç Önerileri",
        level: 2,
        paragraphs: [
          "100 km altı şehir çevresi gezileri için ekonomik hatchback modeller idealdir. Renault Clio ve Hyundai i20 bu senaryoda öne çıkar.",
          "200 km üzeri uzun hafta sonu rotalarında Volkswagen Passat veya BMW 3 Series gibi sedanlar konfor ve bagaj kapasitesi sunar.",
        ],
      },
      {
        id: "rezervasyon",
        heading: "Erken Rezervasyon ile Avantajlı Kaçamak",
        level: 2,
        paragraphs: [
          "Hafta sonları araç talebi artar; Cuma öncesi rezervasyon yaparak hem fiyat hem araç seçeneği açısından avantaj elde edersiniz.",
          "Velora Rent ile online veya WhatsApp üzerinden hızlıca rezervasyon yapabilir, hafta sonu kaçamağınıza premium bir araçla başlayabilirsiniz.",
        ],
      },
    ],
  },
];
