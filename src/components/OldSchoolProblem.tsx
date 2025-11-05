'use client';

import React from 'react';
import Image from 'next/image';
import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/old-school-problem.css';
import '@/styles/components/fluid-highlight.css';

interface OldSchoolProblemProps {
    locale: string;
}

interface StepContent {
    title: string;
    description: string;
}

interface OldSchoolSection {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
        step1: StepContent;
        step2: StepContent;
        step3: StepContent;
        step4: StepContent;
        step5: StepContent;
    };
}

const OldSchoolProblem: React.FC<OldSchoolProblemProps> = ({ locale }) => {
    const translations = useTranslation(locale) as Record<string, unknown>;
    const content = translations?.['OldSchoolProblem'] as OldSchoolSection | undefined;
    if (!content) return null;

    const { badge, title, steps } = content;
    const problems = [
        { id: '1', title: steps.step1.title, description: steps.step1.description },
        { id: '2', title: steps.step2.title, description: steps.step2.description },
        { id: '3', title: steps.step3.title, description: steps.step3.description },
        { id: '4', title: steps.step4.title, description: steps.step4.description },
        { id: '5', title: steps.step5.title, description: steps.step5.description },
    ];

    // Define words to highlight per locale
    const highlightWords: Record<string, string> = {
        'fr': 'Ancienne',
        'en': 'Hard',
        'nl': 'Moeilijke'
    };

    const wordToHighlight = highlightWords[locale] || '';

    // SVG helpers for dashed ellipses and connectors
    // old variables from ellipse layout removed

    return (
        <section className="old-school-problem-wrapper">
            <div className="container">
                <div className="badge">{badge}</div>
                <h2 className="title">
                    {typeof title === 'string' && wordToHighlight && title.includes(wordToHighlight) ? (
                        title.split(wordToHighlight).map((part, index, array) => (
                            index < array.length - 1 ? (
                                <span key={index}>
                                    {part}
                                    <span className="fluid-highlight-container fluid-highlight-red">
                                        <span className="fluid-highlight">{wordToHighlight}</span>
                                    </span>
                                </span>
                            ) : (
                                part
                            )
                        ))
                    ) : (
                        title
                    )}
                </h2>

                {/* Straight Horizontal Timeline with big crosses and red boxes */}
                <div className="hz-timeline">
                    <div className="hz-timeline-line" />
                    <div className="hz-timeline-items">
                        {problems.map((problem) => (
                            <div key={problem.id} className="hz-item">
                                <div className="hz-marker">
                                    <div className="hz-marker-circle">
                                        <Image
                                            src="https://res.cloudinary.com/dpag93lrl/image/upload/v1762307163/cross-red_l3qgzb.svg"
                                            alt="Cross Icon"
                                            width={44}
                                            height={44}
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                                <div className="hz-step-box">
                                    <span className="hz-step-index">{problem.id}</span>
                                    <h3 className="hz-step-title">{problem.title}</h3>
                                    <p className="hz-step-text">{problem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile fallback: horizontal scroll keeps the same look */}
            </div>
        </section>
    );
};

export default OldSchoolProblem;
