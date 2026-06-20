"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarImage } from "@/components/cars/CarImage";
import { resolveCarImages } from "@/data/cars/images";
import { iconSm } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface CarGalleryProps {
  images: string[];
  alt: string;
  fallbackImage?: string;
}

export function CarGallery({ images, alt, fallbackImage }: CarGalleryProps) {
  const galleryImages = resolveCarImages(images, fallbackImage);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex((index + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="w-full min-w-0 space-y-3 sm:space-y-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)]">
        <CarImage
          src={galleryImages[activeIndex]}
          alt={`${alt} - görsel ${activeIndex + 1}`}
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 sm:left-3 sm:size-10"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className={iconSm} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 sm:right-3 sm:size-10"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className={iconSm} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {galleryImages.length > 1 && (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={`${image}-${index}`}
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border-2 bg-surface transition-all",
                activeIndex === index
                  ? "border-accent shadow-[0_0_0_1px_rgba(239,68,68,0.25)]"
                  : "border-border opacity-75 hover:border-border-strong hover:opacity-100"
              )}
              aria-label={`${alt} görsel ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <CarImage
                src={image}
                alt=""
                sizes="(max-width: 640px) 30vw, 160px"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
