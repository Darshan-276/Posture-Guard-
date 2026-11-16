import { Activity, BrainCircuit, ChartNoAxesCombined, Clock3, Lightbulb, Scan } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatusPill } from "@/components/common/status-pill";

const capabilities = [
  [Scan, "Posture State Awareness", "The system aims to classify posture-related states from calibrated sensor measurements.", "In Development", "development"],
  [Activity, "Movement Monitoring", "Explore how changes in body orientation and movement can be observed over time.", "In Development", "development"],
  [Clock3, "Session Tracking", "Organize measurements into monitoring sessions and summarize session activity.", "Planned", "planned"],
  [ChartNoAxesCombined, "Historical Trends", "Provide a way to understand changes in monitored posture patterns over time.", "Planned", "planned"],
  [Lightbulb, "Intelligent Feedback", "Develop transparent, rule-based recommendations based on validated measurements.", "Planned", "planned"],
  [BrainCircuit, "Future Analysis", "Evaluate whether labelled data can support future machine-learning pattern recognition.", "Future", "future"],
] as const;

export function Capabilities() {
  return <section className="section capabilities-section" aria-labelledby="capabilities-title"><div className="wrap">
    <Reveal><SectionHeading eyebrow="02 — PROJECT OBJECTIVES" title={<><span id="capabilities-title">From physical movement</span> to meaningful awareness.</>} copy="A measured path from sensor inputs toward clearer, transparent monitoring tools." /></Reveal>
    <div className="capability-grid">{capabilities.map(([Icon, title, text, status, tone], index) => <Reveal key={title} delay={index * 0.04}><article className="capability"><div className="capability-head"><Icon size={21} strokeWidth={1.55} /><StatusPill tone={tone}>{status}</StatusPill></div><span className="capability-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
  </div></section>;
}
