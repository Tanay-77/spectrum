'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 mx-4 md:mx-8 mt-4 md:mt-8 rounded-3xl md:rounded-full bg-white/5 backdrop-blur-md border border-white/10">
      <div className="w-full md:w-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <span className="text-white text-xl font-semibold">Spectrum Labs</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#home" className="text-white hover:text-white/80 transition-colors">Home</Link>
        <Link href="#about" className="text-white hover:text-white/80 transition-colors">About</Link>
        <Link href="#solutions" className="text-white hover:text-white/80 transition-colors">Solutions</Link>
        <Link href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full pt-4 pb-2 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <Link 
            href="#home" 
            className="text-white/90 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="text-white/90 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#solutions" 
            className="text-white/90 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            href="#contact" 
            className="text-white/90 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
