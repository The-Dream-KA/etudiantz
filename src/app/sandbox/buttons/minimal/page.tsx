'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MinimalButtons() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/sandbox/buttons"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sandbox
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Minimal Micro-interactions
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Minimalist with sophisticated hover and click animations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Minimal Button 1 - Underline Expand */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Underline Expand</h3>
            <button
              onClick={() => handleClick('minimal1')}
              className="group relative px-6 py-3 text-gray-900 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              Hover Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Minimal Button 2 - Arrow Slide */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Arrow Slide</h3>
            <button
              onClick={() => handleClick('minimal2')}
              className="group flex items-center gap-2 px-6 py-3 text-gray-900 font-medium transition-all duration-300 hover:gap-4"
            >
              <span>Continue</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Minimal Button 3 - Background Slide */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Background Slide</h3>
            <button
              onClick={() => handleClick('minimal3')}
              className="group relative px-6 py-3 text-gray-900 font-medium overflow-hidden transition-colors duration-300 hover:text-white"
            >
              <span className="relative z-10">Slide In</span>
              <div className="absolute inset-0 bg-gray-900 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
            </button>
          </div>

          {/* Minimal Button 4 - Scale Text */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale Text</h3>
            <button
              onClick={() => handleClick('minimal4')}
              className="px-6 py-3 text-gray-900 font-medium transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <span className="inline-block transition-all duration-300 hover:tracking-wider">
                Expand
              </span>
            </button>
          </div>

          {/* Minimal Button 5 - Border Grow */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Border Grow</h3>
            <button
              onClick={() => handleClick('minimal5')}
              className="group relative px-6 py-3 text-gray-900 font-medium"
            >
              <span className="relative z-10">Bordered</span>
              <div className="absolute inset-0 border border-gray-900 scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
            </button>
          </div>

          {/* Minimal Button 6 - Fade & Lift */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fade & Lift</h3>
            <button
              onClick={() => handleClick('minimal6')}
              className="px-6 py-3 bg-gray-100 text-gray-900 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Lift Up
            </button>
          </div>

          {/* Minimal Button 7 - Corner Accent */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corner Accent</h3>
            <button
              onClick={() => handleClick('minimal7')}
              className="group relative px-6 py-3 text-gray-900 font-medium"
            >
              <span className="relative z-10">Corners</span>
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-blue-600 transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-blue-600 transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
            </button>
          </div>

          {/* Minimal Button 8 - Text Split */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Text Split</h3>
            <button
              onClick={() => handleClick('minimal8')}
              className="group relative px-6 py-3 text-gray-900 font-medium overflow-hidden"
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-full">
                Hover
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-blue-600 font-medium">
                Click
              </span>
            </button>
          </div>

          {/* Minimal Button 9 - Dot Trail */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dot Trail</h3>
            <button
              onClick={() => handleClick('minimal9')}
              className="group relative px-6 py-3 text-gray-900 font-medium"
            >
              <span className="relative z-10">Trail Effect</span>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-full group-hover:ml-2">
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </button>
          </div>

          {/* Minimal Button 10 - Rotate In */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Rotate In</h3>
            <button
              onClick={() => handleClick('minimal10')}
              className="group relative px-6 py-3 text-gray-900 font-medium overflow-hidden"
            >
              <span className="inline-block transition-all duration-300 group-hover:rotate-[360deg]">
                Spin
              </span>
            </button>
          </div>

          {/* Minimal Button 11 - Double Border */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Double Border</h3>
            <button
              onClick={() => handleClick('minimal11')}
              className="group relative px-6 py-3 text-gray-900 font-medium"
            >
              <span className="relative z-10">Double</span>
              <div className="absolute inset-0 border border-gray-300 transition-all duration-300 group-hover:inset-1"></div>
              <div className="absolute inset-0 border border-gray-900 scale-105 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
            </button>
          </div>

          {/* Minimal Button 12 - Shimmer */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Shimmer</h3>
            <button
              onClick={() => handleClick('minimal12')}
              className="group relative px-6 py-3 bg-gray-900 text-white font-medium overflow-hidden"
            >
              <span className="relative z-10">Shimmer</span>
              <div className="shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        {/* Dark Mode Section */}
        <div className="mt-12 bg-gray-900 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Dark Mode Variants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="group px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300 border border-white/10 hover:border-white/30">
              Subtle Glow
            </button>

            <button className="group relative px-6 py-3 text-white font-medium overflow-hidden">
              <span className="relative z-10">Neon Underline</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white font-medium rounded-lg transition-all duration-300 border border-white/10">
              Gradient BG
            </button>

            <button className="group px-6 py-3 text-white font-medium transition-all duration-300 hover:tracking-wider">
              Letter Spacing
            </button>

            <button className="group relative px-6 py-3 text-white font-medium">
              <span className="relative z-10">Corner Lines</span>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
            </button>

            <button className="px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-gray-900 font-medium rounded-lg transition-all duration-300">
              Invert Colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
