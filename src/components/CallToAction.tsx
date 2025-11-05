'use client';

import React from 'react';
import Image from 'next/image';
import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/call-to-action.css';
import '@/styles/components/primary-button-black-blackhover.css';

interface CallToActionProps {
    locale: string;
}

interface CTASection {
    badge: string;
    students: {
        category: string;
        title: string;
        button: string;
        googlePlayTitle: string;
        appStoreTitle: string;
    };
    employers: {
        category: string;
        title: string;
        button: string;
    };
}

const CallToAction: React.FC<CallToActionProps> = ({ locale }) => {
    const translations = useTranslation(locale) as Record<string, unknown>;
    const content = translations?.['CallToAction'] as CTASection | undefined;
    if (!content) return null;

    const { badge, students, employers } = content;

    return (
        <section className="call-to-action-wrapper">
            <div className="container">
                <div className="badge">{badge}</div>

                {/* Two-column grid for students and employers */}
                <div className="cta-grid">
                    {/* Students CTA */}
                    <div className="cta-card cta-students">
                        <div className="cta-category">{students.category}</div>
                        <h2 className="cta-title">{students.title}</h2>

                        {/* Hero Button */}
                        <button className="primary-button-black-blackhover">
                            {students.button}
                        </button>

                        {/* App Store Buttons */}
                        <div className="app-store-buttons">
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-button"
                                title={students.googlePlayTitle}
                            >
                                <Image
                                    src={locale === 'fr'
                                        ? "https://res.cloudinary.com/destej60y/image/upload/v1761870567/Store_Google_Play_Type_Dark_Language_French_3x_f42kdv.png"
                                        : locale === 'nl'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761871343/Store_Google_Play_Type_Dark_Language_Dutch_3x_ao9g1i.png"
                                            : "https://res.cloudinary.com/destej60y/image/upload/v1761869890/Store_Google_Play_Type_Dark_Language_English_3x_gcn0ms.png"}
                                    alt={students.googlePlayTitle}
                                    width={135}
                                    height={40}
                                    quality={100}
                                    unoptimized
                                />
                            </a>
                            <a
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-button"
                                title={students.appStoreTitle}
                            >
                                <Image
                                    src={locale === 'fr'
                                        ? "https://res.cloudinary.com/destej60y/image/upload/v1761870610/Store_App_Store_Type_Dark_Language_French_3x_uraliz.png"
                                        : locale === 'nl'
                                            ? "https://res.cloudinary.com/destej60y/image/upload/v1761871362/Store_App_Store_Type_Dark_Language_Dutch_3x_dnzpk7.png"
                                            : "https://res.cloudinary.com/destej60y/image/upload/v1761870592/Store_App_Store_Type_Dark_Language_English_3x_jfcyui.png"}
                                    alt={students.appStoreTitle}
                                    width={135}
                                    height={40}
                                    quality={100}
                                    unoptimized
                                />
                            </a>
                        </div>
                    </div>

                    {/* Employers CTA */}
                    <div className="cta-card cta-employers">
                        <div className="cta-category">{employers.category}</div>
                        <h2 className="cta-title">{employers.title}</h2>

                        {/* Hero Button */}
                        <button className="primary-button-black-blackhover">
                            {employers.button}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
