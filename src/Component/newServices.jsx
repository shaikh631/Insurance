import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right coverage?",
      answer:
        "Start by assessing your major financial risks. Use our Coverage Calculator to identify the best protection plan for your needs.",
    },
    {
      question: "Can I manage multiple policies in one place?",
      answer:
        "Yes. Our dashboard allows you to manage all your policies from one unified interface.",
    },
    {
      question: "What happens if I need to make a claim?",
      answer:
        "Claims can be filed online and are handled by dedicated advisors for faster resolution.",
    },
  ];

  const services = [
    {
      title: "Health Insurance",
      icon: "🏥",
      description:
        "Premium medical coverage including dental, optical and emergency support.",
        slug : "/health-Insurance",
    },
    {
      title: "Life Protection",
      icon: "👨‍👩‍👧",
      description:
        "Secure your family's future with flexible life insurance plans.",
        slug : "/life-Insurance",
    },
    {
      title: "Vehicle Insurance",
      icon: "🚗",
      description:
        "Comprehensive motor coverage with roadside assistance.",
        slug : "/vehicle-Insurance",
    },
    {
      title: "Home Insurance",
      icon: "🏠",
      description:
        "Protection for your home, valuables and personal assets.",
        slug : "/home-Insurance",
    },
    {
      title: "Travel Insurance",
      icon: "✈️",
      description:
        "Worldwide protection for medical emergencies and travel disruptions.",
        slug : "/travel-Insurance",
    },
  ];

  return (
    <div className="bg-[#f8f9ff] text-[#121c2a]">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-[#7800ce] text-sm font-semibold">
              Trusted by 500k+ individuals
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Comprehensive Protection for
              <span className="text-[#7800ce]"> Every Stage</span> of Life
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Secure your future with modern insurance solutions designed
              for families, professionals and businesses.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#7800ce] text-white px-8 py-4 rounded-xl">
                Explore Plans
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl">
                Coverage Guide
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Insurance Team"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Tailored Insurance Solutions
            </h2>

            <p className="text-gray-600 mt-4">
              Coverage designed around your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 hover:border-[#7800ce] hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {service.description}
                </p>

                <Link to={service.slug} className="text-[#7800ce] font-semibold">
                 Learn More →
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why Choose iBayzat?
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl">
                  Customizable Plans
                </h4>
                <p className="text-gray-600">
                  Build protection that matches your exact needs.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl">
                  Instant Quotes
                </h4>
                <p className="text-gray-600">
                  Get transparent pricing within minutes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl">
                  Expert Support
                </h4>
                <p className="text-gray-600">
                  Dedicated advisors available whenever you need help.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#7800ce] rounded-3xl p-10 text-white">
            <h3 className="text-5xl font-bold">98%</h3>
            <p className="mt-3">Customer Retention Rate</p>

            <div className="mt-10">
              <h3 className="text-5xl font-bold">2 Min</h3>
              <p className="mt-3">Average Quote Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold">
                    {faq.question}
                  </span>

                  <span>
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}