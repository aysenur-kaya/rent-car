"use client";

import { motion } from "framer-motion";
import { Plane, Building, MapPin, Briefcase, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/data/services";
import { cardInteractive, iconLg, section } from "@/lib/styles";

const iconMap = {
  plane: Plane,
  building: Building,
  "map-pin": MapPin,
  briefcase: Briefcase,
  calendar: Calendar,
};

export function ServiceAreas() {
  return (
    <section className={section} aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          badge="Hizmet Bölgeleri"
          title="Size En Yakın Teslimat Noktası"
          description="Havalimanından otele, şehir içinden kurumsal çözümlere kadar geniş hizmet ağımız."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`${cardInteractive} flex flex-col items-center p-6 text-center`}
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-background text-foreground">
                  <Icon className={iconLg} aria-hidden="true" />
                </div>
                <h3 className="text-h3 mb-2 text-foreground">{service.title}</h3>
                <p className="text-small leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
