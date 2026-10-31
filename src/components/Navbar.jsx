import { useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-neutral-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl tracking-tight group"
          >
            <span className="w-3 h-3 rounded-full bg-[#ff2a2a] group-hover:scale-125 transition-transform" />
            <span>{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-300 hover:text-[#ff2a2a] text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold rounded-full bg-[#ff2a2a] text-white hover:bg-[#e02424] transition-colors shadow-sm"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:text-[#ff2a2a] hover:bg-neutral-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white font-medium hover:bg-[#e02424] transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
