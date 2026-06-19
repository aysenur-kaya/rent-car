import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faq";
import { buildPageMetadata, faqPageSchema } from "@/lib/seo";
import { section } from "@/lib/styles";

export const metadata: Metadata = buildPageMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Araç kiralama hakkında merak ettiğiniz soruların cevapları. Belgeler, depozito, teslimat ve rezervasyon bilgileri.",
  path: "/sss",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <PageHeader
        badge="SSS"
        title="Sık Sorulan Sorular"
        description="Araç kiralama süreci hakkında en çok sorulan soruları ve cevaplarını burada bulabilirsiniz."
      />

      <section className={section}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
