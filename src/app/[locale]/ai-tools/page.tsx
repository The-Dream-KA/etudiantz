import ComingSoon from '@/components/ComingSoon';
import '@/styles/components/coming-soon.css';

export default function AIToolsPage() {
    return (
        <ComingSoon
            title="AI Tools"
            description="Leverage cutting-edge AI-powered tools to enhance your productivity, learning, and academic success."
            icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="m16.2 7.8 2.9-2.9"></path>
                    <path d="M18 12h4"></path>
                    <path d="m16.2 16.2 2.9 2.9"></path>
                    <path d="M12 18v4"></path>
                    <path d="m4.9 19.1 2.9-2.9"></path>
                    <path d="M2 12h4"></path>
                    <path d="m4.9 4.9 2.9 2.9"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            }
        />
    );
}
