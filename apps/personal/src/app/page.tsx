import { Header } from '~/components/Header';
import { Hero } from '~/components/Hero';

export default function RootPage() {
  return (
    <>
      <Header isSticky />
      <div className='container'>
        <Hero />
      </div>
    </>
  );
}
