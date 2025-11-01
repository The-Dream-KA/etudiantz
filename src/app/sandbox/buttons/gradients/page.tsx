'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GradientButtons() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/sandbox/buttons"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sandbox
        </Link>

        <h1 className="text-5xl font-bold text-white mb-4">
          Animated Gradients
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Animated gradient backgrounds with glow effects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gradient Button 1 - Rotating Gradient */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Rotating Gradient</h3>
            <button
              onClick={() => handleClick('grad1')}
              className="gradient-rotate relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Hover Me</span>
            </button>
            <style jsx>{`
              .gradient-rotate {
                background-size: 200% 200%;
                animation: gradient-shift 3s ease infinite;
              }
              @keyframes gradient-shift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
            `}</style>
          </div>

          {/* Gradient Button 2 - Glow Pulse */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Glow Pulse</h3>
            <button
              onClick={() => handleClick('grad2')}
              className="glow-pulse relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Pulsing Glow</span>
            </button>
            <style jsx>{`
              .glow-pulse {
                animation: glow-animation 2s ease-in-out infinite;
              }
              @keyframes glow-animation {
                0%, 100% {
                  box-shadow: 0 0 20px rgba(6, 182, 212, 0.5),
                              0 0 40px rgba(6, 182, 212, 0.3),
                              0 0 60px rgba(6, 182, 212, 0.1);
                }
                50% {
                  box-shadow: 0 0 30px rgba(6, 182, 212, 0.8),
                              0 0 60px rgba(6, 182, 212, 0.5),
                              0 0 90px rgba(6, 182, 212, 0.3);
                }
              }
            `}</style>
          </div>

          {/* Gradient Button 3 - Border Gradient */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Animated Border</h3>
            <button
              onClick={() => handleClick('grad3')}
              className="border-gradient group relative px-8 py-4 rounded-xl bg-gray-900 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Border Animation</span>
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-rotate">
                <div className="absolute inset-[2px] rounded-xl bg-gray-900"></div>
              </div>
            </button>
            <style jsx>{`
              @keyframes gradient-rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .animate-gradient-rotate {
                animation: gradient-rotate 3s linear infinite;
              }
            `}</style>
          </div>

          {/* Gradient Button 4 - Wave Effect */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Wave Gradient</h3>
            <button
              onClick={() => handleClick('grad4')}
              className="wave-gradient relative px-8 py-4 rounded-2xl text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Wave Effect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </button>
            <style jsx>{`
              .wave-gradient {
                background-size: 300% 100%;
                animation: wave-move 4s ease-in-out infinite;
              }
              .wave-gradient > div {
                animation: wave-move 4s ease-in-out infinite;
                background-size: 300% 100%;
              }
              @keyframes wave-move {
                0%, 100% { background-position: 0% 0%; }
                50% { background-position: 100% 0%; }
              }
            `}</style>
          </div>

          {/* Gradient Button 5 - Shine Effect */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Shine Sweep</h3>
            <button
              onClick={() => handleClick('grad5')}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
            >
              <span className="relative z-10">Shine Effect</span>
              <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Gradient Button 6 - Multi-layer Glow */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-layer Glow</h3>
            <button
              onClick={() => handleClick('grad6')}
              className="multi-glow group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Layered Glow</span>
            </button>
            <style jsx>{`
              .multi-glow {
                box-shadow: 
                  0 0 20px rgba(244, 63, 94, 0.3),
                  0 0 40px rgba(244, 63, 94, 0.2),
                  inset 0 0 20px rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
              }
              .multi-glow:hover {
                box-shadow: 
                  0 0 30px rgba(244, 63, 94, 0.5),
                  0 0 60px rgba(244, 63, 94, 0.4),
                  0 0 90px rgba(244, 63, 94, 0.2),
                  inset 0 0 30px rgba(255, 255, 255, 0.2);
              }
            `}</style>
          </div>

          {/* Gradient Button 7 - Neon Gradient */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Neon Gradient</h3>
            <button
              onClick={() => handleClick('grad7')}
              className="neon-gradient relative px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Neon Style</span>
            </button>
            <style jsx>{`
              .neon-gradient {
                box-shadow: 
                  0 0 5px rgba(217, 70, 239, 0.5),
                  0 0 10px rgba(217, 70, 239, 0.4),
                  0 0 20px rgba(217, 70, 239, 0.3),
                  0 0 40px rgba(217, 70, 239, 0.2);
                animation: neon-flicker 1.5s ease-in-out infinite alternate;
              }
              @keyframes neon-flicker {
                0%, 100% {
                  box-shadow: 
                    0 0 5px rgba(217, 70, 239, 0.5),
                    0 0 10px rgba(217, 70, 239, 0.4),
                    0 0 20px rgba(217, 70, 239, 0.3),
                    0 0 40px rgba(217, 70, 239, 0.2);
                }
                50% {
                  box-shadow: 
                    0 0 10px rgba(217, 70, 239, 0.7),
                    0 0 20px rgba(217, 70, 239, 0.6),
                    0 0 40px rgba(217, 70, 239, 0.5),
                    0 0 80px rgba(217, 70, 239, 0.3);
                }
              }
            `}</style>
          </div>

          {/* Gradient Button 8 - Rainbow Shift */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Rainbow Shift</h3>
            <button
              onClick={() => handleClick('grad8')}
              className="rainbow-shift relative px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Rainbow</span>
            </button>
            <style jsx>{`
              .rainbow-shift {
                background: linear-gradient(
                  90deg,
                  #ff0000,
                  #ff7f00,
                  #ffff00,
                  #00ff00,
                  #0000ff,
                  #4b0082,
                  #9400d3,
                  #ff0000
                );
                background-size: 400% 100%;
                animation: rainbow-animation 5s linear infinite;
              }
              @keyframes rainbow-animation {
                0% { background-position: 0% 0%; }
                100% { background-position: 400% 0%; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
