import React from 'react';
import { Zap, Shield, Cpu, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Real-time Performance',
    desc: 'Optimized WebGL rendering delivers smooth, responsive motion across devices.',
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    desc: 'Accessible, secure, and production-friendly setup aligned with best practices.',
  },
  {
    icon: Cpu,
    title: 'Powered by Spline',
    desc: 'Leverage a robust 3D engine with easy integration and high visual fidelity.',
  },
  {
    icon: Sparkles,
    title: 'Brand Elevation',
    desc: 'Create an immersive first impression that stands out in a crowded landscape.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why this background works</h2>
          <p className="mt-3 text-white/80">
            Futuristic, technology-forward visuals designed to enhance clarity, depth, and engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{desc}</p>
      </div>
    </div>
  );
}
