import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Araçlar",
  description:
    "Ekonomik sınıftan lüks segmente kadar geniş araç filomuzu inceleyin. BMW, Mercedes, Volkswagen ve daha fazlası uygun fiyatlarla.",
  path: "/araclar",
});

export { default } from "./CarsPage";
