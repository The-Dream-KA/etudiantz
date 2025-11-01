'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRIMARY_COLOR } from '@/lib/constants';

const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'fr', name: 'FR', fullName: 'Français' },
    { code: 'nl', name: 'NL', fullName: 'Nederlands' },
];

interface LanguageSwitcherProps {
    onLocaleChange: (locale: string) => void;
}

export default function LanguageSwitcher({ onLocaleChange }: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        setSelectedLanguage(language);
        setIsOpen(false);
        onLocaleChange(language.code);
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
                            className={`flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-black hover:text-white transition-all duration-200 ${index !== languages.length - 1 ? 'border-b border-gray-200' : ''
                                }`}
                            style={{
                                backgroundColor: selectedLanguage.code === lang.code ? PRIMARY_COLOR : 'white',
                                color: selectedLanguage.code === lang.code ? 'black' : 'black',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedLanguage.code !== lang.code) {
                                    e.currentTarget.style.backgroundColor = PRIMARY_COLOR;
                                    e.currentTarget.style.color = 'black';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedLanguage.code !== lang.code) {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = 'black';
                                }
                            }}
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
