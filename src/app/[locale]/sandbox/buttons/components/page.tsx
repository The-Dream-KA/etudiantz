'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
};

type ButtonSurface = {
  id: string;
  name: string;
  description: string;
  wrapperClassName: string;
  nameClassName: string;
  descriptionClassName: string;
  render: () => ReactNode;
};

const baseButtonClass =
  'group inline-flex items-center gap-4 rounded-full px-9 py-4 text-lg font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black active:translate-y-0.5';

const iconClass =
  'h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1.5 group-focus-visible:translate-x-1';

const renderBrandButton = () => (
  <button
    className={`${baseButtonClass} border border-black bg-white text-black shadow-[0_6px_0_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_12px_0_rgba(0,0,0,0.4)] active:shadow-[0_3px_0_rgba(0,0,0,0.35)]`}
  >
    <span className="transition-colors duration-200">My Student Space</span>
    <ArrowRight className={iconClass} />
  </button>
);

const buttonVariants: ButtonVariant[] = [
  {
    id: 'classic-pill',
    title: 'Classic Pill',
    description:
      'Matches the original concept with a subtle lift and arrow nudge on hover.',
    render: renderBrandButton
  },
  {
    id: 'offset-shadow',
    title: 'Offset Shadow Poster',
    description:
      'Exact replica of the provided job search CTA with offset black capsule shadow and tiled orange backdrop.',
    render: () => (
      <div
        className="relative flex items-center justify-center rounded-[32px] p-10"
        style={{
          backgroundColor: '#ff8848',
          backgroundImage:
            'linear-gradient(transparent calc(100% - 1px), rgba(0,0,0,0.12) calc(100% - 1px)), linear-gradient(90deg, transparent calc(100% - 1px), rgba(0,0,0,0.12) calc(100% - 1px))',
          backgroundSize: '80px 80px'
        }}
      >
        <button
          className="relative inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-12 py-5 text-sm font-black uppercase tracking-[0.28em] text-black transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black active:translate-y-0.5"
          style={{ letterSpacing: '0.28em' }}
        >
          <span className="relative z-10">START YOUR JOB SEARCH</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[-34px] top-1/2 h-[72px] w-[72px] -translate-y-1/2 rounded-full bg-black shadow-[0_0_0_2px_rgba(0,0,0,0.8)]"
          />
        </button>
      </div>
    )
  },
  {
    id: 'outline-glow',
    title: 'Glass Outline',
    description:
      'Translucent take with a soft glow - ideal when overlaying photography.',
    render: () => (
      <button
        className={`${baseButtonClass} relative border border-black/70 bg-white/80 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.2)] backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(0,0,0,0.2)]`}
      >
        <span className="transition-colors duration-200">My Student Space</span>
        <ArrowRight className={iconClass} />
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.25)' }}
        />
      </button>
    )
  },
  {
    id: 'gradient-fill',
    title: 'Gradient Fill',
    description:
      'Layered gradient with crisp outline for high-energy hero sections.',
    render: () => (
      <button
        className={`${baseButtonClass} border border-black/80 bg-gradient-to-r from-white via-amber-100 to-white text-black shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:brightness-105 active:brightness-95`}
      >
        <span className="transition-colors duration-200">My Student Space</span>
        <ArrowRight className={iconClass} />
      </button>
    )
  },
  {
    id: 'dark-card',
    title: 'Dark Card CTA',
    description:
      'Inverted palette with a polished sheen for darker layouts and footers.',
    render: () => (
      <button
        className={`${baseButtonClass} border border-white/70 bg-black/90 text-white shadow-[0_18px_36px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:shadow-[0_28px_48px_rgba(0,0,0,0.6)] focus-visible:outline-white active:shadow-[0_10px_20px_rgba(0,0,0,0.45)]`}
      >
        <span className="transition-colors duration-200 group-hover:text-black">
          My Student Space
        </span>
        <ArrowRight
          className={`${iconClass} transition-colors duration-200 group-hover:text-black`}
        />
      </button>
    )
  }
];

