import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const TravelInsurance = ({ navigateTo }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const benefits = [
    {
      icon: "🏥",
      title: "Medical Emergency",
      description: "Comprehensive medical coverage including hospital stays, outpatient care, and emergency evacuation up to $5M.",
    },
    {
      icon: "✈️",
      title: "Trip Cancellation",
      description: "Reimbursement for prepaid, non-refundable trip costs if you must cancel due to covered unforeseen circumstances.",
    },
    {
      icon: "🧳",
      title: "Lost Baggage",
      description: "Coverage for lost, stolen, or damaged personal belongings and essential item replacement for delayed luggage.",
    },
  ];

  const coverage = [
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Stay protected in over 190 countries worldwide with dedicated regional support centers.",
    },
    {
      icon: "✈️",
      title: "Single Trip Plans",
      description: "Perfect for one-off holidays or short business trips with specific date coverage.",
    },
    {
      icon: "📅",
      title: "Multi-Trip (Annual)",
      description: "Cost-effective for frequent travelers, covering all trips within a 12-month period.",
    },
  ];

  const faqs = [
    {
      question: "Does it cover extreme sports?",
      answer: "Optional add-ons are available for adventure activities. We offer comprehensive extensions for skiing, scuba diving, and other adrenaline-filled pursuits to ensure you're covered for every moment of your trip.",
    },
    {
      question: "What is the medical coverage limit?",
      answer: "Our premier plans provide up to $5,000,000 for emergency hospital stays, surgical procedures, and intensive care. We ensure you receive the best possible medical attention without financial stress.",
    },
    {
      question: "How do I get emergency assistance?",
      answer: "You can call our 24/7 global helpline directly from the iBayzat app or via the international number provided on your policy document. Our multilingual team is ready to coordinate medical care or legal assistance immediately.",
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
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#7800ce] px-4 py-2 rounded-full text-sm font-semibold">
              <span>✈️</span>
              TRAVEL INSURANCE
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#121c2a]">
              Wander with <span className="text-[#7800ce]">Total Confidence</span>
            </h1>

            <p className="text-lg text-[#666666]">
              Explore the world knowing that iBayzat has your back. From medical emergencies to flight delays, we provide seamless protection for your next adventure.
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
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop"
                alt="Mountain lake landscape"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protection Beyond Borders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-4">
              Protection Beyond Borders
            </h2>
            <p className="text-lg text-[#666666]">
              Our travel insurance is designed to cover every possible hurdle, so you can focus on making memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-[#e0e0e0] hover:border-[#7800ce] hover:shadow-lg transition-all group"
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

      {/* Coverage Types */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121c2a] mb-6">
                Coverage for Every Type of Traveler
              </h2>

              <div className="space-y-4">
                {coverage.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-white rounded-xl border-l-4 border-[#7800ce] hover:shadow-lg transition-all"
                  >
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#121c2a] text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#666666]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-3xl shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvMluagJTDMHNWiu6Athc_cML8nGjCSzFUPBxapfrM9q2l4M7hxY3v-FusZxcsFHFSv21UYSEAo2ktt_DAWZwQemMhj3vHAZlsgkIJqtSXZjOQVOxqfp-w5wjqIFnJYVcnMb2PECOXN1QIqtfni1VXq_b8EFHSnfBRc2oXvLlMZJ86ZRheJqsFe38EdKrs8qHJ5mGohGgGVSLqAb_sAZCuXiXdgF4P7z-lDsk3Mn0w680yCkyQpJDc5ASuNp_eh6jBLh3TZVRq_so"
                  alt="Person with globe"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#7800ce] text-white p-6 rounded-xl shadow-lg animate-bounce">
                  <p className="font-bold">24/7 Global Assistance</p>
                  <p className="text-sm text-purple-100">We're always one call away.</p>
                </div>
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
            Everything you need to know about iBayzat Travel Insurance.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#e0e0e0] rounded-xl overflow-hidden hover:border-[#7800ce] transition-all cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
              >
                <div className="flex items-center justify-between p-6 hover:bg-blue-50 transition-colors">
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
      <section className="py-20 px-12 bg-gradient-to-r from-blue-900 to-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for your next journey?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a personalized quote in less than 2 minutes. Transparent pricing, maximum protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#7800ce] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
              Get Quote Now
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
                alt="User 1"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop"
                alt="User 2"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop"
                alt="User 3"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-white font-semibold text-sm">Join 50k+ confident travelers</p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default TravelInsurance;
