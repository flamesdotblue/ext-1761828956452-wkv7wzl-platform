import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} NeonOrb. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
