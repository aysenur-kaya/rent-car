export interface LocationAdvantage {
  title: string;
  description: string;
}

export interface LocationFaq {
  id: string;
  question: string;
  answer: string;
}

export interface LocationPage {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  areaServed: string;
  addressLocality: string;
  advantages: LocationAdvantage[];
  faqs: LocationFaq[];
}
