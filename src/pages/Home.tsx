import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { BrandsDivider } from '../components/BrandsDivider';
import { Showroom } from '../components/Showroom';
import { Financing } from '../components/Financing';
import { PartsService } from '../components/PartsService';

export function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <BrandsDivider />
      <Showroom />
      <Financing />
      <PartsService />
    </main>
  );
}
