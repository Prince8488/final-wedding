import { useState, useEffect } from "react";
import { Menu, X, MailOpen, Sparkles, Heart } from "lucide-react";
import { weddingConfig } from "../config/wedding";

interface NavbarProps {
  onReopenEnvelope: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export function Navbar({
  onReopenEnvelope,
  petalsEnabled,
  onTogglePetals,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Events", href: "#events" },
    { name: "Venue", href: "#venue" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blessings", href: "#blessings" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#120a08]/90 backdrop-blur-md border-b border-[#d4af37]/30 shadow-xl py-3"
          : "bg-gradient-to-b from-[#0b0706]/90 via-[#0b0706]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#bf953f] to-[#aa771c] p-[1px] shadow-lg shadow-[#d4af37]/20">
            <div className="w-full h-full bg-[#180f0c] rounded-full flex items-center justify-center border border-[#fcf6ba]/30">
              <span className="font-serif-royal font-bold text-[#fcf6ba] text-sm tracking-tighter">
                {weddingConfig.couple.initials}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-script text-xl sm:text-2xl gold-text-gradient font-bold leading-none">
              {weddingConfig.couple.displayNames}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#d4af37]/80 font-sans-clean">
              {weddingConfig.event.shortDate}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-sans-clean font-medium text-[#f4eae1]/80 hover:text-[#fcf6ba] tracking-wider uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Envelope Re-open & Petal Toggle & RSVP CTA) */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onTogglePetals}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1 ${
              petalsEnabled
                ? "border-[#d4af37]/60 bg-[#d4af37]/15 text-[#fcf6ba]"
                : "border-white/10 text-white/50 hover:text-white"
            }`}
            title={
              petalsEnabled ? "Disable Falling Petals" : "Enable Falling Petals"
            }
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden lg:inline font-sans-clean text-[11px]">
              Petals
            </span>
          </button>

          <button
            onClick={onReopenEnvelope}
            className="p-2 rounded-full border border-[#d4af37]/40 bg-[#251814]/80 text-[#d4af37] hover:text-[#fcf6ba] hover:border-[#d4af37] transition-all flex items-center gap-1.5"
            title="View Royal Invitation Card Envelope"
          >
            <MailOpen className="w-3.5 h-3.5" />
            <span className="hidden lg:inline font-sans-clean text-[11px]">
              Card
            </span>
          </button>

          <a
            href="#rsvp"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-[#0f0907] font-sans-clean font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-[#0f0907]" />
            RSVP
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onReopenEnvelope}
            className="p-2 rounded-full border border-[#d4af37]/40 text-[#d4af37]"
            title="Card"
          >
            <MailOpen className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#fcf6ba] hover:text-[#d4af37] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#140b08]/98 border-b border-[#d4af37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-sans-clean uppercase tracking-widest text-[#f4eae1]/90 hover:text-[#d4af37] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                onTogglePetals();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-lg border border-[#d4af37]/40 text-xs font-sans-clean text-[#fcf6ba] flex items-center justify-center gap-1.5 bg-[#251814]"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              {petalsEnabled ? "Petals: On" : "Petals: Off"}
            </button>

            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#0f0907] text-center text-xs font-sans-clean font-bold uppercase"
            >
              Confirm RSVP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
