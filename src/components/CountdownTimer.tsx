import { useState, useEffect } from "react";
import { weddingConfig } from "../config/wedding";

interface CountdownTimerProps {
  targetDateStr?: string;
}

export function CountdownTimer({
  targetDateStr = weddingConfig.event.countdownTarget,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(targetDateStr).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const setLeft = (val: typeof timeLeft) => setTimeLeft(val);

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDateStr]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-4">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-[0.2em] font-sans-clean font-semibold text-[#d4af37]/80">
          {weddingConfig.event.countdownLabel}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#241712]/80 to-[#120a08]/90 border border-[#d4af37]/30 shadow-lg relative overflow-hidden group hover:border-[#d4af37]/60 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

            <span className="text-2xl sm:text-4xl font-serif-royal font-bold gold-text-gradient group-hover:scale-110 transition-transform">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#f4eae1]/70 font-sans-clean mt-1 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
