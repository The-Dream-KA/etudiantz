import Link from 'next/link';

export default function ButtonSandboxPage() {
  const buttonSets = [
    {
      id: 'components',
      title: 'Component Playground',
      description: 'Sandbox for the core "My Student Space" CTA across variants',
      gradient: 'from-cyan-400 to-cyan-600'
    },
    {
      id: 'yellow-neomorphic',
      title: 'Yellow Neomorphic',
      description: '3D raised buttons with vibrant colors on cyan background',
      gradient: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 'hard-shadow',
      title: 'Hard Shadow',
      description: 'Buttons with a solid, offset shadow for a 3D/pop-out effect',
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      id: 'glassmorphism',
      title: 'Modern Glassmorphism',
      description: 'Glass effect with backdrop blur and smooth hover animations',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      id: 'gradients',
      title: 'Animated Gradients',
      description: 'Animated gradient backgrounds with glow effects',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 'neumorphism',
      title: '3D Neumorphism',
      description: 'Soft shadows with 3D pressed effects',
      gradient: 'from-gray-300 to-gray-400'
    },
    {
      id: 'liquid',
      title: 'Liquid/Blob Animations',
      description: 'Fluid morphing animations and blob effects',
      gradient: 'from-cyan-400 to-teal-500'
    },
    {
      id: 'glowing',
      title: 'Glowing Button',
      description: 'A button with a glowing effect',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'minimal',
      title: 'Minimal Micro-interactions',
      description: 'Minimalist with sophisticated hover and click animations',
      gradient: 'from-slate-600 to-slate-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Button Design Sandbox 🎨
          </h1>
          <p className="text-gray-300 text-lg">
            Explore and test different button designs and animations
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buttonSets.map((set) => (
            <Link
              key={set.id}
              href={`/sandbox/buttons/${set.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:scale-105 transition-all duration-300 hover:bg-white/15"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${set.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {set.title}
                </h2>
                <p className="text-gray-300 text-sm">
                  {set.description}
                </p>

                <div className="mt-4 flex items-center text-white/70 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">View Examples</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
