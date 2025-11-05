'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NeumorphismButtons() {
  const [pressed, setPressed] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setPressed(id);
    setTimeout(() => setPressed(null), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 p-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/sandbox/buttons"
          className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sandbox
        </Link>

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          3D Neumorphism
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Soft shadows with 3D pressed effects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Neomorphic Button 1 - Classic Raised */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Classic Raised</h3>
            <button
              onClick={() => handlePress('neu1')}
              className={`neu-classic px-8 py-4 rounded-2xl bg-gray-200 text-gray-700 font-medium transition-all duration-200 ${
                pressed === 'neu1' ? 'neu-pressed' : ''
              }`}
              style={{
                boxShadow: pressed === 'neu1'
                  ? 'inset 6px 6px 12px #b8b8b8, inset -6px -6px 12px #ffffff'
                  : '8px 8px 16px #b8b8b8, -8px -8px 16px #ffffff'
              }}
            >
              Press Me
            </button>
          </div>

          {/* Neomorphic Button 2 - Soft Rounded */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Soft Rounded</h3>
            <button
              onClick={() => handlePress('neu2')}
              className={`px-8 py-4 rounded-full bg-gray-200 text-gray-700 font-medium transition-all duration-200 hover:scale-105`}
              style={{
                boxShadow: pressed === 'neu2'
                  ? 'inset 5px 5px 10px #b8b8b8, inset -5px -5px 10px #ffffff'
                  : '6px 6px 12px #b8b8b8, -6px -6px 12px #ffffff'
              }}
            >
              Soft Touch
            </button>
          </div>

          {/* Neomorphic Button 3 - Icon Button */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Icon Button</h3>
            <button
              onClick={() => handlePress('neu3')}
              className={`w-16 h-16 rounded-full bg-gray-200 text-gray-700 font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center`}
              style={{
                boxShadow: pressed === 'neu3'
                  ? 'inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff'
                  : '6px 6px 12px #b8b8b8, -6px -6px 12px #ffffff'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Neomorphic Button 4 - Toggle Switch */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Toggle Switch</h3>
            <button
              onClick={() => handlePress('neu4')}
              className={`relative w-20 h-10 rounded-full bg-gray-200 transition-all duration-300`}
              style={{
                boxShadow: 'inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff'
              }}
            >
              <div
                className={`absolute top-1 ${pressed === 'neu4' ? 'left-11' : 'left-1'} w-8 h-8 rounded-full bg-gray-200 transition-all duration-300`}
                style={{
                  boxShadow: '4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff'
                }}
              ></div>
            </button>
          </div>

          {/* Neomorphic Button 5 - Concave */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Concave Style</h3>
            <button
              onClick={() => handlePress('neu5')}
              className="px-8 py-4 rounded-2xl bg-gray-200 text-gray-700 font-medium transition-all duration-200 hover:bg-gray-300"
              style={{
                boxShadow: 'inset 6px 6px 12px #b8b8b8, inset -6px -6px 12px #ffffff'
              }}
            >
              Concave
            </button>
          </div>

          {/* Neomorphic Button 6 - Gradient Neu */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Gradient Neu</h3>
            <button
              onClick={() => handlePress('neu6')}
              className={`px-8 py-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-300 text-gray-700 font-medium transition-all duration-200 hover:scale-105`}
              style={{
                boxShadow: pressed === 'neu6'
                  ? 'inset 6px 6px 12px #b8b8b8, inset -6px -6px 12px #ffffff'
                  : '8px 8px 16px #b8b8b8, -8px -8px 16px #ffffff'
              }}
            >
              Gradient
            </button>
          </div>

          {/* Neomorphic Button 7 - Flat with Depth */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Flat Depth</h3>
            <button
              onClick={() => handlePress('neu7')}
              className="group relative px-8 py-4 rounded-xl bg-gray-200 text-gray-700 font-medium transition-all duration-300 hover:translate-y-1"
              style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
            >
              Hover Press
            </button>
          </div>

          {/* Neomorphic Button 8 - Layered Shadow */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Layered Shadow</h3>
            <button
              onClick={() => handlePress('neu8')}
              className={`px-8 py-4 rounded-2xl bg-gray-200 text-gray-700 font-medium transition-all duration-300 hover:scale-105`}
              style={{
                boxShadow: pressed === 'neu8'
                  ? 'inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff'
                  : '4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff, 8px 8px 16px rgba(0, 0, 0, 0.05)'
              }}
            >
              Multi-Shadow
            </button>
          </div>

          {/* Dark Mode Neomorphic */}
          <div className="bg-gray-800 rounded-2xl p-8 col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">Dark Mode Neumorphism</h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handlePress('neu-dark1')}
                className="px-8 py-4 rounded-2xl bg-gray-800 text-gray-200 font-medium transition-all duration-200 hover:scale-105"
                style={{
                  boxShadow: pressed === 'neu-dark1'
                    ? 'inset 6px 6px 12px #1f2937, inset -6px -6px 12px #374151'
                    : '6px 6px 12px #1f2937, -6px -6px 12px #374151'
                }}
              >
                Dark Raised
              </button>
              
              <button
                onClick={() => handlePress('neu-dark2')}
                className="px-8 py-4 rounded-full bg-gray-800 text-gray-200 font-medium transition-all duration-200 hover:scale-105"
                style={{
                  boxShadow: pressed === 'neu-dark2'
                    ? 'inset 5px 5px 10px #1f2937, inset -5px -5px 10px #374151'
                    : '5px 5px 10px #1f2937, -5px -5px 10px #374151'
                }}
              >
                Dark Round
              </button>

              <button
                onClick={() => handlePress('neu-dark3')}
                className="px-8 py-4 rounded-xl bg-gray-800 text-gray-200 font-medium transition-all duration-200"
                style={{
                  boxShadow: 'inset 5px 5px 10px #1f2937, inset -5px -5px 10px #374151'
                }}
              >
                Dark Concave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
