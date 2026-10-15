import { PricesClient } from '@/components/pages/prices-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function PricesPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] };
}) {
  const raw = searchParams?.q;
  const initialQuery = (Array.isArray(raw) ? raw[0] : raw) ?? '';
  return <PricesClient initialQuery={initialQuery} />;
}
