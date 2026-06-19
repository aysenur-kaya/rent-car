import { getCategoryById } from "@/data/blog/categories";
import type { BlogCategoryId } from "@/types/blog";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  categoryId: BlogCategoryId;
  className?: string;
}

export function CategoryBadge({ categoryId, className }: CategoryBadgeProps) {
  const category = getCategoryById(categoryId);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-1 text-caption font-semibold backdrop-blur-sm",
        category.badgeClass,
        className
      )}
    >
      {category.label}
    </span>
  );
}
