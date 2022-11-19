import Link from 'next/link';

import { Header } from '~/components/Header';

export default function RootPage() {
  return (
    <>
      <Header />
      <Link href='/project'>Projects</Link>
      <div style={{ height: 1000 }} />
    </>
  );
}
