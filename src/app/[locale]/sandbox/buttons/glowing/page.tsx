import './glowing.css';
import '../../../../styles/components/primary-button-black-whitehover.css';
import '../../../../styles/components/primary-button.css';
import '../../../../styles/components/primary-button-white-blackhover-always.css';
import '../../../../styles/components/primary-button-black-whitehover-always.css';
import '../../../../styles/components/primary-button-00e5ff-whitehover-always.css';
import '../../../../styles/components/primary-button-white-whitehover-always.css';
import Link from 'next/link';

export default function GlowingButtonPage() {
    return (
        <div className="min-h-screen bg-[#00e5ff] flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">Glowing Button</h1>
                <p className="text-gray-400">A button with a glowing effect.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
                <button className="button-85" role="button">My Student Space →</button>
                <button className="primary-button-white-blackhover" role="button">My Student Space →</button>
                <button className="primary-button-black-whitehover" role="button">My Student Space →</button>
                <button className="primary-button-white-blackhover-always" role="button">My Student Space →</button>
                <button className="primary-button-black-whitehover-always" role="button">My Student Space →</button>
                <button className="primary-button-00e5ff-whitehover-always" role="button">My Student Space →</button>
                <button className="primary-button-white-whitehover-always" role="button">My Student Space →</button>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/sandbox/buttons"
                    className="inline-flex items-center text-black hover:text-white transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Sandbox
                </Link>
            </div>
        </div>
    );
}
