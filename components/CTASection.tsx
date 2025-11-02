'use client';

export default function CTASection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform your colors into<br />emotions that connect.
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join the creators who design with intelligence.
          </p>
          <button className="px-10 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all hover:scale-105">
            Start Free Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
