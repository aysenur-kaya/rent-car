import type { NavLink, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Velora Rent",
  brandPrimary: "Velora",
  brandAccent: "Rent",
  tagline: "Premium Araç Kiralama Deneyimi",
  description:
    "Türkiye'nin önde gelen premium araç kiralama firması. Yeni model araçlar, 7/24 destek ve uygun fiyat garantisi ile hizmetinizdeyiz.",
  phone: "+90 212 555 00 00",
  mobilePhone: "+90 532 555 00 00",
  whatsapp: "+902125550000",
  email: "info@velorarent.com",
  address: "Atatürk Havalimanı Terminal Binası, İstanbul",
  workingHours: "7/24 Açık",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};

export const heroFloatingCards = [
  "Tam Kasko",
  "7/24 Destek",
  "Yeni Filo",
  "Hızlı Teslimat",
];

export const headerNavLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Filomuz", href: "/araclar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Araçlar", href: "/araclar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerCorporate = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Araç Filomuz", href: "/araclar" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Koşulları", href: "#" },
];

export const trustBadges = [
  "1000+ Mutlu Müşteri",
  "Tam Kasko",
  "7/24 Destek",
  "Ücretsiz İptal",
  "Güvenli Ödeme",
  "Premium Hizmet",
];

export const heroStats = [
  { label: "7/24 Destek", icon: "headphones" },
  { label: "Yeni Araç Filosu", icon: "car" },
  { label: "Hızlı Teslimat", icon: "zap" },
  { label: "Uygun Fiyat", icon: "badge-percent" },
];

export const carCategories = [
  "Tümü",
  "Sedan",
  "SUV",
  "Ekonomik",
  "Lüks",
  "Hatchback",
];
