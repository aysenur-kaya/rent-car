"use client";

import Image from "next/image";
import { useState } from "react";
import { BLOG_DEFAULT_COVER, resolveBlogCoverImage } from "@/data/blog/images";
import { cn } from "@/lib/utils";

interface BlogCoverImageProps {
  src?: string | null;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
}

export function BlogCoverImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
}: BlogCoverImageProps) {
  const [imageSrc, setImageSrc] = useState(resolveBlogCoverImage(src));

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
        if (imageSrc !== BLOG_DEFAULT_COVER) {
          setImageSrc(BLOG_DEFAULT_COVER);
        }
      }}
    />
  );
}
