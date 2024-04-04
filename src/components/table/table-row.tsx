import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PropsTableRow extends ComponentProps<"tr"> {}

export function TableRow({ className, ...props }: PropsTableRow) {
  return (
    <tr
      {...props}
      className={twMerge(
        "border-b border-white/10 hover:bg-black/5",
        className
      )}
    />
  );
}
