"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cardInteractive, iconSm, inputBase } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { Car } from "@/types";

interface ReservationFormProps {
  car: Car;
}

export function ReservationForm({ car }: ReservationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Merhaba, ${car.name} aracını kiralamak istiyorum.`
  )}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      id="rezervasyon"
      className={cn(cardInteractive, "p-6 hover:translate-y-0")}
    >
      <h2 className="text-h3 text-foreground">Rezervasyon Yap</h2>
      <p className="mt-1 text-small text-muted">
        {car.name} için rezervasyon formunu doldurun.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-8 text-center"
          role="status"
        >
          <CheckCircle className="mb-3 size-12 text-accent" aria-hidden="true" />
          <p className="font-semibold text-foreground">Talebiniz alındı!</p>
          <p className="mt-1 text-small text-muted">En kısa sürede dönüş yapacağız.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
          <div className="space-y-2">
            <label htmlFor="res-name" className="text-small font-medium text-foreground">
              Ad Soyad
            </label>
            <input
              id="res-name"
              type="text"
              required
              placeholder="Adınız Soyadınız"
              className={inputBase}
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="res-phone" className="text-small font-medium text-foreground">
              Telefon
            </label>
            <input
              id="res-phone"
              type="tel"
              required
              placeholder="+90 5XX XXX XX XX"
              className={inputBase}
              autoComplete="tel"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="res-pickup" className="flex items-center gap-2 text-small font-medium text-foreground">
              <MapPin className={iconSm} aria-hidden="true" />
              Alış Lokasyonu
            </label>
            <select id="res-pickup" required className={inputBase}>
              <option value="">Seçiniz</option>
              <option value="ist">İstanbul Havalimanı</option>
              <option value="saw">Sabiha Gökçen</option>
              <option value="city">Şehir Merkezi</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label htmlFor="res-start" className="flex items-center gap-2 text-small font-medium text-foreground">
                <Calendar className={iconSm} aria-hidden="true" />
                Alış
              </label>
              <input id="res-start" type="date" required className={inputBase} />
            </div>
            <div className="space-y-2">
              <label htmlFor="res-end" className="text-small font-medium text-foreground">
                Teslim
              </label>
              <input id="res-end" type="date" required className={inputBase} />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Send className={iconSm} aria-hidden="true" />
            Rezervasyon Gönder
          </Button>

          <Button href={whatsappUrl} external variant="whatsapp" className="w-full" size="lg">
            <MessageCircle className={iconSm} aria-hidden="true" />
            WhatsApp ile Rezervasyon
          </Button>
        </form>
      )}
    </div>
  );
}
