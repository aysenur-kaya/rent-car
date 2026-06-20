export type BlogCategoryId =
  | "arac-kiralama"
  | "surus-rehberi"
  | "seyahat"
  | "ipuclari"
  | "guvenlik"
  | "kampanyalar";

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
  badgeClass: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  categoryId: BlogCategoryId;
  image: string;
  imageAlt: string;
  readTimeMinutes: number;
  publishedAt: string;
  publishedAtISO: string;
  updatedAtISO?: string;
  author: string;
  sections: BlogSection[];
  metaTitle: string;
  metaDescription: string;
  tags: string[];
}

export interface BlogTag {
  slug: string;
  label: string;
}
