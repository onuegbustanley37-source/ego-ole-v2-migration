'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getVendorById, getMarketById, getItemsByVendor } from '@/lib/mockData';
import { formatNaira } from '@/lib/igboCalendar';
import { ProductCard } from '@/components/product-card';
import { MapPin, Star, MessageCircle, Phone, ArrowLeft, Package, Store } from 'lucide-react';

export default function StallDetailPage() {
  const params = useParams();
  const vendorId = params.id as string;
  const vendor = getVendorById(vendorId);

  if (!vendor) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Store className="h-12 w-12 text-white/10" />
        <p className="mt-4 text-sm text-white/40">Vendor not found</p>
        <Link href="/stalls" className="mt-3 rounded-lg bg-gold px-4 py-2 text-xs font-bold text-black">
          Back to Stalls
        </Link>
      </div>
    );
  }

  const market = getMarketById(vendor.marketId);
  const vendorItems = getItemsByVendor(vendor.id);

  const whatsappText = `I'm buying from EGO OLE? — ${vendor.name}, I'm interested in your products.`;
  const whatsappUrl = `https://wa.me/${vendor.phone}?text=${encodeURIComponent(whatsappText)}`;

  const phoneDisplay = `+${vendor.phone.slice(0, 3)} ${vendor.phone.slice(3, 6)} ${vendor.phone.slice(6, 9)} ${vendor.phone.slice(9)}`;

  return (
    <div className="min-h-screen bg-black">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <Link
          href="/stalls"
          className="flex items-center gap-1 text-xs text-white/40 hover:text-gold"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to Stalls
        </Link>
      </div>

      {/* Vendor Banner */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="h-48 sm:h-64">
            <img
              src={vendor.banner}
              alt={vendor.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-black text-white sm:text-3xl">{vendor.name}</h1>
                <p className="mt-1 text-sm text-gold/80">{vendor.specialty}</p>
                {market && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                    <MapPin className="h-3.5 w-3.5 text-gold/60" />
                    {vendor.location} · {market.state}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 rounded-lg bg-black/60 px-3 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span className="text-lg font-bold text-gold">{vendor.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-card-gold flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/15">
              <Phone className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-white/40">Phone</p>
              <p className="text-sm font-semibold text-white">{phoneDisplay}</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Package className="h-5 w-5 text-gold" />
            Products <span className="text-white/30">({vendorItems.length})</span>
          </h2>
        </div>

        {vendorItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {vendorItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Package className="h-10 w-10 text-white/10" />
            <p className="mt-3 text-sm text-white/40">No products listed yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
