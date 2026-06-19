import type { Service, WhyUsItem } from "@/types";

export const serviceAreas: Service[] = [
  {
    id: "1",
    title: "Havalimanı Teslim",
    description:
      "İstanbul Havalimanı ve Sabiha Gökçen'de karşılama ve teslim hizmeti.",
    icon: "plane",
  },
  {
    id: "2",
    title: "Otel Teslim",
    description:
      "Konakladığınız otele araç teslimi ve iadesi yapıyoruz.",
    icon: "building",
  },
  {
    id: "3",
    title: "Şehir İçi Teslim",
    description:
      "Belirttiğiniz adrese araç teslimatı ve alım hizmeti.",
    icon: "map-pin",
  },
  {
    id: "4",
    title: "Kurumsal Kiralama",
    description:
      "Şirketlere özel filo kiralama ve uzun dönem çözümler.",
    icon: "briefcase",
  },
  {
    id: "5",
    title: "Günlük / Haftalık / Aylık",
    description:
      "İhtiyacınıza uygun esnek kiralama süreleri ve indirimler.",
    icon: "calendar",
  },
];

export const whyUsItems: WhyUsItem[] = [
  {
    id: "1",
    title: "7/24 Destek",
    description: "Her an ulaşabileceğiniz müşteri hizmetleri ekibimiz.",
    icon: "headphones",
  },
  {
    id: "2",
    title: "Tam Kasko",
    description: "Tüm araçlarımız tam kasko sigortası ile korunmaktadır.",
    icon: "shield",
  },
  {
    id: "3",
    title: "Yeni Araç Filosu",
    description: "Sürekli yenilenen, bakımlı ve temiz araç filomuz.",
    icon: "car",
  },
  {
    id: "4",
    title: "Hızlı Teslimat",
    description: "Rezervasyonunuzdan dakikalar içinde araç teslimi.",
    icon: "zap",
  },
  {
    id: "5",
    title: "Uygun Fiyat Garantisi",
    description: "Şeffaf fiyatlandırma, gizli ücret yok.",
    icon: "badge-percent",
  },
  {
    id: "6",
    title: "Kolay Rezervasyon",
    description: "Online, telefon veya WhatsApp ile hızlı rezervasyon.",
    icon: "mouse-pointer-click",
  },
];
