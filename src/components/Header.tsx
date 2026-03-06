import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-transparent border-transparent'
      }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/new-red-logo.png"
            alt="Small Engine Power Logo"
            className="h-12 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-red-500' : 'text-slate-200 hover:text-white'}`}
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
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-6 space-y-2 shadow-2xl">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-all ${location.pathname === link.path ? 'bg-red-600 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col gap-3">
            <a href="tel:501-825-8095" className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-md transition-colors">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a href="https://m.me/powerrdt" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Text Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
