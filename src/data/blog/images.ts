export const BLOG_DEFAULT_COVER = "/images/blog/default-blog-cover.jpg";

export const blogCoverImages = {
  carRentalTips: "/images/blog/car-rental-tips.jpg",
  longTripChecklist: "/images/blog/long-trip-checklist.jpg",
  budgetRentalTips: "/images/blog/budget-rental-tips.jpg",
  cityDrivingGuide: "/images/blog/city-driving-guide.jpg",
  airportCarRental: "/images/blog/airport-car-rental.jpg",
  insuranceKasko: "/images/blog/insurance-kasko.jpg",
  rentalPeriods: "/images/blog/rental-periods.jpg",
  carPickupChecklist: "/images/blog/car-pickup-checklist.jpg",
  fuelSavingDriving: "/images/blog/fuel-saving-driving.jpg",
  weekendGetaway: "/images/blog/weekend-getaway.jpg",
} as const;

export function resolveBlogCoverImage(image?: string | null): string {
  if (image && image.trim().length > 0) {
    return image;
  }

  return BLOG_DEFAULT_COVER;
}
