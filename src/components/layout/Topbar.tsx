"use client";

import Link from "next/link";
import { Car, Headphones, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const topbarHighlights = [
  { icon: Car, label: "İstanbul Havalimanı Teslim" },
  { icon: Headphones, label: "7/24 Destek" },
  { icon: ShieldCheck, label: "Ücretsiz İptal" },
] as const;

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Merhaba, bilgi almak istiyorum.")}`;

const iconClass =
  "size-3.5 shrink-0 text-white/85 transition-colors duration-200 group-hover:text-white";
const dotClass = "size-1 shrink-0 rounded-full bg-white/50";

const linkClass =
  "group inline-flex items-center gap-1.5 text-white transition-colors duration-200 hover:text-white/90";

export function Topbar() {
  return (
    <div
      className="relative overflow-hidden border-b border-[#DC2626]/50 bg-[linear-gradient(90deg,#EF4444_0%,#DC2626_50%,#EF4444_100%)] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.35)]"
      aria-label="Üst bilgi çubuğu"
    >
      <Container className="relative">
        <div className="flex h-9 items-center justify-between gap-3 text-[0.8125rem] leading-none md:text-sm">
          <a
            href={`tel:${siteConfig.mobilePhone.replace(/\s/g, "")}`}
            className={cn(linkClass, "shrink-0")}
          >
            <Phone className={iconClass} aria-hidden="true" />
            <span className="whitespace-nowrap">{siteConfig.mobilePhone}</span>
          </a>

          <ul
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex"
            role="list"
          >
            {topbarHighlights.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && <span className={dotClass} aria-hidden="true" />}
                <span className="inline-flex items-center gap-1.5 text-white">
                  <item.icon className={iconClass} aria-hidden="true" />
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-white transition-colors duration-200 hover:text-[#25D366]"
            >
              <MessageCircle
                className="size-3.5 shrink-0 text-white/85 transition-colors duration-200 group-hover:text-[#25D366]"
                aria-hidden="true"
              />
              <span>WhatsApp</span>
            </a>

            <div
              className="hidden items-center gap-1.5 text-[0.8125rem] md:flex"
              role="group"
              aria-label="Dil seçimi"
            >
              <button
                type="button"
                className="font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                aria-current="true"
              >
                TR
              </button>
              <span className="text-white/35" aria-hidden="true">
                |
              </span>
              <Link
                href="#"
                className="text-white/70 transition-colors duration-200 hover:text-white"
                aria-label="English"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
