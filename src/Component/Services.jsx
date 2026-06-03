import React from 'react'
import { useDarkMode } from '../Context/DarkModeContext'

function Services() {
  const { isDarkMode } = useDarkMode()
  const services = [
    {
      id: 1,
      title: 'Auto Insurance',
      description: 'Comprehensive coverage for your vehicle including collision, theft, and liability protection.',
      icon: '🚗',
      features: ['Collision Coverage', 'Theft Protection', 'Roadside Assistance']
    },
    {
      id: 2,
      title: 'Home Insurance',
      description: 'Protect your home and belongings against fire, theft, and natural disasters.',
      icon: '🏠',
      features: ['Property Coverage', 'Liability Protection', 'Personal Items']
    },
    {
      id: 3,
      title: 'Health Insurance',
      description: 'Medical coverage including hospital stays, doctor visits, and prescription medications.',
      icon: '⚕️',
      features: ['Hospital Coverage', 'Doctor Visits', 'Emergency Care']
    },
    {
      id: 4,
      title: 'Life Insurance',
      description: 'Financial security for your loved ones with competitive premiums and quick claim settlement.',
      icon: '💝',
      features: ['Term Plans', 'Whole Life', 'Family Protection']
    },
    {
      id: 5,
      title: 'Travel Insurance',
      description: 'Complete travel protection covering medical emergencies, flight cancellations, and luggage loss.',
      icon: '✈️',
      features: ['Medical Coverage', 'Trip Cancellation', 'Luggage Protection']
    },
    {
      id: 6,
      title: 'Business Insurance',
      description: 'Comprehensive coverage for small businesses and enterprises with customizable plans.',
      icon: '💼',
      features: ['Liability Coverage', 'Property Protection', 'Employee Benefits']
    },
  ]

  return (
    <section id="services" className={`relative overflow-hidden py-24 transition-colors ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className={`pointer-events-none absolute top-0 right-0 hidden h-72 w-72 rounded-full ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-200/50'} blur-3xl opacity-40 lg:block`}></div>
      <div className={`pointer-events-none absolute bottom-0 left-0 hidden h-72 w-72 rounded-full ${isDarkMode ? 'bg-cyan-900/20' : 'bg-cyan-200/40'} blur-3xl opacity-30 lg:block`}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] shadow-sm ${
            isDarkMode
              ? 'bg-blue-900/40 text-blue-300'
              : 'bg-blue-100 text-blue-700'
          }`}>
            Trusted Coverage
          </span>
          <h2 className={`mt-6 text-4xl sm:text-5xl font-black leading-tight transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Insurance solutions designed for modern protection
          </h2>
          <p className={`mt-5 text-base sm:text-lg leading-8 transition-colors ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          }`}>
            Pick a plan that fits your lifestyle with transparent pricing, fast claims, and expert support across vehicle, home, health, life, travel, and business insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-[1.75rem] border p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isDarkMode
                  ? 'border-gray-700 bg-slate-800/50 hover:border-blue-600/60'
                  : 'border-slate-200 bg-white/95 hover:border-blue-200'
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${isDarkMode ? 'from-blue-600 via-cyan-500 to-sky-600' : 'from-blue-500 via-cyan-400 to-sky-400'}`}></div>
              <div className="relative">
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl text-3xl shadow-sm ring-1 transition-colors ${
                  isDarkMode
                    ? 'bg-blue-900/30 text-blue-400 ring-blue-700/60'
                    : 'bg-blue-50 text-blue-600 ring-blue-100'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-semibold mb-3 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-7 mb-6 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {service.description}
                </p>

                <div className="grid gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-all ${
                      isDarkMode
                        ? 'border-gray-700 bg-slate-700/30 text-gray-300 group-hover:bg-blue-900/40 group-hover:text-blue-300'
                        : 'border-slate-100 bg-slate-50 text-slate-700 group-hover:bg-blue-50/60 group-hover:text-slate-900'
                    }`}>
                      <svg className={`h-5 w-5 shrink-0 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`mt-8 w-full rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                  isDarkMode
                    ? 'border-blue-600/40 bg-blue-900/30 text-blue-300 hover:bg-blue-800/50 hover:text-blue-200 hover:border-blue-500/60'
                    : 'border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800'
                }`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
