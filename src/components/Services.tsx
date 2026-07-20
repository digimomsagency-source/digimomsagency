import React from "react";
import { ShieldAlert, Cpu, Sparkles, TrendingUp, Search, Smartphone } from "lucide-react";

export default function Services() {
  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-royal-600" />,
      title: "The 2026 Speed Mandate",
      description: "With attention spans down to milliseconds, standard slow-loading websites lose up to 80% of potential leads before page render. DigiMoms constructs highly optimized, zero-latency server-side assets that load instantly on all modern networks."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-600" />,
      title: "Aesthetic Premium Branding",
      description: "In 2026, your website is your digital flagship. A cheap template signals a cheap service. Our royal glassmorphism look establishes absolute institutional authority and warrants luxury pricing structures for your clients."
    },
    {
      icon: <Search className="w-6 h-6 text-royal-600" />,
      title: "Algorithmic Local Dominance",
      description: "Google and Apple search algorithms have fully prioritized modern mobile-optimized schema and structured data. Our engineering ensures your business registers in local search clusters ahead of archaic local competitors."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-gold-600" />,
      title: "Seamless Mobile Experience",
      description: "Over 92% of business inquiries in India originate on mobile browsers and conclude via WhatsApp. We specialize in mobile-first layouts that direct users into conversion funnels effortlessly with a single tap."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-royal-100/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royal-700 tracking-widest uppercase bg-royal-100 px-3.5 py-1.5 rounded-full border border-royal-600/10">
            STRATEGIC VALUE IN 2026
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            Why Your Business Needs a Website in 2026
          </h2>
          <p className="text-royal-800 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            The modern digital marketplace is unforgiving. Relying on basic social media pages or outdated portfolios is no longer sufficient to project elite market presence.
          </p>
        </div>

        {/* Detailed Corporate Text Banner */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 border border-royal-700/5 shadow-xl mb-12 bg-white/90">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-display font-extrabold text-2xl text-royal-900">
                The Shift from Digital Presence to Digital Domination
              </h3>
              <p className="text-royal-800 leading-relaxed text-sm">
                In 2026, consumers no longer just "look up" a business; they verify its legitimacy through its web engineering. A fast, highly branded, interactive digital flagship builds instant trust. It communicates that your operation is modern, active, and fully committed to customer service.
              </p>
              <p className="text-royal-800 leading-relaxed text-sm">
                DigiMoms does not just build websites; we design high-conversion engines. We integrate direct WhatsApp communication layers, mobile-optimized navigation, and subtle, luxury animations that guide prospective clients from curiosity directly to point-of-sale.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 rounded-xl bg-gold-100/40 border border-gold-400/25 flex flex-col justify-center text-center">
              <span className="text-3xl font-extrabold text-royal-900">92.4%</span>
              <span className="text-xs font-mono font-bold text-gold-700 uppercase tracking-wider mt-1">Consumer Trust Lift</span>
              <p className="text-[11px] text-royal-800 mt-2 leading-normal">
                Businesses utilizing custom corporate web layouts report substantial trust and inquiry rate surges compared to generic templates.
              </p>
            </div>
          </div>
        </div>

        {/* Core Value Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="glass-card rounded-xl p-6 bg-white/90 hover:shadow-lg transition-shadow duration-300 border border-royal-700/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-royal-100 flex items-center justify-center border border-royal-600/5 shadow-sm">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-royal-900">{v.title}</h4>
              </div>
              <p className="text-royal-800 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
