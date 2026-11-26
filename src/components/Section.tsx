import type { ComponentPropsWithoutRef } from "react";
import { Container } from "@/components/Container";
import { cx } from "@/lib/cx";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** عند false لا يُلفّ المحتوى بـ Container (مفيد للخلفيات بعرض كامل). */
  contained?: boolean;
};

export function Section({ contained = true, className, children, ...props }: SectionProps) {
  return (
    <section className={cx("section-block", className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
