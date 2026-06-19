import type { BlogSection } from "@/types/blog";
import { cn } from "@/lib/utils";

interface BlogArticleProps {
  sections: BlogSection[];
}

export function BlogArticle({ sections }: BlogArticleProps) {
  return (
    <article className="space-y-8">
      {sections.map((section) => {
        const HeadingTag = section.level === 2 ? "h2" : "h3";

        return (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <HeadingTag
              className={cn(
                "mb-4 text-white",
                section.level === 2 ? "text-h3" : "text-body-lg font-semibold"
              )}
            >
              {section.heading}
            </HeadingTag>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-body leading-relaxed text-text-muted-dark"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        );
      })}
    </article>
  );
}
