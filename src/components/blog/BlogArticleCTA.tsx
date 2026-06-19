import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconSm } from "@/lib/styles";

export function BlogArticleCTA() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/20 via-white/[0.04] to-transparent p-8 text-center md:p-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,74,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <h2 className="text-h3 text-white">
          Premium araç kiralama deneyimi için hemen rezervasyon yapın.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-body text-text-muted-dark">
          Tam kasko dahil filomuz, şeffaf fiyatlandırma ve 7/24 destek ile
          yolculuğunuza güvenle başlayın.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/araclar"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-gradient px-6 py-3 text-small font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,107,74,0.5)] transition-opacity hover:opacity-90"
          >
            Araçları İncele
            <ArrowRight className={iconSm} aria-hidden="true" />
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-xl border border-border-on-dark bg-white/[0.04] px-6 py-3 text-small font-semibold text-white transition-colors hover:border-accent/40 hover:text-accent"
          >
            Rezervasyon Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
