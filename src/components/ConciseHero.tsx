import { motion } from 'motion/react';

interface ConciseHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function ConciseHero({ title, subtitle, image }: ConciseHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] max-h-[400px] flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src={image || "/bkgr.jpg"}
          alt={title}
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 uppercase">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-medium">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
