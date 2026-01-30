'use client';

import Prism from "@/components/Prism";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Background Prism Animation */}
      <div className="absolute inset-0 w-full h-full">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-4xl mb-6 leading-tight tracking-tight">
          A spectrum of colors that<br className="hidden md:block" /> spark emotion
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-xl text-white/70 text-center max-w-2xl mb-8 px-4">
          Discover how color influences perception, emotion, and creativity — powered by AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
