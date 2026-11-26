import { useId, type ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  label?: string;
};

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  const field = <textarea id={inputId} className={cx("input", className)} {...props} />;

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
