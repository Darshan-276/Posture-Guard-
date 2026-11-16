import { BarChart3, Bluetooth, Brain, Cable, CloudCog, Cpu, Database, Radar } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";

const stages = [
  [Radar, "Sensor Layer", "Captures posture-related motion and orientation measurements."],
  [Cpu, "Microcontroller", "Processes and prepares sensor readings."],
  [Bluetooth, "Communication", "Transmits readings; method is still being finalized."],
  [Cable, "API Layer", "Receives and validates incoming readings."],
  [Database, "Database", "Stores users, devices, readings, and sessions."],
  [BarChart3, "Analytics", "Summarizes posture-related monitoring states."],
  [CloudCog, "Dashboard", "Presents metrics, session summaries, and trends."],
  [Brain, "Recommendations", "Generates transparent feedback from validated data."],
] as const;

export function HowItWorks() {
  return <section id="architecture" className="section architecture-section" aria-labelledby="architecture-title"><div className="wrap">
    <Reveal><SectionHeading eyebrow="04 — HOW IT WORKS" title={<><span id="architecture-title">From sensor readings to</span> understandable feedback.</>} copy="A proposed target architecture for translating measurements into clear, traceable information. The full data pipeline is not yet implemented." /></Reveal>
    <div className="pipeline" aria-label="Proposed architecture: sensor layer, microcontroller, communication layer, API layer, database, analytics, dashboard, and recommendation engine.">{stages.map(([Icon, name, description], index) => <Reveal key={name} delay={index * 0.035} className="pipeline-reveal"><article className="pipeline-stage"><div className="pipeline-node"><Icon size={20} strokeWidth={1.55} /></div><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{description}</p></article></Reveal>)}</div>
    <p className="pipeline-note">PROPOSED TARGET ARCHITECTURE <i /> COMMUNICATION PROTOCOL IN EVALUATION</p>
  </div></section>;
}
