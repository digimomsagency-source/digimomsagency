import React from "react";
import { Sparkles, Mail, Phone, MapPin, ExternalLink, ShieldAlert, Award } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Corporate Vision", href: "#about" },
    { name: "Strategic Value", href: "#about" },
    { name: "Pricing Tiers", href: "#pricing" },
    { name: "Interactive Demos", href: "#demos" },
    { name: "Verified Reviews", href: "#reviews" }
  ];

  const adminLinks = [
    { name: "Worker Portal", href: "http://digimoms.in/dashboard/login.html", external: true },
    { name: "Staff Security Login", href: "http://digimoms.in/dashboard/staff-login.html", external: true },
    { name: "Partner & Earn Program", href: "http://digimoms.in/dashboard/earn-with-us.html", external: true },
    { name: "Terms & Policies", href: "#legal", external: false }
  ];

  return (
    <footer className="bg-white border-t border-royal-700/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative luxury gradient mesh in the footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-700 via-gold-500 to-royal-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Statement (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-royal-700 to-royal-500 flex items-center justify-center text-white shadow-md border border-gold-400/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-royal-900">
                  DigiMoms <span className="text-gold-500 text-xs font-semibold">AGENCY</span>
                </span>
                <span className="text-[10px] font-mono text-royal-700 tracking-wider uppercase font-semibold">
                  Powered by DigiMoms
                </span>
              </div>
            </a>
            
            <p className="text-royal-800 text-xs sm:text-sm leading-relaxed max-w-sm">
              India's undisputed luxury web development & premium branding powerhouse. We construct tomorrow's high-speed conversion ecosystems for elite commercial enterprises today.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-royal-700">
              <Award className="w-4 h-4 text-gold-500" />
              <span>SABANG'S FINEST DIGITAL OUTLET</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-royal-900">
              Enterprise
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-royal-800 hover:text-royal-600 text-xs font-semibold transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals & Compliance (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-royal-900">
              Portals & Legal
            </h4>
            <ul className="space-y-2.5">
              {adminLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-royal-800 hover:text-royal-600 text-xs font-semibold transition-colors duration-150 flex items-center gap-1.5"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Hub (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-royal-900">
              Corporate Headquarters
            </h4>
            <ul className="space-y-3.5 text-xs text-royal-800 font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>
                  Sabang, Paschim Medinipur,<br />
                  West Bengal, Pin: 721144, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-royal-700 shrink-0" />
                <a href="mailto:digimomsagency@gmail.com" className="hover:underline">
                  digimomsagency@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="https://wa.me/919475388085" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +91 9475388085 (Support Desk)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Intellectual Property line */}
        <div className="pt-8 border-t border-royal-700/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-royal-700">
          <p>© {currentYear} DigiMoms Marketing Agency. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Powered by DigiMoms</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </p>
        </div>

      </div>
    </footer>
  );
}
