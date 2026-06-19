import type { BlogCategory, BlogCategoryId } from "@/types/blog";

export const blogCategories: Record<BlogCategoryId, BlogCategory> = {
  "arac-kiralama": {
    id: "arac-kiralama",
    label: "Araç Kiralama",
    badgeClass:
      "border-accent/40 bg-accent/15 text-[#ffb4a2]",
  },
  "surus-rehberi": {
    id: "surus-rehberi",
    label: "Sürüş Rehberi",
    badgeClass:
      "border-sky-400/30 bg-sky-500/15 text-sky-200",
  },
  seyahat: {
    id: "seyahat",
    label: "Seyahat",
    badgeClass:
      "border-teal-400/30 bg-teal-500/15 text-teal-200",
  },
  ipuclari: {
    id: "ipuclari",
    label: "İpuçları",
    badgeClass:
      "border-amber-400/30 bg-amber-500/15 text-amber-200",
  },
  guvenlik: {
    id: "guvenlik",
    label: "Güvenlik",
    badgeClass:
      "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
  },
  kampanyalar: {
    id: "kampanyalar",
    label: "Kampanyalar",
    badgeClass:
      "border-violet-400/30 bg-violet-500/15 text-violet-200",
  },
};

export function getCategoryById(id: BlogCategoryId): BlogCategory {
  return blogCategories[id];
}
