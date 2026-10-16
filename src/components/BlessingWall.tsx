import { useState, FormEvent } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, MessageSquare, Send, User } from "lucide-react";
import { weddingConfig } from "../config/wedding";

interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
}

export function BlessingWall() {
  const [blessings, setBlessings] = useState<Blessing[]>(
    weddingConfig.blessings.map((blessing) => ({
      ...blessing,
      message: blessing.message
        .replaceAll("{{bride}}", weddingConfig.couple.bride.firstName)
        .replaceAll("{{groom}}", weddingConfig.couple.groom.firstName)
        .replaceAll("{{hashtag}}", weddingConfig.couple.hashtag),
    })),
  );

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation.trim() || "Dear Well-Wisher",
      message: message.trim(),
      date: "Just now",
    };

    setBlessings([newBlessing, ...blessings]);
    setName("");
    setRelation("");
    setMessage("");
    setSubmitted(true);

    // Fire floral celebration confetti
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#d4af37", "#e91e63", "#ffeb3b", "#4caf50"],
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="blessings"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-dark relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Guestbook &amp; Wishes
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide">
            Blessings Wall &amp; Wishes
          </h2>
          <p className="text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-3">
            Leave your warm love notes and prayers for the couple.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Blessing Submission Form */}
          <div className="lg:col-span-5 bg-[#180f0c]/95 border border-[#d4af37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-[#d4af37] mb-4">
              <MessageSquare className="w-5 h-5" />
              <h3 className="text-xl font-serif-royal font-bold text-[#fcf6ba]">
                Send Your Blessings
              </h3>
            </div>

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-green-900/40 border border-green-500/50 text-green-200 text-xs font-sans-clean flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-400 fill-green-400" />
                <span>
                  Thank you! Your heartfelt blessing has been posted to the
                  wall.
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-xs font-sans-clean"
            >
              <div>
                <label className="block text-[#f4eae1]/80 mb-1 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rohit & Sunita Gupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#241712] border border-[#d4af37]/30 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#f4eae1]/80 mb-1 font-medium">
                  Relationship / City
                </label>
                <input
                  type="text"
                  placeholder="e.g., Groom's Friend • Bengaluru"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#241712] border border-[#d4af37]/30 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#f4eae1]/80 mb-1 font-medium">
                  Your Blessing / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={`Write your wishes for ${weddingConfig.couple.displayNames}...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#241712] border border-[#d4af37]/30 text-[#fcf6ba] focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-[#0f0907] font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Post Blessing
              </button>
            </form>
          </div>

          {/* Messages Stream */}
          <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-1">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="bg-[#180f0c]/80 border border-[#d4af37]/25 rounded-2xl p-5 shadow-lg backdrop-blur-sm hover:border-[#d4af37]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#251814] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-xs font-bold font-serif-royal">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif-royal font-bold text-[#fcf6ba]">
                        {b.name}
                      </h4>
                      <p className="text-[10px] font-sans-clean text-[#d4af37]">
                        {b.relation}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#f4eae1]/50 font-sans-clean">
                    {b.date}
                  </span>
                </div>

                <p className="text-xs font-serif-royal italic text-[#f4eae1]/90 leading-relaxed pl-10">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
