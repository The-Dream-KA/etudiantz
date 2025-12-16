import ComingSoon from '@/components/ComingSoon';
import '@/styles/components/coming-soon.css';

export default function InternshipsPage() {
    return (
        <ComingSoon
            title="Internships"
            description="Gain valuable work experience with internships in your field. Build your career while completing your studies."
            icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            }
        />
    );
}
