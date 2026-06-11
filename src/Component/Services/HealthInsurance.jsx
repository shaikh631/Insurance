import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const HealthInsurance = ({ navigateTo }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const benefits = [
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access top-tier hospitals and specialists worldwide with our extensive and vetted provider network.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Our dedicated concierge team is available around the clock to assist with medical emergencies or billing queries.",
    },
    {
      icon: "📱",
      title: "Digital-First",
      description: "Manage your policy, file claims instantly, and find doctors right from your phone via our intuitive app.",
    },
  ];

  const coverage = [
    {
      icon: "🏥",
      title: "Full Inpatient Coverage",
      description: "Hospital stays, surgeries, and specialized diagnostics are fully covered.",
    },
    {
      icon: "💊",
      title: "Preventative Wellness",
      description: "Annual check-ups and screenings included to keep you healthy.",
    },
    {
      icon: "👶",
      title: "Maternity & Pediatric",
      description: "Dedicated support for growing families, from prenatal to vaccinations.",
    },
  ];

  const faqs = [
    {
      question: "How do I find network hospitals?",
      answer:
        "You can easily locate network hospitals via the iBayzat mobile app. Our GPS-enabled hospital finder shows you the nearest providers and their specialty services in real-time.",
    },
    {
      question: "What are the coverage limits?",
      answer:
        "Coverage limits vary by the specific plan you choose. Our premium plans offer comprehensive annual limits up to $1M per member, ensuring peace of mind for even complex medical procedures.",
    },
    {
      question: "How long do claims take to process?",
      answer:
        "Most digital claims filed through our app are processed within 24-72 hours. For direct billing at network hospitals, authorization is typically instant at the point of service.",
    },
  ];

  return (
    <div className="bg-white text-[#121c2a] min-h-screen">
      {/* <Header navigateTo={navigateTo} /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-purple-100 text-[#7800ce] px-4 py-2 rounded-lg text-sm font-semibold">
              Health Insurance
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-[#121c2a] leading-tight">
              Comprehensive Health <br />
              <span className="text-[#7800ce]">Protection</span>
            </h1>

            <p className="text-lg text-[#666666] max-w-lg">
              Tailored health solutions designed for the modern workforce. Experience seamless claims, an extensive network, and digital-first care that prioritizes your well-being.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#7800ce] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all">
                Get Quote
              </button>
              <button className="border-2 border-[#cccccc] text-[#121c2a] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all">
                Compare Plans
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoy9DAUfYh2sU-YMa-XTuXeqk3dBOPa7dZsOCg2QT2EH5xyQPbrQCqfGIp-EuMHRxLVittnucbMxWaBhnimo4JJz-aq06w1PglRaiR84gHGgY3N63wGPX4RWT1_xtPYL8aAOdJ08dlS_kuMOBdbkNsZpQQeobQJleWpJmPUc_W0otDTojxYRvfkHgPMiCf3kd5Xzz6eIp4rn1hU9iA4vpJcgCA63uNrS2J1eXtXmh0ou9wmdoQvBhzFgTEetri8h9Ako-uvYZIJY"
                alt="Healthcare Professional"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-[#7800ce]">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-[#121c2a]">Global Network</p>
                    <p className="text-xs text-[#666666]">5,000+ Providers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-3">Why Choose iBayzat Health?</h2>
            <p className="text-lg text-[#666666]">
              We've reimagined health insurance to be faster, smarter, and more human-centric than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#e0e0e0] hover:border-[#7800ce] hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-xl text-[#121c2a] mb-3">{benefit.title}</h3>
                <p className="text-[#666666]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#121c2a] mb-6">Everything You Need, Included</h2>
              <p className="text-lg text-[#666666] mb-8">
                Our plans are comprehensive by design, ensuring you never have to worry about hidden exclusions during critical moments.
              </p>

              <div className="space-y-6">
                {coverage.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-2xl mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#121c2a] mb-1">{item.title}</h4>
                      <p className="text-[#666666]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop"
                alt="Medical Lab"
                className="w-full h-auto rounded-xl opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                  <p className="text-4xl font-bold text-[#7800ce] mb-2">$1M</p>
                  <p className="text-sm text-[#666666] uppercase tracking-wider">Annual Coverage Limit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-[#666666]">Everything you need to know about iBayzat Health Insurance.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#e0e0e0] overflow-hidden hover:border-[#7800ce] transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-[#121c2a] text-lg text-left">{faq.question}</h3>
                  <span className={`text-[#7800ce] text-2xl transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}>
                    ⌄
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-[#e0e0e0]">
                    <p className="text-[#666666]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7800ce] to-purple-700">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Secure Your Health Today</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of members who trust iBayzat for their health and wellness journey. Get a personalized quote in less than 2 minutes.
          </p>
          <button className="bg-white text-[#7800ce] px-8 py-3 rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all">
            Get Quote
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HealthInsurance;
