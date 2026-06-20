import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogTaxonomyPage } from "@/components/blog/BlogTaxonomyPage";
import {
  getAllBlogTags,
  getBlogTagBySlug,
  getPostsByTagSlug,
  getTagPageSeo,
} from "@/data/blog/taxonomy";
import { buildPageMetadata } from "@/lib/seo";

interface BlogTagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({
  params,
}: BlogTagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getBlogTagBySlug(slug);

  if (!tag) {
    return { title: "Etiket Bulunamadı", robots: { index: false } };
  }

  const posts = getPostsByTagSlug(slug);
  const seo = getTagPageSeo(tag, posts.length);

  return buildPageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription,
    path: `/blog/etiket/${slug}`,
  });
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { slug } = await params;
  const tag = getBlogTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTagSlug(slug);
  const seo = getTagPageSeo(tag, posts.length);

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: tag.label, path: `/blog/etiket/${slug}` },
  ];

  return (
    <BlogTaxonomyPage
      breadcrumbs={breadcrumbs}
      h1={seo.h1}
      intro={seo.intro}
      posts={posts}
      emptyMessage="Bu etiketle eşleşen yazı bulunmuyor."
    />
  );
}
