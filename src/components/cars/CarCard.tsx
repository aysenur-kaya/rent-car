"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Fuel,
  Settings2,
  Users,
  Briefcase,
  Snowflake,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cardInteractive, cardDarkGlass, iconSm } from "@/lib/styles";
import { formatPrice, cn } from "@/lib/utils";
import type { Car } from "@/types";

interface CarCardProps {
  car: Car;
  index?: number;
  variant?: "light" | "dark";
}

const specs = (car: Car) => [
  { icon: Settings2, label: car.transmission },
  { icon: Fuel, label: car.fuelType },
  { icon: Users, label: `${car.passengers} Kişi` },
  { icon: Briefcase, label: `${car.luggage} Bavul` },
  ...(car.hasAC ? [{ icon: Snowflake, label: "Klima" }] : []),
];

export function CarCard({ car, index = 0, variant = "light" }: CarCardProps) {
  const isDark = variant === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        isDark ? cardDarkGlass : cardInteractive,
        "group overflow-hidden"
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden",
          isDark ? "bg-surface-dark" : "bg-background"
        )}
      >
        <Image
          src={car.image}
          alt={`${car.name} - ${car.brand} kiralık araç`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={cn(
            "absolute left-3 top-3 rounded-lg px-2.5 py-1 text-caption font-semibold backdrop-blur-sm",
            isDark
              ? "border border-border-on-dark bg-hero-bg/80 text-white"
              : "bg-dark/75 text-white"
          )}
        >
          {car.category}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={cn(
                "text-h3 truncate",
                isDark ? "text-white" : "text-foreground"
              )}
            >
              {car.name}
            </h3>
            <p className={cn("text-small", isDark ? "text-text-muted-dark" : "text-muted")}>
              {car.brand} {car.model}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p
              className={cn(
                "text-lg font-bold tracking-tight",
                isDark ? "text-white" : "text-foreground"
              )}
            >
              {formatPrice(car.dailyPrice)}
            </p>
            <p className={cn("text-caption", isDark ? "text-text-muted-dark" : "text-muted")}>
              / gün
            </p>
          </div>
        </div>

        <ul className="mb-5 flex flex-wrap gap-2" aria-label="Araç özellikleri">
          {specs(car).map(({ icon: Icon, label }) => (
            <li
              key={label}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-caption",
                isDark
                  ? "border border-border-on-dark bg-white/[0.04] text-text-muted-dark"
                  : "bg-background text-muted"
              )}
            >
              <Icon className={iconSm} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Button
            href={`/araclar/${car.slug}`}
            variant={isDark ? "glass" : "outline"}
            size="sm"
            className="flex-1 !w-auto !min-h-0 rounded-xl"
          >
            Detay
          </Button>
          <Button
            href={`/araclar/${car.slug}#rezervasyon`}
            size="sm"
            className="flex-1 !w-auto !min-h-0 rounded-xl"
          >
            Rezervasyon
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
