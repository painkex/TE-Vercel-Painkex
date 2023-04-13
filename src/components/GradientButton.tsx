import type { PropsWithChildren } from "react";

export function GradientButton(props: PropsWithChildren) {
  return (
    <button className=" bg-white bg-clip-text text-4xl font-extrabold text-transparent  transition  duration-300 hover:scale-110 hover:text-4xl  hover:bg-gradient-to-r hover:from-blue-600 hover:to-slate-600">
      {props.children}
    </button>

  );
}
