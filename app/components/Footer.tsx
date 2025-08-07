import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌊</div>
              <span className="font-bold text-xl">KEIDF Seminar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Namibian educators through innovative marine ecosystem education 
              and sustainable teaching practices.
            </p>
            <p className="text-gray-400 text-sm">
              Van Rhyn Primary School Initiative | Windhoek, Namibia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/program" className="text-gray-300 hover:text-white transition-colors">Program</Link></li>
              <li><Link href="/register" className="text-gray-300 hover:text-white transition-colors">Register</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Partners</h3>
            <ul className="space-y-2 text-gray-300">
              <li>UNESCO</li>
              <li>UNAM</li>
              <li>IUM</li>
              <li>CeMEES</li>
              <li>Ministry of Education</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Khomas Education Information Development Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">SDG Goals: 4, 13, 17</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
