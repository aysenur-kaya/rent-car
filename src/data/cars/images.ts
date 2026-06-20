export const DEFAULT_CAR_IMAGE = "/images/cars/default-car.jpg";

export function resolveCarImage(image?: string | null): string {
  if (image && image.trim().length > 0) {
    return image;
  }

  return DEFAULT_CAR_IMAGE;
}

export function resolveCarImages(images?: string[] | null, fallback?: string): string[] {
  const primary = resolveCarImage(fallback);
  const resolved = (images ?? [])
    .map((image) => resolveCarImage(image))
    .filter(Boolean);

  if (resolved.length === 0) {
    return [primary];
  }

  return resolved;
}
