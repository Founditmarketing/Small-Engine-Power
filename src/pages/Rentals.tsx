import { ConciseHero } from '../components/ConciseHero';

export function Rentals() {
  return (
    <main>
      <ConciseHero 
        title="Rentals" 
        subtitle="High-quality equipment rentals for any job, big or small." 
      />
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase mb-6">Equipment Rentals</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Small Engine Power is your go-to destination for high-quality outdoor power equipment rentals. Whether you need a reliable chainsaw for tree work, a powerful pressure washer for deep cleaning, or a heavy-duty log splitter for firewood prep, we’ve got you covered. Our rental fleet also includes stump grinders, tillers, and brush cutters to help you tackle any outdoor project with ease. Stop by today and get the right tools for the job—without the commitment of buying! Contact us at 501-825-8095 for current rental availability and pricing.
          </p>
        </div>
      </section>
    </main>
  );
}
