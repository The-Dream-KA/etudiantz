'use client';

import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

interface HeaderProps {
    onLocaleChange: (locale: string) => void;
}

export default function Header({ onLocaleChange }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#00e5ff] backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 grid grid-cols-3 items-center gap-2">
                {/* Empty div for left side to balance the grid */}
                <div></div>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-black whitespace-nowrap">
                        EtudiantZ.be
                    </Link>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-4 justify-end">
                    <LanguageSwitcher onLocaleChange={onLocaleChange} />
                </div>
            </div>
        </header>
    );
}
