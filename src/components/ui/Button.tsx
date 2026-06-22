"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "gradient"
  | "secondary"
  | "outline"
  | "ghost"
  | "glass"
  | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_4px_16px_var(--accent-glow)] hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_6px_20px_var(--accent-glow)]",
  gradient:
    "bg-[linear-gradient(135deg,#EF4444,#DC2626)] text-white shadow-[0_4px_16px_var(--accent-glow)] hover:-translate-y-px hover:shadow-[0_6px_22px_var(--accent-glow)] hover:brightness-[1.03]",
  secondary:
    "bg-dark text-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-px hover:bg-dark-surface hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
  outline:
    "border border-border-strong bg-surface text-foreground shadow-sm hover:-translate-y-px hover:border-foreground/20 hover:bg-background hover:shadow-md",
  ghost: "text-foreground hover:bg-foreground/[0.04]",
  glass:
    "border border-border-on-dark bg-white/[0.06] text-white backdrop-blur-md hover:-translate-y-px hover:border-accent/60 hover:bg-white/[0.1] hover:shadow-[0_4px_16px_var(--accent-glow)]",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.25)] hover:-translate-y-px hover:bg-[#1fb855] hover:shadow-[0_4px_16px_rgba(37,211,102,0.32)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-small",
  md: "h-10 px-5 text-small",
  lg: "min-h-[3.5rem] px-8 py-4 text-body w-full sm:w-auto",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
