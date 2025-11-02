'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 px-8 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Gradient */}
      <div 
        className={`absolute inset-0 opacity-20 transition-all duration-1000 ${
          isVisible ? 'scale-100' : 'scale-150'
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(14, 165, 233, 0.4), transparent 50%)`
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
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-200 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0 blur-0' 
                  : 'opacity-0 -translate-x-20 blur-sm'
              }`}
            >
              The Science Behind{' '}
             
                Color Intelligence
              
            </h2>
            
            <p 
              className={`text-xl text-white/70 leading-relaxed transition-all duration-1000 delay-400 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0 blur-0' 
                  : 'opacity-0 -translate-x-20 blur-sm'
              }`}
            >
              At Spectrum Labs, we bridge art and neuroscience to help designers, brands, and creators 
              understand how color choices shape human emotion.
            </p>

            <p 
              className={`text-lg text-white/60 leading-relaxed transition-all duration-1000 delay-600 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0 blur-0' 
                  : 'opacity-0 -translate-x-20 blur-sm'
              }`}
            >
              Our AI analyzes palettes, gradients, and visuals through the lens of color psychology — 
              giving you insight into how your design feels before you launch it.
            </p>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-800 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-10 blur-sm'
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
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div 
            className={`relative h-[500px] transition-all duration-1000 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0 blur-0' 
                : 'opacity-0 translate-x-20 blur-sm'
            }`}
          >
            {/* 3D Card Stack Effect */}
            <div className="relative h-full">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-sky-500/10 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-1000 hover:scale-105 ${
                    isVisible ? 'translate-y-0 rotate-0' : 'translate-y-20 rotate-6'
                  }`}
                  style={{
                    transform: isVisible 
                      ? `translateY(${index * 20}px) translateX(${index * 20}px) rotate(${index * -3}deg)`
                      : 'translateY(100px) rotate(10deg)',
                    transitionDelay: `${400 + index * 150}ms`,
                    zIndex: 3 - index
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  
                  {/* Color Swatches */}
                  <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-16 rounded-xl transition-all duration-500 hover:scale-110"
                        style={{
                          background: `hsl(${190 + i * 15}, 85%, ${40 + i * 8}%)`,
                          animationDelay: `${1000 + i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
}
