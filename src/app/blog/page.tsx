import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTA } from "@/components/home/CTA";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/lib/seo";
import { section } from "@/lib/styles";

const title = "Blog | Velora Rent Araç Kiralama Rehberi";
const description =
  "Araç kiralama, güvenli sürüş, ekonomik kiralama ve yolculuk planlama hakkında güncel rehber içerikler.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/blog`,
    siteName: "Velora Rent",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Blog"
        title="Araç Kiralama Rehberi"
        description="Araç kiralama süreci, güvenli sürüş, ekonomik kullanım ve yolculuk deneyiminizi iyileştirecek güncel rehber içerikler."
      />

      <section className={`bg-hero-bg ${section}`}>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
