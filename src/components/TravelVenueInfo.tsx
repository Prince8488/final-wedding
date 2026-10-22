import {
  MapPin,
  Navigation,
  Plane,
  Train,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function TravelVenueInfo() {
  return (
    <section
      id="venue"
      className="py-4 sm:py-20 px-4 sm:px-6 lg:px-8 bg-royal-dark relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Destination {weddingConfig.venue.city}
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide">
            Venue &amp; Travel Guide
          </h2>
          <p className="text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-3">
            Everything you need for a smooth journey to the City of Lakes.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Venue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <div className="lg:col-span-7 bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-3xl p-4 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Primary Celebration Palace</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-royal font-bold text-[#fcf6ba] mb-2">
                {weddingConfig.venue.name}
              </h3>
              <p className="text-xs font-sans-clean text-[#f4eae1]/80 mb-6 leading-relaxed">
                {weddingConfig.venue.address}. {weddingConfig.venue.description}
              </p>

              {/* Transit Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean">
                <div className="p-4 rounded-2xl bg-[#241712] border border-[#d4af37]/20 flex items-start gap-3">
                  <Plane className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#fcf6ba] mb-0.5">
                      By Air (BHO)
                    </h4>
                    <p className="text-xs text-[#f4eae1]/70">
                      {weddingConfig.venue.airport}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#241712] border border-[#d4af37]/20 flex items-start gap-3">
                  <Train className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#fcf6ba] mb-0.5">
                      By Rail (NDPM)
                    </h4>
                    <p className="text-xs text-[#f4eae1]/70">
                      {weddingConfig.venue.rail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Action Button */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={weddingConfig.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#0f0907] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Open Google Maps
              </a>

              <a
                href={weddingConfig.venue.phoneHref}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#251814] border border-[#d4af37]/40 text-[#fcf6ba] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#d4af37]"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                Call Resort Desk
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-xl relative min-h-[300px]">
            <img
              src={weddingConfig.venue.image}
              alt={weddingConfig.venue.imageAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706] via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#180f0c]/90 rounded-2xl border border-[#d4af37]/30 backdrop-blur-md">
              <p className="text-xs font-serif-royal font-semibold text-[#fcf6ba]">
                {weddingConfig.venue.name} Lake Reflection
              </p>
              <p className="text-xs font-sans-clean text-[#d4af37]">
                {weddingConfig.venue.city}, {weddingConfig.venue.region}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
