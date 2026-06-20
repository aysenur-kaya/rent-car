import { blogCategories } from "./categories";
import { blogPosts } from "./posts";
import type { BlogCategoryId, BlogPost, BlogTag } from "@/types/blog";

const TR_CHAR_MAP: Record<string, string> = {
  ç: "c",
  ğ: "g",
  ı: "i",
  ö: "o",
  ş: "s",
  ü: "u",
  Ç: "c",
  Ğ: "g",
  İ: "i",
  I: "i",
  Ö: "o",
  Ş: "s",
  Ü: "u",
};

export function slugifyBlogTag(tag: string): string {
  return tag
    .trim()
    .split("")
    .map((char) => TR_CHAR_MAP[char] ?? char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllBlogTags(): BlogTag[] {
  const tagMap = new Map<string, string>();

  for (const post of blogPosts) {
    for (const tag of post.tags) {
      const slug = slugifyBlogTag(tag);
      if (!tagMap.has(slug)) {
        tagMap.set(slug, tag);
      }
    }
  }

  return Array.from(tagMap.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.label.localeCompare(b.label, "tr"));
}

export function getBlogTagBySlug(slug: string): BlogTag | undefined {
  return getAllBlogTags().find((tag) => tag.slug === slug);
}

export function getPostsByTagSlug(slug: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.tags.some((tag) => slugifyBlogTag(tag) === slug)
  );
}

export function getPostsByCategoryId(categoryId: BlogCategoryId): BlogPost[] {
  return blogPosts.filter((post) => post.categoryId === categoryId);
}

export function getAllBlogCategorySlugs(): BlogCategoryId[] {
  return Object.keys(blogCategories) as BlogCategoryId[];
}

export function isBlogCategorySlug(slug: string): slug is BlogCategoryId {
  return slug in blogCategories;
}

interface CategoryPageSeo {
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
}

export const categoryPageSeo: Record<BlogCategoryId, CategoryPageSeo> = {
  "arac-kiralama": {
    h1: "Araç Kiralama Rehberleri",
    intro:
      "Sözleşme koşullarından kiralama sürelerine kadar araç kiralama sürecini kolaylaştıran güncel rehber yazılarımızı bu kategoride bulabilirsiniz.",
    metaTitle: "Araç Kiralama Rehberleri",
    metaDescription:
      "Araç kiralama sözleşmesi, günlük-haftalık-aylık paketler ve kiralama sürecine dair Velora Rent blog rehberleri.",
  },
  "surus-rehberi": {
    h1: "Sürüş Rehberi Yazıları",
    intro:
      "Şehir içi kullanım, yakıt tasarrufu ve güvenli sürüş alışkanlıklarına odaklanan pratik sürüş rehberlerimizi keşfedin.",
    metaTitle: "Sürüş Rehberi Blog Yazıları",
    metaDescription:
      "Ekonomik sürüş teknikleri, şehir içi araç seçimi ve sürüş güvenliği hakkında Velora Rent sürüş rehberi içerikleri.",
  },
  seyahat: {
    h1: "Seyahat ve Yolculuk Rehberleri",
    intro:
      "Uzun yol planlaması, havalimanı araç kiralama ve hafta sonu kaçamakları için hazırladığımız seyahat odaklı blog yazıları.",
    metaTitle: "Seyahat ve Yolculuk Rehberleri",
    metaDescription:
      "Uzun yol kontrol listesi, havalimanı araç kiralama avantajları ve hafta sonu tatili araç önerileri Velora Rent blogunda.",
  },
  ipuclari: {
    h1: "Araç Kiralama İpuçları",
    intro:
      "Bütçenizi koruyan, teslim sürecini kolaylaştıran ve kiralama deneyiminizi iyileştiren ipuçlarını bu sayfada topladık.",
    metaTitle: "Araç Kiralama İpuçları",
    metaDescription:
      "Ekonomik kiralama tavsiyeleri, teslim kontrol listesi ve tasarruf odaklı araç kiralama ipuçları Velora Rent blogunda.",
  },
  guvenlik: {
    h1: "Güvenlik ve Sigorta Rehberleri",
    intro:
      "Kasko, sigorta kapsamı ve güvenli kiralama uygulamalarına dair bilmeniz gerekenleri güvenlik kategorimizde paylaşıyoruz.",
    metaTitle: "Güvenlik ve Sigorta Rehberleri",
    metaDescription:
      "Araç kiralama sigortası, tam kasko, muafiyet ve güvenli kiralama rehberleri Velora Rent blog güvenlik kategorisinde.",
  },
  kampanyalar: {
    h1: "Kampanya ve Fırsatlar",
    intro:
      "Dönemsel kampanyalar, indirimli kiralama fırsatları ve filo avantajlarına dair güncel duyuruları bu kategoride paylaşıyoruz.",
    metaTitle: "Kampanya ve Kiralama Fırsatları",
    metaDescription:
      "Velora Rent araç kiralama kampanyaları, sezonluk fırsatlar ve özel kiralama paketleri hakkında güncel blog içerikleri.",
  },
};

export function getTagPageSeo(tag: BlogTag, postCount: number): CategoryPageSeo {
  return {
    h1: `${tag.label} Etiketli Yazılar`,
    intro: `"${tag.label}" etiketiyle yayınladığımız ${postCount} rehber yazısını keşfedin. Araç kiralama, sürüş ve seyahat planlamasına dair güncel içerikler Velora Rent blogunda.`,
    metaTitle: `${tag.label} Etiketli Blog Yazıları`,
    metaDescription: `"${tag.label}" konusundaki araç kiralama rehberleri, ipuçları ve seyahat içerikleri. Velora Rent blog etiket arşivi.`,
  };
}
