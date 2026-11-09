import { ApproachSection } from "@/components/ApproachSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PhysicsTotemArena } from "@/components/PhysicsTotemArena";
import { ShowcaseGrid } from "@/components/ShowcaseGrid";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SpotlightContainer } from "@/components/SpotlightContainer";
import { WingParticlesCanvas } from "@/components/WingParticlesCanvas";
import { initialProjects } from "@/data/projects";
import React from "react";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <WingParticlesCanvas />
      <Navbar />
      <SpotlightContainer>
        <main id="main-content" className="flex-1">
          <HeroSection />
          <ShowcaseGrid projects={initialProjects} />
          <PhysicsTotemArena />
          <ApproachSection />
        </main>
      </SpotlightContainer>
      <Footer />
    </SmoothScrollProvider>
  );
}
