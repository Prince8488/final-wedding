import { Calendar, Clock, Sparkles, Navigation } from "lucide-react";
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
      className="py-4 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0806] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Celebration Itinerary
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide">
            Wedding Events &amp; Schedule
          </h2>
          <p className="text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-3">
            Four days of love, music, tradition, and joyous festivities in{" "}
            {weddingConfig.venue.city}.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-[#d4af37]/75 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Event Hero Banner */}
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180f0c] via-[#180f0c]/40 to-transparent"></div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#180f0c]/90 border border-[#d4af37]/50 text-[#d4af37] text-xs uppercase font-sans-clean font-semibold tracking-wider">
                    {ev.date}
                  </div>
                </div>

                {/* Event Body Info */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-royal font-bold text-[#fcf6ba] group-hover:text-[#d4af37] transition-colors">
                      {ev.name}
                    </h3>
                    <p className="text-xs font-serif-royal italic text-[#d4af37]/90 mt-0.5">
                      {ev.subTitle}
                    </p>
                  </div>

                  {/* Time & Venue info */}
                  <div className="space-y-2 text-xs font-sans-clean text-[#f4eae1]/90 bg-[#251814]/70 p-4 rounded-2xl border border-[#d4af37]/20">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{ev.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#281b16] hover:bg-[#38261e] border border-[#d4af37]/30 text-[#fcf6ba] text-xs font-sans-clean font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                  Map &amp; Directions
                </a>

                <button
                  onClick={() => openCalendarForEvent(ev)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#0f0907] text-xs font-sans-clean font-bold uppercase flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
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
