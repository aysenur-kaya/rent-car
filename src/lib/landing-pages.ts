import { getAllLocationSlugs, getLocationBySlug } from "@/data/locations";
import { getAllServiceSlugs, getServicePageBySlug } from "@/data/service-pages";
import type { LocationPage } from "@/types/location";
import type { ServicePage } from "@/types/service-page";

export type LandingPage =
  | { type: "location"; data: LocationPage }
  | { type: "service"; data: ServicePage };

export function resolveLandingPage(slug: string): LandingPage | null {
  const location = getLocationBySlug(slug);
  if (location) {
    return { type: "location", data: location };
  }

  const service = getServicePageBySlug(slug);
  if (service) {
    return { type: "service", data: service };
  }

  return null;
}

export function getAllLandingSlugs(): string[] {
  return [...getAllLocationSlugs(), ...getAllServiceSlugs()];
}
