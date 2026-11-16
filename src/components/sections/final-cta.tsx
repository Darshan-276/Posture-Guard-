"use client";

import { ArrowDownRight, Box } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ComingSoonDialog } from "@/components/common/coming-soon-dialog";

export function FinalCta() {
  const [open, setOpen] = useState(false);
  return <section className="final-cta"><div className="wrap final-cta-inner"><p className="eyebrow"><span />POSTURE GUARD / ENGINEERING PROTOTYPE</p><h2>A more informed approach<br />to posture awareness.</h2><p>Explore the engineering behind Posture Guard and follow the development of a wearable system built to make posture-related information more understandable.</p><div className="hero-actions"><motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="button button-primary" href="#project-info">Explore the Project <ArrowDownRight size={17} /></motion.a><motion.button whileHover={{ x: 2 }} className="button button-quiet" onClick={() => setOpen(true)}><Box size={16} /> 3D Experience — Coming Soon</motion.button></div></div><ComingSoonDialog open={open} onClose={() => setOpen(false)} feature="The interactive 3D experience" /></section>;
}
