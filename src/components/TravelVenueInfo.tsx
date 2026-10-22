import { useState } from "react";
import {
  MapPin,
  Navigation,
  Plane,
  Train,
  PhoneCall,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function TravelVenueInfo() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const photos = weddingConfig.venue.photos;
  const activePhoto = photos[activePhotoIdx];

  return (
    <section
      id="venue"
      className="py-4 sm:py-20 px-4 sm:px-6 lg:px-8 bg-royal-dark relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Destination {weddingConfig.venue.city}
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide">
            Venue &amp; Travel Guide
          </h2>
          <p className="text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-2">
            Everything you need for a smooth journey to the wedding celebrations in {weddingConfig.venue.city}.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Venue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Left Column: Details & Transit */}
          <div className="lg:col-span-7 bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Wedding Celebration Venue</span>
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
                    <p className="text-xs text-[#f4eae1]/70 leading-relaxed">
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
                    <p className="text-xs text-[#f4eae1]/70 leading-relaxed">
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
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#bf953f] to-[#aa771c] hover:from-[#d4af37] hover:to-[#bf953f] text-[#0f0907] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                Open Google Maps
              </a>

              <a
                href={weddingConfig.venue.phoneHref}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#251814] hover:bg-[#34221b] border border-[#d4af37]/40 text-[#fcf6ba] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#d4af37] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                Call Resort Desk
              </a>
            </div>
          </div>

          {/* Right Column: Real Venue Photo Gallery & Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {/* Main Featured Real Image - Exact 4:3 aspect ratio */}
            <div className="rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-xl relative aspect-[4/3] w-full bg-[#140c09] group">
              <img
                key={activePhoto.url}
                src={activePhoto.url}
                alt={activePhoto.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706] via-transparent to-transparent opacity-80"></div>

              {/* View On Google Maps Tag */}
              <a
                href={weddingConfig.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#180f0c]/90 hover:bg-[#d4af37] text-[#fcf6ba] hover:text-[#0b0706] border border-[#d4af37]/40 text-[10px] font-sans-clean font-semibold tracking-wider uppercase backdrop-blur-md shadow-md transition-all"
              >
                <ExternalLink className="w-3 h-3" />
                Google Maps
              </a>

              {/* Photo Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#180f0c]/90 rounded-2xl border border-[#d4af37]/30 backdrop-blur-md">
                <p className="text-xs font-serif-royal font-bold text-[#fcf6ba]">
                  {activePhoto.title}
                </p>
                <p className="text-[11px] font-sans-clean text-[#d4af37] mt-0.5">
                  Hotel Meenakshi &bull; {weddingConfig.venue.city}
                </p>
              </div>
            </div>

            {/* Real Venue Photo Switcher Tabs - Identical 4:3 thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {photos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`p-1.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    activePhotoIdx === idx
                      ? "border-[#d4af37] bg-[#2a1d17] text-[#fcf6ba] shadow-md shadow-[#d4af37]/20"
                      : "border-[#d4af37]/20 bg-[#170e0b]/80 text-[#f4eae1]/60 hover:border-[#d4af37]/50 hover:text-[#fcf6ba]"
                  }`}
                >
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={p.url}
                      alt={p.label}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-sans-clean font-medium truncate w-full">
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
