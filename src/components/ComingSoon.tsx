'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import useTranslation from '@/hooks/useTranslation';

interface ComingSoonProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function ComingSoon({ title, description, icon }: ComingSoonProps) {
    const params = useParams();
    const locale = (params.locale as string) || 'en';
    const translations = useTranslation(locale);

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = translations;
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Implement actual waitlist signup logic
        // For now, just simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setIsLoading(false);
        setEmail('');
    };

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-content">
                <div className="coming-soon-icon-wrapper">
                    <div className="coming-soon-icon">
                        {icon}
                    </div>
                </div>

                <div className="coming-soon-badge">
                    {t('comingSoon.badge')}
                </div>

                <h1 className="coming-soon-title">{title}</h1>
                <p className="coming-soon-description">{description}</p>

                <div className="waitlist-section">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="waitlist-form">
                            <div className="form-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('comingSoon.emailPlaceholder')}
                                    required
                                    className="email-input"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isLoading}
                                >
                                    {isLoading ? t('comingSoon.joining') : t('comingSoon.joinWaitlist')}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="success-message">
                            <svg
                                className="success-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p>{t('comingSoon.successMessage')}</p>
                        </div>
                    )}

                    <p className="waitlist-info">
                        {t('comingSoon.info')}
                    </p>
                </div>
            </div>
        </div>
    );
}
