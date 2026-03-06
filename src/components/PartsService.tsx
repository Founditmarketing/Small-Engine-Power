import { Search, Settings, PenTool as Tool } from 'lucide-react';

export function PartsService() {
  return (
    <section id="service" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">Parts & Pro Shop</h2>
          <p className="text-lg text-slate-600">Keep your equipment running like new. We stock thousands of OEM parts and offer factory-certified service.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <Tool className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Schedule Service</h3>
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
    </section>
  );
}
