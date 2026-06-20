export { blogCategories, getCategoryById } from "./categories";
export {
  BLOG_DEFAULT_COVER,
  blogCoverImages,
  resolveBlogCoverImage,
} from "./images";
export { blogPosts } from "./posts";
export {
  BLOG_AUTHOR,
  formatReadTime,
  getBlogPostBySlug as findBlogPostBySlug,
  getRelatedPosts as findRelatedPosts,
} from "./utils";
export {
  categoryPageSeo,
  getAllBlogCategorySlugs,
  getAllBlogTags,
  getBlogTagBySlug,
  getPostsByCategoryId,
  getPostsByTagSlug,
  getTagPageSeo,
  isBlogCategorySlug,
  slugifyBlogTag,
} from "./taxonomy";

import { blogPosts } from "./posts";
import {
  getBlogPostBySlug as findBySlug,
  getRelatedPosts as findRelated,
} from "./utils";
import type { BlogPost } from "@/types/blog";

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return findBySlug(blogPosts, slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return findRelated(blogPosts, slug, limit);
}
