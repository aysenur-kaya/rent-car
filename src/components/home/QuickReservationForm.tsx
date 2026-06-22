"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Car, Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { carCategories } from "@/data/site";
import { iconSm, inputBase } from "@/lib/styles";

const labelClass =
  "flex items-center gap-2 text-small font-medium text-foreground";

export function QuickReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="rezervasyon"
      className="relative overflow-hidden bg-background pb-16 pt-8 md:pb-20 md:pt-12 lg:pt-16 xl:pt-[4.5rem]"
      aria-labelledby="quick-reservation-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-hero-bg via-hero-bg/55 to-background md:h-56 lg:h-64"
        aria-hidden="true"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.14),0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-md sm:p-8 lg:p-10"
        >
          <div className="mb-6 md:mb-8">
            <h2 id="quick-reservation-heading" className="text-h2 text-foreground">
              Hızlı Rezervasyon
            </h2>
            <p className="mt-2 text-body text-muted">
              Birkaç adımda aracınızı rezerve edin, dakikalar içinde onay alın.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10 text-center md:py-12"
              role="status"
            >
              <CheckCircle className="mb-4 size-14 text-accent" aria-hidden="true" />
              <h3 className="text-h3 text-foreground">Talebiniz Alındı!</h3>
              <p className="mt-2 text-body text-muted">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" noValidate>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <label htmlFor="pickup-location" className={labelClass}>
                    <MapPin className={iconSm} aria-hidden="true" />
                    Alış Lokasyonu
                  </label>
                  <select id="pickup-location" required className={inputBase}>
                    <option value="">Seçiniz</option>
                    <option value="ist-airport">İstanbul Havalimanı</option>
                    <option value="saw-airport">Sabiha Gökçen Havalimanı</option>
                    <option value="city">Şehir Merkezi</option>
                    <option value="hotel">Otel Teslim</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="dropoff-location" className={labelClass}>
                    <MapPin className={iconSm} aria-hidden="true" />
                    Teslim Lokasyonu
                  </label>
                  <select id="dropoff-location" required className={inputBase}>
                    <option value="">Seçiniz</option>
                    <option value="ist-airport">İstanbul Havalimanı</option>
                    <option value="saw-airport">Sabiha Gökçen Havalimanı</option>
                    <option value="city">Şehir Merkezi</option>
                    <option value="hotel">Otel Teslim</option>
                  </select>
                </div>

                <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                  <label htmlFor="car-type" className={labelClass}>
                    <Car className={iconSm} aria-hidden="true" />
                    Araç Türü
                  </label>
                  <select id="car-type" required className={inputBase}>
                    <option value="">Seçiniz</option>
                    {carCategories.slice(1).map((cat) => (
                      <option key={cat} value={cat.toLowerCase()}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pickup-date" className={labelClass}>
                    <Calendar className={iconSm} aria-hidden="true" />
                    Alış Tarihi
                  </label>
                  <input type="date" id="pickup-date" required className={inputBase} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="dropoff-date" className={labelClass}>
                    <Calendar className={iconSm} aria-hidden="true" />
                    Teslim Tarihi
                  </label>
                  <input type="date" id="dropoff-date" required className={inputBase} />
                </div>

                <div className="flex items-end sm:col-span-2 lg:col-span-1">
                  <Button type="submit" size="lg" className="w-full">
                    <Send className={iconSm} aria-hidden="true" />
                    Rezervasyon Gönder
                  </Button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
