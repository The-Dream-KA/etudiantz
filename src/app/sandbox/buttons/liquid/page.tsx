'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LiquidButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
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
          Liquid/Blob Animations
        </h1>
        <p className="text-white/80 text-lg mb-12">
          Fluid morphing animations and blob effects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Liquid Button 1 - Blob Morph */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Blob Morph</h3>
            <button
              onMouseEnter={() => setHovered('liquid1')}
              onMouseLeave={() => setHovered(null)}
              className="blob-morph relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden transition-all duration-500 hover:scale-110"
            >
              <span className="relative z-10">Hover Me</span>
            </button>
            <style jsx>{`
              .blob-morph {
                border-radius: ${hovered === 'liquid1' ? '40% 60% 70% 30% / 40% 50% 60% 50%' : '50%'};
                animation: blob-animation 3s ease-in-out infinite;
              }
              @keyframes blob-animation {
                0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
                50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
              }
            `}</style>
          </div>

          {/* Liquid Button 2 - Ripple Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Ripple Wave</h3>
            <button
              onMouseEnter={() => setHovered('liquid2')}
              onMouseLeave={() => setHovered(null)}
              className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Wave Effect</span>
              {hovered === 'liquid2' && (
                <>
                  <div className="ripple-1 absolute inset-0 rounded-2xl border-2 border-white/50"></div>
                  <div className="ripple-2 absolute inset-0 rounded-2xl border-2 border-white/30"></div>
                  <div className="ripple-3 absolute inset-0 rounded-2xl border-2 border-white/10"></div>
                </>
              )}
            </button>
            <style jsx>{`
              @keyframes ripple {
                0% {
                  transform: scale(1);
                  opacity: 1;
                }
                100% {
                  transform: scale(1.5);
                  opacity: 0;
                }
              }
              .ripple-1 {
                animation: ripple 1s ease-out;
              }
              .ripple-2 {
                animation: ripple 1s ease-out 0.2s;
              }
              .ripple-3 {
                animation: ripple 1s ease-out 0.4s;
              }
            `}</style>
          </div>

          {/* Liquid Button 3 - Melting Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Melting Drip</h3>
            <button
              onMouseEnter={() => setHovered('liquid3')}
              onMouseLeave={() => setHovered(null)}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium overflow-visible transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Melt Down</span>
              <div className={`drip absolute left-1/2 -translate-x-1/2 w-4 h-0 bg-gradient-to-b from-rose-500 to-transparent rounded-full transition-all duration-700 ${hovered === 'liquid3' ? 'drip-active' : ''}`}></div>
            </button>
            <style jsx>{`
              .drip {
                top: 100%;
              }
              .drip-active {
                height: 40px;
                animation: drip-fall 0.7s ease-in;
              }
              @keyframes drip-fall {
                0% { height: 0; opacity: 1; }
                100% { height: 40px; opacity: 0.5; }
              }
            `}</style>
          </div>

          {/* Liquid Button 4 - Bubble Float */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Bubble Float</h3>
            <button
              onMouseEnter={() => setHovered('liquid4')}
              onMouseLeave={() => setHovered(null)}
              className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Bubbles</span>
              {hovered === 'liquid4' && (
                <>
                  <div className="bubble bubble-1 absolute w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="bubble bubble-2 absolute w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="bubble bubble-3 absolute w-4 h-4 bg-white/20 rounded-full"></div>
                </>
              )}
            </button>
            <style jsx>{`
              @keyframes bubble-float {
                0% {
                  transform: translateY(0) scale(1);
                  opacity: 1;
                }
                100% {
                  transform: translateY(-60px) scale(0);
                  opacity: 0;
                }
              }
              .bubble {
                bottom: 0;
              }
              .bubble-1 {
                left: 20%;
                animation: bubble-float 1.5s ease-out;
              }
              .bubble-2 {
                left: 50%;
                animation: bubble-float 1.8s ease-out 0.2s;
              }
              .bubble-3 {
                left: 80%;
                animation: bubble-float 1.6s ease-out 0.4s;
              }
            `}</style>
          </div>

          {/* Liquid Button 5 - Splash Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Splash Impact</h3>
            <button
              onMouseEnter={() => setHovered('liquid5')}
              onMouseLeave={() => setHovered(null)}
              className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Splash!</span>
              {hovered === 'liquid5' && (
                <div className="splash-container absolute inset-0">
                  <div className="splash splash-1"></div>
                  <div className="splash splash-2"></div>
                  <div className="splash splash-3"></div>
                  <div className="splash splash-4"></div>
                </div>
              )}
            </button>
            <style jsx>{`
              @keyframes splash-out {
                0% {
                  transform: scale(0) rotate(0deg);
                  opacity: 1;
                }
                100% {
                  transform: scale(2) rotate(180deg);
                  opacity: 0;
                }
              }
              .splash {
                position: absolute;
                width: 20px;
                height: 20px;
                background: white;
                border-radius: 50%;
                top: 50%;
                left: 50%;
              }
              .splash-1 {
                animation: splash-out 0.6s ease-out;
                transform-origin: -20px 0;
              }
              .splash-2 {
                animation: splash-out 0.6s ease-out 0.1s;
                transform-origin: 20px 0;
              }
              .splash-3 {
                animation: splash-out 0.6s ease-out 0.2s;
                transform-origin: 0 20px;
              }
              .splash-4 {
                animation: splash-out 0.6s ease-out 0.3s;
                transform-origin: 0 -20px;
              }
            `}</style>
          </div>

          {/* Liquid Button 6 - Elastic Bounce */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Elastic Bounce</h3>
            <button
              onMouseEnter={() => setHovered('liquid6')}
              onMouseLeave={() => setHovered(null)}
              className="elastic-bounce px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium transition-all duration-300"
            >
              <span className="relative z-10">Bouncy</span>
            </button>
            <style jsx>{`
              .elastic-bounce:hover {
                animation: elastic-bounce 0.6s ease-out;
              }
              @keyframes elastic-bounce {
                0%, 100% { transform: scale(1); }
                25% { transform: scale(1.15) translateY(-5px); }
                50% { transform: scale(0.95) translateY(3px); }
                75% { transform: scale(1.05) translateY(-2px); }
              }
            `}</style>
          </div>

          {/* Liquid Button 7 - Goo Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Gooey Merge</h3>
            <button
              onMouseEnter={() => setHovered('liquid7')}
              onMouseLeave={() => setHovered(null)}
              className="goo-button relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Gooey</span>
              {hovered === 'liquid7' && (
                <>
                  <div className="goo-circle goo-1 absolute w-8 h-8 bg-fuchsia-400 rounded-full"></div>
                  <div className="goo-circle goo-2 absolute w-6 h-6 bg-purple-400 rounded-full"></div>
                </>
              )}
            </button>
            <style jsx>{`
              .goo-button {
                filter: url('#goo');
              }
              @keyframes goo-move-1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(40px, -20px) scale(0.8); }
              }
              @keyframes goo-move-2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(-30px, 15px) scale(0.7); }
              }
              .goo-1 {
                top: 50%;
                left: 50%;
                animation: goo-move-1 2s ease-in-out infinite;
              }
              .goo-2 {
                top: 50%;
                left: 50%;
                animation: goo-move-2 2.5s ease-in-out infinite;
              }
              .goo-svg {
                position: absolute;
                width: 0;
                height: 0;
              }
            `}</style>
            <svg className="goo-svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Liquid Button 8 - Wave Distortion */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Wave Distortion</h3>
            <button
              onMouseEnter={() => setHovered('liquid8')}
              onMouseLeave={() => setHovered(null)}
              className="wave-distort px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Wave</span>
            </button>
            <style jsx>{`
              .wave-distort:hover {
                animation: wave-distort 0.8s ease-in-out;
              }
              @keyframes wave-distort {
                0%, 100% { border-radius: 1rem; }
                25% { border-radius: 1rem 2rem 1rem 2rem; }
                50% { border-radius: 2rem 1rem 2rem 1rem; }
                75% { border-radius: 1rem 2rem 1rem 2rem; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
