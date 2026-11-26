import { categoryLinks, type CategoryId } from "@/lib/nav";

type CategoryDetails = {
  description: string;
  /**
   * مسار صورة البطاقة داخل مجلد public، مثل "/images/categories/apartments.jpg".
   * عندما تكون null تظهر مساحة بديلة بدل الصورة.
   */
  image: string | null;
};

const details: Record<CategoryId, CategoryDetails> = {
  apartments: {
    description: "شقق ومنازل جاهزة للسكن في مختلف المدن، بإيجار يومي أو أسبوعي أو شهري أو سنوي.",
    image: null,
  },
  farms: {
    description: "مزارع واسعة بعيدة عن الزحام للعائلات والمناسبات وقضاء عطلة هادئة بين الطبيعة.",
    image: null,
  },
  chalets: {
    description: "شاليهات مريحة للاستجمام وقضاء عطلة نهاية الأسبوع مع العائلة والأصدقاء.",
    image: null,
  },
};

/** الأقسام الثلاثة بترتيب nav.ts، مدموجة مع الوصف والصورة. */
export const categories = categoryLinks.map((link) => ({ ...link, ...details[link.id] }));
