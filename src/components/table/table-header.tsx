import { ComponentProps } from "react";

interface PropsTableHeader extends ComponentProps<"th"> {}

export function TableHeader({ ...props }: PropsTableHeader) {
  return (
    <th {...props} className="text-left py-3 px-4 text-sm font-semibold" />
  );
}
