import { ComponentProps, ReactNode } from "react";

interface PropsNavLink extends ComponentProps<"a"> {
  children: ReactNode;
}

export function NavLink(props: PropsNavLink) {
  return (
    <a
      {...props}
      className="font-medium text-sm text-zinc-300 hover:text-zinc-200"
    >
      {props.children}
    </a>
  );
}
