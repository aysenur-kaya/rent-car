export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  dailyPrice: number;
  fuelType: string;
  transmission: string;
  passengers: number;
  luggage: number;
  hasAC: boolean;
  insurance: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  brandPrimary: string;
  brandAccent: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}
