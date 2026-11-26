/** دمج أسماء الأصناف مع تجاهل القيم الفارغة. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
