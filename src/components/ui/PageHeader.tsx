import { Container } from "@/components/ui/Container";
import { siteHeaderOffsets } from "@/lib/layout";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({
  badge,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn(`bg-hero-bg pb-12 md:pb-16 ${siteHeaderOffsets.pageHeader}`, className)}>
      <Container>
        <div className="max-w-2xl animate-fade-up">
          <span className="badge-red mb-4">{badge}</span>
          <h1 className="text-h1 text-white">{title}</h1>
          <p className="mt-4 text-body-lg text-text-muted-dark">{description}</p>
        </div>
      </Container>
    </section>
  );
}
