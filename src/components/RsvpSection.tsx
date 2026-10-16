import { useState, FormEvent } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle2,
  Ticket,
  X,
  Music,
  UserCheck,
  Utensils,
  Car,
} from "lucide-react";
import { weddingConfig } from "../config/wedding";

interface RsvpTicketData {
  passId: string;
  guestName: string;
  guestCount: number;
  diet: string;
  events: string[];
  accommodation: boolean;
  song: string;
}

export function RsvpSection() {
  const [guestName, setGuestName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [diet, setDiet] = useState(weddingConfig.rsvp.defaultDiet);
  const [accommodation, setAccommodation] = useState(false);
  const [song, setSong] = useState("");

  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    ...weddingConfig.events.map((event) => event.rsvpLabel),
  ]);

  const [ticketData, setTicketData] = useState<RsvpTicketData | null>(null);

  const toggleEvent = (eventName: string) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter((e) => e !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const passId = "RSVP-" + Math.floor(100000 + Math.random() * 900000);
    const passData: RsvpTicketData = {
      passId,
      guestName: guestName.trim(),
      guestCount,
      diet,
      events: selectedEvents.length > 0 ? selectedEvents : ["All Events"],
      accommodation,
      song: song.trim(),
    };

    setTicketData(passData);

    // Fire fireworks celebration confetti
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#d4af37", "#fcf6ba", "#e91e63", "#9c27b0"],
    });
  };

  return (
    <section
      id="rsvp"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090504] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Répondez S&apos;il Vous Plaît
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide">
            Kindly RSVP
          </h2>
          <p className="text-sm font-sans-clean text-[#f4eae1]/80 max-w-lg mx-auto mt-3">
            Please confirm your attendance by {weddingConfig.event.rsvpDeadline}{" "}
            to assist our wedding concierges.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* RSVP Card Form */}
        <div className="bg-[#170e0b]/95 border-2 border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-xs font-sans-clean"
          >
            {/* Guest Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#f4eae1] font-semibold mb-1">
                  Full Guest Name(s) *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g., Vikramaditya & Family"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#241712] border border-[#d4af37]/35 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                  <UserCheck className="w-4 h-4 text-[#d4af37] absolute right-3 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-[#f4eae1] font-semibold mb-1">
                  Phone Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 98765 43210 / email@domain.com"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#241712] border border-[#d4af37]/35 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Total Guest Count & Dietary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#f4eae1] font-semibold mb-1">
                  Total Attending Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-[#241712] border border-[#d4af37]/35 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                >
                  {Array.from(
                    { length: weddingConfig.rsvp.guestLimit },
                    (_, index) => index + 1,
                  ).map((num) => (
                    <option key={num} value={num} className="bg-[#170e0b]">
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#f4eae1] font-semibold mb-1">
                  Dietary Preferences
                </label>
                <div className="relative">
                  <select
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#241712] border border-[#d4af37]/35 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                  >
                    {weddingConfig.rsvp.diets.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-[#170e0b]"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <Utensils className="w-4 h-4 text-[#d4af37] absolute right-3 top-3.5" />
                </div>
              </div>
            </div>

            {/* Events Attending Checkboxes */}
            <div>
              <label className="block text-[#f4eae1] font-semibold mb-2">
                Functions You Will Be Joining Us For:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {weddingConfig.events.map(({ rsvpLabel: ev }) => {
                  const isChecked = selectedEvents.includes(ev);
                  return (
                    <button
                      type="button"
                      key={ev}
                      onClick={() => toggleEvent(ev)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? "border-[#d4af37] bg-[#2d1e18] text-[#fcf6ba]"
                          : "border-white/10 bg-[#1e130f]/60 text-white/50 hover:border-white/20"
                      }`}
                    >
                      <span className="text-[11px] font-medium">{ev}</span>
                      <CheckCircle2
                        className={`w-4 h-4 ${isChecked ? "text-[#d4af37]" : "text-white/20"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accommodation Toggle & Song Request */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#241712] border border-[#d4af37]/25">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs text-[#f4eae1]">
                    Require Hotel &amp; Transfer Help?
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={accommodation}
                  onChange={(e) => setAccommodation(e.target.checked)}
                  className="w-4 h-4 accent-[#d4af37] cursor-pointer"
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Sangeet DJ Song Request (Optional)"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#241712] border border-[#d4af37]/35 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                  <Music className="w-4 h-4 text-[#d4af37] absolute right-3 top-3.5" />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-[#0f0907] font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Ticket className="w-5 h-5" />
              Generate Royal E-Pass &amp; Confirm RSVP
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Pass Modal */}
      {ticketData && (
        <div className="fixed inset-0 z-50 bg-[#070403]/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#180f0c] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
            <button
              onClick={() => setTicketData(null)}
              className="absolute top-4 right-4 text-[#d4af37] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ticket Header */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#fcf6ba] text-[10px] uppercase font-sans-clean tracking-widest mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              RSVP Confirmed &bull; Royal Pass
            </div>

            <h3 className="text-3xl font-script gold-text-gradient font-bold mb-1">
              {weddingConfig.couple.displayNames}&apos;s Wedding Pass
            </h3>
            <p className="text-xs font-serif-royal italic text-[#d4af37]/90 mb-4">
              Pass ID: {ticketData.passId}
            </p>

            {/* Pass Card Summary */}
            <div className="bg-[#251814] p-5 rounded-2xl border border-[#d4af37]/40 text-left space-y-2.5 text-xs font-sans-clean text-[#f4eae1]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#d4af37] font-semibold">
                  Primary Guest:
                </span>
                <span className="font-bold text-[#fcf6ba]">
                  {ticketData.guestName}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#d4af37] font-semibold">
                  Total Attendees:
                </span>
                <span>{ticketData.guestCount} Guest(s)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#d4af37] font-semibold">
                  Dietary Plan:
                </span>
                <span>{ticketData.diet}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#d4af37] font-semibold">
                  Confirmed Functions:
                </span>
                <span className="text-right text-[#fcf6ba]">
                  {ticketData.events.join(", ")}
                </span>
              </div>
              {ticketData.song && (
                <div className="flex justify-between">
                  <span className="text-[#d4af37] font-semibold">
                    Requested Track:
                  </span>
                  <span className="italic">{ticketData.song}</span>
                </div>
              )}
            </div>

            {/* Dummy QR Code graphic */}
            <div className="my-4 flex flex-col items-center">
              <div className="w-24 h-24 bg-white p-2 rounded-xl flex flex-wrap gap-1 justify-center items-center">
                <div className="w-full h-full bg-[#0b0706] rounded flex items-center justify-center text-[#d4af37] text-[10px] font-bold">
                  QR PASS
                </div>
              </div>
              <span className="text-[10px] text-[#d4af37]/70 font-sans-clean mt-1">
                Show at {weddingConfig.venue.name} Welcome Desk
              </span>
            </div>

            <button
              onClick={() => {
                alert(
                  "Royal E-Pass downloaded to your device! We look forward to celebrating with you.",
                );
                setTicketData(null);
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#0f0907] font-bold text-xs uppercase tracking-widest shadow-lg"
            >
              Download / Save Pass
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
