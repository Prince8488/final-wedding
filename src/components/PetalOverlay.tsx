import { useMemo } from "react";

interface PetalOverlayProps {
  enabled?: boolean;
}

export function PetalOverlay({ enabled = true }: PetalOverlayProps) {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      // Alternate left/right drifting keyframes
      const variant = i % 2 === 0 ? "animate-petal-1" : "animate-petal-2";
      const durationNum = 11 + (i % 5) * 2; // 11s to 19s
      // Negative delays start petals immediately mid-flight at different heights across the viewport
      const delayNum = -((i * 1.7 + (i % 4) * 2.3) % durationNum);

      return {
        id: i,
        // Well distributed horizontal positions across the viewport
        left: `${(i * 5.1 + ((i * 7) % 11)) % 96}%`,
        delay: `${delayNum.toFixed(1)}s`,
        duration: `${durationNum.toFixed(1)}s`,
        size: 14 + (i % 4) * 5,
        // Royal wedding hues: warm gold, vibrant saffron, and deep royal rose
        color: i % 3 === 0 ? "#d4af37" : i % 3 === 1 ? "#ff9800" : "#e91e63",
        variant,
      };
    });
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className={`absolute -top-16 opacity-0 pointer-events-none ${p.variant}`}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {/* Flower Petal SVG */}
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill={p.color}
            className="opacity-75 filter drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          >
            <path d="M12 2C8 6 4 9 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 9 16 6 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
