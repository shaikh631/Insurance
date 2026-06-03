import React, { useState } from 'react'
import { useDarkMode } from '../Context/DarkModeContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const navItems = [
    { name: 'Home', slug: '#home' },
    { name: 'About', slug: '#about' },
    { name: 'Services', slug: '#services' },
    { name: 'Contact', slug: '#contact' },
  ]

  return (

    <header className={`sticky top-4 z-50 mx-auto w-full max-w-7xl rounded-3xl border transition-all duration-300 px-4 py-4 shadow-lg ${
      isDarkMode 
        ? 'border-gray-700/80 bg-gradient-to-b from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-slate-900/50'
        : 'border-white bg-gradient-to-b from-blue-50/10 via-sky-50/80 to-white/10 backdrop-blur-xl shadow-slate-200/40'
    }`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/10`}>
            <span className="text-white font-bold text-lg">IC</span>
          </div>
          <span className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            InsureCare
          </span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center marker:transition-colors pl-0 marker:hover:text-blue-600">
          <div className={`flex flex-wrap items-center justify-center gap-8 text-sm font-medium transition-colors ${
            isDarkMode ? 'text-gray-300' : 'text-slate-700'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.slug}
                href={item.slug}
                className={`transition-colors ${
                  isDarkMode 
                    ? 'hover:text-blue-400' 
                    : 'hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
              isDarkMode
                ? 'border-gray-600 bg-slate-800 text-yellow-400 hover:border-yellow-500 hover:bg-slate-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm.707-7.071a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM9 4a1 1 0 01-1 1H7a1 1 0 110-2h1a1 1 0 011 1zm-.464 4.536a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM19 11a1 1 0 110-2h1a1 1 0 110 2h-1zm0 2.536a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM1 11a1 1 0 110-2h1a1 1 0 110 2H1zm.464-4.536a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition md:hidden ${
              isDarkMode
                ? 'border-gray-600 bg-slate-800 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600'
            }`}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className={`block h-0.5 w-full rounded-full transition ${
                isDarkMode ? 'bg-gray-300' : 'bg-slate-900'
              } ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-full rounded-full transition ${
                isDarkMode ? 'bg-gray-300' : 'bg-slate-900'
              } ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full rounded-full transition ${
                isDarkMode ? 'bg-gray-300' : 'bg-slate-900'
              } ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`mt-4 rounded-3xl border p-4 transition-all ${
          isDarkMode
            ? 'border-gray-700 bg-slate-800'
            : 'border-slate-200 bg-white'
        } md:hidden`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.slug}
                href={item.slug}
                className={`block rounded-2xl px-4 py-3 transition ${
                  isDarkMode
                    ? 'text-gray-300 hover:bg-slate-700 hover:text-blue-400'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header