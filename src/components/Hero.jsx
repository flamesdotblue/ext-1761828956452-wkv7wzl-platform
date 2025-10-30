import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero with interactive futuristic orb">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            A pulsing, futuristic orb for immersive digital experiences
          </h1>
          <p className="mt-4 max-w-2xl text-white/80 text-base md:text-lg">
            Blend art and technology with an interactive 3D background that feels alive. Built for modern, ambitious brands.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black px-5 py-3 text-sm font-medium transition-colors"
            >
              Explore Features <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 hover:border-white/40 px-5 py-3 text-sm font-medium text-white/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
