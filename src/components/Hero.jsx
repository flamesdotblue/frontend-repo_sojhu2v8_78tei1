import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-orange-100/40 to-blue-100/40 dark:from-orange-900/20 dark:to-blue-900/20">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast. Must not block interactions with Spline. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
          Discover the soul of South India
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight drop-shadow-sm sm:text-5xl md:text-6xl">
          Incredible South — Explore South India
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          From coastlines to coffee hills — your journey begins here. Find your perfect destinations across Karnataka, Kerala, Tamil Nadu, Telangana, Andhra Pradesh, and Puducherry.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreClick}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:shadow-lg"
          >
            Explore Destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#mira"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 px-5 py-2.5 text-sm font-semibold shadow-md transition hover:opacity-95"
          >
            Talk to Mira
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
