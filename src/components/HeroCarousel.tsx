'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PRIMARY_COLOR } from '@/lib/constants';
import useTranslation from '@/hooks/useTranslation';

interface SlideContent {
    id: number;
    category: string;
    title: string;
    description: string;
    buttonText: string;
    bgColor: string;
    textColor: string;
    buttonBorderColor: string;
    imageUrl?: string;
}

interface HeroCarouselProps {
    locale: string;
}

interface HeroCarouselTranslations {
    students: {
        category: string;
        title: string;
        description: string;
        button: string;
    };
    employers: {
        category: string;
        title: string;
        description: string;
        button: string;
    };
    services: {
        category: string;
        title: string;
        description: string;
        button: string;
    };
    appStore: {
        google: string;
        apple: string;
    };
}

export default function HeroCarousel({ locale }: HeroCarouselProps) {
    // ANIMATION DISABLED - Uncomment line below to re-enable hover expansion animation
    // const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isLeftHovered] = useState(false); // Fixed to false - no animation
    const translations = useTranslation(locale);

    if (!translations.HeroCarousel) {
        return <div>Loading...</div>;
    }

    const heroTranslations = translations.HeroCarousel as unknown as HeroCarouselTranslations;

    const slides: SlideContent[] = [
        {
            id: 1,
            category: heroTranslations.students.category,
            title: heroTranslations.students.title,
            description: heroTranslations.students.description,
            buttonText: heroTranslations.students.button,
            bgColor: `bg-[${PRIMARY_COLOR}]`,
            textColor: 'text-black',
            buttonBorderColor: 'border-black',
        },
        {
            id: 2,
            category: heroTranslations.employers.category,
            title: heroTranslations.employers.title,
            description: heroTranslations.employers.description,
            buttonText: heroTranslations.employers.button,
            bgColor: 'bg-black',
            textColor: 'text-white',
            buttonBorderColor: 'border-white',
        },
        {
            id: 3,
            category: heroTranslations.services.category,
            title: heroTranslations.services.title,
            description: heroTranslations.services.description,
            buttonText: heroTranslations.services.button,
            bgColor: `bg-[${PRIMARY_COLOR}]`,
            textColor: 'text-black',
            buttonBorderColor: 'border-black',
        },
    ];

    const current = slides[0];
    const next = slides[1];



    return (
        <>
            {/* Mobile Layout - Vertical Stack */}
            <div className="md:hidden">
                {/* Students Section */}
                <div className={`relative w-full min-h-screen ${current.bgColor} ${current.textColor} flex flex-col items-center justify-center px-4 py-20 overflow-hidden`}>
                    {/* Student Image - Mobile */}
                    <div className="absolute bottom-0 right-0 w-3/5 h-2/5 flex items-end justify-end pointer-events-none opacity-30">
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1761862361/Adobe_Express_-_file_g1vvp9.png"
                            alt="Student"
                            width={600}
                            height={800}
                            quality={100}
                            className="h-full w-auto object-contain object-bottom"
                            priority
                            unoptimized
                        />
                    </div>

                    <div className="w-full max-w-lg space-y-4 z-10">
                        <div className="relative">
                            <p className="text-xs font-bold tracking-widest opacity-90 uppercase">
                                {current.category}
                            </p>
                            <Image
                                src="https://res.cloudinary.com/destej60y/image/upload/v1761863326/Education-Degree--Streamline-Stickies_1_fwpwaa.svg"
                                alt="Student Icon"
                                width={60}
                                height={60}
                                className="absolute -top-8 right-0 w-14 h-14 animate-float"
                            />
                        </div>
                        <h1 className="text-3xl font-black leading-tight">
                            {current.title}
                        </h1>
                        <p className="text-sm opacity-90 leading-relaxed">
                            {current.description}
                        </p>
                        <div className="flex flex-col items-start space-y-4">
                            <button className="primary-button-white-blackhover-always group flex items-center gap-2">
                                {current.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <a href="#" title={heroTranslations.appStore.google} className="inline-block">
                                    <Image
                                        src={locale === 'fr'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761870567/Store_Google_Play_Type_Dark_Language_French_3x_f42kdv.png"
                                            : locale === 'nl'
                                                ? "https://res.cloudinary.com/destej60y/image/upload/v1761871343/Store_Google_Play_Type_Dark_Language_Dutch_3x_ao9g1i.png"
                                                : "https://res.cloudinary.com/destej60y/image/upload/v1761869890/Store_Google_Play_Type_Dark_Language_English_3x_gcn0ms.png"}
                                        alt="Google Play Store"
                                        width={135}
                                        height={40}
                                        quality={100}
                                        unoptimized
                                    />
                                </a>
                                <a href="#" title={heroTranslations.appStore.apple} className="inline-block">
                                    <Image
                                        src={locale === 'fr'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761870610/Store_App_Store_Type_Dark_Language_French_3x_uraliz.png"
                                            : locale === 'nl'
                                                ? "https://res.cloudinary.com/destej60y/image/upload/v1761871362/Store_App_Store_Type_Dark_Language_Dutch_3x_dnzpk7.png"
                                                : "https://res.cloudinary.com/destej60y/image/upload/v1761870592/Store_App_Store_Type_Dark_Language_English_3x_jfcyui.png"}
                                        alt="Apple App Store"
                                        width={135}
                                        height={40}
                                        quality={100}
                                        unoptimized
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Employers Section */}
                <div id="employers-section" className={`relative w-full min-h-screen ${next.bgColor} ${next.textColor} flex flex-col items-center justify-center px-4 py-20 overflow-hidden`}>
                    <div className="w-full max-w-lg space-y-4 z-10">
                        <p className="text-xs font-bold tracking-widest opacity-90 uppercase">
                            {next.category}
                        </p>
                        <h2 className="text-3xl font-black leading-tight">
                            {next.title}
                        </h2>
                        <p className="text-sm opacity-90 leading-relaxed">
                            {next.description}
                        </p>
                        <button className="primary-button-white-blackhover-always group flex items-center gap-2 px-6 py-3 font-medium text-sm">
                            {next.buttonText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:flex relative w-full h-screen overflow-hidden">
                {/* Left Panel - Current Slide with Hover Expansion */}
                <div
                    className={`relative ${isLeftHovered ? 'w-[95%]' : 'w-1/2'} ${current.bgColor} ${current.textColor} flex items-center justify-start px-8 md:px-12 lg:px-20 pt-24 transition-all duration-700 ease-in-out overflow-hidden group`}
                // ANIMATION DISABLED - Uncomment lines below to re-enable hover expansion
                // onMouseEnter={() => setIsLeftHovered(true)}
                // onMouseLeave={() => setIsLeftHovered(false)}
                >
                    {/* Student Image - Shown on Hover */}
                    <div className={`absolute right-0 top-0 h-full w-1/2 flex items-end justify-end pointer-events-none transition-all duration-700 ${isLeftHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1761862361/Adobe_Express_-_file_g1vvp9.png"
                            alt="Student"
                            width={1200}
                            height={1600}
                            quality={100}
                            className="h-[90%] w-auto object-contain object-bottom"
                            priority
                            unoptimized
                        />
                    </div>

                    <div className={`${isLeftHovered ? 'max-w-md' : 'max-w-2xl'} w-full space-y-4 md:space-y-6 z-10 transition-all duration-700 ${isLeftHovered ? 'translate-x-12' : 'translate-x-0'}`}>
                        <div className="relative">
                            <p className="text-base md:text-lg font-bold tracking-widest opacity-90">
                                {current.category}
                            </p>
                            <Image
                                src="https://res.cloudinary.com/destej60y/image/upload/v1761863326/Education-Degree--Streamline-Stickies_1_fwpwaa.svg"
                                alt="Student Icon"
                                width={80}
                                height={80}
                                className="absolute -top-10 right-0 w-20 h-20 animate-float"
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                            {current.title}
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                            {current.description}
                        </p>
                        <div className="flex flex-col items-start space-y-4">
                            <button className="primary-button-white-blackhover group flex items-center gap-3">
                                {current.buttonText}
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <a href="#" title={heroTranslations.appStore.google} className="inline-block">
                                    <Image
                                        src={locale === 'fr'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761870567/Store_Google_Play_Type_Dark_Language_French_3x_f42kdv.png"
                                            : locale === 'nl'
                                                ? "https://res.cloudinary.com/destej60y/image/upload/v1761871343/Store_Google_Play_Type_Dark_Language_Dutch_3x_ao9g1i.png"
                                                : "https://res.cloudinary.com/destej60y/image/upload/v1761869890/Store_Google_Play_Type_Dark_Language_English_3x_gcn0ms.png"}
                                        alt="Google Play Store"
                                        width={150}
                                        height={45}
                                        quality={100}
                                        unoptimized
                                    />
                                </a>
                                <a href="#" title={heroTranslations.appStore.apple} className="inline-block">
                                    <Image
                                        src={locale === 'fr'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761870610/Store_App_Store_Type_Dark_Language_French_3x_uraliz.png"
                                            : locale === 'nl'
                                                ? "https://res.cloudinary.com/destej60y/image/upload/v1761871362/Store_App_Store_Type_Dark_Language_Dutch_3x_dnzpk7.png"
                                                : "https://res.cloudinary.com/destej60y/image/upload/v1761870592/Store_App_Store_Type_Dark_Language_English_3x_jfcyui.png"}
                                        alt="Apple App Store"
                                        width={150}
                                        height={45}
                                        quality={100}
                                        unoptimized
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Employers Section */}
                <div
                    className={`relative ${isLeftHovered ? 'w-[5%]' : 'w-1/2'} ${next.bgColor} ${next.textColor} flex items-center justify-center transition-all duration-700 ease-in-out`}
                >
                    {/* Show arrow when hovered, show content when not expanded */}
                    {isLeftHovered ? (
                        <ArrowRight className="w-8 h-8 animate-pulse" />
                    ) : (
                        <div className="max-w-2xl w-full space-y-4 md:space-y-6 z-10 px-8 md:px-12 lg:px-20 pt-24">
                            <p className="text-base md:text-lg font-bold tracking-widest opacity-90">
                                {next.category}
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                                {next.title}
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                                {next.description}
                            </p>
                            <button className="primary-button-00e5ff-whitehover group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base">
                                {next.buttonText}
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
