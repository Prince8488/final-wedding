import { Heart, Sparkles, User, ShieldCheck } from "lucide-react";
import { weddingConfig } from "../config/wedding";

export function CoupleFamily() {
  const inviteToken = new URLSearchParams(window.location.search).get("invite");
  const inviteScenario = inviteToken
    ? weddingConfig.familyInviteTokens[
        inviteToken as keyof typeof weddingConfig.familyInviteTokens
      ]
    : undefined;

  return (
    <section
      id="family"
      className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-royal-dark relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            Family &amp; Lineage
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide leading-snug">
            With Blessings of Our Families
          </h2>
          <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Groom & Bride Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {weddingConfig.families.map((family) => {
            const person = weddingConfig.couple[family.person];
            const scenario = inviteScenario
              ? weddingConfig.familyNameScenarios[inviteScenario][family.person]
              : person;

            return (
              <div
                key={family.role}
                className="bg-[#180f0c]/90 border border-[#d4af37]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 text-center relative overflow-hidden shadow-2xl hover:border-[#d4af37] transition-all"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full p-[2px] bg-gradient-to-br from-[#bf953f] to-[#aa771c] mb-3 sm:mb-4">
                  <div className="w-full h-full rounded-full bg-[#251814] flex items-center justify-center text-[#d4af37]">
                    {family.person === "groom" ? (
                      <User className="w-7 h-7 sm:w-8 sm:h-8" />
                    ) : (
                      <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-[#d4af37]/20" />
                    )}
                  </div>
                </div>

                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-sans-clean font-semibold">
                  {family.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-royal font-bold text-[#fcf6ba] my-1">
                  {scenario.fullName}
                </h3>
                <p className="text-xs font-serif-royal text-[#f4eae1]/80 italic mb-5 sm:mb-6">
                  {family.person === "groom" ? "Son" : "Daughter"} of{" "}
                  {scenario.parents}
                </p>

                <div className="bg-[#241712] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#d4af37]/20 text-xs font-sans-clean text-[#f4eae1]/85 space-y-1.5">
                  <p className="font-semibold text-[#d4af37] uppercase tracking-wider text-[11px] sm:text-xs">
                    {scenario.familyName} Family
                  </p>
                  <p className="leading-relaxed font-serif-royal italic text-xs sm:text-sm">
                    &ldquo;
                    {person.familyMessage.replace(
                      "{{bride}}",
                      weddingConfig.couple.bride.firstName,
                    )}
                    &rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warm Invitation Note */}
        <div className="bg-gradient-to-r from-[#211410] via-[#2a1b15] to-[#211410] border border-[#d4af37]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center shadow-xl">
          <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37] mx-auto mb-2.5 sm:mb-3" />
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif-royal font-bold text-[#fcf6ba] mb-2 sm:mb-3">
            Your Presence is Our Greatest Gift
          </h4>
          <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/85 max-w-2xl mx-auto leading-relaxed">
            As we step into this beautiful lifetime of love and companionship,
            your presence, prayers, and heartfelt blessings will make our
            celebration complete.
          </p>
        </div>
      </div>
    </section>
  );
}
