'use client';

import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/service-card.css';
import '@/styles/components/fluid-highlight.css';

interface StudentServicesProps {
    locale: string;
}

interface ServiceTranslation {
    title: string;
    description: string;
}

interface StudentServicesTranslations {
    title: string;
    subtitle: string;
    learnMore: string;
    services: {
        jobs: ServiceTranslation;
        internships: ServiceTranslation;
        rooms: ServiceTranslation;
        drivingLicense: ServiceTranslation;
        learningCenter: ServiceTranslation;
        aiTools: ServiceTranslation;
    };
}

const StudentServices = ({ locale }: StudentServicesProps) => {
    const translations = useTranslation(locale);

    if (!translations.StudentServices) {
        return null;
    }

    const t = translations.StudentServices as unknown as StudentServicesTranslations;

    const services = [
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761964083/Money-Briefcase--Streamline-Stickies_4_nsegie.svg"
                    alt="Student Jobs"
                    className="service-card-icon-img"
                />
            ),
            key: 'jobs',
            link: `/${locale}/jobs`
        },
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761958504/Education-Degree--Streamline-Stickies_2_tlxiqi.svg"
                    alt="Internships"
                    className="service-card-icon-img"
                />
            ),
            key: 'internships',
            link: `/${locale}/internships`
        },
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761960324/enhanced-image-removebg-preview_pmtlir.png"
                    alt="Rooms"
                    className="service-card-icon-img"
                />
            ),
            key: 'rooms',
            link: `/${locale}/kots`
        },
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761960528/Taxi--Streamline-Stickies_uobtug.svg"
                    alt="Driving License"
                    className="service-card-icon-img"
                />
            ),
            key: 'drivingLicense',
            link: `/${locale}/driving-license`
        },
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761960744/Astrology-Study--Streamline-Stickies_zcjand.svg"
                    alt="Learning Center"
                    className="service-card-icon-img"
                />
            ),
            key: 'learningCenter',
            link: `/${locale}/learning-center`
        },
        {
            icon: (
                <img
                    src="https://res.cloudinary.com/destej60y/image/upload/v1761963259/Gemini_Generated_Image_x3l02vx3l02vx3l0-removebg-preview_kd6chw.png"
                    alt="AI Tools"
                    className="service-card-icon-img"
                />
            ),
            key: 'aiTools',
            link: `/${locale}/ai-tools`
        }
    ];

    // Define words to highlight per locale
    const highlightWords: Record<string, string> = {
        'fr': 'simplifié',
        'en': 'easier',
        'nl': 'makkelijker'
    };

    const wordToHighlight = highlightWords[locale] || '';

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {typeof t.title === 'string' && wordToHighlight && t.title.includes(wordToHighlight) ? (
                            t.title.split(wordToHighlight).map((part, index, array) => (
                                index < array.length - 1 ? (
                                    <span key={index}>
                                        {part}
                                        <span className="fluid-highlight-container">
                                            <span className="fluid-highlight">{wordToHighlight}</span>
                                        </span>
                                    </span>
                                ) : part
                            ))
                        ) : (
                            t.title
                        )}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.key} className="service-card" style={{ cursor: 'default' }}>
                            <div className="service-card-icon">{service.icon}</div>
                            <h3 className="service-card-title">
                                {t.services[service.key as keyof typeof t.services].title}
                            </h3>
                            <p className="service-card-description">
                                {t.services[service.key as keyof typeof t.services].description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentServices;
