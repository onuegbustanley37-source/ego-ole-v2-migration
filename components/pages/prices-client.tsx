'use client';

import { useState, useMemo, useEffect, useDeferredValue } from 'react';
import { items, markets, getMarketById } from '@/lib/mockData';
import { formatNaira } from '@/lib/igboCalendar';
import { searchItems, logSearch } from '@/lib/search';
import { ProductCard } from '@/components/product-card';
import { Search, Bell, X } from 'lucide-react';

const categories = ['All', 'Bags', 'Shoes', 'Wigs', 'Clothes', 'Foodstuff'] as const;
const states = ['All', 'Anambra', 'Abia', 'Enugu', 'Ebonyi', 'Imo'] as const;
const igboDays = ['All', 'Eke', 'Orie', 'Afor', 'Nkwo', 'Daily'] as const;

export function PricesClient({ initialQuery = '' }: { initialQuery?: string }) {
  const [search, setSearch] = useState(initialQuery);
  const deferredSearch = useDeferredValue(search);
  const isSearching = search !== deferredSearch;
  const [category, setCategory] = useState<string>('All');
  const [state, setState] = useState<string>('All');
  const [igboDay, setIgboDay] = useState<string>('All');
  const [marketId, setMarketId] = useState<string>('All');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertItem, setAlertItem] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return searchItems(items, deferredSearch).filter((item) => {
      if (category !== 'All' && item.category !== category) return false;
      if (marketId !== 'All' && item.marketId !== marketId) return false;
      if (state !== 'All') {
        const market = getMarketById(item.marketId);
        if (!market || market.state !== state) return false;
      }
      if (igboDay !== 'All') {
        const market = getMarketById(item.marketId);
        if (!market || market.igboDay !== igboDay) return false;
      }
      return true;
    });
  }, [deferredSearch, category, state, igboDay, marketId]);

  useEffect(() => {
    logSearch('prices', deferredSearch, filteredItems.length);
  }, [deferredSearch, filteredItems.length]);

  const trimmedSearch = deferredSearch.trim();

  const activeFilters = (search.trim() ? 1 : 0) + (category !== 'All' ? 1 : 0) + (state !== 'All' ? 1 : 0) + (igboDay !== 'All' ? 1 : 0) + (marketId !== 'All' ? 1 : 0);

  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <div className="border-b border-white/5 bg-gradient-to-b from-gold/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h1 className="text-2xl font-black text-white sm:text-3xl">
            <span className="text-gradient-ego">Live</span> Market Prices
          </h1>
          <p className="mt-1 text-sm text-white/40">
            Compare prices across 20 SE Nigerian markets · {filteredItems.length} items found
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search okro, Ifite Ogwari, rice, shoes..."
            aria-label="Search market prices"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-12 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-gold/40"
          />
          {isSearching ? (
            <span
              role="status"
              aria-label="Searching"
              className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin rounded-full border-2 border-gold/20 border-t-gold"
            />
          ) : search ? (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/40 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {/* Category Pills */}
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                category === cat
                  ? 'bg-gold text-black'
                  : 'glass-card text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {/* State Filter */}
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-gold/40"
          >
            {states.map((s) => (
              <option key={s} value={s} className="bg-black text-white">
                {s === 'All' ? 'All States' : s}
              </option>
            ))}
          </select>

          {/* Market Filter */}
          <select
            value={marketId}
            onChange={(e) => setMarketId(e.target.value)}
            className="max-w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-gold/40"
          >
            <option value="All" className="bg-black text-white">All Markets</option>
            {markets.map((market) => (
              <option key={market.id} value={market.id} className="bg-black text-white">
                {market.name}
              </option>
            ))}
          </select>

          {/* Market Day Filter */}
          <select
            value={igboDay}
            onChange={(e) => setIgboDay(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white outline-none focus:border-gold/40"
          >
            {igboDays.map((d) => (
              <option key={d} value={d} className="bg-black text-white">
                {d === 'All' ? 'All Market Days' : d}
              </option>
            ))}
          </select>

          {activeFilters > 0 && (
            <button
              onClick={() => { setSearch(''); setCategory('All'); setState('All'); setIgboDay('All'); setMarketId('All'); }}
              className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40 hover:text-white"
            >
              <X className="h-3 w-3" />
              Clear ({activeFilters})
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard item={item} />
                <button
                  onClick={() => { setAlertItem(item.id); setShowAlertModal(true); }}
                  className="absolute top-2 left-2 z-10 rounded-md bg-black/70 p-1.5 text-gold opacity-0 backdrop-blur-sm transition-all hover:bg-black/90 group-hover:opacity-100"
                  style={{ opacity: 1 }}
                >
                  <Bell className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-12 w-12 text-white/10" />
            <p className="mt-4 text-sm text-white/40">
              {trimmedSearch ? `No items found for "${trimmedSearch}"` : 'No prices today - Be first to upload'}
            </p>
            <button
              onClick={() => { setSearch(''); setCategory('All'); setState('All'); setIgboDay('All'); setMarketId('All'); }}
              className="mt-3 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-black"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Price Alert Modal */}
      {showAlertModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowAlertModal(false)}
        >
          <div
            className="glass-card-gold w-full max-w-md rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15">
                <Bell className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Set Price Alert</h3>
                <p className="text-[11px] text-white/40">Get notified when price drops</p>
              </div>
            </div>

            {alertItem && (() => {
              const item = items.find((i) => i.id === alertItem);
              if (!item) return null;
              return (
                <div className="mb-4 glass-card rounded-lg p-3">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-gold">{formatNaira(item.price)}/{item.unit}</p>
                </div>
              );
            })()}

            <label className="mb-2 block text-xs text-white/50">Alert me when price drops below</label>
            <input
              type="number"
              placeholder="Enter target price"
              className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/40"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowAlertModal(false)}
                className="flex-1 rounded-lg border border-white/10 py-2.5 text-xs font-semibold text-white/60 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAlertModal(false)}
                className="flex-1 rounded-lg bg-gold py-2.5 text-xs font-bold text-black hover:bg-gold/90"
              >
                Set Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
