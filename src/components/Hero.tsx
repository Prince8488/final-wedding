import { GaneshHeader } from "./GaneshHeader";
import { CountdownTimer } from "./CountdownTimer";
import { Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function Hero() {
  const handleAddToCalendar = () => {
    const { couple, event, venue } = weddingConfig;
    const title = encodeURIComponent(`${couple.displayNames}'s Royal Wedding`);
    const details = encodeURIComponent(
      `Join us to celebrate the royal wedding of ${couple.displayNames} at ${venue.shortName}.`,
    );
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    const startDate = event.calendarStart;
    const endDate = event.calendarEnd;

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Gold Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={weddingConfig.hero.image}
          alt={weddingConfig.hero.imageAlt}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Layered Gradient overlays for ultra-readability and rich mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706] via-[#0b0706]/75 to-[#0b0706]/60"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0706]/40 to-[#0b0706]/90"></div>
      </div>

      {/* Decorative Golden Arch Border Frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#d4af37]/25 pointer-events-none z-10 rounded-3xl">
        <div className="absolute -top-px -left-px h-14 w-14 rounded-tl-[2rem] border-l border-t border-[#e0c78f]/80">
          <Sparkles className="absolute -left-1 -top-1 h-4 w-4 text-[#e0c78f]" />
        </div>
        <div className="absolute -top-px -right-px h-14 w-14 rounded-tr-[2rem] border-r border-t border-[#e0c78f]/80">
          <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#e0c78f]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center py-4">
        {/* Sacred Ganesh Header */}
        <GaneshHeader />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e130f]/80 border border-[#d4af37]/40 text-[#fcf6ba] text-xs font-sans-clean mb-4 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
          <span className="tracking-wider uppercase font-semibold text-xs">
            {weddingConfig.hero.tagline}
          </span>
        </div>

        {/* Couple Names Banner */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-script gold-text-gradient py-2 my-2 drop-shadow-2xl">
          {weddingConfig.couple.displayNames}
        </h1>

        {/* Family Blessing Intro */}
        <p className="font-serif-royal italic text-lg sm:text-2xl text-[#f4eae1]/95 max-w-2xl leading-relaxed my-3 font-medium">
          &ldquo;{weddingConfig.hero.invitation}&rdquo;
        </p>

        {/* Date & Location Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-6 text-sm font-sans-clean font-medium text-[#fcf6ba] bg-[#1a0f0c]/85 border border-[#d4af37]/40 py-3 px-6 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-center">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>{weddingConfig.event.displayDate}</span>
          </div>
          <span className="hidden sm:inline text-[#d4af37]/40">&bull;</span>
          <div className="flex items-center justify-center gap-2 text-center">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span className="max-w-[260px] text-left leading-snug">
              {weddingConfig.venue.shortName}
            </span>
          </div>
        </div>

        {/* Countdown Component */}
        <CountdownTimer targetDateStr={weddingConfig.event.countdownTarget} />

        {/* Action Buttons */}
        <div className="flex items-center justify-center mt-6 w-full max-w-md">
          <button
            onClick={handleAddToCalendar}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1d120e] hover:bg-[#2a1b15] border border-[#d4af37]/60 text-[#fcf6ba] font-sans-clean font-semibold text-xs tracking-wider uppercase shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            Add to Calendar
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center mt-6">
        <a
          href="#story"
          className="group flex flex-col items-center gap-1 text-[#d4af37]/80 hover:text-[#fcf6ba] transition-colors"
        >
          <span className="text-xs font-sans-clean uppercase tracking-[0.2em] font-medium">
            Explore Our Journey
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
        </a>
      </div>
    </section>
  );
}
