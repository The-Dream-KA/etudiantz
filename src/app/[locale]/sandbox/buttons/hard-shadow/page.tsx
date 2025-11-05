'use client';

import Link from 'next/link';

export default function HardShadowButtons() {
    return (
        <div className="min-h-screen bg-cyan-400 p-8">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/sandbox/buttons"
                    className="inline-flex items-center text-gray-900 hover:text-black font-semibold transition-colors mb-12"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Sandbox
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-black mb-4">
                        Hard Shadow Buttons
                    </h1>
                    <p className="text-gray-800 text-lg">
                        Buttons with a solid, offset shadow for a 3D/pop-out effect.
                    </p>
                </div>

                <div className="flex justify-center items-center gap-12 flex-wrap">
                    {/* Exact Replica */}
                    <button className="hard-shadow-btn bg-white text-black border-4 border-black font-bold py-4 px-10 rounded-full text-lg">
                        START YOUR JOB SEARCH
                    </button>

                    {/* Color Variations */}
                    <button className="hard-shadow-btn bg-yellow-300 text-black border-4 border-black font-bold py-4 px-10 rounded-full text-lg">
                        GET STARTED
                    </button>

                    <button className="hard-shadow-btn bg-pink-400 text-black border-4 border-black font-bold py-4 px-10 rounded-full text-lg">
                        SUBSCRIBE
                    </button>
                </div>

                <div className="flex justify-center items-center gap-12 flex-wrap mt-12">
                    {/* Square version */}
                    <button className="hard-shadow-btn bg-cyan-300 text-black border-4 border-black font-bold py-4 px-10 rounded-2xl text-lg">
                        VIEW DOCS
                    </button>

                    <button className="hard-shadow-btn bg-lime-300 text-black border-4 border-black font-bold p-4 rounded-2xl" aria-label="Next">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                <style jsx>{`
          .hard-shadow-btn {
            box-shadow: 8px 8px 0px 0px #000;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }
          .hard-shadow-btn:hover {
            transform: translate(-3px, -3px);
            box-shadow: 11px 11px 0px 0px #000;
          }
          .hard-shadow-btn:active {
            transform: translate(5px, 5px);
            box-shadow: 3px 3px 0px 0px #000;
          }
        `}</style>
            </div>
        </div>
    );
}
