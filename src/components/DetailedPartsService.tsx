import { motion } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  Search, 
  Phone, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Wind, 
  Snowflake, 
  Scissors, 
  Trash2,
  Tractor,
  PenTool
} from 'lucide-react';

export function DetailedPartsService() {
  const serviceCategories = [
    {
      title: "Mower Solutions",
      services: [
        { name: "Zero-Turn Service", icon: <Tractor className="w-6 h-6" /> },
        { name: "Lawn Tractor Service", icon: <Tractor className="w-6 h-6" /> },
        { name: "Push/Walk-Behind Mower Service", icon: <Settings className="w-6 h-6" /> },
      ]
    },
    {
      title: "Handheld & Specialty",
      services: [
        { name: "Chainsaw Service", icon: <Wrench className="w-6 h-6" /> },
        { name: "Leaf Blower Service", icon: <Wind className="w-6 h-6" /> },
        { name: "Trimmer Service", icon: <Scissors className="w-6 h-6" /> },
        { name: "Power Washer Service", icon: <Zap className="w-6 h-6" /> },
        { name: "Snowthrower Service", icon: <Snowflake className="w-6 h-6" /> },
      ]
    },
    {
      title: "Power & Reliability",
      services: [
        { name: "Generator Service", icon: <Zap className="w-6 h-6" /> },
        { name: "Pre-Season Inspection", icon: <ShieldCheck className="w-6 h-6" /> },
      ]
    },
    {
      title: "Logistics & Convenience",
      services: [
        { name: "Pickup Service", icon: <Truck className="w-6 h-6" /> },
        { name: "Delivery Service", icon: <Truck className="w-6 h-6" /> },
        { name: "Disposal Service", icon: <Trash2 className="w-6 h-6" /> },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Service Grid Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">Factory-certified maintenance and repair for all your outdoor power equipment.</p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8 border-b border-slate-200 pb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, servIdx) => (
                    <motion.div 
                      key={servIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: servIdx * 0.05 }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-red-200 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-red-50 group-hover:text-red-600 transition-colors shrink-0">
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{service.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a href="tel:501-825-8095" className="inline-flex items-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-red-600/20 text-xl uppercase tracking-wide">
              <Phone className="w-6 h-6" />
              Call the Shop: 501-825-8095
            </a>
          </div>
        </div>

        {/* Forms Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-200 pt-24">
          {/* Parts Lookup */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Parts Lookup</h3>
            <p className="text-slate-600 mb-6">Search our inventory for OEM parts for Mahindra, Ferris, TYM, and more.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Part Number or Description</label>
                <input 
                  type="text" 
                  placeholder="e.g. 104567 or Air Filter" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Brand</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all bg-white">
                    <option>Any Brand</option>
                    <option>Mahindra</option>
                    <option>Ferris</option>
                    <option>TYM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Model (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. ISX 3300" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                  />
                </div>
              </div>
              <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors uppercase tracking-wide mt-2">
                Search Parts
              </button>
            </form>
          </div>

          {/* Service Request */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 opacity-10">
              <PenTool className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Schedule Your Service</h3>
              <p className="text-slate-300 mb-6">From routine maintenance to major overhauls, our certified techs have you covered.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-1">Equipment & Issue</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us what needs fixing..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors uppercase tracking-wide mt-2">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
