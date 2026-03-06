import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Interactive Map Section */}
      <div className="relative h-96 bg-slate-900 overflow-hidden">
        {/* Placeholder for actual interactive map */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-slate-950/60" />

        {/* 100 Mile Radius Overlay Simulation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-red-500/30 bg-red-500/5 flex items-center justify-center pointer-events-none">
          <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-2 drop-shadow-lg">We deliver where you are.</h3>
            <p className="text-red-400 font-bold tracking-wide uppercase drop-shadow-md">Delivering within a 100-mile radius</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/new-red-logo.png"
                alt="Small Engine Power Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Hard-working, local, and technologically superior. Your trusted partner for outdoor power equipment since 1993.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/powerrdt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:501-825-8095" className="flex items-center gap-3 hover:text-red-400 transition-colors">
                  <Phone className="w-5 h-5 text-slate-500" />
                  <span>501-825-8095</span>
                </a>
              </li>
              <li>
                <a href="mailto:powerrdt@yahoo.com" className="flex items-center gap-3 hover:text-red-400 transition-colors">
                  <Mail className="w-5 h-5 text-slate-500" />
                  <span>powerrdt@yahoo.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                <span>7329 Edgemont Rd<br />Edgemont, AR 72067</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Mon - Fri</span>
                <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Saturday</span>
                <span className="text-white font-medium">8:00 AM - 12:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/inventory" className="hover:text-red-400 transition-colors">Live Inventory</Link></li>
              <li><Link to="/rentals" className="hover:text-red-400 transition-colors">Rentals</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Parts & Services</Link></li>
              <li><Link to="/financing" className="hover:text-red-400 transition-colors">Financing</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Small Engine Power. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for Edgemont, AR.</p>
        </div>
      </div>
    </footer>
  );
}
