import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BenefitsLimitations } from "@/components/sections/benefits-limitations";
import { Capabilities } from "@/components/sections/capabilities";
import { DeviceOverview } from "@/components/sections/device-overview";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problem } from "@/components/sections/problem";
import { TechnologyStack } from "@/components/sections/technology-stack";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><Problem /><Capabilities /><DeviceOverview /><HowItWorks /><TechnologyStack /><BenefitsLimitations /><FinalCta /></main><Footer /></>;
}
