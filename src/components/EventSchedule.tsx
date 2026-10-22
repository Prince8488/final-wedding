import { Calendar, Clock, Sparkles, Navigation, MapPin } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function EventSchedule() {
  const { couple, events } = weddingConfig;

  const openCalendarForEvent = (ev: (typeof events)[number]) => {
    const title = encodeURIComponent(
      `${ev.name} - ${couple.displayNames} Wedding`,
    );
    const location = encodeURIComponent(`${ev.venue}, ${ev.locationDetails}`);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${ev.calendarParams.start}/${ev.calendarParams.end}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="events"
      className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0806] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            Celebration Itinerary
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide leading-snug">
            Wedding Events &amp; Schedule
          </h2>
          <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-2 sm:mt-3">
            Four days of love, music, tradition, and joyous festivities in{" "}
            {weddingConfig.venue.city}.
          </p>
          <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Compact Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-[#170e0b]/90 border border-[#d4af37]/30 hover:border-[#d4af37]/80 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none rounded-tr-2xl"></div>

              <div>
                {/* Header: Date Pill + Category */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#251814] border border-[#d4af37]/40 text-[#fcf6ba] text-xs font-sans-clean font-semibold tracking-wide">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    {ev.date}
                  </span>
                  <span className="text-[10px] uppercase font-sans-clean font-medium tracking-widest text-[#d4af37]/80">
                    {ev.category === "pre-wedding"
                      ? "Pre-Wedding"
                      : ev.category === "wedding"
                        ? "Main Wedding"
                        : "Reception"}
                  </span>
                </div>

                {/* Event Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-serif-royal font-bold text-[#fcf6ba] group-hover:text-[#d4af37] transition-colors">
                  {ev.name}
                </h3>
                <p className="text-xs font-serif-royal italic text-[#d4af37]/90 mt-0.5 mb-3">
                  {ev.subTitle}
                </p>

                {/* Time & Venue Info */}
                <div className="space-y-2 text-xs font-sans-clean text-[#f4eae1]/85 bg-[#201410]/70 p-3 sm:p-3.5 rounded-xl border border-[#d4af37]/20">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="leading-snug">{ev.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="leading-snug text-[#f4eae1]/75">
                      {ev.venue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 pt-3.5 mt-3.5 border-t border-white/5">
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#281b16] hover:bg-[#38261e] border border-[#d4af37]/30 text-[#fcf6ba] text-xs font-sans-clean font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  Map
                </a>
                <button
                  onClick={() => openCalendarForEvent(ev)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#bf953f] to-[#aa771c] hover:from-[#d4af37] hover:to-[#bf953f] text-[#0f0907] text-xs font-sans-clean font-bold uppercase flex items-center justify-center gap-1.5 shadow transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Save Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
