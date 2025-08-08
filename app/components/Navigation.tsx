'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRegisterDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Program', href: '/program' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <div>
                <span className="font-black text-2xl text-gray-900 tracking-tight">KEIDF</span>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Teachers Seminar</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Registration Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsRegisterDropdownOpen(!isRegisterDropdownOpen)}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-all duration-300 group flex items-center"
              >
                Register
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {isRegisterDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl border angular-form z-50">
                  <Link
                    href="/register"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsRegisterDropdownOpen(false)}
                  >
                    <div className="font-semibold">New Registration</div>
                    <div className="text-xs text-gray-500">Register for the seminar</div>
                  </Link>
                  <Link
                    href="/registration-lookup"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-t transition-colors"
                    onClick={() => setIsRegisterDropdownOpen(false)}
                  >
                    <div className="font-semibold">Check Registration</div>
                    <div className="text-xs text-gray-500">Lookup your registration status</div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/register"
              className="ml-6 cta-primary text-sm py-3 px-6"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </Link>
              <Link
                href="/registration-lookup"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium border-t"
                onClick={() => setIsMenuOpen(false)}
              >
                Check Registration
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
