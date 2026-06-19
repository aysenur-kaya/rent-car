import type { BlogPost } from "@/types/blog";

export const BLOG_AUTHOR = "Velora Rent Editörü";

export function formatReadTime(minutes: number): string {
  return `${minutes} dk`;
}

export function getBlogPostBySlug(
  posts: BlogPost[],
  slug: string
): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const current = getBlogPostBySlug(posts, currentSlug);
  if (!current) return posts.filter((p) => p.slug !== currentSlug).slice(0, limit);

  const sameCategory = posts.filter(
    (p) => p.slug !== currentSlug && p.categoryId === current.categoryId
  );
  const others = posts.filter(
    (p) => p.slug !== currentSlug && p.categoryId !== current.categoryId
  );

  return [...sameCategory, ...others].slice(0, limit);
}
