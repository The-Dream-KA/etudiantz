'use client';

import useTranslation from '@/hooks/useTranslation';
import '@/styles/components/social-proof.css';
import '@/styles/components/fluid-highlight.css';

interface SocialProofProps {
    locale: string;
}

interface StatTranslation {
    value: string;
    label: string;
}

interface TestimonialTranslation {
    name: string;
    role: string;
    university: string;
    content: string;
    avatar: string;
}

interface SocialProofTranslations {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
        students: StatTranslation;
        jobs: StatTranslation;
        employers: StatTranslation;
        satisfaction: StatTranslation;
    };
    testimonialsTitle: string;
    testimonials: TestimonialTranslation[];
}

const SocialProof = ({ locale }: SocialProofProps) => {
    const translations = useTranslation(locale);

    if (!translations.SocialProof) {
        return null;
    }

    const t = translations.SocialProof as unknown as SocialProofTranslations;

    return (
        <section className="social-proof-section">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="social-proof-badge">
                        {t.badge}
                    </div>
                    <h2 className="social-proof-title">
                        {t.title}
                    </h2>
                    <p className="social-proof-subtitle">
                        {t.subtitle}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">
                            <span className="fluid-highlight-container">
                                <span className="fluid-highlight fluid-highlight-cyan">{t.stats.students.value}</span>
                            </span>
                        </div>
                        <div className="stat-label">{t.stats.students.label}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">
                            <span className="fluid-highlight-container">
                                <span className="fluid-highlight fluid-highlight-cyan">{t.stats.jobs.value}</span>
                            </span>
                        </div>
                        <div className="stat-label">{t.stats.jobs.label}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">
                            <span className="fluid-highlight-container">
                                <span className="fluid-highlight fluid-highlight-cyan">{t.stats.employers.value}</span>
                            </span>
                        </div>
                        <div className="stat-label">{t.stats.employers.label}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">
                            <span className="fluid-highlight-container">
                                <span className="fluid-highlight fluid-highlight-cyan">{t.stats.satisfaction.value}</span>
                            </span>
                        </div>
                        <div className="stat-label">{t.stats.satisfaction.label}</div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="testimonials-section">
                    <h3 className="testimonials-title">
                        {t.testimonialsTitle}
                    </h3>
                    <div className="testimonials-grid">
                        {t.testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-content">
                                    <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="testimonial-text">
                                        {testimonial.content}
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                        <div className="author-university">{testimonial.university}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                    <div className="trust-badge">
                        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <path d="M9 12l2 2 4-4"></path>
                        </svg>
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="trust-badge">
                        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Secure Platform</span>
                    </div>
                    <div className="trust-badge">
                        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                        <span>24/7 Support</span>
                    </div>
                    <div className="trust-badge">
                        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>4.8/5 Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
