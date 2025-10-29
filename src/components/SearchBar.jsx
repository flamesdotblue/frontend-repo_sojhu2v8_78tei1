import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Search, MapPin, X } from 'lucide-react';

const DESTINATIONS = [
  { state: 'Karnataka', name: 'Bengaluru' },
  { state: 'Karnataka', name: 'Coorg' },
  { state: 'Karnataka', name: 'Hampi' },
  { state: 'Kerala', name: 'Kochi' },
  { state: 'Kerala', name: 'Munnar' },
  { state: 'Kerala', name: 'Alleppey' },
  { state: 'Tamil Nadu', name: 'Chennai' },
  { state: 'Tamil Nadu', name: 'Mahabalipuram' },
  { state: 'Tamil Nadu', name: 'Kanyakumari' },
  { state: 'Andhra Pradesh', name: 'Tirupati' },
  { state: 'Andhra Pradesh', name: 'Vijayawada' },
  { state: 'Andhra Pradesh', name: 'Vizag' },
  { state: 'Telangana', name: 'Hyderabad' },
  { state: 'Telangana', name: 'Golconda' },
  { state: 'Telangana', name: 'Ramoji Film City' },
  { state: 'Puducherry', name: 'Pondicherry' },
  { state: 'Puducherry', name: 'Auroville' },
  { state: 'Puducherry', name: 'Paradise Beach' },
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return DESTINATIONS.filter(
      (d) => d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    setOpen(filtered.length > 0);
    setActiveIndex(0);
  }, [filtered.length]);

  const handleSelect = (item) => {
    setQuery(`${item.name}, ${item.state}`);
    setOpen(false);
    // In a full app, navigate to the destination page. For now, we just log.
    console.log('Navigate to destination:', item);
  };

  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) handleSelect(item);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-slate-300 focus-within:shadow-md dark:border-slate-700 dark:bg-slate-900">
        <Search className="h-5 w-5 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search destinations, states, experiences..."
          className="h-8 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          aria-label="Search destinations"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && (
        <ul
          ref={listRef}
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
          role="listbox"
        >
          {filtered.map((item, idx) => (
            <li
              key={`${item.state}-${item.name}`}
              role="option"
              aria-selected={activeIndex === idx}
              className={`${
                activeIndex === idx
                  ? 'bg-slate-50 dark:bg-slate-800'
                  : ''
              } flex cursor-pointer items-center gap-3 px-4 py-3 text-sm transition`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseDown={(e) => {
                // prevent input blur before click
                e.preventDefault();
                handleSelect(item);
              }}
            >
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="font-medium">{item.name}</span>
              <span className="ml-auto text-xs text-slate-500">{item.state}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
