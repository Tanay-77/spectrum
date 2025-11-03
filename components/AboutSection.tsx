'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 px-8 bg-black overflow-hidden"
    >
      {/* Simple Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.3), transparent 70%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Label */}
        <div 
          className={`inline-block mb-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 -translate-y-10 blur-sm'
          }`}
        >
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
            Our Mission
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              The Science Behind{' '}
             
                Color Intelligence
              
            </h2>
            
            <p 
              className={`text-xl text-white/70 leading-relaxed transition-all duration-700 delay-100 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              At Spectrum Labs, we bridge art and neuroscience to help designers, brands, and creators 
              understand how color choices shape human emotion.
            </p>

            <p 
              className={`text-lg text-white/60 leading-relaxed transition-all duration-700 delay-200 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              Our AI analyzes palettes, gradients, and visuals through the lens of color psychology — 
              giving you insight into how your design feels before you launch it.
            </p>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-300 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {[
                { value: '10K+', label: 'Designers' },
                { value: '500K+', label: 'Palettes Analyzed' },
                { value: '98%', label: 'Accuracy' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-transform hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div 
            className={`relative h-[600px] transition-all duration-700 delay-150 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Image with gradient overlay */}
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/3f/b4/e0/3fb4e0d5468fce55a94cced80fb62900.jpg"
                alt="Color Spectrum Dashboard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
