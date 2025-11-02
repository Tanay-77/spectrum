'use client';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 mx-8 mt-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <span className="text-white text-xl font-semibold">Spectrum Labs</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="#home" className="text-white hover:text-white/80 transition-colors">Home</a>
        <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
        <a href="#solutions" className="text-white hover:text-white/80 transition-colors">Solutions</a>
        <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
