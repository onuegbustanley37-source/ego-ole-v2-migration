'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/config';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[EGO OLE error boundary]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-4 bg-black px-4 text-center">
      <h1 className="text-xl font-black text-gold">Something went wrong</h1>
      <p className="max-w-sm text-sm text-white/50">
        This page had a problem loading. Please try again.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-black hover:bg-gold/90"
        >
          Try Again
        </button>
        <Link href="/" className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/5">
          Go Home
        </Link>
      </div>
      <a
        href={whatsappUrl('Hello, a page on EGO OLE is not working')}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-green-400/70 hover:text-green-300"
      >
        Report on WhatsApp
      </a>
    </div>
  );
}
