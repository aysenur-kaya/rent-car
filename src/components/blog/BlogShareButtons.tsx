"use client";

import { Share2, Link2, Check } from "lucide-react";
import { useState } from "react";
import { iconSm } from "@/lib/styles";

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

export function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border-on-dark bg-white/[0.04] p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-2 text-small font-semibold text-white">
        <Share2 className={iconSm} aria-hidden="true" />
        Paylaş
      </div>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border-on-dark bg-hero-bg/60 px-3 py-2 text-caption font-medium text-text-muted-dark transition-colors hover:border-accent/40 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border-on-dark bg-hero-bg/60 px-3 py-2 text-caption font-medium text-text-muted-dark transition-colors hover:border-accent/40 hover:text-accent"
        >
          {copied ? (
            <>
              <Check className={iconSm} aria-hidden="true" />
              Kopyalandı
            </>
          ) : (
            <>
              <Link2 className={iconSm} aria-hidden="true" />
              Linki Kopyala
            </>
          )}
        </button>
      </div>
    </div>
  );
}
