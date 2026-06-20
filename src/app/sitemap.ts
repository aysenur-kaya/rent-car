import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { blogPosts } from "@/data/blog";
import {
  getAllBlogCategorySlugs,
  getAllBlogTags,
} from "@/data/blog/taxonomy";
import { locationPages } from "@/data/locations";
import { servicePages } from "@/data/service-pages";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/araclar", "/hakkimizda", "/blog", "/sss", "/iletisim"];

  const staticEntries = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const carEntries = cars.map((car) => ({
    url: `${SITE_URL}/araclar/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAtISO ?? post.publishedAtISO),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogCategoryEntries = getAllBlogCategorySlugs().map((slug) => ({
    url: `${SITE_URL}/blog/kategori/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.55,
  }));

  const blogTagEntries = getAllBlogTags().map((tag) => ({
    url: `${SITE_URL}/blog/etiket/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const locationEntries = locationPages.map((location) => ({
    url: `${SITE_URL}/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const serviceEntries = servicePages.map((service) => ({
    url: `${SITE_URL}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticEntries,
    ...carEntries,
    ...blogEntries,
    ...blogCategoryEntries,
    ...blogTagEntries,
    ...locationEntries,
    ...serviceEntries,
  ];
}
