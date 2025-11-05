import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will be caught by middleware and redirected to /fr
  redirect('/fr');
}
