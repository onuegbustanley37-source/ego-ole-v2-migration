import { BANK, STALL, whatsappUrl } from '@/lib/config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function VendorJoinPage() {
  const payLink = whatsappUrl(
    `Hello, I want to rent a stall on EGO OLE (${STALL.priceLabel}). I have paid to ${BANK.bankName} ${BANK.accountNumber}. Here is my receipt.`
  );

  return (
    <section className="flex min-h-[60vh] items-start justify-center bg-white px-5 py-10 text-black">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-2xl font-black">RENT STALL - {STALL.priceLabel}</h1>

        <div className="rounded-xl border border-neutral-300 p-5">
          <dl className="space-y-3 text-base">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Bank</dt>
              <dd className="font-bold">{BANK.bankName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">Account</dt>
              <dd className="font-mono text-lg font-bold tracking-wider">{BANK.accountNumber}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">WhatsApp</dt>
              <dd className="font-bold">{BANK.whatsapp}</dd>
            </div>
          </dl>

          <a
            href={payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-lg bg-black py-3 text-center font-bold text-white transition-colors hover:bg-neutral-800"
          >
            Pay on WhatsApp - Send Receipt
          </a>
        </div>
      </div>
    </section>
  );
}
