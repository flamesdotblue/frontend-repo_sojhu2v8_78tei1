import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">Incredible South</h4>
          <p className="mt-2 max-w-xs">Promoting the soul of South India through immersive travel experiences.</p>
        </div>
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">Stay in the loop</h4>
          <p className="mt-2">Subscribe for itineraries, guides, and seasonal picks.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.email?.value;
              if (email) alert(`Thanks for subscribing, ${email}!`);
            }}
            className="mt-3 flex gap-2"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-orange-500/20 focus:ring-4 dark:border-slate-700 dark:bg-slate-900"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-white">Connect</h4>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">YouTube</a></li>
            <li><a className="hover:underline" href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl border-t border-slate-200 pt-4 text-center text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} Incredible South — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
