export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-3 bg-black" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/20 border-t-gold" />
      <p className="text-xs uppercase tracking-widest text-white/40">Loading prices...</p>
    </div>
  );
}
