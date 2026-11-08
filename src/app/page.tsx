import { ApproachSection } from "@/components/ApproachSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ShowcaseGrid } from "@/components/ShowcaseGrid";
import { SpotlightContainer } from "@/components/SpotlightContainer";
import { initialProjects } from "@/data/projects";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <SpotlightContainer>
        <main id="main-content" className="flex-1">
          <HeroSection />
          <ShowcaseGrid projects={initialProjects} />
          <ApproachSection />
        </main>
      </SpotlightContainer>
      <Footer />
    </>
  );
}
