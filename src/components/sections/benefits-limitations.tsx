import { Check, Info } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";

const benefits = ["Better visibility into posture-related patterns", "Organized monitoring sessions", "Historical comparison of measurements", "Understandable data visualizations", "A foundation for transparent feedback and future analysis"];
const limits = ["Hardware integration and enclosure design are ongoing", "Calibration and posture-classification methodology require validation", "Communication protocol is still being finalized", "Recommendations depend on validated sensor measurements", "Machine-learning analysis requires representative labelled data", "Posture Guard is not a medical device and does not provide medical diagnosis"];

export function BenefitsLimitations() {
  return <section id="project-info" className="section info-section" aria-labelledby="info-title"><div className="wrap">
    <Reveal><SectionHeading eyebrow="06 — PROJECT INFO" title={<><span id="info-title">Designed for awareness.</span> Built with transparency.</>} copy="Posture Guard is an engineering prototype. Its scope, limitations, and development status are made clear at every step." /></Reveal>
    <div className="info-columns"><Reveal><article className="info-column"><div className="info-head"><Check size={20} /><div><p>INTENDED BENEFITS</p><h3>What the project aims to enable</h3></div></div><ul>{benefits.map((item) => <li key={item}><i />{item}</li>)}</ul></article></Reveal><Reveal delay={0.08}><article className="info-column limitations"><div className="info-head"><Info size={20} /><div><p>CURRENT LIMITATIONS</p><h3>What remains to be validated</h3></div></div><ul>{limits.map((item) => <li key={item}><i />{item}</li>)}</ul></article></Reveal></div>
  </div></section>;
}
