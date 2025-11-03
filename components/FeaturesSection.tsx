'use client';

import MagicBento from './MagicBento';

export default function FeaturesSection() {
  return (
    <section id="solutions" className="py-20 w-full">
      <div className="w-full px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
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
