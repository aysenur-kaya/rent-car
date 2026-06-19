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
import { ReservationForm } from "@/components/cars/ReservationForm";
import { SimilarCars } from "@/components/cars/SimilarCars";
import { JsonLd } from "@/components/seo/JsonLd";
import { cars, getCarBySlug } from "@/data/cars";
import {
  buildPageMetadata,
  breadcrumbSchema,
  carRentalProductSchema,
} from "@/lib/seo";
import { cardInteractive, iconMd, iconSm, section } from "@/lib/styles";
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

  const specs = [
    { icon: Fuel, label: "Yakıt", value: car.fuelType },
    { icon: Settings2, label: "Vites", value: car.transmission },
    { icon: Users, label: "Kapasite", value: `${car.passengers} Kişi` },
    { icon: Briefcase, label: "Bagaj", value: `${car.luggage} Bavul` },
    { icon: Snowflake, label: "Klima", value: car.hasAC ? "Var" : "Yok" },
    { icon: Shield, label: "Sigorta", value: car.insurance },
  ];

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Araçlar", path: "/araclar" },
    { name: car.name, path: `/araclar/${car.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          carRentalProductSchema(car),
        ]}
      />

      <section className="bg-dark pb-6 pt-28 md:pb-8 md:pt-32">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-small text-white/50">
              {breadcrumbs.map((item, i) => (
                <li key={item.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={item.path} className="transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white/80" aria-current="page">
                      {item.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>

      <section className={cn(section, "pt-0")}>
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-3">
              <CarGallery images={car.images} alt={car.name} />

              <header className="mt-8">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="badge-light">{car.category}</span>
                  <span className="text-small text-muted">
                    {car.brand} {car.model}
                  </span>
                </div>
                <h1 className="text-h1 text-foreground">{car.name}</h1>
                <p className="mt-4 max-w-prose text-body text-muted">
                  {car.description}
                </p>
              </header>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className={cn(cardInteractive, "flex items-center gap-3 p-4 hover:translate-y-0")}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-foreground">
                      <Icon className={iconMd} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-caption text-muted">{label}</p>
                      <p className="text-small font-semibold text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-h2 mb-4 text-foreground">Donanım ve Özellikler</h2>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {car.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-body text-muted">
                      <Check className={`${iconSm} shrink-0 text-foreground/40`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-[5.5rem] space-y-4">
                <div className={cn(cardInteractive, "p-6 hover:translate-y-0")}>
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

      <SimilarCars currentSlug={car.slug} />
    </>
  );
}
