'use client';

import React from 'react';
import Image from 'next/image';
import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/complete-solution.css';

interface CompleteSolutionProps {
    locale: string;
}

interface Feature {
    title: string;
    description: string;
}

interface CompleteSolutionSection {
    badge: string;
    title: string;
    subtitle: string;
    features: {
        feature1: Feature;
        feature2: Feature;
        feature3: Feature;
        feature4: Feature;
        feature5: Feature;
    };
}

const CompleteSolution: React.FC<CompleteSolutionProps> = ({ locale }) => {
    const translations = useTranslation(locale) as Record<string, unknown>;
    const content = translations?.['CompleteSolution'] as CompleteSolutionSection | undefined;
    if (!content) return null;

    const { badge, title, features } = content;

    const solutions = [
        { id: '1', title: features.feature1.title, description: features.feature1.description },
        { id: '2', title: features.feature2.title, description: features.feature2.description },
        { id: '3', title: features.feature3.title, description: features.feature3.description },
        { id: '4', title: features.feature4.title, description: features.feature4.description },
        { id: '5', title: features.feature5.title, description: features.feature5.description },
    ];

    return (
        <section className="complete-solution-wrapper">
            <div className="container">
                <div className="badge">{badge}</div>
                <h2 className="title">{title}</h2>

                {/* Straight Horizontal Timeline with checkmarks and green boxes */}
                <div className="hz-timeline">
                    <div className="hz-timeline-line" />
                    <div className="hz-timeline-items">
                        {solutions.map((solution) => (
                            <div key={solution.id} className="hz-item">
                                <div className="hz-marker">
                                    <div className="hz-marker-circle">
                                        <Image
                                            src="https://res.cloudinary.com/dpag93lrl/image/upload/v1762311725/Validation-1--Streamline-Stickies_qhjnra.svg"
                                            alt="Checkmark Icon"
                                            width={44}
                                            height={44}
                                            unoptimized={true}
                                        />
                                    </div>
                                </div>
                                <div className="hz-step-box">
                                    <span className="hz-step-index">{solution.id}</span>
                                    <h3 className="hz-step-title">{solution.title}</h3>
                                    <p className="hz-step-text">{solution.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompleteSolution;
