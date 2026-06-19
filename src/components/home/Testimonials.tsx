"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cardInteractive, iconSm, section } from "@/lib/styles";

export function Testimonials() {
  return (
    <section className={section} aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          badge="Müşteri Yorumları"
          title="Mutlu Müşterilerimiz Ne Diyor?"
          description="Binlerce müşterimizin güvenini kazandık. İşte onların deneyimleri."
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`${cardInteractive} relative p-6 md:p-8`}
              cite={`${testimonial.name}, ${testimonial.role}`}
            >
              <Quote
                className="absolute right-6 top-6 size-8 text-foreground/[0.06]"
                aria-hidden="true"
              />

              <div className="mb-4 flex gap-0.5" aria-label={`${testimonial.rating} yıldız`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`${iconSm} ${
                      i < testimonial.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-border"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mb-6 text-body text-muted">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              <footer className="flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full bg-dark text-caption font-bold text-white"
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="text-small font-semibold not-italic text-foreground">
                    {testimonial.name}
                  </cite>
                  <p className="text-caption text-muted">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
