import React, { useState } from 'react'
import { useDarkMode } from '../Context/DarkModeContext'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

function Contact() {
  const { isDarkMode } = useDarkMode()
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
      const response = await fetch(`${API_URL}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.insuranceType,
          about: formData.message
        })
      })

      const data = await response.json()

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
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 left-0 w-72 h-72 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions? Our dedicated support team is ready to help you find the perfect insurance solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email Card */}
              <div className={`rounded-xl shadow-md hover:shadow-xl transition-all p-6 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-50'}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Address</h3>
                    <p className={`font-medium hover:opacity-80 cursor-pointer ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>support@insurecare.com</p>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>info@insurecare.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className={`rounded-xl shadow-md hover:shadow-xl transition-all p-6 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-50'}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone Number</h3>
                    <p className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>1-800-INSURE-1</p>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>(1-800-467-8731) • Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Office Card */}
              <div className={`rounded-xl shadow-md hover:shadow-xl transition-all p-6 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-50'}`}>
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Office Location</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>123 Insurance Plaza</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`rounded-xl shadow-md p-6 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-50'}`}>
              <p className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Follow Us</p>
              <div className="flex space-x-3">
                {[
                  { name: 'facebook', icon: 'f', color: 'from-blue-600 to-blue-700' },
                  { name: 'twitter', icon: '𝕏', color: 'from-gray-800 to-black' },
                  { name: 'linkedin', icon: 'in', color: 'from-blue-500 to-blue-600' },
                  { name: 'instagram', icon: '📷', color: 'from-pink-500 to-rose-500' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300`}
                    title={social.name}
                  >
                    <span className="text-sm font-bold">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl shadow-xl p-8 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-blue-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h3>
            
            {error && (
              <div className={`mb-4 p-4 border-l-4 rounded-lg flex items-start space-x-3 ${isDarkMode ? 'bg-red-900/30 border-red-600 text-red-400' : 'bg-red-50 border-red-500 text-red-700'}`}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className={`mb-4 p-4 border-l-4 rounded-lg flex items-start space-x-3 ${isDarkMode ? 'bg-green-900/30 border-green-600 text-green-400' : 'bg-green-50 border-green-500 text-green-700'}`}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30' : 'border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30' : 'border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30' : 'border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Insurance Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30' : 'border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                >
                  <option value="" className={isDarkMode ? 'bg-slate-700 text-gray-400' : 'text-gray-400'}>Select an insurance type</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="travel">Travel Insurance</option>
                  <option value="business">Business Insurance</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  disabled={loading}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30' : 'border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                  placeholder="Tell us about your insurance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
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
