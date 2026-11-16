import { Eye, LineChart, ScanSearch } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";

const points = [
  [Eye, "Patterns can remain unnoticed", "Everyday routines make gradual posture-related changes difficult to observe in the moment."],
  [LineChart, "Context is often missing", "A single observation offers little context without a way to compare sessions over time."],
  [ScanSearch, "Feedback should be understandable", "Useful monitoring needs clear visual summaries, not opaque measurements or unsupported conclusions."],
] as const;

export function Problem() {
  return <section id="problem" className="section problem-section" aria-labelledby="problem-title"><div className="wrap problem-layout">
    <Reveal><SectionHeading eyebrow="01 — THE PROBLEM" title={<><span id="problem-title">Posture habits are</span> easy to overlook.</>} copy="Long periods of sitting and repetitive daily routines can make posture patterns difficult to notice. Without a consistent way to observe movement over time, it can be challenging to understand how posture changes throughout everyday activities." /></Reveal>
    <div className="problem-points">{points.map(([Icon, title, text], index) => <Reveal key={title} delay={index * 0.07}><article className="editorial-point"><span className="point-index">0{index + 1}</span><Icon size={20} strokeWidth={1.55} /><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div>
  </div></section>;
}
