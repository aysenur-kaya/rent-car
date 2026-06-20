export interface CarSeoSection {
  paragraphs: string[];
}

export interface CarSeoFaq {
  id: string;
  question: string;
  answer: string;
}

export interface CarSeoContent {
  carSlug: string;
  whoIsItFor: CarSeoSection;
  istanbulRental: CarSeoSection;
  fuelAndScenarios: CarSeoSection;
  segmentComparison: CarSeoSection;
  rentalTerms: CarSeoSection;
  deliveryAreas: CarSeoSection;
  faqs: CarSeoFaq[];
}
