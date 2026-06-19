import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/seo";
import { ContactPageContent } from "./ContactPage";

export const metadata: Metadata = buildPageMetadata({
  title: "İletişim",
  description:
    "EliteDrive ile iletişime geçin. 7/24 destek hattı, WhatsApp ve e-posta ile bize ulaşabilirsiniz.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="İletişim"
        title="Bizimle İletişime Geçin"
        description="Sorularınız, rezervasyon talepleriniz veya özel istekleriniz için bize ulaşın. 7/24 hizmetinizdeyiz."
      />
      <ContactPageContent />
    </>
  );
}
