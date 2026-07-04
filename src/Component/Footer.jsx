import React from "react";
import logo from '../assets/logo.jpeg';
import { Link } from "react-router-dom";
import contact from './Contact.jsx';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] py-16 border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
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
            <div className="flex gap-3">
              <a href="https://www.facebook.com/bayzatme" className="text-[#7800ce] hover:opacity-80">
                f
              </a>
              <a href="https://x.com/bayzatme" className="text-[#7800ce] hover:opacity-80">
                𝕏
              </a>
              <a href="https://www.linkedin.com/company/bayzat/" className="text-[#7800ce] hover:opacity-80">
                in
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[#333333] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[#333333] mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[#333333] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.bayzat.com/privacy-policy" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.bayzat.com/terms-and-conditions" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.bayzat.com/cookie-policy" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="https://get.bayzat.com/copyright/" className="text-[#666666] hover:text-[#7800ce] text-sm transition-colors">
                  Copy right
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e0e0e0] pt-8">
          <div className="flex justify-between items-center">
            <p className="text-[#999999] text-sm">
              © 2024 iBayzat Insurance Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.bayzat.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#7800ce] text-sm hover:opacity-80">
                Privacy Policy
              </a>
              <a href="https://www.bayzat.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-[#7800ce] text-sm hover:opacity-80">
                Terms of Service
              </a>
              <a href="https://get.bayzat.com/copyright/" target="_blank" rel="noopener noreferrer" className="text-[#7800ce] text-sm hover:opacity-80">
                Copy right
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
