import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("card", className)} {...props} />;
}
