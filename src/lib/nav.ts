/**
 * روابط التنقل — تُعرَّف مرة واحدة وتستخدمها الترويسة والتذييل وقائمة الهاتف والصفحات.
 * ترتيب الأقسام ثابت حسب المواصفات (القسم 4):
 * 1. الشقق والمنازل  2. المزارع  3. الشاليهات
 */
export type NavItem = {
  label: string;
  href: string;
};

export type CategoryId = "apartments" | "farms" | "chalets";

export type CategoryLink = NavItem & { id: CategoryId };

export const categoryLinks: CategoryLink[] = [
  { id: "apartments", label: "الشقق والمنازل", href: "/properties?category=apartments" },
  { id: "farms", label: "المزارع", href: "/properties?category=farms" },
  { id: "chalets", label: "الشاليهات", href: "/properties?category=chalets" },
];

export const aboutLink: NavItem = { label: "من نحن", href: "/about" };
export const contactLink: NavItem = { label: "اتصل بنا", href: "/contact" };
export const companyLinks: NavItem[] = [aboutLink, contactLink];

export const loginLink: NavItem = { label: "تسجيل الدخول", href: "/login" };
export const registerLink: NavItem = { label: "إنشاء حساب", href: "/register" };
export const verifyLink: NavItem = { label: "توثيق السجل التجاري", href: "/verify-business" };

/** روابط الحساب (التذييل). */
export const accountLinks: NavItem[] = [loginLink, registerLink, verifyLink];
