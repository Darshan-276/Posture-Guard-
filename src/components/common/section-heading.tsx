import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, copy, className }: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
