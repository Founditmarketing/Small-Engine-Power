import { ConciseHero } from '../components/ConciseHero';
import { DetailedPartsService } from '../components/DetailedPartsService';

export function PartsServices() {
  return (
    <main>
      <ConciseHero 
        title="Parts & Services" 
        subtitle="Keep your equipment running like new with our factory-certified technicians." 
      />
      <DetailedPartsService />
    </main>
  );
}
