import { useState } from "react";
import { Sparkles, Maximize2, X } from "lucide-react";
import { weddingConfig } from "../config/wedding";

interface PhotoItem {
  id: number;
  category: "prewedding" | "venue" | "decor";
  title: string;
  subtitle: string;
  url: string;
}

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = weddingConfig.gallery;

  return (
    <section
      id="gallery"
      className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0706] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-sans-clean font-semibold mb-2">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            Visual Memories
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-royal font-bold text-[#fcf6ba] tracking-wide leading-snug">
            Photo Gallery &amp; Glimpses
          </h2>
          <p className="text-xs sm:text-sm font-sans-clean text-[#f4eae1]/80 max-w-xl mx-auto mt-2 sm:mt-3">
            Moments captured in time as we prepare for our royal wedding day.
          </p>
          <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="relative h-72 sm:h-80 md:h-72 lg:h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-xl cursor-pointer group hover:border-[#d4af37] transition-all"
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0706] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#180f0c]/80 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0f0907] transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#070403]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#170e0b] border border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0b0706]/80 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0b0706] flex items-center justify-center transition-colors border border-[#d4af37]/40"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              decoding="async"
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
