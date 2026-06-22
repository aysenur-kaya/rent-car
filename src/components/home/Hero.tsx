"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteHeaderOffsets } from "@/lib/layout";
import { iconMd } from "@/lib/styles";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const HERO_CAR_IMAGE = "/images/blog/city-driving-guide.jpg";

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-hero-bg"
      aria-labelledby="hero-heading"
    >
      {/* Full-screen background car */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src={HERO_CAR_IMAGE}
            alt=""
            fill
            priority
            className="hero-bg-car object-cover object-[center_68%] md:object-[center_52%] lg:object-[center_48%]"
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/80 via-hero-bg/45 to-hero-bg/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-hero-bg/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,transparent_0%,rgba(5,5,5,0.35)_75%)]" />
      </div>

      {/* Centered content */}
      <div className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-24 text-center sm:px-6 md:pb-28 ${siteHeaderOffsets.heroContent}`}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-3xl flex-col items-center"
        >
          <motion.span variants={item} className="hero-badge mb-6 md:mb-8">
            Premium Mobility Experience
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-hero-refined w-full text-white"
          >
            <span className="block">Sınırları Aşan</span>
            <span className="mt-1 block text-[#EF4444] md:mt-2">Konfor</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="hero-description mx-auto mt-5 max-w-[620px] text-pretty text-sm sm:text-base md:mt-6 md:text-lg"
          >
            Velora Rent, modern araç filosu, şeffaf fiyat politikası ve 7/24 destek
            hizmetiyle şehir içi ve uzun yolculuklarınız için güvenilir araç
            kiralama deneyimi sunar.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mt-10"
          >
            <Button
              href="/araclar"
              variant="gradient"
              size="lg"
              className="w-full rounded-2xl sm:min-w-[220px] sm:w-auto"
            >
              Araçları İncele
              <ArrowRight className={iconMd} aria-hidden="true" />
            </Button>
            <Button
              href="/#rezervasyon"
              variant="glass"
              size="lg"
              className="w-full rounded-2xl sm:min-w-[220px] sm:w-auto"
            >
              Rezervasyon Yap
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <Link
            href="#one-cikan-araclar"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors duration-200 hover:text-[#EF4444]"
          >
            Keşfet
          </Link>
          <div className="hero-scroll-line" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
