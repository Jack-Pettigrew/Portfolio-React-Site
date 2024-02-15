import { ReactNode } from "react";

export default function Card({ children, id, className }: { children?: ReactNode, id?: string, className?: string }) {
  return (
    <div id={id} className={"p-5 bg-slate-100 rounded-xl " + className}>
        {children}
    </div>
  )
}
