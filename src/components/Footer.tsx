import { Heart, Share2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { weddingConfig } from "../config/wedding";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `You are cordially invited to celebrate the royal wedding of ${weddingConfig.couple.displayNames} on ${weddingConfig.event.shortDate} in ${weddingConfig.venue.city}! View digital invitation: ${window.location.href}`,
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="bg-[#080403] border-t border-[#d4af37]/30 py-12 px-4 sm:px-6 lg:px-8 relative text-center text-xs font-sans-clean">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Monogram */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#bf953f] to-[#aa771c] p-[1px] shadow-lg mb-2">
            <div className="w-full h-full bg-[#180f0c] rounded-full flex items-center justify-center text-[#fcf6ba] font-serif-royal font-bold text-base">
              {weddingConfig.couple.initials}
            </div>
          </div>
          <h3 className="text-3xl font-script gold-text-gradient font-bold">
            {weddingConfig.couple.displayNames}
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mt-1">
            {weddingConfig.event.footerDate} &bull; {weddingConfig.venue.city}
          </p>
        </div>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleShareWhatsApp}
            className="px-4 py-2 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share on WhatsApp
          </button>

          <button
            onClick={handleCopyLink}
            className="px-4 py-2 rounded-full bg-[#251814] border border-[#d4af37]/40 text-[#fcf6ba] hover:border-[#d4af37] text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
            )}
            {copied ? "Link Copied!" : "Copy Invite Link"}
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#f4eae1]/70 text-[11px] uppercase tracking-wider font-medium pt-2">
          <a href="#story" className="hover:text-[#d4af37]">
            Our Story
          </a>
          <a href="#events" className="hover:text-[#d4af37]">
            Itinerary
          </a>
          <a href="#venue" className="hover:text-[#d4af37]">
            Venue
          </a>
          <a href="#gallery" className="hover:text-[#d4af37]">
            Gallery
          </a>
          <a href="#blessings" className="hover:text-[#d4af37]">
            Blessings
          </a>
          <a href="#rsvp" className="hover:text-[#d4af37]">
            RSVP
          </a>
        </div>

        <div className="pt-6 border-t border-white/5 text-[#f4eae1]/40 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>{weddingConfig.couple.hashtag} &bull; All Rights Reserved</p>
          <p className="flex items-center gap-1">
            Created with{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for{" "}
            {weddingConfig.couple.displayNames}
          </p>
        </div>
      </div>
    </footer>
  );
}
