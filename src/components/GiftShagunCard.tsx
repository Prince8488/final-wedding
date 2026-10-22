import { Gift, Heart, Sparkles } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function GiftShagunCard() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0806] relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#251814] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mx-auto mb-3 sm:mb-4">
            <Gift className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-sans-clean font-semibold block mb-1">
            Blessings &amp; Best Wishes
          </span>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-royal font-bold text-[#fcf6ba] mb-2 sm:mb-3">
            {weddingConfig.gift.title}
          </h3>

          <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/85 leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6">
            {weddingConfig.gift.message}
          </p>

          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#241712] border border-[#d4af37]/30 text-[#d4af37] text-xs sm:text-sm font-serif-royal italic">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#d4af37]" />
            <span>&ldquo;{weddingConfig.gift.quote}&rdquo;</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
