'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { markets, items, vendors, getCheapestItemsToday, getFeaturedVendors } from '@/lib/mockData';
import { getTodayInfo, getNextMarketDay } from '@/lib/igboCalendar';
import { TrendingDown, Search, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { VendorCard } from '@/components/vendor-card';

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const todayInfo = getTodayInfo(markets);
  const todayIgboDay = todayInfo.igboDay;
  const openMarkets = todayInfo.openMarkets;

  const cheapestItems = getCheapestItemsToday(8);
  const featuredVendors = getFeaturedVendors(6);

  const nextEke = getNextMarketDay('Eke');
  const nextOrie = getNextMarketDay('Orie');
  const nextAfor = getNextMarketDay('Afor');
  const nextNkwo = getNextMarketDay('Nkwo');

  const nextDays = [
    { day: 'Eke', date: nextEke },
    { day: 'Orie', date: nextOrie },
    { day: 'Afor', date: nextAfor },
    { day: 'Nkwo', date: nextNkwo },
  ];

  const searchResults = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return [];
    return items.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(term)).slice(0, 5);
  }, [search]);

  const submitSearch = () => {
    const term = search.trim();
    if (term) router.push(`/prices?q=${encodeURIComponent(term)}`);
  };

  const isToday = (d: Date) => {
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* ─── Hero Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-crimson/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          {/* Today Badge */}
          <div className="mb-6 flex justify-center animate-fade-in px-2">
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-2 backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15">
                <Sparkles className="h-4 w-4 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/40">Today is</span>
                <span className="text-lg font-black leading-none text-gold">
                  {todayIgboDay.toUpperCase()}
                </span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Markets Open
                </span>
                <span className="text-lg font-bold leading-none text-white">
                  {openMarkets.length}
                </span>
              </div>
            </div>
          </div>

          {/* Brand Hero */}
          <div className="flex flex-col items-center justify-center gap-4 py-6 animate-fade-in-up">
            <div className="w-[180px] overflow-hidden rounded-full border-2 border-[#D4AF37] shadow-2xl md:w-[240px]">
              <img
                src="/ego-ole-logo.jpg"
                alt="EGO OLE? Logo"
                width={300}
                height={300}
                className="h-full w-full scale-110 object-cover"
              />
            </div>
            <h1 className="text-center text-2xl font-black tracking-widest text-gold md:text-3xl">
              LIVE MARKET PRICES
            </h1>
            <p className="text-center text-sm tracking-[0.3em] text-white/70">
              EKE · ORIE · AFOR · NKWO
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-2xl animate-fade-in-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 sm:left-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') submitSearch(); }}
                placeholder="Search rice, shoes, bags..."
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-20 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-gold/40 sm:py-4 sm:pl-12 sm:pr-32"
              />
              <button
                type="button"
                onClick={submitSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-gold px-3 py-2 text-xs font-bold text-black transition-all hover:bg-gold/90 sm:px-4 sm:py-2.5"
              >
                Search
              </button>
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => router.push(`/prices?q=${encodeURIComponent(item.name)}`)}
                      className="block w-full px-4 py-3 text-left text-xs text-white/70 transition-colors hover:bg-white/5 hover:text-gold"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4 animate-fade-in">
            {[
              { label: 'Markets', value: markets.length },
              { label: 'Products', value: items.length },
              { label: 'Vendors', value: vendors.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card-gold flex flex-col items-center rounded-xl py-4"
              >
                <span className="text-2xl font-black text-gold sm:text-3xl">{stat.value}</span>
                <span className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Markets Open Today ──────────────────────────────── */}
      <section className="border-b border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">
                Markets Open <span className="text-gold">Today</span>
              </h2>
              <p className="text-xs text-white/40">{openMarkets.length} markets trading on {todayIgboDay}</p>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {openMarkets.map((m) => (
              <Link
                key={m.id}
                href={`/stalls?market=${m.id}`}
                className="glass-card flex min-w-[200px] flex-col gap-2 rounded-xl p-3 transition-all hover:border-gold/30"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-white">{m.name}</p>
                    <p className="text-[10px] text-white/40">{m.state} · {m.igboDay}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cheapest Today Grid ─────────────────────────────── */}
      <section className="border-b border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-gold" />
                Cheapest <span className="text-gold">Today</span>
              </h2>
              <p className="text-xs text-white/40">Best deals across all markets right now</p>
            </div>
            <Link
              href="/prices"
              className="flex items-center gap-1 text-xs font-medium text-gold hover:text-gold/80"
            >
              View All
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cheapestItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Stalls ────────────────────────────────── */}
      <section className="border-b border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">
                Featured <span className="text-gold">Stalls</span>
              </h2>
              <p className="text-xs text-white/40">Top-rated vendors across SE markets</p>
            </div>
            <Link
              href="/stalls"
              className="flex items-center gap-1 text-xs font-medium text-gold hover:text-gold/80"
            >
              View All
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Market Day Countdown ────────────────────────────── */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white">
              Market Day <span className="text-gold">Calendar</span>
            </h2>
            <p className="text-xs text-white/40">Next 4 Igbo market days</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {nextDays.map(({ day, date }) => {
              const isTodayMarket = isToday(date);
              return (
                <div
                  key={day}
                  className={`relative overflow-hidden rounded-xl p-4 ${
                    isTodayMarket
                      ? 'border-2 border-gold bg-gold/10 animate-pulse-gold'
                      : 'glass-card'
                  }`}
                >
                  {isTodayMarket && (
                    <span className="absolute top-2 right-2 rounded-md bg-gold px-1.5 py-0.5 text-[8px] font-bold uppercase text-black">
                      Today
                    </span>
                  )}
                  <p className="text-2xl font-black text-gold">{day}</p>
                  <p className="mt-1 text-xs text-white/50">
                    {date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </p>
                  <p className="mt-2 text-[10px] text-white/30">
                    {markets.filter((m) => m.igboDay === day).length} markets open
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
