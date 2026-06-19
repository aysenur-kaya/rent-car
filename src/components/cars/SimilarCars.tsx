import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CarCard } from "@/components/cars/CarCard";
import { getSimilarCars } from "@/data/cars";
import { section } from "@/lib/styles";

interface SimilarCarsProps {
  currentSlug: string;
}

export function SimilarCars({ currentSlug }: SimilarCarsProps) {
  const similarCars = getSimilarCars(currentSlug, 3);

  if (similarCars.length === 0) return null;

  return (
    <section className={`border-t border-border bg-background ${section}`}>
      <Container>
        <SectionHeading
          badge="Benzer Araçlar"
          title="Size Önerebileceğimiz Diğer Araçlar"
          description="Bu araca benzer alternatifleri de inceleyebilirsiniz."
          align="left"
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {similarCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
