import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLandingTemplate } from "@/components/locations/LocationLandingTemplate";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllLandingSlugs, resolveLandingPage } from "@/lib/landing-pages";
import {
  breadcrumbSchema,
  buildPageMetadata,
  faqPageSchema,
  locationCarRentalSchema,
  serviceOfferingSchema,
} from "@/lib/seo";

interface LandingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveLandingPage(slug);

  if (!page) {
    return { title: "Sayfa Bulunamadı", robots: { index: false } };
  }

  const { data } = page;

  return buildPageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/${data.slug}`,
  });
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  const page = resolveLandingPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: page.data.name, path: `/${page.data.slug}` },
  ];

  if (page.type === "location") {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema(breadcrumbs),
            locationCarRentalSchema(page.data),
            faqPageSchema(page.data.faqs),
          ]}
        />
        <LocationLandingTemplate location={page.data} />
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceOfferingSchema(page.data),
          faqPageSchema(page.data.faqs),
        ]}
      />
      <ServiceLandingTemplate service={page.data} />
    </>
  );
}
