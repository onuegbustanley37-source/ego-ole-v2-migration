import { Item, getMarketById, getVendorById } from '@/lib/mockData';
import { formatNaira } from '@/lib/igboCalendar';
import { MapPin, MessageCircle, TrendingDown, Star } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  item: Item;
}

export function ProductCard({ item }: ProductCardProps) {
  const market = getMarketById(item.marketId);
  const vendor = item.vendorId ? getVendorById(item.vendorId) : undefined;
  const discount = item.oldPrice
    ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
    : 0;

  const whatsappText = vendor
    ? `I'm buying from EGO OLE? — ${item.name} for ${formatNaira(item.price)} from ${vendor.name}.`
    : `I'm buying from EGO OLE? — ${item.name} for ${formatNaira(item.price)}.`;

  const whatsappUrl = vendor
    ? `https://wa.me/${vendor.phone}?text=${encodeURIComponent(whatsappText)}`
    : `https://wa.me/2348012345678?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="group glass-card relative overflow-hidden rounded-xl transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 rounded-md bg-crimson px-2 py-1 text-[10px] font-bold text-white">
            -{discount}%
          </div>
        )}
        <div className="absolute top-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-gold backdrop-blur-sm">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">{item.name}</h3>

        {market && (
          <div className="mt-1 flex items-center gap-1 text-[11px] text-white/40">
            <MapPin className="h-3 w-3 text-gold/60" />
            <span className="line-clamp-1">{market.name}</span>
          </div>
        )}

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-gold">{formatNaira(item.price)}</span>
          {item.oldPrice && (
            <span className="text-xs text-white/30 line-through">{formatNaira(item.oldPrice)}</span>
          )}
          <span className="text-[10px] text-white/30">/{item.unit}</span>
        </div>

        {discount > 0 && (
          <div className="mt-1 flex items-center gap-1 text-[10px] text-green-400/70">
            <TrendingDown className="h-3 w-3" />
            Save {formatNaira(item.oldPrice! - item.price)}
          </div>
        )}

        {vendor && (
          <div className="mt-2 flex items-center gap-1 text-[10px] text-white/40">
            <Star className="h-3 w-3 text-gold/60" />
            <Link href={`/stall/${vendor.id}`} className="hover:text-gold">
              {vendor.name}
            </Link>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          aria-label={`Chat ${vendor?.name ?? 'vendor'} about ${item.name} on WhatsApp`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-green-500/10 py-2 text-xs font-semibold text-green-400 transition-all hover:bg-green-500/20"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Contact Vendor
        </a>
      </div>
    </div>
  );
}
