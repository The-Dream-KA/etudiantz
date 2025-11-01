'use client';

import Link from 'next/link';

export default function YellowNeomorphicButton() {
    return (
        <>
            <div className="min-h-screen p-8 flex items-center justify-center" style={{ backgroundColor: '#00e5ff' }}>
                <div className="max-w-6xl w-full">
                    <Link
                        href="/sandbox/buttons"
                        className="inline-flex items-center text-gray-800 hover:text-gray-900 transition-colors mb-12"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Sandbox
                    </Link>

                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Neomorphic Button Colors
                        </h1>
                        <p className="text-gray-800 text-lg">
                            3D raised button with different color variations
                        </p>
                    </div>

                    {/* Color Variations Grid */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Square Buttons</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Yellow */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Yellow</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-gray-800 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-yellow-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Pink */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Pink</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-pink-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Purple */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Purple</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-purple-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Blue */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Blue</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-blue-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Green */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Green</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-green-300 via-green-400 to-green-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-green-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Orange */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Orange</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-orange-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Red */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Red</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-red-300 via-red-400 to-red-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-red-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Cyan */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Cyan</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-500 flex items-center justify-center group">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-cyan-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Teal */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Teal</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 flex items-center justify-center group" aria-label="Teal button">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-teal-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Indigo */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Indigo</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-500 flex items-center justify-center group" aria-label="Indigo button">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-indigo-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Lime */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Lime</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 flex items-center justify-center group" aria-label="Lime button">
                                    <svg className="w-12 h-12 text-gray-800 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-lime-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* White */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">White</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center group" aria-label="White button">
                                    <svg className="w-12 h-12 text-gray-600 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.25),_4px_4px_8px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.8)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Black */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Black</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-32 h-32 rounded-[1.8rem] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center group" aria-label="Black button">
                                    <svg className="w-12 h-12 text-white transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.5),_4px_4px_8px_rgba(0,0,0,0.4)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.3)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-gray-700/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Rectangular Buttons */}
                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 text-center">Rectangular Buttons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Yellow */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Yellow</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-48 h-24 rounded-[1.8rem] bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center group">
                                    <span className="text-gray-800 font-bold text-lg">SUBMIT</span>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-yellow-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* Pink */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">Pink</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-48 h-24 rounded-[1.8rem] bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 flex items-center justify-center group">
                                    <span className="text-white font-bold text-lg">CANCEL</span>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.3),_4px_4px_8px_rgba(0,0,0,0.25)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-pink-300/40 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>

                        {/* White */}
                        <div className="text-center">
                            <h3 className="text-gray-900 font-semibold mb-4">White</h3>
                            <div className="flex justify-center">
                                <button className="yellow-neo-button relative w-48 h-24 rounded-[1.8rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center group">
                                    <span className="text-gray-600 font-bold text-lg">LOGIN</span>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[8px_8px_16px_rgba(0,0,0,0.25),_4px_4px_8px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                                    <div className="absolute inset-0 rounded-[1.8rem] shadow-[-4px_-4px_12px_rgba(255,255,255,0.8)] pointer-events-none"></div>
                                    <div className="absolute inset-[4px] rounded-[1.5rem] bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
          .yellow-neo-button {
            position: relative;
          }
          
          .yellow-neo-button:hover {
            transform: scale(1.05);
          }
        `}</style>
                </div>
            </div>
        </>
    );
}
