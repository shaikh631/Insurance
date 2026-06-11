import React from "react";


const newContact = () => {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-purple-50/20"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-[#7800ce] text-xs font-semibold">
            REACH OUT TO US
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#121c2a]">
            Get in Touch with
            <br />
            <span className="text-[#7800ce]">Our Experts</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for tailored insurance solutions or
            streamlined HR support, our team is ready to guide you toward
            operational excellence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-sm border">
            <h2 className="text-3xl font-semibold mb-8">
              Send us a message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-[#7800ce] outline-none"
                />

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:border-[#7800ce] outline-none"
                />
              </div>

              <input
                type="tel"
                placeholder="+971 50 000 0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#7800ce] outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell us more about your requirements..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#7800ce] outline-none"
              />

              <button
                type="submit"
                className="bg-[#7800ce] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Support Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#e6eeff] p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">
                Support Channels
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    📞
                  </div>

                  <div>
                    <p className="font-medium">Direct Phone</p>
                    <p className="text-gray-500">
                      +971 4 000 0000
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    ✉️
                  </div>

                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-gray-500">
                      care@ibayzat.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#7800ce] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Why choose iBayzat?
              </h3>

              <ul className="space-y-3">
                <li>✓ 24/7 Dedicated Support</li>
                <li>✓ Expert Regulatory Guidance</li>
                <li>✓ Seamless Tech Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default newContact;