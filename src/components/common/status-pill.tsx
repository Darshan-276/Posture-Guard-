import { cn } from "@/lib/utils";

export function StatusPill({ children, tone = "development" }: { children: string; tone?: "development" | "planned" | "future" }) {
  return <span className={cn("status-pill", `status-${tone}`)}><i />{children}</span>;
}
