"use client";

import { ArrowUpRight, Cpu, Gauge, Vibrate } from "lucide-react";
import { useState } from "react";
import { ComingSoonDialog } from "@/components/common/coming-soon-dialog";
import { DevicePreviewPlaceholder } from "@/components/common/device-preview-placeholder";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatusPill } from "@/components/common/status-pill";

export function DeviceOverview() {
  const [open, setOpen] = useState(false);
  return <section id="device" className="section device-section" aria-labelledby="device-title"><div className="wrap">
    <Reveal><SectionHeading eyebrow="03 — MEET THE DEVICE" title={<><span id="device-title">A wearable concept built</span> around motion sensing.</>} /></Reveal>
    <div className="device-layout"><Reveal><div className="device-pane"><DevicePreviewPlaceholder compact /><div className="device-pane-footer"><StatusPill>PROTOTYPE IN DEVELOPMENT</StatusPill><button className="inline-link" onClick={() => setOpen(true)}>View future 3D model <ArrowUpRight size={16} /></button></div></div></Reveal>
    <Reveal delay={0.08}><div className="device-content"><p className="large-copy">The current prototype direction combines a compact microcontroller with inertial sensing to explore posture-related movement and orientation measurements.</p><div className="component-list"><div><Cpu size={20} /><span><strong>ESP32 NodeMCU with CP2102</strong><small>Development board under evaluation for prototype control and communication.</small></span></div><div><Gauge size={20} /><span><strong>GY-521 MPU6050 module</strong><small>Accelerometer and gyroscope module for inertial sensing exploration.</small></span></div><div><Vibrate size={20} /><span><strong>Supporting components</strong><small>Power, charging, vibration, enclosure, and mounting are being evaluated.</small></span></div></div><p className="fine-print">Physical integration, calibration, and measurement validation remain in progress. The illustration is intentionally an abstract, replaceable asset area—not a final enclosure design.</p></div></Reveal></div>
  </div><ComingSoonDialog open={open} onClose={() => setOpen(false)} feature="The interactive 3D model" /></section>;
}
