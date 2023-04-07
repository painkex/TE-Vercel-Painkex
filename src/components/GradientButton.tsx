import type { PropsWithChildren } from "react";

export function GradientButton(props: PropsWithChildren) {
  return (
    <button className=" bg-blue-900 bg-clip-text text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-slate-600 hover:-translate-y-3 hover:scale-110 duration-300 hover:text-4xl hover:text-white ">
      {props.children}
    </button>

  );
}
