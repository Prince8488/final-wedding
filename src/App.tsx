import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { PetalOverlay } from "./components/PetalOverlay";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { EventSchedule } from "./components/EventSchedule";
import { CoupleFamily } from "./components/CoupleFamily";
import { Gallery } from "./components/Gallery";
import { BlessingWall } from "./components/BlessingWall";
import { RsvpSection } from "./components/RsvpSection";
import { TravelVenueInfo } from "./components/TravelVenueInfo";
import { GiftShagunCard } from "./components/GiftShagunCard";
import { Footer } from "./components/Footer";
import { AudioPlayer } from "./components/AudioPlayer";
import { weddingConfig } from "./config/wedding";

export default function App() {
  useEffect(() => {
    const inviteToken = new URLSearchParams(window.location.search).get("invite");
    if (inviteToken && inviteToken in weddingConfig.familyInviteTokens) {
      const scenarioKey =
        weddingConfig.familyInviteTokens[
          inviteToken as keyof typeof weddingConfig.familyInviteTokens
        ];
      const family = weddingConfig.familyNameScenarios[scenarioKey];
      if (family) {
        document.title = `Prince & Meenakshi's Wedding — Blessings of ${family.groom.familyName} Family`;
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0706] text-[#f4eae1] font-sans-clean selection:bg-[#d4af37] selection:text-[#0f0907] relative overflow-x-hidden">
      {/* Ambient Floating Marigold & Rose Petals */}
      <PetalOverlay enabled />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Website Sections */}
      <main>
        <Hero />
        <OurStory />
        <EventSchedule />
        <CoupleFamily />
        <Gallery />
        {/* <BlessingWall />
        <RsvpSection /> */}
        <TravelVenueInfo />
        <GiftShagunCard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ambient Classical Audio Raga Synthesizer Control */}
      <AudioPlayer />
    </div>
  );
}
