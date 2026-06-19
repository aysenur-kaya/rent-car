"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cardInteractive, iconMd, iconSm, inputBase, section } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Merhaba, bilgi almak istiyorum.")}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "E-posta",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: "Adres",
      value: siteConfig.address,
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: siteConfig.workingHours,
    },
  ];

  return (
    <section className={section}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={cn(cardInteractive, "flex items-start gap-4 p-5 hover:translate-y-0")}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-foreground">
                  <info.icon className={iconMd} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-h3 text-foreground">{info.title}</h2>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block text-small text-muted transition-colors hover:text-foreground"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-small text-muted">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              <Button href={whatsappUrl} external variant="whatsapp" className="flex-1">
                <MessageCircle className={iconSm} aria-hidden="true" />
                WhatsApp
              </Button>
              <Button
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                variant="secondary"
                className="flex-1"
              >
                <Phone className={iconSm} aria-hidden="true" />
                Ara
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className={cn(cardInteractive, "p-6 sm:p-8 hover:translate-y-0")}>
              <h2 className="text-h2 mb-6 text-foreground">Mesaj Gönderin</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                  role="status"
                >
                  <CheckCircle className="mb-4 size-14 text-accent" aria-hidden="true" />
                  <h3 className="text-h3 text-foreground">Mesajınız Gönderildi!</h3>
                  <p className="mt-2 text-body text-muted">
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-small font-medium text-foreground">
                        Ad Soyad
                      </label>
                      <input id="name" type="text" required className={inputBase} autoComplete="name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-small font-medium text-foreground">
                        E-posta
                      </label>
                      <input id="email" type="email" required className={inputBase} autoComplete="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-small font-medium text-foreground">
                      Telefon
                    </label>
                    <input id="phone" type="tel" required className={inputBase} autoComplete="tel" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-small font-medium text-foreground">
                      Konu
                    </label>
                    <select id="subject" required className={inputBase}>
                      <option value="">Seçiniz</option>
                      <option value="reservation">Rezervasyon</option>
                      <option value="info">Bilgi Talebi</option>
                      <option value="corporate">Kurumsal Kiralama</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-small font-medium text-foreground">
                      Mesajınız
                    </label>
                    <textarea id="message" rows={5} required className={cn(inputBase, "resize-none")} />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className={iconSm} aria-hidden="true" />
                    Mesaj Gönder
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
