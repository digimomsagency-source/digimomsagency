import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, RotateCcw, ShieldCheck, MapPin, Mail, Phone, Clock, MessageSquare, ExternalLink } from "lucide-react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms & Conditions", icon: <FileText className="w-4 h-4" /> },
    { id: "refund", label: "Refund Policy", icon: <RotateCcw className="w-4 h-4" /> },
    { id: "privacy", label: "Privacy Policy", icon: <ShieldCheck className="w-4 h-4" /> },
    { id: "contact", label: "Contact Info", icon: <MapPin className="w-4 h-4" /> }
  ];

  return (
    <section id="legal" className="py-24 relative overflow-hidden bg-royal-100/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-700/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royal-700 tracking-widest uppercase bg-royal-100 px-3.5 py-1.5 rounded-full border border-royal-600/10">
            CORPORATE COMPLIANCE
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-royal-900 mt-4 tracking-tight">
            Compliance & Corporate Support
          </h2>
          <p className="text-royal-800 mt-3 text-xs sm:text-sm">
            Read through our organizational protocols, consumer protection boundaries, and contact channels.
          </p>
        </div>

        {/* Tab Selection Row (Horizontal scrolling on mobile) */}
        <div className="flex border-b border-royal-700/10 overflow-x-auto scrollbar-none pb-px mb-8 bg-white/50 p-1.5 rounded-xl border border-royal-700/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-royal-700 text-white shadow-sm"
                  : "text-royal-800 hover:bg-royal-100"
              }`}
              id={`legal-tab-${tab.id}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 bg-white border border-royal-700/5 shadow-xl min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === "terms" && (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 text-sm text-royal-800 leading-relaxed"
              >
                <h3 className="font-display font-extrabold text-xl text-royal-900">Terms & Conditions</h3>
                <p className="text-xs text-royal-700 font-mono">Last updated: July 20, 2026</p>
                <div className="space-y-4">
                  <p>
                    Welcome to the corporate portal of <span className="font-semibold text-royal-900">DigiMoms Marketing Agency</span> (Powered by DigiMoms). By accessing our website, services, or regional portals, you agree to comply with and be bound by the following comprehensive terms.
                  </p>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">1. Scope of Services</h4>
                    <p>
                      DigiMoms specializes in bespoke digital architecture, hosting allocation, speed optimizations, and regional marketing initiatives. All deliverables are outlined prior to payment and monitored through our centralized team directories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">2. Domain & Hosting Ownership</h4>
                    <p>
                      Free domain and hosting are allocated for exactly 12 months from deployment. Renewals for subsequent periods will be billed at prevailing marketplace standards unless explicitly wrapped inside a custom continuous maintenance agreement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">3. Governing Law</h4>
                    <p>
                      These terms are governed by and construed in accordance with the laws of India. Any legal disputes arising out of project deliveries or affiliate partner claims fall strictly under the jurisdiction of courts in Paschim Medinipur, West Bengal, India.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "refund" && (
              <motion.div
                key="refund"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 text-sm text-royal-800 leading-relaxed"
              >
                <h3 className="font-display font-extrabold text-xl text-royal-900">Refund & Cancellation Policy</h3>
                <p className="text-xs text-royal-700 font-mono">Last updated: July 20, 2026</p>
                <div className="space-y-4">
                  <p>
                    At DigiMoms, we allocate dedicated engineering hours, purchase server assets, and license domains immediately upon project sign-off. As a result, we maintain a transparent and balanced refund policy.
                  </p>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">1. Non-Refundable Items</h4>
                    <p>
                      Fees associated with custom domain registrations, active premium cloud hosting setups, and completed visual design phases are entirely non-refundable as they represent hard cost outflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">2. Project Milestones</h4>
                    <p>
                      If a project is cancelled during active development (prior to final publication or domain mapping), refunds may be initiated on a pro-rata basis depending on the exact engineering milestones achieved.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">3. Dispute Resolution</h4>
                    <p>
                      We take customer satisfaction extremely seriously. If you encounter any technical issues or layout dissatisfaction, contact our Chief Support Desk or WhatsApp Tanmoy Jana directly at 9475388085 to resolve it within 48 business hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "privacy" && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 text-sm text-royal-800 leading-relaxed"
              >
                <h3 className="font-display font-extrabold text-xl text-royal-900">Privacy Policy</h3>
                <p className="text-xs text-royal-700 font-mono">Last updated: July 20, 2026</p>
                <div className="space-y-4">
                  <p>
                    DigiMoms is fully committed to securing your personal corporate credentials, contact parameters, and financial records.
                  </p>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">1. Information We Collect</h4>
                    <p>
                      We collect basic business identity logs (such as contact numbers, support emails, and company names) purely to process custom quotes, map domains, and configure WhatsApp redirection structures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">2. Data Security & Storage</h4>
                    <p>
                      Your enterprise architecture is deployed on highly secure, enterprise-grade cloud firewalls. DigiMoms never sells, leases, or distributes consumer contact datasets to third-party marketing entities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-royal-900 mb-1">3. Third-party Links</h4>
                    <p>
                      Our portals contain links to external regional systems (such as the Worker Portal and Staff Login). These external dashboards operate under secure SSL encryptions. We advise reviewing their unique privacy standards.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Column: Direct info parameters */}
                  <div className="space-y-5">
                    <h3 className="font-display font-extrabold text-xl text-royal-900">Direct Support Channels</h3>
                    
                    <div className="space-y-4 text-sm text-royal-800 font-medium">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-royal-900">Corporate HQ Location:</p>
                          <p className="text-xs">Sabang, Paschim Medinipur,</p>
                          <p className="text-xs">West Bengal, Pin: 721144, India</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-royal-700 shrink-0" />
                        <div>
                          <p className="font-bold text-royal-900">Inquiry & Billing Mail:</p>
                          <a href="mailto:digimomsagency@gmail.com" className="text-xs text-royal-600 hover:underline">
                            digimomsagency@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                        <div>
                          <p className="font-bold text-royal-900">WhatsApp Hotlines:</p>
                          <a href="https://wa.me/919475388085" target="_blank" rel="noopener noreferrer" className="text-xs text-royal-600 hover:underline">
                            +91 9475388085
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-royal-700 shrink-0" />
                        <div>
                          <p className="font-bold text-royal-900">Operating Hours:</p>
                          <p className="text-xs">Mon - Sat: 10:00 AM - 07:00 PM (IST)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: High-end static Map and Direct WA block */}
                  <div className="p-6 rounded-2xl bg-royal-100/60 border border-royal-700/5 text-center flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-3 border border-green-500/10">
                        <MessageSquare className="w-5 h-5 fill-current" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-royal-900">Instant WhatsApp Connect</h4>
                      <p className="text-xs text-royal-800 mt-2 max-w-[240px] mx-auto leading-relaxed">
                        Skip the email wait list. Click below to launch an instant messaging thread with our support executives.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/919475388085?text=Hello%20DigiMoms%2C%20I%20have%20a%20support%20or%20billing%20question."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
                      id="legal-contact-whatsapp-btn"
                    >
                      <span>Connect Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
