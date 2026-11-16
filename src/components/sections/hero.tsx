"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { DevicePreviewPlaceholder } from "@/components/common/device-preview-placeholder";

export function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span />HARDWARE × SOFTWARE × MOTION INTELLIGENCE</p>
        <h1 id="hero-title">Build awareness.<br /><em>Understand your posture.</em></h1>
        <p className="hero-description">Posture Guard is a wearable sensing project exploring how motion data can make everyday posture patterns easier to understand through monitoring, analytics, and actionable feedback.</p>
        <div className="hero-actions">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="button button-primary" href="#device">Explore the Project <ArrowDownRight size={17} /></motion.a>
          <motion.a whileHover={{ x: 2 }} className="button button-quiet" href="#architecture">Discover How It Works <ArrowRight size={16} /></motion.a>
        </div>
        <p className="hero-status"><i />ENGINEERING PROTOTYPE · IN DEVELOPMENT</p>
      </div>
      <div className="hero-visual"><DevicePreviewPlaceholder /></div>
    </div>
    <div className="hero-rule wrap"><span>01 / 09</span><span>SCROLL TO EXPLORE</span><i /></div>
  </section>;
}
