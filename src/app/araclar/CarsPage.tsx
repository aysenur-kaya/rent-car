"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { carCategories } from "@/data/site";
import { section } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function CarsPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredCars =
    activeCategory === "Tümü"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <>
      <PageHeader
        badge="Araç Filomuz"
        title="Tüm Araçlarımız"
        description="Ekonomik sınıftan lüks segmente kadar geniş araç yelpazemizi inceleyin ve size en uygun aracı seçin."
      />

      <section className={section}>
        <Container>
          <div
            className="mb-8 flex flex-wrap gap-2 md:mb-10"
            role="tablist"
            aria-label="Araç kategorileri"
          >
            {carCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-small font-semibold transition-all duration-200",
                  activeCategory === category
                    ? "bg-dark text-white shadow-sm"
                    : "bg-surface text-muted hover:bg-background hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filteredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-body text-muted">Bu kategoride araç bulunamadı.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
