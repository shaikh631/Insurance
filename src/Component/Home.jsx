import React, { useState } from "react";
import Footer from "./Footer";
import Contact from "./Contact";
import logos from "../index.js";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "health",
      name: "Health",
      icon: "🏥",
       slug: "/Health-Insurance",
      description: "Full coverage for you and your family.",
      details: [
        "In-patient & Out-patient",
        "Global network access",
        "Mental health support",
      ],
    },
    {
      id: "life",
      name: "Life",
      icon: "❤️",
      slug: "/Life-Insurance",
      description: "Securing your family's future today.",
      details: [
        "Flexible premium options",
        "Critical illness cover",
        "Education fund planning",
      ],
    },
    {
      id: "vehicle",
      name: "Vehicle",
      icon: "🚗",
        slug: "/Vehicle-Insurance",
      description: "On-road protection with rapid recovery.",
      details: [
        "24/7 Roadside help",
        "Zero-depreciation cover",
        "Agency repair included",
      ],
    },
    {
      id: "home",
      name: "Home",
      icon: "🏠",
      slug: "/Home-Insurance",
      description: "Safeguarding your most valuable asset.",
      details: [
        "Coverage for structure & contents",
        "Natural disaster protection",
        "Personal liability coverage",
      ],
    },
    {
      id: "travel",
      name: "Travel",
      icon: "✈️",
        slug: "/Travel-Insurance",
      description: "Protection for every journey.",
      details: [
        "Medical coverage abroad",
        "Trip cancellation protection",
        "Baggage & personal belongings",
      ],
    },
  ];

