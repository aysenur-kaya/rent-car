"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { headerNavLinks, siteConfig } from "@/data/site";
import { iconSm, iconMd } from "@/lib/styles";
import { cn } from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/50 bg-hero-bg/70 text-accent shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03] md:size-11">
        <Car className={iconSm} aria-hidden="true" />
      </div>
      <span className="text-lg font-bold leading-none tracking-tight md:text-xl">
        <span className="text-white">{siteConfig.brandPrimary}</span>{" "}
        <span className="text-accent">{siteConfig.brandAccent}</span>
      </span>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isOverlay = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top,0px)]",
        scrolled || !isHome
          ? "border-b border-border-on-dark bg-hero-bg/85 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : isHome
            ? "bg-gradient-to-b from-hero-bg/55 via-hero-bg/20 to-transparent"
            : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="relative flex h-[4.25rem] items-center justify-between md:h-20"
          aria-label="Ana navigasyon"
        >
          <Link
            href="/"
            className="group relative z-10 shrink-0"
            aria-label={`${siteConfig.name} ana sayfa`}
          >
            <BrandLogo />
          </Link>

          <ul
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 xl:flex"
            role="list"
          >
            {headerNavLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3.5 py-2.5 text-small font-medium transition-colors duration-200 lg:px-4",
                      active
                        ? "text-accent"
                        : isOverlay
                          ? "text-white/82 hover:text-white"
                          : "text-text-muted-dark hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 hidden shrink-0 xl:block">
            <Button
              href="/#rezervasyon"
              variant="gradient"
              size="md"
              className="!w-auto !min-h-0 rounded-xl px-6"
            >
              Hemen Kirala
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "relative z-10 flex size-10 items-center justify-center rounded-xl border transition-all duration-200 xl:hidden",
              isOpen
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-border-on-dark bg-white/5 text-white backdrop-blur-sm"
            )}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className={iconMd} /> : <Menu className={iconMd} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm xl:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="relative z-50 border-b border-border-on-dark bg-hero-bg/95 backdrop-blur-xl xl:hidden"
            >
              <Container className="py-5">
                <ul className="space-y-1" role="list">
                  {headerNavLinks.map((link) => {
                    const active = isActiveLink(pathname, link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-4 py-3.5 text-body font-medium transition-colors",
                            active
                              ? "text-accent"
                              : "text-white/85 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
