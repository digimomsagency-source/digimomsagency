import React from "react";
import { motion } from "motion/react";
import { Award, Target, Landmark, Quote, Briefcase, Mail, PhoneCall } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-royal-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-gold-600 tracking-widest uppercase bg-gold-100/60 px-3.5 py-1.5 rounded-full border border-gold-400/20">
            OUR LEGACY & LEADERSHIP
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            Who We Are & The Vision We Hold
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-700 to-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid: Corporate History & CEO Profile */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: History of DigiMoms */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6 text-royal-800 text-base leading-relaxed">
              <h3 className="font-display font-extrabold text-2xl text-royal-900 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-royal-700" />
                The Story of DigiMoms
              </h3>
              
              <p>
                Founded in <span className="font-semibold text-royal-900">2024</span> in the historic town of <span className="font-semibold text-royal-900">Sabang, Paschim Medinipur, West Bengal</span>, DigiMoms emerged as a bold response to the generic, uninspired web templates saturating the market. We believed that every regional business deserved to look like a global leader.
              </p>

              <p>
                Over the last two years, we transitioned from a niche design boutique into <span className="font-semibold text-royal-900">India's leading 2026 digital agency</span>. By mastering cutting-edge technology and blending luxury aesthetics with performance marketing, we have helped hundreds of businesses cross digital boundaries and scale exponentially.
              </p>

              <p>
                Today, DigiMoms serves clients in healthcare, education, hospitality, real estate, and fitness. We build high-end corporate ecosystems that are not only beautiful but are precision-engineered to convert clicks into long-term customer loyalty.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-royal-100/30 border border-royal-700/5 flex gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-royal-700/10 flex items-center justify-center text-royal-700 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-royal-900">Precision Driven</h4>
                  <p className="text-xs text-royal-800 mt-1">No pixel is left unaligned; we design for visual balance and absolute corporate clarity.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gold-100/20 border border-gold-400/10 flex gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-royal-900">Award Winning Elite</h4>
                  <p className="text-xs text-royal-800 mt-1">Ranked as a top-performing developer agency in eastern India for 2025 & 2026.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: CEO Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-card-gold rounded-2xl p-8 border border-gold-500/15 w-full max-w-[380px] relative shadow-xl"
            >
              {/* Gold Accent corner strip */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="bg-gradient-to-l from-gold-500 to-gold-400 text-white text-[9px] font-mono font-bold uppercase tracking-wider text-center py-1 absolute top-4 right-[-24px] rotate-45 w-24">
                  FOUNDER
                </div>
              </div>

              {/* CEO Photo Frame */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 group">
                  {/* Photo container */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 mx-auto">
                    <img
                      src="https://digimoms.in/ami-final.jpg"
                      alt="Tanmoy Jana, CEO"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Background glowing gold ring */}
                  <div className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-r from-gold-500 via-royal-500 to-gold-400 opacity-60 blur-sm animate-pulse z-0" />
                </div>

                {/* Identity */}
                <h4 className="font-display font-extrabold text-xl text-royal-900">Tanmoy Jana</h4>
                <p className="text-xs font-mono font-bold text-gold-700 uppercase tracking-widest mt-1">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-[10px] text-royal-700 font-medium mt-0.5">DigiMoms Marketing Agency</p>

                <div className="w-12 h-0.5 bg-gold-500 my-4" />

                {/* Professional Quote */}
                <div className="relative px-2">
                  <Quote className="w-8 h-8 text-gold-500/15 absolute -top-3 -left-3" />
                  <p className="text-sm italic text-royal-800 leading-relaxed relative z-10">
                    "At DigiMoms, we don't just write code; we craft digital real estate. Our promise is simple: we implement tomorrow's technology for your brand today, delivering a standard of luxury and performance that drives true enterprise scale."
                  </p>
                </div>

                {/* Social/Support Links */}
                <div className="mt-6 pt-5 border-t border-gold-500/10 w-full flex justify-center gap-4">
                  <a 
                    href="mailto:tanmoy4945@gmail.com"
                    className="px-4 py-2 rounded-xl bg-gold-500/10 hover:bg-gold-500 hover:text-white text-gold-700 transition-colors duration-200 flex items-center gap-2 text-xs font-semibold"
                    title="Direct Mail to CEO"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact CEO</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
