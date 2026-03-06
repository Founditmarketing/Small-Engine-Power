import { ConciseHero } from '../components/ConciseHero';
import { Experience } from '../components/Experience';

export function AboutUs() {
  return (
    <main>
      <ConciseHero 
        title="About Us" 
        subtitle="45 Years of Industry Experience Serving Edgemont Since '93." 
      />
      <Experience />
    </main>
  );
}
