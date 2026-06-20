import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { section } from "@/lib/styles";
import type { Car } from "@/types";
import type { CarSeoContent } from "@/types/car-seo";

interface CarSeoSectionsProps {
  car: Car;
  content: CarSeoContent;
}

const sectionHeadings = [
  { key: "whoIsItFor" as const, title: "Kimler İçin Uygun?" },
  {
    key: "istanbulRental" as const,
    title: (name: string) => `İstanbul'da ${name} Kiralama`,
  },
  {
    key: "fuelAndScenarios" as const,
    title: "Yakıt Tüketimi ve Kullanım Senaryoları",
  },
  {
    key: "segmentComparison" as const,
    title: "Benzer Segment Araçlarla Karşılaştırma",
  },
  { key: "rentalTerms" as const, title: "Kiralama Şartları" },
  { key: "deliveryAreas" as const, title: "Teslimat Bölgeleri" },
];

export function CarSeoSections({ car, content }: CarSeoSectionsProps) {
  return (
    <>
      <section
        className={`border-t border-border bg-background ${section}`}
        aria-label={`${car.name} detaylı bilgi`}
      >
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {sectionHeadings.map(({ key, title }) => {
              const sectionContent = content[key];
              const heading =
                typeof title === "function" ? title(car.name) : title;

              return (
                <article key={key}>
                  <h2 className="text-h2 mb-4 text-foreground">{heading}</h2>
                  <div className="space-y-4">
                    {sectionContent.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-body leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={section} aria-labelledby={`${car.slug}-seo-faq`}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id={`${car.slug}-seo-faq`} className="text-h2 mb-6 text-foreground">
              Sık Sorulan Sorular
            </h2>
            <Accordion items={content.faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
