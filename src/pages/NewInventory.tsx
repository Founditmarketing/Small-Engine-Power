import { ConciseHero } from '../components/ConciseHero';
import { Showroom } from '../components/Showroom';

export function NewInventory() {
  return (
    <main>
      <ConciseHero 
        title="New Inventory" 
        subtitle="Mahindra Tractors, Ferris Mowers, TYM & Generators." 
      />
      <Showroom />
    </main>
  );
}
