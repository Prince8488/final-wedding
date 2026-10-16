import { Gift, Heart, Sparkles } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function GiftShagunCard() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0e0806] relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="w-14 h-14 rounded-full bg-[#251814] border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mx-auto mb-4">
            <Gift className="w-7 h-7" />
          </div>

          <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-sans-clean font-semibold block mb-1">
            Blessings &amp; Best Wishes
          </span>

          <h3 className="text-3xl font-serif-royal font-bold text-[#fcf6ba] mb-3">
            {weddingConfig.gift.title}
          </h3>

          <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/85 leading-relaxed max-w-xl mx-auto mb-6">
            {weddingConfig.gift.message}
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#241712] border border-[#d4af37]/30 text-[#d4af37] text-xs font-serif-royal italic">
            <Heart className="w-4 h-4 fill-[#d4af37]" />
            <span>&ldquo;{weddingConfig.gift.quote}&rdquo;</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
