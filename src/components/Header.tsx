import React, { useState, useEffect } from "react";
import { Menu, X, ShieldAlert, Users, ExternalLink, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demos", href: "#demos" },
    { name: "Reviews", href: "#reviews" },
    { name: "Legal & Contact", href: "#legal" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-header py-3 shadow-md" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-royal-700 to-royal-500 flex items-center justify-center text-white shadow-md border border-gold-400/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-royal-900 flex items-center gap-1">
                DigiMoms <span className="text-gold-500 font-medium text-xs bg-gold-100/80 px-1.5 py-0.5 rounded border border-gold-400/30">AGENCY</span>
              </span>
              <span className="text-[10px] font-mono text-royal-700 tracking-widest uppercase font-semibold">
                Powered by DigiMoms
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-royal-800 hover:text-royal-600 font-medium text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold-500 after:transition-all after:duration-300 pb-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Portal Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="http://digimoms.in/dashboard/login.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-royal-700 bg-royal-100 hover:bg-royal-500 hover:text-white transition-all duration-300 flex items-center gap-1.5 border border-royal-600/10"
              id="header-worker-portal-btn"
            >
              <Users className="w-3.5 h-3.5" />
              Worker Portal
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="http://digimoms.in/dashboard/staff-login.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-royal-700 to-royal-600 hover:from-royal-800 hover:to-royal-700 transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md border border-royal-700/20 gold-glow-button"
              id="header-staff-login-btn"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-gold-400" />
              Staff Login
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-royal-800 hover:bg-royal-100 transition-colors focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-header absolute top-full left-0 right-0 shadow-lg border-t border-royal-700/5 animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-royal-800 hover:bg-royal-100 hover:text-royal-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <hr className="border-royal-700/5 my-3" />
            <div className="flex flex-col gap-2 px-3">
              <a
                href="http://digimoms.in/dashboard/login.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-royal-700 bg-royal-100 hover:bg-royal-500 hover:text-white transition-all duration-200 text-center flex items-center justify-center gap-2"
                id="mobile-worker-portal-btn"
              >
                <Users className="w-4 h-4" />
                Worker Portal
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="http://digimoms.in/dashboard/staff-login.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-royal-700 to-royal-600 hover:from-royal-800 hover:to-royal-700 transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-sm border border-royal-700/20"
                id="mobile-staff-login-btn"
              >
                <ShieldAlert className="w-4 h-4 text-gold-400" />
                Staff Login
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
