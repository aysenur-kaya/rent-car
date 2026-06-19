import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { section, iconSm } from "@/lib/styles";
import { ArrowRight } from "lucide-react";

interface CarFleetProps {
  limit?: number;
  showViewAll?: boolean;
  featured?: boolean;
}

export function CarFleet({
  limit,
  showViewAll = true,
  featured = false,
}: CarFleetProps) {
  const displayCars = limit ? cars.slice(0, limit) : cars;

  return (
    <section
      id="one-cikan-araclar"
      className={`${section} ${featured ? "bg-hero-bg" : ""}`}
      aria-labelledby="fleet-heading"
    >
      <Container>
        <SectionHeading
          id="fleet-heading"
          badge={featured ? "Öne Çıkanlar" : "Araç Filomuz"}
          title={featured ? "Öne Çıkan Araçlarımız" : "Premium Araç Koleksiyonumuz"}
          description={
            featured
              ? "En çok tercih edilen premium modellerimizi keşfedin."
              : "Her bütçeye ve ihtiyaca uygun, bakımlı ve yeni model araçlarımızı keşfedin."
          }
          dark={featured}
          align={featured ? "left" : "center"}
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {displayCars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              index={index}
              variant={featured ? "dark" : "light"}
            />
          ))}
        </div>

        {showViewAll && limit && (
          <div className="mt-10 text-center md:mt-12">
            <Button
              href="/araclar"
              variant={featured ? "primary" : "secondary"}
              size="lg"
              className="!w-auto"
            >
              Tüm Araçları Görüntüle
              <ArrowRight className={iconSm} aria-hidden="true" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
