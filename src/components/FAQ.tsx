'use client';

import { useState } from 'react';
import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/faq.css';

interface FAQProps {
    locale: string;
}

interface FAQItemTranslation {
    question: string;
    answer: string;
}

interface FAQTranslations {
    badge: string;
    title: string;
    subtitle: string;
    items: FAQItemTranslation[];
}

const FAQ = ({ locale }: FAQProps) => {
    const translations = useTranslation(locale);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!translations.FAQ) {
        return null;
    }

    const t = translations.FAQ as unknown as FAQTranslations;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="faq-badge">
                        {t.badge}
                    </div>
                    <h2 className="faq-title">
                        {t.title}
                    </h2>
                    <p className="faq-subtitle">
                        {t.subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="faq-list">
                    {t.items.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="faq-question"
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className="faq-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div className="faq-answer-wrapper">
                                <div className="faq-answer">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
