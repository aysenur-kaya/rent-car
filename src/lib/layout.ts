/** Topbar height: 36px */
export const TOPBAR_HEIGHT = "2.25rem";

/** Shared offsets for fixed topbar + header nav + safe area */
export const siteHeaderOffsets = {
  mobileMenu:
    "top-[calc(2.25rem+4.25rem+env(safe-area-inset-top,0px))] md:top-[calc(2.25rem+5rem+env(safe-area-inset-top,0px))]",
  heroContent:
    "pt-[calc(2.25rem+4.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(2.25rem+5.5rem+env(safe-area-inset-top,0px))]",
  pageHeader:
    "pt-[calc(2.25rem+4.25rem+1.25rem+env(safe-area-inset-top,0px))] md:pt-[calc(2.25rem+5rem+2rem+env(safe-area-inset-top,0px))]",
  pageContent:
    "pt-[calc(2.25rem+4.25rem+1.25rem+env(safe-area-inset-top,0px))] md:pt-[calc(2.25rem+5rem+2rem+env(safe-area-inset-top,0px))]",
} as const;
