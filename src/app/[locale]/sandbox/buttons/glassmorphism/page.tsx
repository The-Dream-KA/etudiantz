'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GlassmorphismButtons() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/sandbox/buttons"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sandbox
        </Link>

        <h1 className="text-5xl font-bold text-white mb-4">
          Modern Glassmorphism
        </h1>
        <p className="text-white/80 text-lg mb-12">
          Glass effect with backdrop blur and smooth hover animations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Glass Button 1 - Classic Glass */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Classic Glass</h3>
            <button
              onClick={() => handleClick('glass1')}
              className="glass-btn-1 relative px-8 py-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-white font-medium overflow-hidden transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">Click Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Glass Button 2 - Frosted Border */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Frosted Border</h3>
            <button
              onClick={() => handleClick('glass2')}
              className="group relative px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Hover Me</span>
              <div className="absolute inset-0 border-2 border-white/50 rounded-2xl group-hover:border-white transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Glass Button 3 - Glow Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Glow Glass</h3>
            <button
              onClick={() => handleClick('glass3')}
              className="relative px-8 py-4 rounded-full bg-white/15 backdrop-blur-xl border border-white/40 text-white font-medium transition-all duration-300 hover:bg-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Glow Effect</span>
            </button>
          </div>

          {/* Glass Button 4 - Ripple Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Ripple Glass</h3>
            <button
              onClick={() => handleClick('glass4')}
              className={`glass-ripple relative px-8 py-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 text-white font-medium overflow-hidden transition-all duration-300 hover:bg-white/30 ${clicked === 'glass4' ? 'animate-pulse' : ''}`}
            >
              <span className="relative z-10">Click for Ripple</span>
              {clicked === 'glass4' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-4 h-4 bg-white/50 rounded-full animate-ping"></div>
                </div>
              )}
            </button>
          </div>

          {/* Glass Button 5 - Multi-layer */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-layer Glass</h3>
            <button
              onClick={() => handleClick('glass5')}
              className="group relative px-8 py-4 rounded-2xl text-white font-medium overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:bg-white/20"></div>
              <div className="absolute inset-1 bg-white/10 backdrop-blur-md rounded-xl transition-all duration-300 group-hover:bg-white/15"></div>
              <div className="absolute inset-2 bg-white/10 backdrop-blur-lg rounded-lg transition-all duration-300 group-hover:bg-white/10"></div>
              <span className="relative z-10">Layered Depth</span>
            </button>
          </div>

          {/* Glass Button 6 - Gradient Glass */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Gradient Glass</h3>
            <button
              onClick={() => handleClick('glass6')}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg border border-white/40 text-white font-medium overflow-hidden transition-all duration-300 hover:from-white/40 hover:to-white/20 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Gradient Glass</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  );
}
