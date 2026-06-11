import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const navItems = [
  { name: 'Home', slug: '/' },
  { name: 'Services', slug: '/services' },
   { name: 'About', slug: '/about' },
  { name: 'Contact', slug: '/contact' },
]

function Header({ navigateTo }) {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
<div
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => navigate("/")}
>
  <div className="flex flex-col">
    <div className="flex items-center text-[#964AF9]">
      <span className="text-5xl font-bold">i</span>

      <img
        src={logo}
        alt="iBayzat Logo"
        className="h-8 w-auto"
      />
    </div>

    <span className="text-xs text-[#999999]">
      The Work Life Platform
    </span>
  </div>
</div>

        {/* Nav Menu */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex gap-0 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.slug}
                  onClick={() => {
                    const section = item.slug.replace('/', '') || 'home';
                    setActiveSection(section);
                    navigateTo && navigateTo(section);
                  }}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeSection === (item.slug.replace('/', '') || 'home')
                      ? 'text-[#7800ce] border-b-2 border-[#7800ce]'
                      : 'text-[#666666] border-b-2 border-transparent hover:text-[#7800ce]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* <button className="px-6 py-2 text-[#666666] font-medium hover:opacity-80 active:scale-95 transition-all">
            Login
          </button> */}
          <button  className="bg-[#7800ce] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 active:scale-95 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
