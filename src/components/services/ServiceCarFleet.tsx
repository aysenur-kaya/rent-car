import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { section, iconSm } from "@/lib/styles";
import { ArrowRight } from "lucide-react";

interface ServiceCarFleetProps {
  serviceName: string;
  categoryFilter?: string;
  limit?: number;
}

export function ServiceCarFleet({
  serviceName,
  categoryFilter,
  limit = 6,
}: ServiceCarFleetProps) {
  const filtered = categoryFilter
    ? cars.filter((car) => car.category === categoryFilter)
    : cars;

  const displayCars = filtered.slice(0, limit);

  if (displayCars.length === 0) {
    return null;
  }

  return (
    <section className={section} aria-labelledby="service-fleet-heading">
      <Container>
        <SectionHeading
          id="service-fleet-heading"
          badge="Uygun Araçlar"
          title={`${serviceName} İçin Önerilen Araçlar`}
          description="İhtiyacınıza uygun bakımlı ve sigortalı araçlarımızı inceleyin."
          align="left"
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {displayCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center md:mt-12">
          <Button href="/araclar" variant="secondary" size="lg" className="!w-auto">
            Tüm Araçları Görüntüle
            <ArrowRight className={iconSm} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
