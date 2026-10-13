'use client';

import { Vendor, getMarketById } from '@/lib/mockData';
import { MapPin, Star, MessageCircle, Package } from 'lucide-react';
import Link from 'next/link';

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const market = getMarketById(vendor.marketId);

  const whatsappText = `I'm buying from EGO OLE? — ${vendor.name}, I'm interested in your products.`;
  const whatsappUrl = `https://wa.me/${vendor.phone}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <Link
      href={`/stall/${vendor.id}`}
      className="group glass-card relative overflow-hidden rounded-xl transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
    >
      {/* Banner */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={vendor.banner}
          alt={vendor.name}
          width={940}
          height={650}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold text-gold backdrop-blur-sm">
          <Star className="h-3 w-3 fill-gold" />
          {vendor.rating.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-white">{vendor.name}</h3>
        <p className="mt-0.5 text-[11px] text-gold/70">{vendor.specialty}</p>

        {market && (
          <div className="mt-2 flex items-center gap-1 text-[11px] text-white/40">
            <MapPin className="h-3 w-3 text-gold/60" />
            <span className="line-clamp-1">{vendor.location}</span>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 text-[10px] text-white/30">
            <Package className="h-3 w-3" />
            View Products
          </span>
          <a
            href={whatsappUrl}
            aria-label={`Chat ${vendor.name} on WhatsApp`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 rounded-md bg-green-500/10 px-2 py-1 text-[10px] font-semibold text-green-400 transition-all hover:bg-green-500/20"
          >
            <MessageCircle className="h-3 w-3" />
            WhatsApp
          </a>
        </div>
      </div>
    </Link>
  );
}
