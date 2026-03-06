import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'New Inventory', path: '/inventory' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Parts & Services', path: '/services' },
    { name: 'Financing', path: '/financing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg xl:text-xl leading-tight text-slate-900 tracking-tight uppercase whitespace-nowrap">Small Engine</span>
            <span className="font-bold text-red-600 text-xs xl:text-sm leading-tight uppercase tracking-wider">Power</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-red-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 xl:gap-4">
          <a 
            href="tel:501-825-8095" 
            className="hidden xl:flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a 
            href="https://m.me/powerrdt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors shadow-lg shadow-red-600/20 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Text Us</span>
          </a>
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide ${location.pathname === link.path ? 'bg-red-50 text-red-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
            <a href="tel:501-825-8095" className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white font-semibold rounded-md">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a href="https://m.me/powerrdt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-red-600 text-white font-semibold rounded-md">
              <MessageCircle className="w-4 h-4" />
              <span>Text Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
