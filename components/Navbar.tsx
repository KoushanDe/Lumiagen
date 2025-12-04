import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // Special case for scrolling to top (Logo click)
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'SERVICES', id: 'services' },
    { name: 'PROCESS', id: 'process' },
    { name: 'ABOUT', id: 'about' },
    { name: 'AI AUDIT', id: 'audit-tool' },
    { name: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-void/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group transition-all duration-300 relative"
            onClick={() => scrollToSection('hero')}
          >
            {/* Logo Icon Glow (Green) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-8 h-8 bg-accent-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:shadow-[0_0_25px_rgba(45,212,191,0.8)] transition-all duration-300 z-10">
              <Cpu className="w-5 h-5 text-void" />
            </div>
            
            {/* Logo Text Glow (Blue) */}
            <span className="relative text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors z-10 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              Lumiagen
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-medium tracking-widest text-slate-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a 
              href="mailto:koushan@lumiagen.com?subject=Consultation%20Request"
              className="inline-block px-6 py-2.5 bg-void border text-xs font-bold uppercase tracking-wider rounded transition-all duration-500
                         border-accent-400/50 text-white 
                         shadow-[0_0_20px_#2DD4BF] animate-pulse-slow
                         hover:border-royal-500 hover:shadow-[0_0_30px_#3B82F6] hover:bg-royal-500/10 hover:text-white hover:animate-none"
            >
              Book Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-void border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl backdrop-blur-xl bg-void/95">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm font-medium text-slate-400 hover:text-white py-2 tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <a 
              href="mailto:koushan@lumiagen.com?subject=Consultation%20Request"
              className="text-left text-sm font-bold text-accent-400 py-2 tracking-widest"
            >
              BOOK CALL
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;