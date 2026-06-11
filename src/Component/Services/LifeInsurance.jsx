import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const LifeInsurance = ({ navigateTo }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const benefits = [
    {
      icon: "💰",
      title: "Immediate Financial Security",
      description: "Provide your loved ones with the ultimate safety net. iBayzat Life ensures your family is shielded from unexpected financial burdens.",
    },
    {
      icon: "📊",
      title: "Tax-Free Payouts",
      description: "Maximize the value your beneficiaries receive with payouts that are generally exempt from income tax in most jurisdictions.",
    },
    {
      icon: "🏥",
      title: "Critical Illness Riders",
      description: "Add an extra layer of protection with optional riders that pay out during your lifetime if you are diagnosed with a severe illness.",
    },
  ];

  const coverage = [
    {
      icon: "📅",
      title: "Term Life Insurance",
      description: "Affordable coverage for a specific period (10, 20, or 30 years). Ideal for young parents and mortgage protection.",
    },
    {
      icon: "∞",
      title: "Whole Life Insurance",
      description: "Permanent protection that builds cash value over time. A robust asset for wealth transfer and lifelong peace of mind.",
    },
  ];

  const faqs = [
    {
      question: "How does the payout process work?",
      answer: "Beneficiaries receive a lump sum payment directly to their bank account. Our dedicated claims concierge team assists your loved ones through every step of the documentation process to ensure funds are released as quickly as possible.",
    },
    {
      question: "Who is eligible for iBayzat Life Insurance?",
      answer: "Most residents aged 18-65 are eligible for our core life products. We offer various underwriting paths, including non-medical options for healthy individuals within certain coverage limits.",
    },
    {
      question: "Are there any common exclusions?",
      answer: "Standard exclusions apply for high-risk activities and certain pre-existing conditions. However, our underwriting team works with you to find the right coverage that meets your needs.",
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
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#7800ce] px-4 py-2 rounded-full text-sm font-semibold">
              <span>🛡️</span>
              LIFE INSURANCE
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#121c2a]">
              Securing Your Family's Future
            </h1>

            <p className="text-lg text-[#666666]">
              Provide your loved ones with the ultimate safety net. iBayzat Life Insurance offers flexible, high-value coverage designed to protect what matters most when it counts the most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#7800ce] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                Get Quote
              </button>
              <button className="border-2 border-[#7800ce] text-[#7800ce] px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                View Plans
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop"
                alt="Happy family"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Life Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-4">
              Why Choose iBayzat Life?
            </h2>
            <p className="text-lg text-[#666666]">
              We combine institutional strength with modern flexibility to provide coverage that evolves with your life stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#e0e0e0] hover:border-[#7800ce] hover:shadow-lg transition-all group"
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

      {/* Coverage Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-6">
                Tailored Coverage Options
              </h2>
              <p className="text-lg text-[#666666] mb-8">
                Choose the insurance structure that aligns with your financial goals and family's long-term needs.
              </p>

              <div className="space-y-4">
                {coverage.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-[#7800ce] hover:shadow-lg transition-all"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#121c2a] text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#666666]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#7800ce] to-[#9333ea] text-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold mb-2">98%</div>
                <p className="text-purple-100">Claims Paid Ratio</p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl border-2 border-[#7800ce]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-[#121c2a]">Fast Track</h4>
                    <p className="text-sm text-[#666666]">Applications approved in hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#7800ce] text-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <h4 className="font-bold text-lg">iBayzat Trust Guarantee</h4>
                </div>
                <p className="text-purple-100">
                  Our global network of underwriters ensures your policy is backed by world-class financial institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#121c2a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#666666] mb-12">
            Everything you need to know about iBayzat Life Insurance.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#e0e0e0] rounded-xl overflow-hidden hover:border-[#7800ce] transition-all cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
              >
                <div className="flex items-center justify-between p-6 hover:bg-purple-50 transition-colors">
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
            Ready to protect your legacy?
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Get a personalized life insurance quote in under 2 minutes. No hidden fees, just pure protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7800ce] px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default LifeInsurance;
