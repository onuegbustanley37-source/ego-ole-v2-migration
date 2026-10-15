import { StallsClient } from '@/components/pages/stalls-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function StallsPage() {
  return <StallsClient />;
}
