import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageCircle, ArrowDown, Sparkles, CheckCircle2 } from "lucide-react";
import { reviewsData, Review } from "../reviewsData";

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, reviewsData.length));
  };

  const currentReviews = reviewsData.slice(0, visibleCount);

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-royal-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-green-600 tracking-widest uppercase bg-green-50 px-3.5 py-1.5 rounded-full border border-green-500/10 inline-flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 fill-current text-green-500" />
            VERIFIED WHATSAPP TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            50+ Premium Client Reviews
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-700 to-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-royal-800 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Real WhatsApp conversations from verified business owners in Bengal and across India. We believe in absolute transparency and flawless execution.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence>
            {currentReviews.map((r: Review, index: number) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                className="glass-card rounded-xl p-6 bg-white/95 border border-royal-700/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Review Header: Stars & Date */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-gold-500">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-royal-700">{r.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-royal-800 text-xs italic leading-relaxed mb-6">
                    "{r.text}"
                  </p>
                </div>

                {/* Reviewer Meta Details */}
                <div className="pt-4 border-t border-royal-700/5 flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    {/* Circle Avatar with initials */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-royal-700 to-royal-500 flex items-center justify-center text-white text-xs font-bold shadow-inner border border-white">
                      {r.name.split(" ").map(word => word[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-royal-900 flex items-center gap-1">
                        {r.name}
                      </h4>
                      <p className="text-[10px] text-royal-700 font-medium truncate max-w-[150px]" title={`${r.role}, ${r.company}`}>
                        {r.role}, {r.company}
                      </p>
                    </div>
                  </div>

                  {/* Verified WhatsApp Indicator */}
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-500/10">
                    <CheckCircle2 className="w-2.5 h-2.5 fill-current text-green-500" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button or Limit indicators */}
        <div className="mt-12 text-center">
          {visibleCount < reviewsData.length ? (
            <button
              onClick={loadMore}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-royal-700 bg-royal-100 hover:bg-royal-500 hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-sm border border-royal-700/10"
              id="load-more-reviews-btn"
            >
              Load More Reviews ({reviewsData.length - visibleCount} Left)
              <ArrowDown className="w-4 h-4" />
            </button>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-xs text-royal-700 font-medium bg-gold-50 px-4 py-2.5 rounded-xl border border-gold-400/20">
              <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
              Showing all 50 Verified WhatsApp Reviews.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
