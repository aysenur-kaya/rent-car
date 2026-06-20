export interface ServiceAdvantage {
  title: string;
  description: string;
}

export interface ServiceFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  advantages: ServiceAdvantage[];
  faqs: ServiceFaq[];
  carCategoryFilter?: string;
}
