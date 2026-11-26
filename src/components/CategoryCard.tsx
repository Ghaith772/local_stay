import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { CategoryId } from "@/lib/nav";

const iconPath: Record<CategoryId, string> = {
  apartments: "M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16M14 21V10h5a1 1 0 011 1v10M3 21h18M8 8h2M8 12h2M8 16h2",
  farms: "M12 21v-9M12 12c0-4 3-6 7-6 0 4-3 6-7 6zM12 15c0-3-2-5-6-5 0 3 2 5 6 5z",
  chalets: "M3 12l9-8 9 8M5 10v10h14V10M10 20v-5h4v5",
};

export type CategoryCardProps = {
  id: CategoryId;
  label: string;
  description: string;
  href: string;
  /** مسار الصورة داخل public، أو null لعرض مساحة بديلة. */
  image: string | null;
};

/** بطاقة قسم رئيسي: صورة (أو مساحة بديلة) + عنوان + وصف + زر تصفح. */
export function CategoryCard({ id, label, description, href, image }: CategoryCardProps) {
  return (
    <Card className="category-card flex flex-col gap-4">
      <div className="media-frame">
        {image ? (
          <Image src={image} alt={label} fill sizes="(min-width: 48rem) 33vw, 100vw" className="media-photo object-cover" />
        ) : (
          <div className="media-placeholder" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="media-icon size-16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={iconPath[id]} />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl">{label}</h3>
        <p className="leading-7 text-ink/80">{description}</p>
      </div>

      <Button href={href} variant="outline" className="w-full">
        تصفّح {label}
      </Button>
    </Card>
  );
}
