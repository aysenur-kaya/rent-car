import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { QuickReservationForm } from "@/components/home/QuickReservationForm";
import { CarFleet } from "@/components/home/CarFleet";
import { WhyUs } from "@/components/home/WhyUs";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { buildPageMetadata, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ana Sayfa",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Hero />
      <CarFleet limit={6} featured />
      <QuickReservationForm />
      <WhyUs />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
