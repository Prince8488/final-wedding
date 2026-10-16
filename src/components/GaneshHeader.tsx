export function GaneshHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center my-4 py-2">
      {/* Golden Mandala Frame Icon */}
      <div className="relative flex items-center justify-center mb-3">
        <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#1a0f0b]">
          <span className="text-2xl font-serif-royal gold-text-gradient font-bold select-none">
            ॐ
          </span>
        </div>
        <div className="absolute -inset-2 rounded-full border border-dashed border-[#d4af37]/20 animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>

      <h2 className="text-xl sm:text-2xl font-serif-royal font-bold text-[#d4af37] tracking-widest">
        ॐ श्री गणेशाय नमः
      </h2>
      <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#d4af37]/70 font-sans-clean mt-1">
        Vakratunda Mahakaya Surya Koti Samaprabha
      </p>

      {/* Decorative Line Accent */}
      <div className="flex items-center gap-3 my-3 w-48 sm:w-64">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
      </div>
    </div>
  );
}
