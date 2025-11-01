'use client';

import { ArrowLeft, Share2, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { PRIMARY_COLOR } from '@/lib/constants';

interface ProductDetailProps {
    category?: string;
    title: string;
    description: string;
    price: string;
    bgColor?: string;
    textColor?: string;
    onBack?: () => void;
    imageUrl?: string;
}

export default function ProductDetail({
    category = 'STUDENT SERVICE',
    title,
    description,
    price,
    bgColor = `bg-[${PRIMARY_COLOR}]`,
    textColor = 'text-white',
    onBack,
    imageUrl,
}: ProductDetailProps) {
    return (
        <div className={`relative w-full min-h-screen ${bgColor} ${textColor} flex items-center`}>
            {/* Back Button */}
            <button
                onClick={onBack}
                className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity z-20"
                aria-label="Go back"
            >
                <ArrowLeft className="w-5 h-5" />
                Back
            </button>

            <div className="container mx-auto px-12 md:px-20 py-32 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Content */}
                <div className="flex-1 space-y-6 max-w-2xl">
                    <p className="text-sm md:text-base font-light tracking-widest opacity-90">
                        {category}
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">

                        {title}
                    </h1>

                    <div className="space-y-4 text-base md:text-lg opacity-90 leading-relaxed">
                        <p>{description}</p>
                    </div>

                    <div className="pt-6">
                        <p className="text-5xl md:text-6xl font-bold mb-6">{price}</p>

                        <button className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-full hover:bg-black hover:text-white border-2 border-white transition-all duration-300 font-semibold text-lg">
                            Add to bag
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    {/* Social Actions */}
                    <div className="flex items-center gap-8 pt-8 border-t border-current/20">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-current" />
                                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-current" />
                                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-current" />
                            </div>
                            <span className="text-sm opacity-75">People liked this</span>
                        </div>

                        <button
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Like"
                        >
                            <ThumbsUp className="w-5 h-5" />
                        </button>

                        <button
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Share"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Right Side - Image/Visual */}
                <div className="flex-1 flex items-center justify-center relative">
                    {imageUrl ? (
                        <div className="relative w-full h-96 md:h-[600px]">
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="w-96 h-96 md:w-[500px] md:h-[500px] bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                            <p className="text-2xl opacity-50">Product Image</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
