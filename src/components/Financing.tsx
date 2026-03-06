import { motion } from 'motion/react';
import { Calculator, Percent, FileText } from 'lucide-react';

export function Financing() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6">
              Power Your Purchase.<br />
              <span className="text-red-500">Keep Your Cash.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              We offer competitive financing options and manufacturer rebates to help you get the equipment you need today.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                  <Percent className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">0% Financing Available</h4>
                  <p className="text-slate-400">On select Mahindra and Ferris models for up to 84 months with approved credit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Manufacturer Rebates</h4>
                  <p className="text-slate-400">Instant cash rebates available on TYM tractors and select implements.</p>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all hover:scale-105 shadow-xl shadow-red-600/20 text-lg uppercase tracking-wide">
              <FileText className="w-5 h-5" />
              Apply For Pre-Approval
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-slate-800 rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg" />
            <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-black uppercase mb-6 border-b border-slate-700 pb-4">Current Specials</h3>
              
              <div className="space-y-4">
                {[
                  { brand: 'Mahindra', offer: 'Free Loader with 1626 Series' },
                  { brand: 'Ferris', offer: '$500 Fleet Discount on ISX 3300' },
                  { brand: 'TYM', offer: '0% for 84 Months on T254' },
                  { brand: 'Service', offer: '10% Off Pre-Season Maintenance' }
                ].map((special, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-colors">
                    <span className="font-bold text-slate-300">{special.brand}</span>
                    <span className="text-red-400 font-semibold text-right">{special.offer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
