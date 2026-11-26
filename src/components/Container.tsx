import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("container-page", className)} {...props} />;
}
