import { CuratedWorks } from "@/components/CuratedWorks";
import { EditorialBio } from "@/components/EditorialBio";
import { EditorialHero } from "@/components/EditorialHero";
import { GrandFinaleContact } from "@/components/GrandFinaleContact";
import { Header } from "@/components/Header";
import { TypographicManifesto } from "@/components/TypographicManifesto";
import type React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-primary selection:text-primary-contrast">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col justify-center">
        <EditorialHero />
        <CuratedWorks />
        <TypographicManifesto />
        <EditorialBio />
      </main>
      <GrandFinaleContact />
    </div>
  );
}
