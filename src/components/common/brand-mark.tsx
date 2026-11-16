import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={cn("brand-mark", className)} viewBox="0 0 34 34" aria-hidden="true">
      <path d="M10 5.5v6.2a7 7 0 0 0 14 0V5.5" />
      <path d="M17 5v14.5" />
      <path d="M8 24.5c2.4-2.3 5.4-3.4 9-3.4s6.6 1.1 9 3.4" />
      <circle cx="17" cy="28" r="1.4" />
    </svg>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="brand-lockup" aria-label="Posture Guard home">
      <BrandMark />
      <span>
        <strong>POSTURE GUARD</strong>
        {!compact && <small>Wearable Posture Monitoring</small>}
      </span>
    </a>
  );
}
