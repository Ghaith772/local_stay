import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span className={cx("badge", className)} {...props} />;
}
