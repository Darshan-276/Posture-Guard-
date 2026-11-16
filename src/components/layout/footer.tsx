"use client";

import { useState } from "react";
import { ArrowUpRight, Box } from "lucide-react";
import { BrandLockup } from "@/components/common/brand-mark";
import { ComingSoonDialog } from "@/components/common/coming-soon-dialog";

export function Footer() {
  const [open, setOpen] = useState(false);
  return <footer className="site-footer">
    <div className="footer-top wrap">
      <div><BrandLockup /><p>Wearable posture monitoring, explored through motion sensing, software analytics, and transparent feedback.</p></div>
      <div className="footer-links"><p>Navigate</p><a href="#problem">The Problem</a><a href="#device">The Device</a><a href="#architecture">Architecture</a><a href="#technology">Technology</a></div>
      <div className="footer-links"><p>Project</p><button onClick={() => setOpen(true)}><Box size={15} /> 3D Model — Coming Soon</button><a href="#project-info"><ArrowUpRight size={15} /> Project status</a></div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Posture Guard</span><span>Engineering prototype · In development</span></div>
    <ComingSoonDialog open={open} onClose={() => setOpen(false)} feature="The interactive 3D model" />
  </footer>;
}
