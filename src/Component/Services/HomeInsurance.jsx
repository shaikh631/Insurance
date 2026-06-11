import { useState } from "react";

const benefits = [
  { icon: "home", title: "Property Protection", desc: "Full coverage for the structure of your home, from foundations to the roof." },
  { icon: "local_fire_department", title: "Fire & Theft", desc: "Shielding your assets against unforeseen fire incidents and security breaches." },
  { icon: "flood", title: "Natural Disaster", desc: "Comprehensive protection against floods, earthquakes, and extreme weather." },
  { icon: "gavel", title: "Liability Protection", desc: "Legal support and coverage for accidents that occur within your property premises." },
];

const coverageItems = [
  { title: "Building Coverage", desc: "Covers physical structures including outbuildings, fences, and permanent fixtures against external damages." },
  { title: "Contents Protection", desc: "Your furniture, electronics, and valuables are insured at replacement value, not just depreciated cost." },
  { title: "Temporary Accommodation", desc: "If your home is uninhabitable, we cover your living expenses in a similar quality accommodation." },
];

const faqs = [
  { question: "What does Home Insurance cover?", answer: "Our comprehensive policies cover property damage, theft, fire, and selected natural disasters. We ensure that both your physical building structure and the precious contents inside are protected." },
  { question: "Can I customize my coverage?", answer: "Yes, you can! iBayzat offers flexible tiers. You can choose a plan based on your specific requirements, adding riders for high-value items like jewelry or specialized art collections." },
  { question: "How do I file a claim?", answer: "Claims can be filed seamlessly through our online portal, via our mobile app, or by contacting our 24/7 dedicated support team. We prioritize speed and empathy in every claim process." },
];

export default function HomeInsurance() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="bg-[#f8f9ff] text-[#121c2a] overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[650px] flex items-center overflow-hidden bg-[#eff4ff]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1400&fit=crop"
            alt="Modern Home"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eff4ff] via-[#eff4ff]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
          {/* Left */}
          <div className="max-w-2xl">
            <span className="inline-block bg-purple-100 text-[#7800ce] px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Home Insurance
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#121c2a] leading-tight mb-4">
              Protect Your <span className="text-[#7800ce]">Sanctuary</span>
            </h1>
            <p className="text-lg text-[#4d4354] mb-8 max-w-lg leading-relaxed">
              Your home is more than just a building—it's where your life happens. iBayzat provides the
              comprehensive security your family deserves with tailored coverage that evolves with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#9333ea] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-[#7800ce] transition-colors flex items-center justify-center gap-2 active:scale-95">
                Get Quote
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
              <button className="border-2 border-[#7e7386] text-[#121c2a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#dee9fc] transition-colors active:scale-95">
                Compare Plans
              </button>
            </div>
          </div>

          {/* Right — glass card */}
          <div className="hidden lg:block relative">
            <div
              className="p-8 rounded-xl shadow-xl rotate-2 relative z-20"
              style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(207,194,215,0.3)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#8a4cfc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">verified_user</span>
                </div>
                <div>
                  <p className="font-semibold text-[#121c2a] text-sm">Premium Reliability</p>
                  <p className="text-xs text-[#4d4354]">Rated 4.9/5 by homeowners</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-[#cfc2d7] rounded-full overflow-hidden">
                  <div className="h-full bg-[#7800ce] w-4/5 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-[#4d4354]">
                  <span>Risk Coverage</span>
                  <span>98% High Strength</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-3">Why iBayzat Protection?</h2>
            <p className="text-[#4d4354] text-base leading-relaxed">
              We've simplified home insurance to focus on what truly matters to you and your peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group bg-[#eff4ff] p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-purple-200"
              >
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <span className="material-symbols-outlined text-[#7800ce] text-3xl">{b.icon}</span>
                </div>
                <h3 className="font-bold text-xl text-[#121c2a] mb-2">{b.title}</h3>
                <p className="text-[#4d4354] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage Details ── */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with glass overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-xl min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&fit=crop"
              alt="Luxury Living Room"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-6 left-6 right-6 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)", border: "1px solid rgba(207,194,215,0.3)" }}
            >
              <p className="font-semibold text-[#7800ce] mb-1">Building &amp; Contents</p>
              <p className="text-[#4d4354] text-sm">Protect your architecture and everything inside it with one unified policy.</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#121c2a] mb-4">Unmatched Coverage Clarity</h2>
              <p className="text-[#4d4354] leading-relaxed">
                We believe in transparent terms. Our building and contents protection ensures you're never left in the dark when life happens.
              </p>
            </div>
            <div className="space-y-6">
              {coverageItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-[#712ae2] shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#121c2a] mb-1">{item.title}</h4>
                    <p className="text-[#4d4354] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#eff4ff]">
        <div className="container mx-auto px-4 md:px-12 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#4d4354]">Everything you need to know about iBayzat Home Insurance.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="bg-white rounded-xl border border-[#cfc2d7] overflow-hidden cursor-pointer"
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="font-semibold text-[#121c2a] text-base pr-4">{faq.question}</h3>
                  <span
                    className={`material-symbols-outlined text-[#7800ce] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openFaq === idx ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[#4d4354] text-sm leading-relaxed px-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="bg-[#7800ce] rounded-3xl shadow-2xl relative overflow-hidden px-8 py-16 text-center">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#712ae2] rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#ddb8ff] rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to secure your future?</h2>
              <p className="text-lg text-purple-100 mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of homeowners who trust iBayzat to protect their most valuable asset. Get your quote in under 2 minutes.
              </p>
              <button className="bg-white text-[#7800ce] px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
