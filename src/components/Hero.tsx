import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, ArrowDown, ShieldCheck, Sparkles, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-royal-100 via-white to-white">
      {/* Background image overlay with corporate luxury blue tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
          alt="Luxury Corporate Office Background"
          className="w-full h-full object-cover opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/90 to-royal-100/50" />
      </div>

      {/* Aesthetic abstract decorative shapes for Royal Blue & Gold theme */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-royal-500/5 blur-3xl z-0" />
      <div className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-royal-100/80 border border-royal-600/10 text-royal-700 font-semibold text-xs mb-6 uppercase tracking-wider"
            >
              <Trophy className="w-3.5 h-3.5 text-gold-500" />
              <span>India's Leading 2026 Marketing Agency</span>
            </motion.div>

            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-royal-900 leading-none mb-6"
            >
              Tomorrow's <span className="text-royal-600">Technology</span>
              <br />
              For Your Brand <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">Today</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-royal-800 leading-relaxed max-w-xl mb-8"
            >
              Welcome to DigiMoms, the undisputed champion of premium digital experiences.
              We fuse high-end design principles, state-of-the-art 2026 systems, and conversion-optimized engineering to elevate your enterprise above the competition.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-royal-700 hover:bg-royal-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-royal-800/10"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </a>
              <a
                href="#demos"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-royal-900 bg-white hover:bg-royal-100 transition-all duration-300 shadow-sm border border-royal-700/10 flex items-center justify-center gap-2"
              >
                Explore Live Demos
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs text-royal-800 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-royal-600" />
                <span>100% Client Satisfaction Guarantee</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <div className="flex items-center gap-1.5">
                <div className="flex text-gold-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>50+ Top Indian Corporate Reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Luxury Floating Interactive Widget Cards */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Main Card */}
              <div className="glass-card rounded-2xl p-6 relative border border-royal-700/10 shadow-2xl">
                <div className="absolute top-4 right-4 text-gold-500">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-royal-900 mb-2">DigiMoms Ecosystem</h3>
                <p className="text-xs text-royal-800 mb-6">Unveiling our high-conversion operational statistics in real-time:</p>

                {/* Growth stats list */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-royal-100/50 border border-royal-700/5 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-royal-700">Digital Deliveries</span>
                      <span className="font-display font-extrabold text-lg text-royal-900">420+ Corporate Projects</span>
                    </div>
                    <span className="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-1 rounded border border-gold-400/20">Success Rate 100%</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-royal-100/50 border border-royal-700/5 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-royal-700">Avg. Brand ROI Boost</span>
                      <span className="font-display font-extrabold text-lg text-royal-900">+340% Growth</span>
                    </div>
                    <span className="text-xs font-semibold text-royal-700 bg-royal-100 px-2 py-1 rounded border border-royal-600/10">In 2026 Quarter</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-royal-100/50 border border-royal-700/5 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-royal-700">Main Hub Location</span>
                      <span className="font-display font-bold text-sm text-royal-900">Sabang, West Bengal</span>
                    </div>
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-500/10">Active HQ</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-royal-700/5 flex justify-between items-center text-[11px] font-mono text-royal-700">
                  <span>SYSTEM STATUS: STABLE</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    LIVE PORTAL ONLINE
                  </span>
                </div>
              </div>

              {/* Backing Gold Accent Frame */}
              <div className="absolute inset-0 -m-3 rounded-2xl border-2 border-dashed border-gold-500/20 pointer-events-none -z-10 transform rotate-1 scale-[1.02]" />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-royal-700 text-xs font-medium cursor-pointer" onClick={() => document.getElementById("about")?.scrollIntoView()}>
          <span>Discover DigiMoms</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-gold-500" />
        </div>
      </div>
    </section>
  );
}
