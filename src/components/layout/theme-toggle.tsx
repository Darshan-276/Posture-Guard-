"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return <button className="theme-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} title={`Switch to ${isDark ? "light" : "dark"} theme`}>
    <motion.span animate={{ rotate: isDark ? 0 : 180, scale: 1 }} transition={{ duration: 0.25 }}>
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </motion.span>
  </button>;
}
