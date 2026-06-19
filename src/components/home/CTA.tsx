"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { iconMd, section } from "@/lib/styles";

export function CTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Merhaba, araç kiralamak istiyorum.")}`;
  const phoneUrl = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <section className={section} aria-labelledby="cta-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl bg-dark px-6 py-14 text-center sm:px-12 md:py-16"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.14),transparent_60%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 id="cta-heading" className="text-h2 text-white">
              Hayalinizdeki Aracı{" "}
              <span className="text-white/85">Dakikalar İçinde</span> Kiralayın
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-body-lg text-white/55">
              Hemen iletişime geçin, size en uygun aracı birlikte seçelim.
              7/24 hizmetinizdeyiz.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={whatsappUrl} external variant="whatsapp" size="lg">
                <MessageCircle className={iconMd} aria-hidden="true" />
                WhatsApp ile İletişim
              </Button>
              <Button
                href={phoneUrl}
                variant="outline"
                size="lg"
                className="border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/10"
              >
                <Phone className={iconMd} aria-hidden="true" />
                Telefonla Ara
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
