import { Braces, CircuitBoard, Database, Layers3, Sparkles } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { StatusPill } from "@/components/common/status-pill";

const stacks = [
  [Braces, "Frontend", "Next.js · React · TypeScript · Tailwind CSS · GSAP · Motion", "Website being developed", "development"],
  [CircuitBoard, "Hardware", "ESP32 · MPU6050 · Supporting electronic components", "Prototype development", "development"],
  [Layers3, "Backend", "Python · FastAPI", "Planned", "planned"],
  [Database, "Database", "Supabase · PostgreSQL", "Planned", "planned"],
  [Sparkles, "Intelligence", "Rule-based recommendations · Future ML analysis · Data-driven feedback", "Planned / Future", "future"],
] as const;

export function TechnologyStack() {
  return <section id="technology" className="section technology-section" aria-labelledby="technology-title"><div className="wrap tech-layout">
    <Reveal><SectionHeading eyebrow="05 — TECHNOLOGY STACK" title={<><span id="technology-title">Engineered across</span> hardware and software.</>} copy="Each layer has a defined role in the roadmap, with integration progressing by validated phases." /></Reveal>
    <div className="tech-list">{stacks.map(([Icon, title, technologies, status, tone], index) => <Reveal key={title} delay={index * 0.05}><article className="tech-row"><div className="tech-icon"><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{technologies}</p><StatusPill tone={tone}>{status}</StatusPill></article></Reveal>)}</div>
  </div></section>;
}
