import React from 'react'

function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Basic coverage',
        'Email support',
        'Online portal access',
        'Annual policy review',
        'Quick claims filing'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Premium',
      price: '$49',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Priority phone support',
        'Accident forgiveness',
        'Quarterly check-ins',
        '24/7 claims support',
        'Discounts on bundling'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Elite',
      price: '$99',
      period: '/month',
      description: 'Comprehensive protection',
      features: [
        'Everything in Premium',
        'Dedicated agent',
        'Worldwide coverage',
        'Concierge service',
        'Priority claim processing',
        'Free annual legal consultation'
      ],
      highlighted: false
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose a plan that fits your needs and budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-2xl transform scale-105'
                  : 'shadow-lg'
              }`}
            >
              {/* Card Header */}
              <div className={`p-8 ${
                plan.highlighted
                  ? 'bg-linear-to-r from-blue-600 to-blue-700 text-white'
                  : 'bg-gray-50'
              }`}>
                {plan.highlighted && (
                  <div className="text-sm font-bold bg-blue-500 text-white inline-block px-3 py-1 rounded-full mb-2">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className={`p-8 border-b ${
                plan.highlighted ? 'bg-blue-50 border-blue-200' : 'border-gray-200'
              }`}>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 ${
                        plan.highlighted ? 'text-blue-600' : 'text-green-500'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 font-bold rounded-lg transition-all ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Still deciding?</h3>
          <p className="text-lg text-blue-100 mb-6">
            Talk to our experts to find the perfect insurance plan for you
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
