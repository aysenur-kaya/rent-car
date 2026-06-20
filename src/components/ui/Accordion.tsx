"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cardInteractive, iconMd } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

type AccordionItem = Pick<FAQ, "id" | "question" | "answer">;

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("space-y-3", className)} role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div
            key={item.id}
            role="listitem"
            className={cn(
              cardInteractive,
              "overflow-hidden hover:translate-y-0",
              isOpen && "border-foreground/10 shadow-md"
            )}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background/60 md:px-6 md:py-5"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-body font-semibold text-foreground">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  iconMd,
                  "text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-accent"
                )}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <div className="border-t border-border px-5 pb-5 pt-1 md:px-6">
                    <p className="text-body text-muted">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
