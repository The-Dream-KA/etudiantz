import ComingSoon from '@/components/ComingSoon';
import '@/styles/components/coming-soon.css';

export default function DrivingLicensePage() {
    return (
        <ComingSoon
            title="Driving License B"
            description="Get your driver's license with special student rates and flexible scheduling that works with your classes."
            icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            }
        />
    );
}
