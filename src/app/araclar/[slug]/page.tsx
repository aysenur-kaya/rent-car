import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Fuel,
  Settings2,
  Users,
  Briefcase,
  Snowflake,
  Shield,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CarGallery } from "@/components/cars/CarGallery";
import { CarSeoSections } from "@/components/cars/CarSeoSections";
import { ReservationForm } from "@/components/cars/ReservationForm";
import { SimilarCars } from "@/components/cars/SimilarCars";
import { JsonLd } from "@/components/seo/JsonLd";
import { cars, getCarBySlug } from "@/data/cars";
import { getCarSeoContent } from "@/data/cars/seo-content";
import {
  breadcrumbSchema,
  buildPageMetadata,
  carRentalProductSchema,
  faqPageSchema,
} from "@/lib/seo";
import { cardInteractive, iconMd, iconSm } from "@/lib/styles";
import { formatPrice, cn } from "@/lib/utils";

interface CarDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return { title: "Araç Bulunamadı", robots: { index: false } };
  }

  return buildPageMetadata({
    title: `${car.name} Kiralama`,
    description: `${car.name} günlük ${formatPrice(car.dailyPrice)} fiyatla kiralayın. ${car.transmission}, ${car.fuelType}, ${car.passengers} kişilik. Tam kasko dahil.`,
    path: `/araclar/${car.slug}`,
    image: car.image,
  });
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const seoContent = getCarSeoContent(car.slug);

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Araçlar", path: "/araclar" },
    { name: car.name, path: `/araclar/${car.slug}` },
  ];

  const specs = [
    { icon: Fuel, label: "Yakıt", value: car.fuelType },
    { icon: Settings2, label: "Vites", value: car.transmission },
    { icon: Users, label: "Kapasite", value: `${car.passengers} Kişi` },
    { icon: Briefcase, label: "Bagaj", value: `${car.luggage} Bavul` },
    { icon: Snowflake, label: "Klima", value: car.hasAC ? "Var" : "Yok" },
    { icon: Shield, label: "Sigorta", value: car.insurance },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          carRentalProductSchema(car),
          ...(seoContent ? [faqPageSchema(seoContent.faqs)] : []),
        ]}
      />

      <section className="bg-background pb-12 pt-[calc(4.25rem+1.25rem+env(safe-area-inset-top,0px))] md:pb-16 md:pt-[calc(5rem+2rem+env(safe-area-inset-top,0px))]">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-muted">
              {breadcrumbs.map((item, index) => (
                <li key={item.path} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-border-strong" aria-hidden="true">
                      /
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 ? (
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground" aria-current="page">
                      {item.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10">
            <div className="min-w-0 space-y-8">
              <CarGallery
                images={car.images}
                alt={car.name}
                fallbackImage={car.image}
              />

              <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-light">{car.category}</span>
                  <span className="text-small text-muted">
                    {car.brand} {car.model}
                  </span>
                </div>
                <h1 className="text-[clamp(1.75rem,5.5vw,2.75rem)] font-bold leading-tight tracking-tight text-foreground lg:text-h1">
                  {car.name}
                </h1>
                <p className="max-w-prose text-body leading-relaxed text-muted">
                  {car.description}
                </p>
              </header>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className={cn(
                      cardInteractive,
                      "flex min-w-0 items-center gap-3 p-4 hover:translate-y-0"
                    )}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-foreground">
                      <Icon className={iconMd} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-caption text-muted">{label}</p>
                      <p className="truncate text-small font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-h2 mb-4 text-foreground">
                  Donanım ve Özellikler
                </h2>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {car.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-body text-muted"
                    >
                      <Check
                        className={`${iconSm} mt-0.5 shrink-0 text-accent`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-4">
                <div
                  className={cn(
                    cardInteractive,
                    "p-5 hover:translate-y-0 sm:p-6"
                  )}
                >
                  <p className="text-small text-muted">Günlük Kiralama</p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                    {formatPrice(car.dailyPrice)}
                    <span className="text-body font-normal text-muted"> / gün</span>
                  </p>
                </div>
                <ReservationForm car={car} />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {seoContent && <CarSeoSections car={car} content={seoContent} />}

      <SimilarCars currentSlug={car.slug} />
    </>
  );
}
