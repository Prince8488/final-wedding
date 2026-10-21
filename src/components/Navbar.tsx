import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Story", href: "#story" },
    { name: "Events", href: "#events" },
    { name: "Love", href: "#family" },
    { name: "Memories", href: "#gallery" },
  ];

  if (!isScrolled) return null;

  return (
    <header className="pointer-events-none fixed top-3 left-0 right-0 z-40 flex justify-center px-3 animate-in slide-in-from-top duration-200">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto flex max-w-[calc(100vw-1.5rem)] items-center gap-3 overflow-x-auto rounded-full border border-[#c9aa7d]/80 bg-[#fffaf3]/95 px-4 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.2)] backdrop-blur-md max-[360px]:gap-2 max-[360px]:px-3 sm:max-w-none sm:gap-6 sm:px-6 sm:py-3"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 py-1 text-[10px] font-sans-clean font-medium uppercase tracking-[0.14em] text-[#874e51] transition-colors hover:text-[#481c26] max-[360px]:text-[9px] max-[360px]:tracking-[0.1em] sm:text-[11px] sm:tracking-[0.18em]"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
