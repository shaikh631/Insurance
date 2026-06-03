import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Auto Insurance', href: '#services' },
      { name: 'Home Insurance', href: '#services' },
      { name: 'Health Insurance', href: '#services' },
      { name: 'Life Insurance', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'facebook', icon: '👍', color: 'from-blue-600 to-blue-700' },
    { name: 'twitter', icon: '𝕏', color: 'from-gray-800 to-black' },
    { name: 'linkedin', icon: 'in', color: 'from-blue-500 to-blue-600' },
    { name: 'instagram', icon: '📷', color: 'from-pink-500 to-rose-500' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black text-gray-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-500 opacity-5 rounded-full translate-x-1/3 translate-y-1/2"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">IC</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white block">InsureCare</span>
                <span className="text-xs text-blue-400 font-medium">Your Trust, Our Priority</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comprehensive insurance solutions designed to protect what matters most to you and your family.
            </p>
            <div className="flex justify-center gap-3 md:justify-start pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-11 h-11 rounded-lg bg-gradient-to-br ${social.color} text-white flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300`}
                  title={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2 md:justify-start justify-center">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Products
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2 md:justify-start justify-center">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Company
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2 md:justify-start justify-center">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Legal
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Newsletter */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
            <h4 className="text-white font-bold text-lg mb-3">📬 Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-5">
              Subscribe to our newsletter for latest updates, tips, and exclusive offers.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-xl border border-gray-600 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 text-sm font-bold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
            <h4 className="text-white font-bold text-lg mb-5">📞 Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📱</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="text-sm text-gray-300 font-medium">1-800-INSURE-1</p>
                  <p className="text-xs text-gray-500">(Available 24/7)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✉️</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="text-sm text-gray-300 font-medium">support@insurecare.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                  <p className="text-sm text-gray-300 font-medium">123 Insurance Plaza, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-black/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-xs md:text-sm md:flex-row md:items-center md:justify-between text-gray-400">
          <p className="text-center md:text-left">
            <span className="font-semibold text-white">&copy; {currentYear} InsureCare.</span> All rights reserved.
          </p>
          <p className="text-center">Made with <span className="text-red-500 animate-pulse">❤️</span> to protect what matters</p>
          <div className="flex justify-center gap-6 md:justify-end text-xs">
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
