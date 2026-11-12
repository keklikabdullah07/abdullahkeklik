import { ApproachSection } from "@/components/ApproachSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { PhysicsTotemArena } from "@/components/PhysicsTotemArena";
import { Preloader } from "@/components/Preloader";
import { ShowcaseGrid } from "@/components/ShowcaseGrid";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SpotlightContainer } from "@/components/SpotlightContainer";
import { WingParticlesCanvas } from "@/components/WingParticlesCanvas";
import { initialProjects } from "@/data/projects";
import React from "react";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <NoiseOverlay />
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
