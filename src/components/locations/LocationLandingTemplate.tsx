import Link from "next/link";
import { MessageCircle, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { CarFleet } from "@/components/home/CarFleet";
import { WhyUs } from "@/components/home/WhyUs";
import { CTA } from "@/components/home/CTA";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cardInteractive, iconMd, iconSm, section } from "@/lib/styles";
import type { LocationPage } from "@/types/location";
import { cn } from "@/lib/utils";

interface LocationLandingTemplateProps {
  location: LocationPage;
}

export function LocationLandingTemplate({
  location,
}: LocationLandingTemplateProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Merhaba, ${location.name} hizmeti hakkında bilgi almak istiyorum.`
  )}`;

  return (
    <>
      <PageHeader
        badge={location.badge}
        title={location.h1}
        description={location.intro}
      />

      <section className="border-b border-border bg-surface py-8 md:py-10">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-small text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground" aria-current="page">
                {location.name}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/#rezervasyon" variant="gradient" size="lg" className="sm:min-w-[220px]">
              Hızlı Rezervasyon
              <ArrowRight className={iconMd} aria-hidden="true" />
            </Button>
            <Button href={whatsappUrl} external variant="whatsapp" size="lg" className="sm:min-w-[220px]">
              <MessageCircle className={iconMd} aria-hidden="true" />
              WhatsApp ile Rezervasyon
            </Button>
          </div>
        </Container>
      </section>

      <CarFleet limit={6} featured showViewAll />

      <WhyUs />

      <section className={section} aria-labelledby={`${location.slug}-advantages`}>
        <Container>
          <div className="mb-8 max-w-2xl">
            <span className="badge-light mb-3">{location.areaServed}</span>
            <h2
              id={`${location.slug}-advantages`}
              className="text-h2 text-foreground"
            >
              {location.name} Avantajları
            </h2>
            <p className="mt-3 text-body text-muted">
              {location.areaServed} bölgesinde Velora Rent ile sunduğumuz
              hizmet avantajları.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {location.advantages.map((advantage) => (
              <article
                key={advantage.title}
                className={cn(cardInteractive, "p-6 hover:translate-y-0")}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                  <MapPin className={iconSm} aria-hidden="true" />
                </div>
                <h3 className="text-h3 text-foreground">{advantage.title}</h3>
                <p className="mt-2 text-body text-muted">{advantage.description}</p>
              </article>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Tam Kasko Dahil",
              "7/24 Destek",
              "Şeffaf Fiyatlandırma",
              "Hızlı Teslimat",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-small font-medium text-foreground"
              >
                <CheckCircle2 className={`${iconSm} shrink-0 text-accent`} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={cn(section, "bg-background")} aria-labelledby={`${location.slug}-faq`}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <span className="badge-light mb-3">SSS</span>
              <h2 id={`${location.slug}-faq`} className="text-h2 text-foreground">
                {location.name} Hakkında Sık Sorulan Sorular
              </h2>
            </div>
            <Accordion items={location.faqs} />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
