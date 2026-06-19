import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  dark = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl md:mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className={cn("mb-3", dark ? "badge-red" : "badge-light")}>
          {badge}
        </span>
      )}
      <h2
        id={id}
        className={cn("text-h2", dark ? "text-white" : "text-foreground")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-body-lg",
            dark ? "text-text-muted-dark" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
