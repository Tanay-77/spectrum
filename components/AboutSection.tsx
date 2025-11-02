'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Science Behind Color Intelligence
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            At Spectrum Labs, we bridge art and neuroscience to help designers, brands, and creators 
            understand how color choices shape human emotion. Our AI analyzes palettes, gradients, 
            and visuals through the lens of color psychology — giving you insight into how your 
            design feels before you launch it.
          </p>
        </div>
      </div>
    </section>
  );
}
