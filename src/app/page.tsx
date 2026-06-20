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
import { buildPageMetadata, faqPageSchema } from "@/lib/seo";

const HOME_TITLE =
  "İstanbul Araç Kiralama | Günlük, Haftalık ve Aylık Rent A Car | Velora Rent";

const HOME_DESCRIPTION =
  "İstanbul'da günlük, haftalık ve aylık araç kiralama hizmeti. Havalimanı teslim, yeni model araç filosu, uygun fiyatlar, hızlı rezervasyon ve 7/24 müşteri desteği ile güvenilir rent a car deneyimi.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "İstanbul Araç Kiralama | Günlük, Haftalık ve Aylık Rent A Car",
    description: HOME_DESCRIPTION,
    path: "/",
  }),
  title: { absolute: HOME_TITLE },
};

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
