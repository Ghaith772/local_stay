import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "accent" | "outline";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
};

type CommonProps = {
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** زر بثلاثة أنماط. عند تمرير href يُرسم كرابط (Next Link)، وإلا كزر عادي. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className, href, ...rest } = props;
    return <Link href={href} className={cx(variantClass[variant], className)} {...rest} />;
  }

  const { variant = "primary", className, type = "button", ...rest } = props;
  return <button type={type} className={cx(variantClass[variant], className)} {...rest} />;
}
