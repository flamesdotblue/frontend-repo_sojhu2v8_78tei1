import React from 'react';
import { MapPin, Star, MessageCircle } from 'lucide-react';

const TopDestinations = () => {
  const items = [
    {
      title: 'Kerala Backwaters',
      subtitle: 'Alleppey • Kumarakom',
      img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Coorg Coffee Hills',
      subtitle: 'Karnataka',
      img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mahabalipuram Shore Temple',
      subtitle: 'Tamil Nadu',
      img: 'https://images.unsplash.com/photo-1606220951830-0925b9f03a47?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Hyderabad Charminar',
      subtitle: 'Telangana',
      img: 'https://images.unsplash.com/photo-1624953587687-f282ea1b0c4c?q=80&w=1200&auto=format&fit=crop',
    },
  ];
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Star className="h-5 w-5 text-yellow-500" />
        <h3 className="text-lg font-semibold">Top Destinations</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((card) => (
          <a
            key={card.title}
            href="#"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{card.title}</h4>
              <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const CulturalHighlights = () => {
  const chips = [
    'Carnatic music',
    'Bharatanatyam',
    'Ayurveda',
    'Temple Architecture',
    'Filter Coffee',
    'Backwater Cruises',
  ];
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Cultural Highlights</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};

const TalkToMira = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-orange-500 to-blue-600 p-[1px] shadow-sm dark:border-slate-800">
      <div className="rounded-2xl bg-white p-6 dark:bg-slate-950">
        <div className="mb-3 flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-orange-500" />
          <h3 className="text-lg font-semibold">Talk to Mira</h3>
        </div>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Ask Mira to suggest destinations by mood or budget, build a 3 or 7 day itinerary, and save it to your profile.
        </p>
        <a
          id="mira"
          href="#"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:opacity-95"
        >
          Open Chat
        </a>
      </div>
    </div>
  );
};

const FeaturedSections = () => {
  return (
    <section className="space-y-10">
      <TopDestinations />
      <CulturalHighlights />
      <TalkToMira />
    </section>
  );
};

export default FeaturedSections;
