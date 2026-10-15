import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-4 bg-black px-4 text-center">
      <h1 className="text-xl font-black text-gold">Page not found</h1>
      <p className="text-sm text-white/50">This page does not exist.</p>
      <Link href="/" className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-black hover:bg-gold/90">
        Go Home
      </Link>
    </div>
  );
}
