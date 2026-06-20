import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogTaxonomyPage } from "@/components/blog/BlogTaxonomyPage";
import { getCategoryById } from "@/data/blog/categories";
import {
  categoryPageSeo,
  getAllBlogCategorySlugs,
  getPostsByCategoryId,
  isBlogCategorySlug,
} from "@/data/blog/taxonomy";
import { buildPageMetadata } from "@/lib/seo";

interface BlogCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    return { title: "Kategori Bulunamadı", robots: { index: false } };
  }

  const seo = categoryPageSeo[slug];

  return buildPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: `/blog/kategori/${slug}`,
  });
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;

  if (!isBlogCategorySlug(slug)) {
    notFound();
  }

  const category = getCategoryById(slug);
  const seo = categoryPageSeo[slug];
  const posts = getPostsByCategoryId(slug);

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.label, path: `/blog/kategori/${slug}` },
  ];

  return (
    <BlogTaxonomyPage
      breadcrumbs={breadcrumbs}
      h1={seo.h1}
      intro={seo.intro}
      posts={posts}
      emptyMessage="Bu kategoride henüz yayınlanmış yazı bulunmuyor."
    />
  );
}
