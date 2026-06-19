"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Shield,
  Car,
  Zap,
  BadgePercent,
  MousePointerClick,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUsItems } from "@/data/services";
import { cardDarkInteractive, iconLg, section } from "@/lib/styles";

const iconMap = {
  headphones: Headphones,
  shield: Shield,
  car: Car,
  zap: Zap,
  "badge-percent": BadgePercent,
  "mouse-pointer-click": MousePointerClick,
};

export function WhyUs() {
  return (
    <section className={`bg-dark ${section}`} aria-labelledby="why-us-heading">
      <Container>
        <SectionHeading
          id="why-us-heading"
          badge="Neden Biz?"
          title="Fark Yaratan Hizmet Anlayışımız"
          description="Müşteri memnuniyetini ön planda tutarak, her detayda kalite sunuyoruz."
          dark
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyUsItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`${cardDarkInteractive} group p-6`}
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className={iconLg} aria-hidden="true" />
                </div>
                <h3 className="text-h3 mb-2 text-white">{item.title}</h3>
                <p className="text-small leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
