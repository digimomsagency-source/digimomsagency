import React from "react";
import { Check, Sparkles, AlertCircle, Phone, ArrowUpRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "1,499",
      marketValue: "9,999",
      description: "Essential professional web presence designed for local enterprises.",
      features: [
        "1 to 2 Premium Pages",
        "Free .com or .in Domain (12 Months)",
        "Premium Cloud Hosting (12 Months)",
        "Mobile Responsive Layout",
        "1 Month Complementary Support",
        "Standard Speed Optimization"
      ],
      whatsappMsg: "Hello DigiMoms, I am interested in the Starter Plan (₹1499). Please guide me on how to get started.",
      badge: "Best Value Entry",
      popular: false
    },
    {
      name: "Business Plan",
      price: "4,999",
      marketValue: "19,999",
      description: "The complete digital toolkit to scale your commercial brand.",
      features: [
        "Up to 10 Premium Pages",
        "Free .com or .in Domain (12 Months)",
        "Premium Cloud Hosting (12 Months)",
        "Fully Mobile Responsive Layout",
        "6 Months Premium Support & Edits",
        "Advanced Speed & SEO Schema",
        "Complementary Regional Influencer Option"
      ],
      whatsappMsg: "Hello DigiMoms, I am interested in the Business Plan (₹4999). Please share more details on the influencer option.",
      badge: "MOST POPULAR",
      popular: true
    },
    {
      name: "Premium Plan",
      price: "12,999",
      marketValue: "50,000+",
      description: "Elite digital architecture with custom assets and full support.",
      features: [
        "Unlimited Premium Pages",
        "Free .com or .in Domain (12 Months)",
        "Ultra-Fast Cloud Hosting (12 Months)",
        "High-End Glassmorphism UI/UX",
        "1 Year Dedicated Maintenance & SLA",
        "Elite SEO & Conversion Setup",
        "2 Indian Influencers & Ad Campaigns"
      ],
      whatsappMsg: "Hello DigiMoms, I am interested in the Premium Plan (₹12999). Please connect me with your lead developer to discuss my unlimited pages project.",
      badge: "ELITE CHOICE",
      popular: false
    }
  ];

  const buildWhatsappLink = (msg: string) => {
    return `https://wa.me/919475388085?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative details */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-royal-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] rounded-full bg-gold-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-gold-600 tracking-widest uppercase bg-gold-100/60 px-3.5 py-1.5 rounded-full border border-gold-400/20">
            TRANSPARENT ELITE PLANS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-royal-900 mt-4 tracking-tight">
            Luxury Development Pricing
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-700 to-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-royal-800 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Choose from our pre-packaged premium tiers or request a customized setup tailored to your organization's specific digital blueprint.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                p.popular
                  ? "bg-gradient-to-b from-royal-100 to-white border-2 border-royal-700 shadow-2xl scale-[1.03] z-10"
                  : "bg-white border border-royal-700/10 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Top Tag badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-[9px] font-mono font-bold px-2 py-1 rounded-md uppercase tracking-wider ${
                  p.popular
                    ? "bg-royal-700 text-white"
                    : "bg-gold-100 text-gold-700 border border-gold-400/10"
                }`}>
                  {p.badge}
                </span>
              </div>

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-extrabold text-2xl text-royal-900">{p.name}</h3>
                <p className="text-xs text-royal-800 mt-2 leading-relaxed min-h-[40px]">{p.description}</p>

                {/* Pricing Block */}
                <div className="mt-6 pt-6 border-t border-royal-700/5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold text-royal-900">₹</span>
                    <span className="text-5xl font-black tracking-tight text-royal-900">{p.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-royal-800 font-medium">
                    <span className="text-royal-600">Market Value:</span>
                    <span className="line-through text-gray-400 font-bold">₹{p.marketValue}</span>
                    <span className="text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded border border-green-500/10">
                      Save {Math.round((1 - parseInt(p.price.replace(/[^\d]/g, '')) / parseInt(p.marketValue.replace(/[^\d]/g, ''))) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5 text-sm text-royal-800 font-medium">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? "text-royal-700" : "text-gold-500"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-royal-700/5">
                <a
                  href={buildWhatsappLink(p.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    p.popular
                      ? "bg-royal-700 hover:bg-royal-600 text-white shadow-md hover:shadow-lg"
                      : "bg-royal-100 hover:bg-royal-500 hover:text-white text-royal-700 border border-royal-700/10"
                  }`}
                  id={`pricing-${p.name.toLowerCase().replace(/\s+/g, '-')}-btn`}
                >
                  Start Your Journey
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Callout Section */}
        <div className="glass-card-gold rounded-2xl p-8 border border-gold-500/20 shadow-xl max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-r from-gold-50 to-white">
          <div className="absolute top-0 right-0 p-3 text-gold-500/10">
            <Sparkles className="w-24 h-24" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gold-700 font-mono bg-gold-100 px-2 py-0.5 rounded border border-gold-400/20">
                <AlertCircle className="w-3 h-3" /> Custom Architecture Required?
              </div>
              <h3 className="font-display font-black text-xl text-royal-900">Custom Enterprise Solutions</h3>
              <p className="text-royal-800 text-sm max-w-xl leading-relaxed">
                Need customized corporate portals, large web inventories, API structures, or specific third-party configurations? Discuss your system blueprint with our leads today.
              </p>
            </div>
            
            <a
              href={buildWhatsappLink("Hello DigiMoms, I want to discuss a Custom Web & Marketing Plan for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg shrink-0 w-full md:w-auto justify-center"
              id="custom-plan-whatsapp-btn"
            >
              <Phone className="w-4 h-4 fill-current" />
              WhatsApp Custom Consult
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
