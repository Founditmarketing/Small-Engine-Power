import { ConciseHero } from '../components/ConciseHero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactUs() {
  return (
    <main>
      <ConciseHero 
        title="Contact Us" 
        subtitle="We're here to help. Reach out to Harold and the team." 
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black uppercase mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-slate-600">501-825-8095</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-600">powerrdt@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-slate-600">7329 Edgemont Rd<br />Edgemont, AR 72067</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hours</h3>
                    <p className="text-slate-600">Mon-Fri: 8:00 AM - 5:00 PM<br />Sat: 8:00 AM - 12:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-black uppercase mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email or Phone</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 outline-none resize-none" />
                </div>
                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors uppercase tracking-wide">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
