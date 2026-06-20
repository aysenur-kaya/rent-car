"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Headphones, Shield, Sparkles, Car } from "lucide-react";

const floatingCards = [
  { icon: Headphones, label: "7/24 Destek" },
  { icon: Shield, label: "Tam Kasko" },
  { icon: Sparkles, label: "Premium Hizmet" },
  { icon: Car, label: "Yeni Araç Filosu" },
];

export function MissionVisionVisual() {
  return (
    <div className="relative min-h-[420px] w-full lg:min-h-[520px]">
      <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl shadow-dark/15 ring-1 ring-black/5">
        <Image
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85"
          alt="Premium Mercedes sedan - Velora Rent araç filosu"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
      </div>

      <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-[280px]">
        <div className="grid grid-cols-2 gap-2.5">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
              className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-3 py-3 shadow-lg shadow-black/10 backdrop-blur-md"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                <card.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <Check className="h-3 w-3 shrink-0 text-accent-light" strokeWidth={3} />
                  <span className="truncate text-xs font-semibold text-white">
                    {card.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-5 top-5 hidden rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:block">
        <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">
          Premium Filo
        </p>
        <p className="text-sm font-bold text-white">Mercedes · BMW · Audi</p>
      </div>
    </div>
  );
}
