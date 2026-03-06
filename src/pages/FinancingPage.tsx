import { ConciseHero } from '../components/ConciseHero';

export function FinancingPage() {
  return (
    <main>
      <ConciseHero 
        title="Financing" 
        subtitle="Power Your Purchase. Keep Your Cash." 
      />
      
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 p-8 text-center border-b border-slate-800">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Application for Financing</h2>
              <p className="text-slate-400">Location: Small Engine Power - Higden, AR 72067</p>
            </div>
            
            <form className="p-8 sm:p-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-200 pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Address</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Country</label>
                    <input type="text" value="United States" readOnly className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 text-slate-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">State/Region</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white" required>
                      <option value="">--Select--</option>
                      <option value="AR">Arkansas</option>
                      <option value="MO">Missouri</option>
                      <option value="TN">Tennessee</option>
                      <option value="MS">Mississippi</option>
                      <option value="LA">Louisiana</option>
                      <option value="TX">Texas</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Postal Code</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Number of years at current residence</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white" required>
                      <option value="">--Select--</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-200 pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                </div>
              </div>

              {/* Identification */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-200 pb-2">Identification</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Driver's License ID #</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Driver's License State/Region</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white" required>
                      <option value="">--Select--</option>
                      <option value="AR">Arkansas</option>
                      <option value="MO">Missouri</option>
                      <option value="TN">Tennessee</option>
                      <option value="MS">Mississippi</option>
                      <option value="LA">Louisiana</option>
                      <option value="TX">Texas</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Driver's License Expiration (Month/Year)</label>
                    <input type="text" placeholder="MM/YYYY" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Social Security Number</label>
                    <input type="password" placeholder="XXX-XX-XXXX" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Birthdate</label>
                    <input type="date" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                </div>
              </div>

              {/* Employment & Income */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-200 pb-2">Employment & Income</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Employment Status</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white" required>
                      <option value="">--Select--</option>
                      <option value="Employed">Employed</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Retired">Retired</option>
                      <option value="Unemployed">Unemployed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Employer Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Gross Monthly Income ($)</label>
                    <input type="number" min="0" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" required />
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6 border-b border-slate-200 pb-2">Application Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Marital Status</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="maritalStatus" value="Single" className="w-4 h-4 text-red-600 focus:ring-red-600" required />
                        <span className="text-slate-700">Single</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="maritalStatus" value="Married" className="w-4 h-4 text-red-600 focus:ring-red-600" required />
                        <span className="text-slate-700">Married</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Individual or Joint Application</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="applicationType" value="Individual" className="w-4 h-4 text-red-600 focus:ring-red-600" required />
                        <span className="text-slate-700">Individual</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="applicationType" value="Joint" className="w-4 h-4 text-red-600 focus:ring-red-600" required />
                        <span className="text-slate-700">Joint</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="pt-6 border-t border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 focus:ring-red-600 rounded" required />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Accept Privacy Agreement*</strong><br />
                    By submitting this application, I certify that the information provided is true and correct. I authorize Small Engine Power and its lending partners to verify this information and obtain a credit report.
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all shadow-lg shadow-red-600/20 text-lg uppercase tracking-wide">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
