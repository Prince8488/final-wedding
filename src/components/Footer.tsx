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
    <footer className="bg-[#080403] border-t border-[#d4af37]/30 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative text-center text-xs font-sans-clean">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Share Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={handleShareWhatsApp}
            className="px-5 py-2.5 rounded-full bg-[#128c7e] hover:bg-[#075e54] text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share on WhatsApp
          </button>

          <button
            onClick={handleCopyLink}
            className="px-5 py-2.5 rounded-full bg-[#251814] border border-[#d4af37]/40 text-[#fcf6ba] hover:border-[#d4af37] text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
            )}
            {copied ? "Link Copied!" : "Copy Invite Link"}
          </button>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 text-[#f4eae1]/40 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
          <p>All Rights Reserved</p>
          <p className="flex items-center gap-1.5 justify-center">
            Created with{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for{" "}
            {weddingConfig.couple.displayNames}
          </p>
        </div>
      </div>
    </footer>
  );
}
