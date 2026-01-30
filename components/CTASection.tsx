'use client';

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform your colors into<br className="hidden md:block" /> emotions that connect.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join the creators who design with intelligence.
          </p>
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
            Start Free Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
