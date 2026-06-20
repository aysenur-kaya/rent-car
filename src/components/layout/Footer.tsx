import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  navLinks,
  siteConfig,
  footerCorporate,
} from "@/data/site";
import { locationPages } from "@/data/locations";
import { servicePages } from "@/data/service-pages";
import { iconSm } from "@/lib/styles";

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.facebook, label: "Facebook" },
  { href: siteConfig.social.twitter, label: "Twitter" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" aria-label="Site alt bilgisi">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${siteConfig.name} ana sayfa`}>
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-white">
                <Car className={iconSm} aria-hidden="true" />
              </div>
              <span className="text-h3 text-white">{siteConfig.name}</span>
            </Link>
            <p className="max-w-sm text-small leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-colors hover:bg-accent hover:text-white"
                >
                  <Share2 className={iconSm} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-caption font-semibold uppercase tracking-wider text-white/40">
              Kurumsal
            </h3>
            <ul className="space-y-2.5">
              {footerCorporate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-small text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-caption font-semibold uppercase tracking-wider text-white/40">
              Hizmetler
            </h3>
            <ul className="space-y-2.5">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-small text-white/55 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-caption font-semibold uppercase tracking-wider text-white/40">
              Lokasyonlar
            </h3>
            <ul className="space-y-2.5">
              {locationPages.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/${location.slug}`}
                    className="text-small text-white/55 transition-colors hover:text-white"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-caption font-semibold uppercase tracking-wider text-white/40">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-small text-white/55 transition-colors hover:text-white"
                >
                  <Phone className={`${iconSm} mt-0.5 text-white/40`} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-small text-white/55 transition-colors hover:text-white"
                >
                  <Mail className={`${iconSm} mt-0.5 text-white/40`} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-small text-white/55">
                <MapPin className={`${iconSm} mt-0.5 text-white/40`} aria-hidden="true" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-2.5 text-small text-white/55">
                <Clock className={`${iconSm} mt-0.5 text-white/40`} aria-hidden="true" />
                {siteConfig.workingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-caption text-white/35">
            © {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <nav aria-label="Yasal bağlantılar" className="flex gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-white/35 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
