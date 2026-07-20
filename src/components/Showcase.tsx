import React from "react";
import { ExternalLink, Layers, Laptop, Sparkles, Layout } from "lucide-react";

export default function Showcase() {
  const demos = [
    {
      title: "Apollo Care Clinic Portal",
      category: "Healthcare & Clinics",
      description: "Interactive scheduling, dental services brochure, patient feedback loops, and automated medical inquiry paths.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
      // 👉 PLACE YOUR APOLLO CLINIC LIVE DEMO LINK BELOW
      cta: ""
    },
    {
      title: "Bright Future Academy",
      category: "Education & Schools",
      description: "Syllabus cataloging, admissions query form, principal greeting cards, and rich institution event galleries.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
      // 👉 PLACE YOUR ACADEMY LIVE DEMO LINK BELOW
      cta: ""
    },
    {
      title: "Iron Temple Fitness Gym",
      category: "Gyms & Wellness Centers",
      description: "Membership tier boards, trainer profiles, personal booking portals, and integrated gym contact structures.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      // 👉 PLACE YOUR GYM LIVE DEMO LINK BELOW
      cta: ""
    },
    {
      title: "Royal Gold Real-Estate",
      category: "Real Estate & Agencies",
      description: "Luxury property galleries, land brochure listings, virtual property queries, and WhatsApp inquiry buttons.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      // 👉 PLACE YOUR REAL ESTATE LIVE DEMO LINK BELOW
      cta: ""
    },
    {
      title: "Saffron Fine Dining Restro",
      category: "Restaurants & Cafes",
      description: "Aesthetic digital food menus, table reservation requests, direct chef recipes highlights, and local map directions.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
      // 👉 PLACE YOUR RESTAURANT LIVE DEMO LINK BELOW
      cta: ""
    }
  ];

  return (
    <section id="demos" className="py-24 relative overflow-hidden bg-royal-100/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-royal-700 tracking-widest uppercase bg-royal-100 px-3.5 py-1.5 rounded-full border border-royal-600/10">
            DIGIMOMS ORIGINAL LAYOUTS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            Live Showcase & Demos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-700 to-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-royal-800 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Hover over the desktop screens below to watch our live digital assets scroll in real time. We are constantly designing and launching new industry layouts weekly.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((d, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 bg-white/95 border border-royal-700/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Industry Category Label */}
                <div className="flex items-center gap-1.5 mb-3 text-xs text-royal-600 font-bold uppercase tracking-wider">
                  <Layout className="w-3.5 h-3.5 text-gold-500" />
                  <span>{d.category}</span>
                </div>

                {/* macOS Chrome Browser Container */}
                <div className="demo-card-container mb-4">
                  {/* Browser Window header */}
                  <div className="h-7 bg-gray-200/80 px-3 flex items-center gap-1.5 border-b border-gray-300/50 rounded-t-lg">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-[10px] font-mono text-gray-400 ml-4 truncate">digimoms.in/showcase/{d.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>
                  
                  {/* Hover Scrollable area */}
                  <div className="demo-scroll-wrapper select-none">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="demo-scroll-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-royal-900 tracking-tight">{d.title}</h3>
                
                {/* Description */}
                <p className="text-royal-800 text-xs mt-2 leading-relaxed">{d.description}</p>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-4 border-t border-royal-700/5">
                <a
                  href={d.cta || "#"}
                  target={d.cta ? "_blank" : undefined}
                  rel={d.cta ? "noopener noreferrer" : undefined}
                  className="w-full py-2.5 px-4 rounded-lg bg-royal-100 hover:bg-royal-700 text-royal-700 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                  id={`showcase-${d.title.toLowerCase().replace(/\s+/g, '-')}-btn`}
                >
                  View Live Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
          
          {/* Last Card Placeholder for interactive inquiries */}
          <div className="glass-card-gold rounded-2xl p-6 border-2 border-dashed border-gold-500/30 flex flex-col justify-between text-center bg-gradient-to-b from-gold-50/20 to-white">
            <div className="my-auto py-8">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mx-auto mb-4 border border-gold-400/25">
                <Layers className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-royal-900">Custom Industry?</h3>
              <p className="text-xs text-royal-800 mt-2 max-w-[240px] mx-auto leading-relaxed">
                Don't see your specific sector? DigiMoms has engineered original web layouts for over 35 distinct industrial niches in 2026.
              </p>
            </div>
            
            <a
              href="https://wa.me/919475388085?text=Hello%20DigiMoms%2C%20I%20have%20a%20specialized%20business%20type%20and%20want%20to%20see%20corresponding%20layouts."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
              id="showcase-custom-industry-btn"
            >
              <span>Discuss Custom Niche</span>
              <Laptop className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
