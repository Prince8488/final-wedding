import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { EnvelopeModal } from "./components/EnvelopeModal";
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

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState<boolean>(true);
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#0b0706] text-[#f4eae1] font-sans-clean selection:bg-[#d4af37] selection:text-[#0f0907] relative overflow-x-hidden">
      {/* Interactive Unboxing Envelope Modal */}
      <EnvelopeModal
        isOpen={showEnvelope}
        onOpen={() => setShowEnvelope(false)}
      />

      {/* Ambient Floating Marigold & Rose Petals */}
      <PetalOverlay enabled={petalsEnabled} />

      {/* Sticky Navigation Header */}
      <Navbar
        onReopenEnvelope={() => setShowEnvelope(true)}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />

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
