import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscIntervalRef = useRef<any>(null);

  const tracks = [
    { title: "Shehnai Mangalam Raga", tone: "Traditional" },
    { title: "Sitar & Tanpura Harmony", tone: "Serene" },
    { title: "Royal Flute Symphony", tone: "Celebratory" }
  ];

  const startSynthesizer = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }

      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const notes = [
        261.63, 293.66, 329.63, 392.00, 440.00, 
        523.25, 587.33, 659.25, 783.99, 880.00
      ];

      let noteIdx = 0;
      if (oscIntervalRef.current) clearInterval(oscIntervalRef.current);

      oscIntervalRef.current = setInterval(() => {
        if (!isPlaying || isMuted || !ctx) return;

        const freq = notes[noteIdx % notes.length];
        noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % notes.length;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = activeTrack === 0 ? 'sine' : activeTrack === 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.02, ctx.currentTime + 0.4);

        const volume = isMuted ? 0 : 0.08;
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.3);
      }, 700);

    } catch (e) {
      console.log("Audio synthesis notice:", e);
    }
  };

  const stopSynthesizer = () => {
    if (oscIntervalRef.current) {
      clearInterval(oscIntervalRef.current);
      oscIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying && !isMuted) {
      startSynthesizer();
    } else {
      stopSynthesizer();
    }
    return () => stopSynthesizer();
  }, [isPlaying, isMuted, activeTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#1a110e]/90 border border-[#d4af37]/40 rounded-full p-2 shadow-2xl backdrop-blur-md text-[#fcf6ba] transition-all duration-300 hover:border-[#d4af37]">
      <button
        onClick={togglePlay}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
          isPlaying ? 'bg-gradient-to-r from-[#b38728] to-[#d4af37] text-[#0f0907] shadow-lg shadow-[#d4af37]/30' : 'bg-[#2a1d17] text-[#d4af37]'
        }`}
        title={isPlaying ? "Pause Wedding Music" : "Play Wedding Music"}
      >
        <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
      </button>

      {isPlaying && (
        <div className="flex flex-col px-2 max-w-[130px] hidden sm:flex">
          <span className="text-[10px] uppercase tracking-wider text-[#d4af37]/70 font-sans-clean font-semibold">
            Wedding Raga
          </span>
          <span className="text-xs truncate font-serif-royal font-medium text-[#fcf6ba]">
            {tracks[activeTrack].title}
          </span>
        </div>
      )}

      {isPlaying && (
        <button
          onClick={() => setActiveTrack((prev) => (prev + 1) % tracks.length)}
          className="text-xs text-[#d4af37] hover:text-[#fcf6ba] px-2 py-1 rounded bg-[#2a1d17] hover:bg-[#38261e] hidden sm:block font-sans-clean transition-colors"
          title="Change Music Track"
        >
          <Music className="w-3.5 h-3.5 inline mr-1" />
          Switch
        </button>
      )}

      <button
        onClick={toggleMute}
        className="w-9 h-9 rounded-full flex items-center justify-center text-[#d4af37] hover:text-[#fcf6ba] hover:bg-[#2a1d17] transition-colors"
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
