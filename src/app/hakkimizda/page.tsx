import type { Metadata } from "next";
import Image from "next/image";
import { Award, Car, Target, Heart, Shield } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/home/CTA";
import { MissionVisionVisual } from "@/components/about/MissionVisionVisual";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";
import { cardInteractive, iconLg, section } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Hakkımızda",
  description: `${siteConfig.name} olarak 10 yılı aşkın tecrübemizle premium araç kiralama hizmeti sunuyoruz. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin.`,
  path: "/hakkimizda",
});

const stats = [
  { value: "10+", label: "Yıllık Tecrübe" },
  { value: "5000+", label: "Mutlu Müşteri" },
  { value: "50+", label: "Araç Filosu" },
  { value: "7/24", label: "Destek Hattı" },
];

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description:
      "Şeffaf fiyatlandırma ve sözleşme koşullarıyla güveninizi kazanıyoruz.",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description: "Her müşterimizin ihtiyacına özel çözümler üretiyoruz.",
  },
  {
    icon: Target,
    title: "Kalite",
    description: "Sürekli yenilenen araç filomuz ve bakım standartlarımız.",
  },
  {
    icon: Award,
    title: "Profesyonellik",
    description: "Deneyimli ekibimizle her aşamada profesyonel hizmet sunuyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Hakkımızda"
        title="Premium Araç Kiralamada Güvenilir İsim"
        description={`${siteConfig.name} olarak, müşterilerimize en kaliteli araç kiralama deneyimini sunmak için çalışıyoruz.`}
      />

      <section className={section}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-black/5">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="EliteDrive ekibi ve premium araç filosu"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-h2 text-foreground">Hikayemiz</h2>
              <p className="mt-4 text-body text-muted">
                2014 yılında kurulan {siteConfig.name}, İstanbul merkezli olarak
                premium araç kiralama sektöründe faaliyet göstermektedir.
                Müşteri memnuniyetini her şeyin üzerinde tutan anlayışımızla,
                kısa sürede sektörün önde gelen firmalarından biri haline geldik.
              </p>
              <p className="mt-4 text-body text-muted">
                Havalimanı tesliminden kurumsal filo kiralamaya kadar geniş
                hizmet yelpazemizle, bireysel ve kurumsal müşterilerimize
                kesintisiz hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-dark py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-h2 text-white">{stat.value}</p>
                <p className="mt-2 text-small text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={section}>
        <Container>
          <SectionHeading
            badge="Değerlerimiz"
            title="Bizi Farklı Kılan Değerler"
            description="Her kararımızda ve her hizmetimizde bu değerleri ön planda tutuyoruz."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className={cn(cardInteractive, "p-6 text-center")}
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-background text-foreground">
                  <value.icon className={iconLg} aria-hidden="true" />
                </div>
                <h3 className="text-h3 mb-2 text-foreground">{value.title}</h3>
                <p className="text-small leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={`bg-background ${section}`}>
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col justify-center">
              <h2 className="text-h2 text-foreground">Misyon & Vizyon</h2>
              <p className="mt-3 text-body text-muted">
                Geleceğe yön veren hedeflerimiz ve müşterilerimize verdiğimiz söz.
              </p>
              <div className="mt-8 space-y-4">
                <div className={cn(cardInteractive, "p-6 hover:translate-y-0")}>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                      <Target className={iconLg} aria-hidden="true" />
                    </div>
                    <h3 className="text-h3 text-foreground">Misyonumuz</h3>
                  </div>
                  <p className="text-small leading-relaxed text-muted">
                    Müşterilerimize güvenli, konforlu ve uygun fiyatlı araç
                    kiralama hizmeti sunarak, her yolculuğu unutulmaz bir
                    deneyime dönüştürmek.
                  </p>
                </div>
                <div className={cn(cardInteractive, "p-6 hover:translate-y-0")}>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                      <Car className={iconLg} aria-hidden="true" />
                    </div>
                    <h3 className="text-h3 text-foreground">Vizyonumuz</h3>
                  </div>
                  <p className="text-small leading-relaxed text-muted">
                    Türkiye&apos;nin en güvenilir ve tercih edilen premium araç
                    kiralama markası olmak, teknoloji ve kaliteyi bir araya
                    getirerek sektöre yön vermek.
                  </p>
                </div>
              </div>
            </div>
            <MissionVisionVisual />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
