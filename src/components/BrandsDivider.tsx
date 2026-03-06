import { motion } from 'motion/react';

export function BrandsDivider() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
            Authorized Dealer For Top Brands
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-red-600 uppercase tracking-tight">
            Our Brands
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <img
            src="/our brands.jpg"
            alt="Our Authorized Brands"
            className="w-full max-w-5xl h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
          />
        </motion.div>
      </div>
    </section>
  );
}
