import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { section } from "@/lib/styles";

export const metadata = buildPageMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className={`flex min-h-[60vh] items-center ${section}`}>
      <Container className="text-center">
        <p className="text-h1 text-foreground/10" aria-hidden="true">
          404
        </p>
        <h1 className="text-h2 -mt-4 text-foreground">Sayfa Bulunamadı</h1>
        <p className="mx-auto mt-4 max-w-md text-body text-muted">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="/">Ana Sayfaya Dön</Button>
          <Button href="/araclar" variant="outline">
            Araçları İncele
          </Button>
        </div>
      </Container>
    </section>
  );
}
