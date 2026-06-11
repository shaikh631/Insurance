import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (!FORMSPREE_ENDPOINT) {
        throw new Error('Form endpoint is missing')
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New insurance form submission from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          insuranceType: formData.insuranceType,
          message: formData.message
        })
      })

      const responseText = await response.text()
      let data = {}

      if (responseText) {
        try {
          data = JSON.parse(responseText)
        } catch {
          data = { message: responseText }
        }
      }

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to submit form')
      }

      setSuccess('Thank you! Your form has been submitted successfully. We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', insuranceType: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000)
    } catch (err) {
      setError(err.message || 'Error submitting form. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-[#f5f5f5]" id="contact">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
             <div>
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
            </div> 
          {/* Contact Form */}
          <div className={`rounded-2xl shadow-xl p-8 border  bg-white border-blue-50`}>
            <h3 className={`text-2xl font-bold mb-6  text-gray-900`}>Send us a Message</h3>
            
            {error && (
              <div className={`mb-4 p-4 border-l-4 rounded-lg flex items-start space-x-3 bg-red-50 border-red-500 text-red-700`}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className={`mb-4 p-4 border-l-4 rounded-lg flex items-start space-x-3 ] bg-green-50 border-green-500 text-green-700`}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors  text-gray-900`}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 rounded-lg bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#7800ce] focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors  text-gray-900`}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 rounded-lg bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#7800ce] focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors  text-gray-900`}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border-2 rounded-lg bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#7800ce] focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors  text-gray-900`}>
                  Insurance Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`}
                >
                  <option value="" className={'text-gray-400'}>Select an insurance type</option>
                  <option value="health">Health Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="vehicle">Vehicle Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="travel">Travel Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors  text-gray-900`}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#7800ce]focus:ring-2 focus:ring-blue-200`}
                  placeholder="Tell us about your insurance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#7800ce] text-white py-3 rounded-lg font-semibold hover:shadow-lg active:scale-95 transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                ✓ We'll respond within 24 hours • No spam, unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
