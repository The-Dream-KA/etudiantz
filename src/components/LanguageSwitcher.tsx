'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import styles from './LanguageSwitcher.module.css';

const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'fr', name: 'FR', fullName: 'Français' },
    { code: 'nl', name: 'NL', fullName: 'Nederlands' },
];

interface LanguageSwitcherProps {
    currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Use useMemo to derive selected language from currentLocale
    const selectedLanguage = useMemo(() =>
        languages.find(lang => lang.code === currentLocale) || languages[1],
        [currentLocale]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (language: typeof languages[0]) => {
        setIsOpen(false);

        // Save current scroll position before navigation
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        sessionStorage.setItem('scrollPosition', scrollPosition.toString());

        // Replace the locale in the current path
        const segments = pathname.split('/');
        segments[1] = language.code; // Replace locale segment
        const newPath = segments.join('/');

        router.push(newPath);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-black border-2 border-black rounded-full"
            >
                <span>{selectedLanguage.name}</span>
                <ChevronDown
                    className={`w-3 h-3 sm:w-4 sm:h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 sm:w-40 bg-white border-2 border-black rounded-xl shadow-2xl overflow-hidden z-50">
                    {languages.map((lang, index) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang)}
                            className={`${styles.languageButton} ${selectedLanguage.code === lang.code ? styles.selected : ''} flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${index !== languages.length - 1 ? 'border-b border-gray-200' : ''}`}
                        >
                            <span className="font-bold">{lang.name}</span>
                            <span className="text-xs opacity-75 hidden sm:inline">{lang.fullName}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
