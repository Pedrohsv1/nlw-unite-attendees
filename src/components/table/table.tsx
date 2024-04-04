import { ComponentProps } from "react";

interface PropsTable extends ComponentProps<"table"> {}

export function Table({ ...props }: PropsTable) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table {...props} className="w-full " />
    </div>
  );
}
