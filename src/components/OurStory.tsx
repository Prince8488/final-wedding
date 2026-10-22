import { Heart, Sparkles, MapPin } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function OurStory() {
  const { couple, story } = weddingConfig;

  return (
    <section
      id="story"
      className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-royal-dark"
    >
      {/* Decorative background mandala ambient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            Our Love Story
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide leading-snug">
            How Two Souls Became One
          </h2>
          <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Featured Story Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-6 sm:mb-12 lg:mb-16 bg-[#170e0b]/80 border border-[#d4af37]/30 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-sans-clean font-semibold">
              Meet The Couple
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-royal text-[#fcf6ba] font-bold">
              {couple.displayNames}
            </h3>
            <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/85 leading-relaxed">
              {story.introduction}
            </p>
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#251814] border border-[#d4af37]/20 flex items-start gap-3">
              <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-[#d4af37] fill-[#d4af37]/20 shrink-0 mt-0.5" />
              <blockquote className="text-xs sm:text-sm font-serif-royal italic text-[#f4eae1]/90 leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl group">
              <img
                src={story.milestones[0].image}
                alt={couple.displayNames}
                loading="lazy"
                decoding="async"
                className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 bg-[#170e0b]/90 backdrop-blur-md rounded-xl border border-[#d4af37]/30 text-center">
                <p className="text-xs font-serif-royal font-semibold text-[#fcf6ba]">
                  {couple.displayNames} &bull; Pre-Wedding Celebration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Milestones */}
        {/* <div className="relative border-l-2 border-[#d4af37]/30 ml-4 sm:ml-32 space-y-12 py-4">
          {story.milestones.map((item, idx) => (
            <div key={idx} className="relative group pl-6 sm:pl-10">

              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#180f0c] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0f0907] transition-all duration-300 shadow-lg">
                <Heart className="w-3.5 h-3.5" />
              </div>


              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#251814] border border-[#d4af37]/40 text-[#d4af37] text-xs font-sans-clean font-semibold mb-2">
                <span>{item.year}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1 text-[#f4eae1]/70">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  {item.location}
                </span>
              </div>

  
              <div className="bg-[#170e0b]/70 border border-[#d4af37]/25 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-sm group-hover:border-[#d4af37]/60 transition-all">
                <h4 className="text-xl sm:text-2xl font-serif-royal font-bold text-[#fcf6ba] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/80 leading-relaxed">
                  {item.description
                    .replaceAll("{{groom}}", couple.groom.firstName)
                    .replaceAll("{{bride}}", couple.bride.firstName)}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
