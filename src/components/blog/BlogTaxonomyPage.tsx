import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { section } from "@/lib/styles";
import { siteHeaderOffsets } from "@/lib/layout";
import type { BlogPost } from "@/types/blog";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BlogTaxonomyPageProps {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  intro: string;
  posts: BlogPost[];
  emptyMessage: string;
}

export function BlogTaxonomyPage({
  breadcrumbs,
  h1,
  intro,
  posts,
  emptyMessage,
}: BlogTaxonomyPageProps) {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs)]} />

      <section className={`bg-hero-bg pb-8 ${siteHeaderOffsets.pageHeader}`}>
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

          <header className="max-w-2xl">
            <h1 className="text-h1 text-white">{h1}</h1>
            <p className="mt-4 text-body-lg leading-relaxed text-text-muted-dark">
              {intro}
            </p>
          </header>
        </Container>
      </section>

      <section className={`bg-hero-bg ${section}`}>
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-body text-text-muted-dark">{emptyMessage}</p>
          )}
        </Container>
      </section>
    </>
  );
}
