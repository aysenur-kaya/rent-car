"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { headerNavLinks, siteConfig } from "@/data/site";
import { siteHeaderOffsets } from "@/lib/layout";
import { iconMd } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Topbar } from "@/components/layout/Topbar";

const MOBILE_HEADER_OFFSET = siteHeaderOffsets.mobileMenu;

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function BrandLogo() {
  return (
    <span className="inline-flex items-center text-lg font-bold leading-none tracking-tight md:text-xl">
      <span className="text-white">{siteConfig.brandPrimary}</span>{" "}
      <span className="text-[#EF4444]">{siteConfig.brandAccent}</span>
    </span>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isOverlay = isHome && !scrolled;

  const closeMenu = useCallback(() => setIsOpen(false), []);

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

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top,0px)]"
      )}
    >
      <Topbar />

      <div
        className={cn(
          "transition-all duration-300",
          scrolled || !isHome
            ? "border-b border-border-on-dark bg-[#0B0B0B]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : isHome
              ? "bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/25 to-transparent"
              : "bg-[#0B0B0B]/90"
        )}
      >
        <Container>
          <nav
            className="relative flex h-[4.25rem] items-center justify-between md:h-20"
            aria-label="Ana navigasyon"
          >
            <Link
            href="/"
            className="relative z-[110] flex shrink-0 items-center"
            aria-label={`${siteConfig.name} ana sayfa`}
            onClick={closeMenu}
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
                      "rounded-lg px-3.5 py-2.5 text-small font-medium transition-all duration-200 lg:px-4",
                      active
                        ? "bg-accent/10 font-semibold text-[#EF4444] shadow-[0_0_12px_rgba(239,68,68,0.12)]"
                        : isOverlay
                          ? "text-white/82 hover:text-[#EF4444]"
                          : "text-text-muted-dark hover:text-[#EF4444]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            </ul>

            <div className="relative z-[110] hidden shrink-0 xl:block">
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
            onClick={() => setIsOpen((open) => !open)}
            className={cn(
              "relative z-[110] flex size-11 items-center justify-center rounded-xl border transition-all duration-200 xl:hidden",
              isOpen
                ? "border-[#EF4444]/60 bg-accent/10 text-white shadow-[0_0_16px_var(--accent-glow)]"
                : "border-border-on-dark bg-white/5 text-white backdrop-blur-sm hover:border-[#EF4444]/40"
            )}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className={cn(iconMd, "text-[#EF4444]")} aria-hidden="true" />
            ) : (
              <Menu className={iconMd} aria-hidden="true" />
            )}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "fixed inset-x-0 bottom-0 z-[90] bg-black/70 backdrop-blur-sm xl:hidden",
                MOBILE_HEADER_OFFSET
              )}
              onClick={closeMenu}
              aria-label="Menüyü kapat"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobil menü"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className={cn(
                "fixed inset-x-0 z-[95] border-b border-border-on-dark bg-hero-bg/98 backdrop-blur-xl xl:hidden",
                MOBILE_HEADER_OFFSET
              )}
            >
              <Container className="py-5">
                <ul className="space-y-1" role="list">
                  {headerNavLinks.map((link) => {
                    const active = isActiveLink(pathname, link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-4 py-3.5 text-body font-medium transition-colors duration-200",
                            active
                              ? "bg-accent/10 font-semibold text-[#EF4444]"
                              : "text-white/85 hover:bg-accent/5 hover:text-[#EF4444]"
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
