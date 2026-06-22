"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DEFAULT_CAR_IMAGE, resolveCarImage } from "@/data/cars/images";
import { cn } from "@/lib/utils";

interface CarImageProps {
  src?: string | null;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
}

export function CarImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
}: CarImageProps) {
  const resolvedSrc = resolveCarImage(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [resolvedSrc]);

  const imageSrc = hasError ? DEFAULT_CAR_IMAGE : resolvedSrc;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn("object-cover", className)}
      sizes={sizes}
      onError={() => {
        if (resolvedSrc !== DEFAULT_CAR_IMAGE) {
          setHasError(true);
        }
      }}
    />
  );
}
