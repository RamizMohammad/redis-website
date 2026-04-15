import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatItDoesSection from "@/components/WhatItDoesSection";
import FeatureGridSection from "@/components/FeatureGridSection";
import FounderSection from "@/components/FounderSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Central Redis — Multi-Tenant Redis API Platform" },
      {
        name: "description",
        content:
          "Redis for multiple projects, one clean control layer. Isolated storage, simple API access, and admin control — without managing Redis infrastructure.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <WhatItDoesSection />
        <FeatureGridSection />
        <FounderSection />
        <ArchitectureSection />
        <RoadmapSection />
        <FooterSection />
      </main>
    </>
  );
}