const partners = logos;

  const steps = [
    {
      number: "1",
      title: "Fill the Form",
      description: "Complete the insurance request form.",
    },
    {
      number: "2",
      title: "Submit Details",
      description: "Provide your personal and coverage information.",
    },
    {
      number: "3",
      title: "Receive Quotes",
      description: "Our team sends customized insurance quotes.",
    },
    {
      number: "4",
      title: "Choose a Plan",
      description: "Select the insurance plan that best fits your needs.",
    },
    {
      number: "5",
      title: "Get Covered",
      description: "Receive your policy documents and coverage confirmation.",
    },
  ];

  const trustReasons = [
    {
      title: "Trusted Worldwide",
      description:
        "Our global network ensures that no matter where you are, iBayzat is there to support you with localized knowledge and international standards.",
      icon: "🌍",
    },
    {
      title: "Affordable",
      description:
        "Premium that fit your budget without compromising on quality or coverage limits.",
      icon: "💰",
    },
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
const handleServiceClick = (service) => {
  navigate(service.slug);
};

  return (
    <div className="bg-white text-[#121c2a] min-h-screen">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-carousel {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .logo-carousel:hover {
          animation-play-state: paused;
        }
        .hero-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, rgba(248, 249, 255, 0) 100%);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.1);
        }
        .soft-shadow {
          box-shadow: 0 10px 30px -10px rgba(147, 51, 234, 0.12);
        }
        .service-details {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }
        .service-details.active {
          max-height: 500px;
          opacity: 1;
          margin-top: 1.5rem;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      {/* <Header navigateTo={navigateTo} /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#7800ce] px-4 py-2 rounded-full text-sm font-semibold">
              <span>✓</span>
              Trusted by 10k+ businesses
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#121c2a] leading-tight">
              Protect What{" "}
              <br />
              <span className="text-[#7800ce]">Matters Most</span>
            </h1>

            <p className="text-lg text-[#666666] max-w-lg">
              Experience comprehensive insurance solutions tailored to your unique
              lifestyle. From health to travel, iBayzat provides the security you
              deserve with a modern, human-centric approach.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#7800ce] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg active:scale-95 transition-all">
                Get Quote
              </button>
              <button className="border-2 border-[#cccccc] text-[#121c2a] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 active:scale-95 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-[#7800ce] text-sm font-bold">
                      ✓
                    </div>
                    <div className="h-3 bg-purple-200 rounded w-32"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-[#7800ce] text-sm font-bold">
                      ✓
                    </div>
                    <div className="h-3 bg-purple-200 rounded w-40"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-[#7800ce] text-sm font-bold">
                      ✓
                    </div>
                    <div className="h-3 bg-purple-200 rounded w-28"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-[#7800ce] text-white rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold">Instant Coverage</p>
                <p className="text-xs text-purple-100">Active since 2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-[#f9f9f9] border-y border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-12">
          <h3 className="text-center font-semibold text-[#999999] mb-8 text-xs uppercase tracking-wider">
            TRUSTED BY LEADING PARTNERS
          </h3>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 z-20 bg-gradient-to-r from-[#f9f9f9] to-transparent"></div>
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 z-20 bg-gradient-to-l from-[#f9f9f9] to-transparent"></div>
            <div className="overflow-x-auto hide-scrollbar">
              <div className="logo-carousel">
                {[...partners, ...partners].map((partner, idx) => (
               <div
                key={idx}
                 className="flex items-center justify-center shrink-0 px-6"
                 >
                <img
              src={partner}
               alt={`Partner ${idx}`}
                 className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
               </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
       className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-2">Our Services</h2>
            <p className="text-lg text-[#666666]">
              Find the perfect plan for every stage of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-[#e0e0e0] hover:border-[#7800ce] hover:shadow-lg transition-all group flex flex-col h-fit cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7800ce] group-hover:text-white transition-colors text-xl">
                  {service.icon}
                </div>

                <h3 className="font-bold text-base text-[#121c2a] mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-[#666666] mb-4">{service.description}</p>

                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick(service);
                  }}
                  className="text-[#7800ce] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all hover:no-underline cursor-pointer"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </a>

                <div className={`service-details ${expandedService === service.id ? "active" : ""}`}>
                  <div className="pt-4 border-t border-[#e0e0e0] space-y-3">
                    <p className="text-sm text-[#666666]">
                      Comprehensive coverage tailored to your needs.
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#121c2a]">
                          <span className="text-[#7800ce]">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-4xl font-bold text-[#121c2a] mb-3">
            Why thousands trust iBayzat
          </h2>
          <p className="text-lg text-[#666666] mb-16">
            We combine traditional reliability with modern speed and digital efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trusted Worldwide */}
            <div className="bg-white p-8 rounded-2xl border border-[#e0e0e0] shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🌍</span>
                <h3 className="font-bold text-xl text-[#121c2a]">Trusted Worldwide</h3>
              </div>
              <p className="text-[#666666]">
                Our global network ensures that no matter where you are, iBayzat is there
                to support you with localized knowledge and international standards.
              </p>
              <div className="flex gap-2 mt-6">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-[#666666]">225 reviews this month</span>
              </div>
            </div>

            {/* Fast Claims & Affordable */}
            <div className="space-y-6">
              {/* Fast Claims */}
              <div className="bg-gradient-to-br from-[#7800ce] to-purple-700 p-8 rounded-2xl text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Fast Claims</h3>
                    <p className="text-purple-100">
                      90% of our claims are processed within 24 hours via our mobile app.
                    </p>
                  </div>
                </div>
              </div>

              {/* Affordable */}
              <div className="bg-white p-8 rounded-2xl border border-[#e0e0e0] shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💰</span>
                  <div>
                    <h3 className="font-bold text-xl text-[#121c2a] mb-2">Affordable</h3>
                    <p className="text-[#666666]">
                      Premium that fit your budget without compromising on quality or
                      coverage limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white p-8 rounded-2xl border border-[#e0e0e0] shadow-md mt-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎧</span>
              <div>
                <h3 className="font-bold text-xl text-[#121c2a] mb-2">24/7 Support</h3>
                <p className="text-[#666666]">
                  Our dedicated concierge team is always available to help you navigate
                  your policy or emergency situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#121c2a] mb-3">
              Get Your Insurance in 5 Simple Steps
            </h2>
            <p className="text-lg text-[#666666]">
              A streamlined process to get you protected faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-[#7800ce] font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-semibold text-[#121c2a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#666666]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
       {/* <section className="py-20 bg-[#f5f5f5]" id="contact">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
             {/* <div>
              <h2 className="text-4xl font-bold text-[#121c2a] mb-8">Get In Touch</h2>
              <p className="text-[#666666] mb-8">
                Have questions or need a custom quote? Fill out the form and our expert
                team will get back to you within 2 business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-xl">📧</div>
                  <div>
                    <p className="font-semibold text-[#121c2a]">Email</p>
                    <a href="mailto:support@ibayat.com" className="text-[#7800ce] hover:opacity-80">
                      support@ibayat.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-xl">📞</div>
                  <div>
                    <p className="font-semibold text-[#121c2a]">Phone</p>
                    <a href="tel:+1-855-0042401" className="text-[#7800ce] hover:opacity-80">
                      +1 (855) 004-2401
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-xl">📍</div>
                  <div>
                    <p className="font-semibold text-[#121c2a]">Address</p>
                    <p className="text-[#666666]">Dubai HQ, Financial District, NY 10004</p>
                  </div>
                </div>
              </div> 
            </div>  */}

            {/* Contact Form */}
            {/* <form className="bg-white p-8 rounded-2xl shadow-md border border-[#e0e0e0]">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  className="col-span-1 border border-[#e0e0e0] p-3 rounded-lg focus:outline-none focus:border-[#7800ce]"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="col-span-1 border border-[#e0e0e0] p-3 rounded-lg focus:outline-none focus:border-[#7800ce]"
                  placeholder="Email"
                  type="email"
                />
              </div>

              <input
                className="w-full border border-[#e0e0e0] p-3 rounded-lg mb-4 focus:outline-none focus:border-[#7800ce]"
                placeholder="Phone Number"
                type="tel"
              />

              <textarea
                className="w-full border border-[#e0e0e0] p-3 rounded-lg mb-6 focus:outline-none focus:border-[#7800ce]"
                rows="4"
                placeholder="Tell us about your needs..."
              />

              <button
                type="submit"
                className="w-full bg-[#7800ce] text-white py-3 rounded-lg font-semibold hover:shadow-lg active:scale-95 transition-all"
              >
                Send Message
              </button>
            </form>*/}
          {/* </div> 
        </div>
       </section>  */}
      <Contact/>

      {/* Footer */}
     
    </div>
  );
};

export default Home;