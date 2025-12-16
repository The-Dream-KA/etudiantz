import ComingSoon from '@/components/ComingSoon';
import '@/styles/components/coming-soon.css';

export default function LearningCenterPage() {
    return (
        <ComingSoon
            title="Learning Center"
            description="Access tutoring, study resources, and academic support to excel in your courses and achieve your educational goals."
            icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    <path d="M12 21V7"></path>
                </svg>
            }
        />
    );
}
