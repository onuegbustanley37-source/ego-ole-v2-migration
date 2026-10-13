'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Upload, ShieldCheck } from 'lucide-react';
import { markets } from '@/lib/mockData';

interface UploadRecord {
  id: string;
  product: string;
  price: number;
  marketId: string;
  createdAt: string;
}

export default function AdminUploadPage() {
  const [authorized, setAuthorized] = useState(false);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [marketId, setMarketId] = useState(markets[0]?.id ?? '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const alreadyAuthorized = window.localStorage.getItem('ego-ole-admin-authorized') === 'true';
    if (alreadyAuthorized || window.prompt('Enter admin code') === 'EKE2024') {
      window.localStorage.setItem('ego-ole-admin-authorized', 'true');
      setAuthorized(true);
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numericPrice = Number(price);
    if (!product.trim() || !Number.isFinite(numericPrice) || numericPrice <= 0 || !marketId) {
      setMessage('Enter a product, a valid price, and a market.');
      return;
    }

    const stored = window.localStorage.getItem('ego-ole-price-uploads');
    const uploads: UploadRecord[] = stored ? JSON.parse(stored) : [];
    uploads.push({
      id: crypto.randomUUID(),
      product: product.trim(),
      price: numericPrice,
      marketId,
      createdAt: new Date().toISOString(),
    });
    window.localStorage.setItem('ego-ole-price-uploads', JSON.stringify(uploads));
    setProduct('');
    setPrice('');
    setMessage('Price saved on this device.');
  };

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-black px-4 text-center">
        <div className="glass-card-gold max-w-md rounded-2xl p-8">
          <ShieldCheck className="mx-auto h-10 w-10 text-gold" />
          <h1 className="mt-4 text-xl font-bold text-white">Admin access required</h1>
          <p className="mt-2 text-sm text-white/50">This upload area is restricted to approved administrators.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] bg-black px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
            <Upload className="h-5 w-5 text-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Upload a market price</h1>
            <p className="text-sm text-white/40">Saved locally until a shared database is connected.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card-gold rounded-2xl p-5 sm:p-6">
          <label className="block text-xs font-semibold text-white/60" htmlFor="product">Product</label>
          <input id="product" value={product} onChange={(event) => setProduct(event.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-gold/50" placeholder="e.g. Bag of Rice (50kg)" />

          <label className="mt-4 block text-xs font-semibold text-white/60" htmlFor="price">Price in naira</label>
          <input id="price" type="number" min="1" value={price} onChange={(event) => setPrice(event.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-gold/50" placeholder="78000" />

          <label className="mt-4 block text-xs font-semibold text-white/60" htmlFor="market">Market</label>
          <select id="market" value={marketId} onChange={(event) => setMarketId(event.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-gold/50">
            {markets.map((market) => <option key={market.id} value={market.id} className="bg-black">{market.name}</option>)}
          </select>

          <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-gold/90">
            <Upload className="h-4 w-4" />
            Save Price
          </button>
          {message && <p className="mt-3 text-center text-xs text-gold">{message}</p>}
        </form>
      </div>
    </div>
  );
}
