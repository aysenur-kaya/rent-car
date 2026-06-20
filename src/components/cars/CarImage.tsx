"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [imageSrc, setImageSrc] = useState(resolveCarImage(src));

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
        if (imageSrc !== DEFAULT_CAR_IMAGE) {
          setImageSrc(DEFAULT_CAR_IMAGE);
        }
      }}
    />
  );
}
