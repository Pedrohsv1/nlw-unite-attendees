import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "border-white/10 rounded-md p-1.5 disabled:cursor-not-allowed border disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-white/10 bg-white/10 hover:bg-white/20 active:bg-white/15 ",
      transparent:
        "bg-black/10 hover:bg-black/20 hover:bg-white/5 active:bg-white/15",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type PropsIconButton = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function IconButton({ variant, className, ...props }: PropsIconButton) {
  return (
    <button {...props} className={twMerge(button({ variant }), className)} />
  );
}
