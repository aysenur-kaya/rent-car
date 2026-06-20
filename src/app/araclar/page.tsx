import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

const FLEET_TITLE =
  "İstanbul Araç Kiralama Filosu | Günlük, Haftalık ve Aylık Kiralık Araçlar | Velora Rent";

const FLEET_DESCRIPTION =
  "İstanbul'da ekonomik, sedan, SUV ve lüks kiralık araç seçeneklerini keşfedin. Günlük, haftalık ve aylık araç kiralama, havalimanı teslim ve hızlı rezervasyon avantajları Velora Rent'te.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title:
      "İstanbul Araç Kiralama Filosu | Günlük, Haftalık ve Aylık Kiralık Araçlar",
    description: FLEET_DESCRIPTION,
    path: "/araclar",
  }),
  title: { absolute: FLEET_TITLE },
};

export { default } from "./CarsPage";
