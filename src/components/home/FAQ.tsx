import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";
import { section } from "@/lib/styles";

export function FAQ() {
  return (
    <section className={section} aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          badge="SSS"
          title="Sık Sorulan Sorular"
          description="Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
