import Link from 'next/link';

export default function AnimatedAuthPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">Animated Auth</h1>
                <p className="text-gray-400">Coming soon...</p>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/sandbox"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                    ← Back to Sandbox
                </Link>
            </div>
        </div>
    );
}
