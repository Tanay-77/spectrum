'use client';

import { useEffect, useRef, useState } from 'react';
import MagicBento from './MagicBento';

export default function FeaturesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-20 w-full">
      <div className="w-full px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className={`inline-block mb-6 transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 -translate-y-6 blur-sm'
            }`}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
              Solutions
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Powerful Features
          </h2>
          <p
            className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Experience color intelligence like never before with our comprehensive suite of AI-powered tools
          </p>
        </div>
        
        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="14, 165, 233"
        />
      </div>
    </section>
  );
}