const buttonSurfaces: ButtonSurface[] = [
  {
    id: 'brand-cyan',
    name: 'Brand Cyan Background',
    description: 'Default usage over the EtudiantZ primary background colour.',
    wrapperClassName: 'bg-[#00e5ff]',
    nameClassName: 'text-black',
    descriptionClassName: 'text-black/70',
    render: renderBrandButton
  },
  {
    id: 'white-card',
    name: 'Minimal Card',
    description: 'Placed within a white card - drop the heavy shadow.',
    wrapperClassName: 'bg-white',
    nameClassName: 'text-black',
    descriptionClassName: 'text-black/60',
    render: () => (
      <button
        className={`${baseButtonClass} border border-black/40 bg-white text-black shadow-sm hover:-translate-y-0.5 hover:shadow-md active:shadow-none`}
      >
        <span className="transition-colors duration-200">My Student Space</span>
        <ArrowRight className={iconClass} />
      </button>
    )
  },
  {
    id: 'dark-hero',
    name: 'Dark Hero',
    description: 'High contrast treatment on a deep slate gradient.',
    wrapperClassName:
      'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white',
    nameClassName: 'text-white',
    descriptionClassName: 'text-white/80',
    render: () => (
      <button
        className={`${baseButtonClass} border border-white/60 bg-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:bg-white/20 hover:text-black focus-visible:outline-white`}
      >
        <span className="transition-colors duration-200 group-hover:text-black">
          My Student Space
        </span>
        <ArrowRight
          className={`${iconClass} transition-colors duration-200 group-hover:text-black`}
        />
      </button>
    )
  }
];

export default function ButtonComponentsSandboxPage() {
  return (
    <div
      className="min-h-screen bg-[#00e5ff] bg-[radial-gradient(circle_at_top,_#5ff6ff,_#00c7e5)]"
      role="presentation"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 md:px-10 lg:px-16">
        <Link
          href="/sandbox/buttons"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to button sets
        </Link>

        <header className="mt-10 mb-12 text-center text-black md:mt-14">
          <h1 className="text-4xl font-bold md:text-5xl">
            Button Components Sandbox
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-black/70 md:text-lg">
            Explore multiple takes on the &ldquo;My Student Space&rdquo; call to
            action. Each variant keeps the core layout - text on the left, arrow
            on the right - while highlighting different tone, depth, and motion
            treatments.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {buttonVariants.map((variant) => (
            <article
              key={variant.id}
              className="rounded-3xl bg-white/80 p-8 text-black shadow-[0_35px_80px_rgba(0,0,0,0.15)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_45px_90px_rgba(0,0,0,0.2)]"
            >
              <h2 className="text-2xl font-semibold">{variant.title}</h2>
              <p className="mt-2 text-sm text-black/70">{variant.description}</p>
              <div className="mt-8 flex justify-center">{variant.render()}</div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl bg-white/80 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.15)] backdrop-blur-sm">
          <div className="mb-8 text-center text-black">
            <h2 className="text-2xl font-semibold">Background Checks</h2>
            <p className="mt-2 text-sm text-black/70">
              Quickly validate contrast and depth across common surface types.
              The button keeps the arrow lockup consistent while adapting tone,
              shadow, and focus styles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {buttonSurfaces.map((surface) => (
              <div
                key={surface.id}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <div
                  className={`flex h-full flex-col justify-between gap-6 p-6 ${surface.wrapperClassName}`}
                >
                  <div>
                    <h3
                      className={`text-lg font-semibold drop-shadow ${surface.nameClassName}`}
                    >
                      {surface.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm drop-shadow ${surface.descriptionClassName}`}
                    >
                      {surface.description}
                    </p>
                  </div>
                  <div className="flex justify-center">{surface.render()}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 mb-6 flex flex-col items-center gap-4 text-sm text-black/70 md:flex-row md:justify-center">
          <span>
            Tip: Focus the button with <kbd className="rounded bg-white/70 px-2 py-1 text-xs font-semibold text-black shadow">Tab</kbd>{' '}
            to check the outline treatment.
          </span>
          <span className="hidden h-4 w-px bg-black/20 md:block" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-black hover:text-black/60"
          >
            Return home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
