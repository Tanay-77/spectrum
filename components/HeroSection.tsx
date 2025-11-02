'use client';

import Prism from "@/components/Prism";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center max-w-4xl mb-6 leading-tight">
          A spectrum of colors that<br />spark emotion
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mb-8">
          Discover how color influences perception, emotion, and creativity — powered by AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
