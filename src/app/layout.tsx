import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Posture Guard | Wearable Posture Monitoring Project",
  description: "Explore Posture Guard, an engineering project developing a wearable posture-monitoring concept through motion sensing, software analytics, and data-driven feedback.",
  openGraph: { title: "Posture Guard | Wearable Posture Monitoring Project", description: "A wearable posture-monitoring engineering project built around motion sensing, analytics, and transparent feedback." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={inter.variable}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>{children}</ThemeProvider></body></html>;
}
