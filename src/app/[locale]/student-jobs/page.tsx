import ComingSoon from '@/components/ComingSoon';
import '@/styles/components/coming-soon.css';

export default function StudentJobsPage() {
    return (
        <ComingSoon
            title="Student Jobs"
            description="One profile, real student jobs: local and built around your timetable."
            icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M16 11l5 5"></path>
                    <path d="M21 11l-5 5"></path>
                </svg>
            }
        />
    );
}
