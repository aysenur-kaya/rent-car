import type { Metadata } from "next";
import type { Car, FAQ } from "@/types";
import type { BlogPost } from "@/types/blog";
import type { LocationPage } from "@/types/location";
import type { ServicePage } from "@/types/service-page";
import { siteConfig } from "@/data/site";

export const SITE_URL = "https://rent-car-sage-one.vercel.app";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: siteConfig.name,
    url: SITE_URL,
    image: `${SITE_URL}/og-default.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₺₺",
  };
}

export function locationCarRentalSchema(location: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: `${siteConfig.name} - ${location.name}`,
    url: `${SITE_URL}/${location.slug}`,
    image: `${SITE_URL}/og-default.jpg`,
    description: location.metaDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "Place",
      name: location.areaServed,
      address: {
        "@type": "PostalAddress",
        addressLocality: location.addressLocality,
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.addressLocality,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₺₺",
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
  };
}

export function serviceOfferingSchema(service: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/${service.slug}`,
    provider: {
      "@type": "CarRental",
      name: siteConfig.name,
      url: SITE_URL,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    serviceType: "Araç Kiralama",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/araclar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function carRentalProductSchema(car: Car) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    description: car.description,
    image: car.image,
    brand: { "@type": "Brand", name: car.brand },
    offers: {
      "@type": "Offer",
      price: car.dailyPrice,
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/araclar/${car.slug}`,
    },
  };
}

export function faqPageSchema(faqs: Pick<FAQ, "question" | "answer">[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function resolveAbsoluteImageUrl(image: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function articleSchema(post: BlogPost) {
  const imageUrl = resolveAbsoluteImageUrl(post.image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [imageUrl],
    datePublished: post.publishedAtISO,
    dateModified: post.updatedAtISO ?? post.publishedAtISO,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}

export function buildArticleMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = resolveAbsoluteImageUrl(post.image);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      url,
      siteName: siteConfig.name,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAtISO,
      authors: [post.author],
      modifiedTime: post.updatedAtISO ?? post.publishedAtISO,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}
