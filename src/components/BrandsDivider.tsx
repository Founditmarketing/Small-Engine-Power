import { motion } from 'motion/react';

export function BrandsDivider() {
  const brands = [
    "Briggs & Stratton",
    "Bush-Whacker",
    "Ferris",
    "Husqvarna",
    "Ironcraft",
    "Kawasaki Engines",
    "Kohler Engines",
    "BigDog Mower Co.",
    "Maruyama",
    "RedMax",
    "Snapper",
    "TYM",
    "Worldlawn"
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
          Authorized Dealer For Top Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8">
          {brands.map((brand, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-lg sm:text-xl font-black text-slate-300 uppercase tracking-tighter hover:text-slate-800 transition-colors cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
