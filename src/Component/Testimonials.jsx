import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Home Owner',
      image: '👩‍💼',
      text: 'InsureCare made the entire process so easy. The quote was instant and the premium is unbeatable. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: '👨‍💼',
      text: 'As a business owner, I needed reliable coverage. Their team was incredibly helpful in customizing a plan that fits my needs perfectly.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Frequent Traveler',
      image: '👩‍🦰',
      text: 'Travel insurance through InsureCare has been a lifesaver. Quick claim processing when I needed it most. Thank you!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Car Owner',
      image: '👨‍🦱',
      text: 'Best auto insurance experience I\'ve had. The claims process was smooth and the support team is excellent.',
      rating: 5
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who trust InsureCare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <div className="text-3xl mr-3">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
