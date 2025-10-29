import React, { useRef } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedSections from './components/FeaturedSections';
import Footer from './components/Footer';

function App() {
  const exploreRef = useRef(null);

  const handleExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            Incredible <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">South</span>
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a className="opacity-80 transition hover:opacity-100" href="#">Home</a>
            <a className="opacity-80 transition hover:opacity-100" href="#">Destinations</a>
            <a className="opacity-80 transition hover:opacity-100" href="#">Experiences</a>
            <a className="opacity-80 transition hover:opacity-100" href="#">Blog</a>
          </nav>
        </header>

        {/* Hero with Spline */}
        <Hero onExploreClick={handleExplore} />

        {/* Search */}
        <section className="-mt-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-950/60">
            <SearchBar />
          </div>
        </section>

        {/* Featured */}
        <main ref={exploreRef} className="mt-12 space-y-10">
          <FeaturedSections />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
