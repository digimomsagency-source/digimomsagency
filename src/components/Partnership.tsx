import React from "react";
import { Sparkles, Coins, GraduationCap, ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";

export default function Partnership() {
  const buildWhatsappLink = (msg: string) => {
    return `https://wa.me/919475388085?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Visual styling nodes */}
      <div className="absolute top-1/2 left-[-10%] w-96 h-96 rounded-full bg-royal-100/40 blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-600 tracking-widest uppercase bg-gold-100/60 px-3.5 py-1.5 rounded-full border border-gold-400/20">
            GROW WITH DIGIMOMS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            Partnership & Educational Academy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-700 to-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-royal-800 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Whether you are looking to monetize your professional network or acquire top-tier digital skillsets, our customized 2026 pipelines are built to support you.
          </p>
        </div>

        {/* Two-Card layout */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Earn with Us */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 border border-royal-700/10 shadow-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-royal-100/40 to-white">
            {/* Top decorative circle */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-royal-500/5 rounded-full" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-royal-100 flex items-center justify-center text-royal-700 mb-6 border border-royal-600/10 shadow-sm">
                <Coins className="w-6 h-6 text-royal-700" />
              </div>
              
              <h3 className="font-display font-extrabold text-2xl text-royal-900">Earn with Us</h3>
              <p className="text-xs text-royal-700 font-mono font-bold mt-1 uppercase tracking-widest">Affiliate & Partner Program</p>
              
              <p className="text-royal-800 text-sm mt-4 leading-relaxed">
                Unlock substantial commissions by introducing local businesses, clinics, or schools in West Bengal to our high-end corporate development services. 
              </p>

              {/* Program features */}
              <ul className="mt-6 space-y-3 text-sm text-royal-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-700" />
                  <span>Earn up to 20% flat commission per closed project</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-700" />
                  <span>Real-time earnings tracking via Worker Portal</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-700" />
                  <span>Immediate weekly payouts directly to your UPI/Bank</span>
                </li>
              </ul>
            </div>

            {/* CTA button */}
            <div className="mt-8 pt-6 border-t border-royal-700/5">
              <a
                href="http://digimoms.in/dashboard/earn-with-us.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-royal-700 hover:bg-royal-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                id="earn-with-us-btn"
              >
                Launch Partner Portal
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Card 2: DigiMoms Academy */}
          <div className="glass-card-gold rounded-2xl p-8 lg:p-10 border border-gold-500/15 shadow-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-gold-50/30 to-white">
            {/* Top decorative circle */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-400/5 rounded-full" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-6 border border-gold-400/20 shadow-sm">
                <GraduationCap className="w-6 h-6 text-gold-600" />
              </div>
              
              <h3 className="font-display font-extrabold text-2xl text-royal-900">DigiMoms Academy</h3>
              <p className="text-xs text-gold-700 font-mono font-bold mt-1 uppercase tracking-widest">Premium Training & Skills</p>
              
              <p className="text-royal-800 text-sm mt-4 leading-relaxed">
                Master professional web development, search engine schema optimization, and conversion-centered branding. Taught directly by Tanmoy Jana and senior development staff.
              </p>

              {/* Academy features */}
              <ul className="mt-6 space-y-3 text-sm text-royal-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Hands-on React, Tailwind, and Web API coding</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Real production case-studies and live assignments</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>100% placement support in regional agencies</span>
                </li>
              </ul>
            </div>

            {/* CTA button */}
            <div className="mt-8 pt-6 border-t border-gold-500/10">
              <a
                href={buildWhatsappLink("Hello DigiMoms Academy, I want to join the web development and marketing training program.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-royal-900 bg-gold-500 hover:bg-gold-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg gold-glow-button"
                id="digimoms-academy-btn"
              >
                Enroll via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
