import { ReactNode } from "react";

export default function Card({ children, id, className }: { children?: ReactNode, id?: string, className?: string }) {
  return (
    <div id={id} className={"p-5 bg-slate-100 dark:bg-slate-700 dark:text-white rounded-xl " + className}>
        {children}
    </div>
  )
}
