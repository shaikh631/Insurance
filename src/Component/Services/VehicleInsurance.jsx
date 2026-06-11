import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const VehicleInsurance = ({ navigateTo }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const benefits = [
    {
      icon: "🚗",
      title: "24/7 Roadside Assistance",
      description: "Never feel stranded. Whether it's a flat tire, empty tank, or engine trouble, our team is a tap away.",
    },
    {
      icon: "🔧",
      title: "Agency Repair Guarantee",
      description: "Rest assured knowing your vehicle is repaired at certified agency centers with genuine manufacturer parts.",
    },
    {
      icon: "📊",
      title: "Zero-Depreciation Cover",
      description: "Get the full claim amount without worrying about the age-related value drop of your car parts.",
    },
  ];

  const faqs = [
    {
      question: "Is roadside assistance included?",
      answer: "Yes, 24/7 assistance is standard across all our comprehensive vehicle insurance plans. We ensure you're never stranded, anywhere in the GCC.",
    },
    {
      question: "Can I choose my repair shop?",
      answer: "We offer a network of certified agency repair centers to ensure the highest quality of service and parts. Depending on your plan, you can opt for Agency Repair or Choice of Workshop cover.",
    },
    {
      question: "How do I file a claim?",
      answer: "Filing a claim is simple. You can do it directly via the iBayzat app by uploading photos of the incident, or by contacting our 24/7 dedicated support team through the hotline.",
    },
  ];

  return (
    <div className="bg-white">
      {/* <Header navigateTo={navigateTo} /> */}

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-green-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-[#7800ce] px-4 py-2 rounded-full text-sm font-semibold">
              <span>🚗</span>
              VEHICLE INSURANCE
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#121c2a]">
              Stay Mobile with Total Protection
            </h1>

            <p className="text-lg text-[#666666]">
              Smart, seamless coverage tailored for your lifestyle. From daily commutes to fleet logistics, iBayzat keeps you moving with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#7800ce] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                Get Quote
              </button>
              <button className="border-2 border-[#7800ce] text-[#7800ce] px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
                <span>▶</span>
                How it works
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop"
                alt="Luxury car"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unmatched Benefits */}
      <section className="py-20 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-4">
              Unmatched Benefits
            </h2>
            <p className="text-lg text-[#666666]">
              Why thousands of drivers trust iBayzat for their daily peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border-2 border-[#e0e0e0] hover:border-[#7800ce] hover:shadow-lg transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#121c2a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Coverage */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-4">
              Comprehensive Coverage
            </h2>
            <p className="text-lg text-[#666666]">
              Explore specialized plans designed for every type of vehicle in your life or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Car */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop"
                alt="Private car"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Private Car</h3>
                <p className="text-white/80">
                  Comprehensive protection for personal vehicles, featuring GCC-wide coverage and personal accident cover.
                </p>
              </div>
            </div>

            {/* Motorcycle */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                alt="Motorcycle"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Motorcycle</h3>
                <p className="text-white/80">
                  Agile protection for two-wheelers including helmet and accessory cover options.
                </p>
              </div>
            </div>

            {/* Fleet Management - Full Width */}
            <div className="md:col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578324156640-30cc02a6c3ef?w=800&h=400&fit=crop"
                alt="Fleet management"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
                <span className="text-[#7800ce] font-bold text-sm mb-2">FOR BUSINESSES</span>
                <h3 className="text-white text-3xl font-bold mb-4">Fleet Management</h3>
                <p className="text-white/80 max-w-md mb-6">
                  Streamlined insurance for commercial fleets. Centralized dashboard, rapid claims, and optimized premiums for logistics and corporate vehicles.
                </p>
                <button className="w-fit border-b-2 border-[#7800ce] text-[#7800ce] font-bold pb-1 hover:opacity-80 transition-all">
                  Learn About Fleet Solutions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#121c2a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#666666] mb-12">
            Everything you need to know about our vehicle coverage.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-green-50 border-2 border-[#e0e0e0] rounded-xl overflow-hidden hover:border-[#7800ce] transition-all cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
              >
                <div className="flex items-center justify-between p-6 hover:bg-green-100/50 transition-colors">
                  <h4 className="font-semibold text-[#121c2a] text-lg">
                    {faq.question}
                  </h4>
                  <span
                    className={`text-[#7800ce] text-2xl transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t-2 border-[#e0e0e0] pt-4 text-[#666666]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 bg-gradient-to-r from-[#7800ce] to-[#9333ea]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for worry-free driving?
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Join over 50,000 drivers who have simplified their vehicle protection with iBayzat. Get a personalized quote in under 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7800ce] px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <span>📞</span>
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default VehicleInsurance;
