import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MessageSquare } from 'lucide-react';

const CATEGORIES = ['All', 'Mahindra Tractors', 'Ferris Mowers', 'TYM', 'Generators'];

const INVENTORY = [
  {
    id: 1,
    category: 'Mahindra Tractors',
    name: 'Mahindra 1626 HST',
    price: '$18,500',
    status: 'In-Stock',
    image: 'https://images.unsplash.com/photo-1605622613583-02685d1e2e17?auto=format&fit=crop&q=80&w=600',
    specs: ['25.9 HP', '4WD', 'Hydrostatic']
  },
  {
    id: 2,
    category: 'Ferris Mowers',
    name: 'Ferris ISX 3300',
    price: '$14,299',
    status: 'In-Stock',
    image: 'https://images.unsplash.com/photo-1592424001807-1c390558774e?auto=format&fit=crop&q=80&w=600',
    specs: ['72" Deck', '40 HP Vanguard', 'Suspension']
  },
  {
    id: 3,
    category: 'TYM',
    name: 'TYM T254',
    price: '$15,900',
    status: 'Incoming',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
    specs: ['24 HP', 'Loader Included', 'Diesel']
  },
  {
    id: 4,
    category: 'Generators',
    name: 'Honda EU3000iS',
    price: '$2,399',
    status: 'In-Stock',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    specs: ['3000 Watts', 'Inverter', 'Super Quiet']
  },
  {
    id: 6,
    category: 'Mahindra Tractors',
    name: 'Mahindra 4540 4WD',
    price: '$24,900',
    status: 'Incoming',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600',
    specs: ['41 HP', 'Gear Drive', 'Heavy Duty']
  }
];

export function Showroom() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInventory = activeCategory === 'All' 
    ? INVENTORY 
    : INVENTORY.filter(item => item.category === activeCategory);

  return (
    <section id="inventory" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Lizzie POS Sync Active</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Live Inventory</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventory.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-red-600/30 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  {item.status === 'In-Stock' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      IN-STOCK
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-sm">
                      <Clock className="w-3.5 h-3.5" />
                      INCOMING
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.specs.map(spec => (
                    <span key={spec} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">
                      {spec}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase">Est. Price</span>
                    <span className="text-2xl font-black text-red-600">{item.price}</span>
                  </div>
                  <button 
                    onClick={() => document.dispatchEvent(new CustomEvent('open-chat', { detail: { message: `I'd like a quote on the ${item.name}` } }))}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-red-600 text-white font-bold rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
