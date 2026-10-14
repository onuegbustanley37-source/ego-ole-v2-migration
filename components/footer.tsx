import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="flex items-baseline gap-0.5 text-xl font-black">
              <span className="text-gradient-ego">EGO</span>
              <span className="text-white">OLE?</span>
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cream/60">
              Eke Orie Afor Nkwo
            </span>
          </div>

          <p className="max-w-md text-sm text-white/40">
            Live market prices for South East Nigerian markets. Compare prices across Anambra, Abia, Enugu, Ebonyi & Imo.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Anambra</span>
            <span className="text-gold/30">·</span>
            <span>Abia</span>
            <span className="text-gold/30">·</span>
            <span>Enugu</span>
            <span className="text-gold/30">·</span>
            <span>Ebonyi</span>
            <span className="text-gold/30">·</span>
            <span>Imo</span>
          </div>

          <a
            href="https://wa.me/2348161280254?text=Hello%20from%20EGO%20OLE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/5 px-4 py-2 text-xs text-green-400/70 transition-colors hover:bg-green-500/10 hover:text-green-300"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us: +234 816 128 0254
          </a>

          <p className="mt-2 text-[10px] text-white/20">
            Built for Onitsha Traders | EGO OLE? 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
