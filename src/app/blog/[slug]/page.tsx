import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, User } from "lucide-react";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogArticleCTA } from "@/components/blog/BlogArticleCTA";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { BlogShareButtons } from "@/components/blog/BlogShareButtons";
import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  blogPosts,
  formatReadTime,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
import {
  articleSchema,
  breadcrumbSchema,
  buildArticleMetadata,
  SITE_URL,
} from "@/lib/seo";
import { iconSm, section } from "@/lib/styles";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı", robots: { index: false } };
  }

  return buildArticleMetadata(post);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), articleSchema(post)]} />

      <section className="bg-hero-bg pb-8 pt-28 md:pt-32">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="mb-6 flex flex-wrap items-center gap-2 text-small text-text-muted-dark">
              {breadcrumbs.map((item, index) => (
                <li key={item.path} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {index < breadcrumbs.length - 1 ? (
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white/80" aria-current="page">
                      {item.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <CategoryBadge categoryId={post.categoryId} className="mb-4" />
          <h1 className="text-h1 max-w-4xl text-white">{post.title}</h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-small text-text-muted-dark">
            <span className="flex items-center gap-1.5">
              <User className={iconSm} aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className={iconSm} aria-hidden="true" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className={iconSm} aria-hidden="true" />
              {formatReadTime(post.readTimeMinutes)} okuma
            </span>
          </div>
        </Container>
      </section>

      <section className={`bg-hero-bg ${section} pt-0`}>
        <Container>
          <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl border border-border-on-dark">
            <BlogCoverImage
              src={post.image}
              alt={post.imageAlt}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            <div>
              <p className="mb-8 text-body-lg leading-relaxed text-text-muted-dark">
                {post.excerpt}
              </p>
              <BlogArticle sections={post.sections} />
              <BlogArticleCTA />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <TableOfContents sections={post.sections} />
              <BlogShareButtons title={post.title} url={articleUrl} />
            </aside>
          </div>

          <RelatedPosts posts={relatedPosts} />
        </Container>
      </section>
    </>
  );
}
