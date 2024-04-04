import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PropsTableCell extends ComponentProps<"td"> {}

export function TableCell({ className, ...props }: PropsTableCell) {
  return (
    <td
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-400", className)}
    />
  );
}
