import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import FeatureGridSection from "@/components/FeatureGridSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CodeSamplesSection from "@/components/CodeSamplesSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import PricingSection from "@/components/PricingSection";
import FounderSection from "@/components/FounderSection";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FooterSection from "@/components/FooterSection";

const DESCRIPTION =
  "Multi-tenant Redis over HTTP. Isolated namespaces, per-project API keys, and a REST endpoint for every Redis operation. Free while in beta.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Central Redis — Multi-Tenant Redis API Platform" },
      { name: "description", content: DESCRIPTION },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <HeroSection />
        <ProductShowcaseSection />
        <FeatureGridSection />
        <HowItWorksSection />
        <CodeSamplesSection />
        <PlaygroundSection />
        <PricingSection />
        <FounderSection />
        <FaqSection />
        <RoadmapSection />
        <FinalCtaSection />
        <FooterSection />
      </main>
    </>
  );
}
