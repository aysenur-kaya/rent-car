import type { Car } from "@/types";

export const cars: Car[] = [
  {
    id: "1",
    slug: "bmw-3-series",
    name: "BMW 3 Series",
    brand: "BMW",
    model: "320i",
    dailyPrice: 2850,
    fuelType: "Benzin",
    transmission: "Otomatik",
    passengers: 5,
    luggage: 3,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Lüks",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
    ],
    description:
      "BMW 3 Series, dinamik sürüş deneyimi ve üstün konforu bir araya getiren premium sedan segmentinin lider modellerinden biridir. İş seyahatleri ve özel günler için ideal tercih.",
    features: [
      "Deri Döşeme",
      "Navigasyon",
      "Bluetooth",
      "Park Sensörü",
      "Cruise Control",
      "LED Farlar",
    ],
  },
  {
    id: "2",
    slug: "mercedes-c-class",
    name: "Mercedes C Class",
    brand: "Mercedes-Benz",
    model: "C200",
    dailyPrice: 2950,
    fuelType: "Benzin",
    transmission: "Otomatik",
    passengers: 5,
    luggage: 3,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Lüks",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    ],
    description:
      "Mercedes-Benz C Class, zarif tasarımı ve ileri teknoloji donanımlarıyla premium segmentin en çok tercih edilen modellerinden biridir. Konfor ve prestij arayanlar için mükemmel seçim.",
    features: [
      "MBUX Multimedya",
      "Deri Döşeme",
      "Panoramik Tavan",
      "Adaptif Cruise",
      "360° Kamera",
      "Ambient Aydınlatma",
    ],
  },
  {
    id: "3",
    slug: "volkswagen-passat",
    name: "Volkswagen Passat",
    brand: "Volkswagen",
    model: "1.5 TSI",
    dailyPrice: 1850,
    fuelType: "Benzin",
    transmission: "Otomatik",
    passengers: 5,
    luggage: 4,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    ],
    description:
      "Volkswagen Passat, geniş iç hacmi ve yakıt verimliliğiyle aileler ve iş seyahatleri için ideal bir sedan. Konforlu yolculuk deneyimi sunar.",
    features: [
      "Geniş Bagaj",
      "Dijital Gösterge",
      "Apple CarPlay",
      "Park Asistanı",
      "Start/Stop",
      "LED Farlar",
    ],
  },
  {
    id: "4",
    slug: "renault-clio",
    name: "Renault Clio",
    brand: "Renault",
    model: "1.0 TCe",
    dailyPrice: 950,
    fuelType: "Benzin",
    transmission: "Manuel",
    passengers: 5,
    luggage: 2,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Ekonomik",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    ],
    description:
      "Renault Clio, şehir içi kullanım için ideal kompakt hatchback. Ekonomik yakıt tüketimi ve kolay park etme özellikleriyle öne çıkar.",
    features: [
      "Kompakt Boyut",
      "Düşük Yakıt",
      "Bluetooth",
      "USB Bağlantı",
      "Klima",
      "ABS/ESP",
    ],
  },
  {
    id: "5",
    slug: "fiat-egea",
    name: "Fiat Egea",
    brand: "Fiat",
    model: "1.4 Fire",
    dailyPrice: 850,
    fuelType: "Benzin",
    transmission: "Manuel",
    passengers: 5,
    luggage: 3,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Ekonomik",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    ],
    description:
      "Fiat Egea, uygun fiyatlı kiralama seçeneği arayanlar için mükemmel bir tercih. Geniş iç mekan ve düşük işletme maliyeti sunar.",
    features: [
      "Geniş İç Mekan",
      "Ekonomik",
      "Klima",
      "Bluetooth",
      "USB",
      "Güvenlik Paketi",
    ],
  },
  {
    id: "6",
    slug: "hyundai-i20",
    name: "Hyundai i20",
    brand: "Hyundai",
    model: "1.2 MPI",
    dailyPrice: 900,
    fuelType: "Benzin",
    transmission: "Manuel",
    passengers: 5,
    luggage: 2,
    hasAC: true,
    insurance: "Tam Kasko Dahil",
    category: "Hatchback",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    ],
    description:
      "Hyundai i20, modern tasarımı ve zengin donanımıyla B segmentinin öne çıkan modellerinden. Şehir içi ve kısa mesafe yolculuklar için ideal.",
    features: [
      "Dokunmatik Ekran",
      "Kamera",
      "Bluetooth",
      "Klima",
      "ABS/ESP",
      "Hız Sabitleyici",
    ],
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function getSimilarCars(currentSlug: string, limit = 3): Car[] {
  const current = getCarBySlug(currentSlug);
  if (!current) return cars.slice(0, limit);
  return cars
    .filter((car) => car.slug !== currentSlug && car.category === current.category)
    .slice(0, limit)
    .concat(
      cars.filter(
        (car) => car.slug !== currentSlug && car.category !== current.category
      )
    )
    .slice(0, limit);
}
