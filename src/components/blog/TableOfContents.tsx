"use client";

import type { BlogSection } from "@/types/blog";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  sections: BlogSection[];
  className?: string;
}

export function TableOfContents({ sections, className }: TableOfContentsProps) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="İçindekiler"
      className={cn(
        "rounded-2xl border border-border-on-dark bg-white/[0.04] p-5 backdrop-blur-sm",
        className
      )}
    >
      <h2 className="mb-3 text-small font-semibold uppercase tracking-wider text-white">
        İçindekiler
      </h2>
      <ol className="space-y-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block text-small leading-relaxed text-text-muted-dark transition-colors hover:text-accent",
                section.level === 3 && "pl-4"
              )}
            >
              <span className="mr-2 text-accent/70">{index + 1}.</span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
