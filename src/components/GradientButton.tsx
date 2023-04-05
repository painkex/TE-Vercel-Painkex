import type { PropsWithChildren } from "react";

export function GradientButton(props: PropsWithChildren) {
  return (
    <button className="font-extrabold text-transparent text-4xl bg-clip-text bg-red-900 bg-white animate-pulse hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600">{props.children}</button>
  )
}
