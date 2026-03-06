import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image1.jpg"
          alt="Outdoor power equipment display"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-white font-semibold text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Serving Edgemont, AR & 100-Mile Radius</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6 uppercase">
            <span className="text-red-600">Small Engine</span><br />
            <span className="text-white">Power</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-medium">
            North Central Arkansas' Home for Power, Performance, and Pro-Grade Equipment
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/inventory" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all hover:scale-105 shadow-xl shadow-red-600/20 text-lg uppercase tracking-wide">
              View Live Inventory
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-md transition-all backdrop-blur-sm border border-white/10 text-lg uppercase tracking-wide">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
