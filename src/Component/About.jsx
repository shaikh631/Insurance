import React from 'react'
import { useDarkMode } from '../Context/DarkModeContext'

function About() {
  const { isDarkMode } = useDarkMode()

  const features = [
    {
      title: 'Instant Claims',
      description: 'File and process claims in minutes with our digital-first platform',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
    },
    {
      title: 'Best Rates',
      description: 'Competitive premiums with discounts for bundling and loyalty',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: '24/7 Support',
      description: 'Expert support team available round the clock to help you',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </>
      ),
    },
  ]

  return (
    <section id="about" className={`py-20 transition-colors ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-blue-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="hidden md:block">
            <div className={`rounded-xl p-8 h-80 flex items-center justify-center transition-colors ${
              isDarkMode ? 'bg-gradient-to-br from-slate-800 to-blue-950/70 ring-1 ring-slate-700' : 'bg-gradient-to-br from-blue-100 to-cyan-100'
            }`}>
              <svg className={`w-64 h-64 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className={`text-4xl font-black leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Why Choose InsureCare?
            </h2>
            <p className={`text-lg leading-8 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              With over 20 years of experience in the insurance industry, we've helped thousands of customers protect what matters most to them. Our commitment to customer satisfaction and transparent policies sets us apart.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className={`flex items-start space-x-4 rounded-2xl border p-4 transition-colors ${
                  isDarkMode ? 'border-slate-800 bg-slate-900/70' : 'border-blue-50 bg-white'
                }`}>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-600/30">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
