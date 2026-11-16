"use client";

import { Menu, X, Box, LayoutDashboard } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/common/brand-mark";
import { ComingSoonDialog } from "@/components/common/coming-soon-dialog";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["Home", "#home"], ["The Problem", "#problem"], ["The Device", "#device"], ["How It Works", "#architecture"], ["Technology", "#technology"], ["Project Info", "#project-info"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dialog, setDialog] = useState<"3D model" | "Dashboard" | null>(null);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 14); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const close = () => setOpen(false);

  return <>
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <BrandLockup />
        <div className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="nav-future" onClick={() => setDialog("3D model")}><Box size={15} /> <span>Explore 3D Model</span></button>
          <button className="nav-future nav-dashboard" onClick={() => setDialog("Dashboard")}><LayoutDashboard size={15} /> <span>Dashboard</span></button>
          <button className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>
      <AnimatePresence>{open && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
        <button onClick={() => { close(); setDialog("3D model"); }}><Box size={16} /> Explore 3D Model — Coming Soon</button>
        <button onClick={() => { close(); setDialog("Dashboard"); }}><LayoutDashboard size={16} /> Dashboard — Coming Soon</button>
      </motion.div>}</AnimatePresence>
    </header>
    <ComingSoonDialog open={dialog !== null} onClose={() => setDialog(null)} feature={dialog === "Dashboard" ? "The dashboard" : "The interactive 3D model"} />
  </>;
}
