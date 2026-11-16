import { Box, ScanLine } from "lucide-react";
import { StatusPill } from "./status-pill";

export function DevicePreviewPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`device-preview ${compact ? "device-preview-compact" : ""}`} role="img" aria-label="Abstract placeholder for the Posture Guard hardware prototype render">
      <div className="device-grid" aria-hidden="true" />
      <div className="device-orbit orbit-a" aria-hidden="true" />
      <div className="device-orbit orbit-b" aria-hidden="true" />
      <div className="device-body" aria-hidden="true">
        <span className="device-led" />
        <span className="device-line line-one" />
        <span className="device-line line-two" />
        <span className="device-port" />
      </div>
      <div className="device-meta device-meta-top"><ScanLine size={14} /> DEVICE RENDER IN PROGRESS</div>
      <div className="device-meta device-meta-bottom"><Box size={14} /> REPLACEABLE ASSET AREA</div>
      {!compact && <div className="device-status"><StatusPill>Hardware prototype</StatusPill></div>}
    </div>
  );
}
