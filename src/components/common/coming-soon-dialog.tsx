"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function ComingSoonDialog({ open, onClose, feature = "This experience" }: { open: boolean; onClose: () => void; feature?: string }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="dialog-backdrop" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="coming-dialog" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title" aria-describedby="coming-soon-description" onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }} transition={{ duration: 0.2 }}>
            <button ref={closeButton} className="dialog-close" onClick={onClose} aria-label="Close coming soon dialog"><X size={18} /></button>
            <p className="eyebrow"><span />FUTURE PHASE</p>
            <h2 id="coming-soon-title">Coming Soon</h2>
            <p id="coming-soon-description">{feature} is part of a future development phase of Posture Guard.</p>
            <Button className="button button-primary" onClick={onClose}>Close</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
