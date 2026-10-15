import { AdminUploadClient } from '@/components/pages/admin-upload-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function AdminUploadPage() {
  return <AdminUploadClient />;
}
