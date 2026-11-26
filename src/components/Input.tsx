import { useId, type ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  /** نص التسمية فوق الحقل (اختياري). */
  label?: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  const field = <input id={inputId} className={cx("input", className)} {...props} />;

  if (!label) return field;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-ink">
        {label}
      </label>
      {field}
    </div>
  );
}
