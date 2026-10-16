import { useMemo } from 'react';

interface PetalOverlayProps {
  enabled: boolean;
}

export function PetalOverlay({ enabled }: PetalOverlayProps) {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + Math.random() * 4) % 96}%`,
      delay: `${(i * 0.7).toFixed(1)}s`,
      duration: `${(10 + (i % 5) * 2).toFixed(1)}s`,
      size: 14 + (i % 4) * 6,
      color: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff9800' : '#e91e63'
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal"
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
            className="opacity-70 filter drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
          >
            <path d="M12 2C8 6 4 9 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 9 16 6 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
