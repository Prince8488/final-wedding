import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";
import { weddingConfig } from "../config/wedding";

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function EnvelopeModal({ isOpen, onOpen }: EnvelopeModalProps) {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Fire golden royal confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#d4af37", "#fcf6ba", "#aa771c", "#e91e63", "#ffeb3b"],
    });

    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070403]/95 backdrop-blur-xl p-4 transition-all duration-700">
      <div
        className={`relative w-full max-w-lg transition-all duration-700 transform ${
          isOpening ? "scale-105 opacity-0 rotate-3" : "scale-100 opacity-100"
        }`}
      >
        {/* Royal Card Border Frame */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] shadow-2xl shadow-[#d4af37]/20">
          <div className="bg-[#180f0c] rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden flex flex-col items-center border border-[#d4af37]/30">
            {/* Corner Decorative Motifs */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/60"></div>
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/60"></div>
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/60"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/60"></div>

            {/* Ganesh Motif Header */}
            <div className="text-center mb-4">
              <span className="text-xl sm:text-2xl font-serif-royal text-[#d4af37] tracking-widest block font-bold">
                ॐ श्री गणेशाय नमः
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37]/70 font-sans-clean mt-1 block">
                Together With Their Families
              </span>
            </div>

            {/* Subheading */}
            <p className="text-xs font-serif-royal italic text-[#f4eae1]/80 max-w-xs mb-6">
              Request the honour of your presence at the royal wedding
              celebration of
            </p>

            {/* Main Names */}
            <div className="my-2 space-y-1">
              <h1 className="text-4xl sm:text-5xl font-script gold-text-gradient py-1">
                {weddingConfig.couple.displayNames}
              </h1>
              <p className="text-xs font-sans-clean text-[#d4af37] font-semibold tracking-widest uppercase">
                {weddingConfig.couple.hashtag}
              </p>
            </div>

            <p className="text-sm font-serif-royal text-[#f4eae1]/90 mt-4 mb-8">
              {weddingConfig.event.footerDate} &bull;{" "}
              {weddingConfig.venue.shortName}
            </p>

            {/* Interactive Wax Seal Button */}
            <div
              className="relative my-4 group cursor-pointer"
              onClick={handleOpenInvitation}
            >
              <div className="absolute -inset-4 bg-[#d4af37]/20 rounded-full blur-md group-hover:bg-[#d4af37]/30 transition-all"></div>

              <button className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#800020] via-[#a3122c] to-[#4a0011] border-2 border-[#fcf6ba] shadow-2xl shadow-[#800020]/60 flex flex-col items-center justify-center transition-transform duration-300 transform group-hover:scale-105 active:scale-95 text-[#fcf6ba]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#fcf6ba]/40 flex flex-col items-center justify-center p-1 bg-[#5e0117]/50">
                  <span className="text-xs font-serif-royal font-bold tracking-widest text-[#fcf6ba]">
                    {weddingConfig.couple.initials}
                  </span>
                  <Heart className="w-4 h-4 text-[#fcf6ba] fill-[#fcf6ba]/80 my-0.5" />
                  <span className="text-[9px] uppercase tracking-tighter text-[#fcf6ba]/90 font-sans-clean">
                    SEAL
                  </span>
                </div>
              </button>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#d4af37] font-sans-clean font-medium animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Tap the Wax Seal to Open Your Invitation</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
