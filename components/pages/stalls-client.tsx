'use client';

import { useState, useMemo } from 'react';
import { vendors, markets, getItemsByVendor } from '@/lib/mockData';
import { VendorCard } from '@/components/vendor-card';
import { Search, Store } from 'lucide-react';

const states = ['All', 'Anambra', 'Abia', 'Enugu', 'Ebonyi', 'Imo'] as const;

export function StallsClient() {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<string>('All');

  const filteredVendors = useMemo(() => {
    return vendors.filter((v) => {
      if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.specialty.toLowerCase().includes(search.toLowerCase())) return false;
      if (state !== 'All') {
        const market = markets.find((m) => m.id === v.marketId);
        if (!market || market.state !== state) return false;
      }
      return true;
    });
  }, [search, state]);

  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <div className="border-b border-white/5 bg-gradient-to-b from-gold/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h1 className="text-2xl font-black text-white sm:text-3xl">
            Vendor <span className="text-gold">Stalls</span>
          </h1>
          <p className="mt-1 text-sm text-white/40">
            {filteredVendors.length} vendors across SE Nigeria
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
            placeholder="Search vendors or specialties..."
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-gold/40"
          />
        </div>

        {/* State Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {states.map((s) => (
            <button
              key={s}
              onClick={() => setState(s)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                state === s
                  ? 'bg-gold text-black'
                  : 'glass-card text-white/60 hover:text-white'
              }`}
            >
              {s === 'All' ? 'All States' : s}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredVendors.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVendors.map((vendor) => (
              <div key={vendor.id}>
                <VendorCard vendor={vendor} />
                {getItemsByVendor(vendor.id)[0] && (
                  <a
                    href={`https://wa.me/${vendor.phone}?text=${encodeURIComponent(`Hello from EGO OLE, I want to buy ${getItemsByVendor(vendor.id)[0].name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center rounded-lg bg-green-500/10 py-2 text-xs font-semibold text-green-400 transition-colors hover:bg-green-500/20"
                  >
                    Chat Vendor
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Store className="h-12 w-12 text-white/10" />
            <p className="mt-4 text-sm text-white/40">No prices today - Be first to upload</p>
          </div>
        )}
      </div>
    </div>
  );
}
