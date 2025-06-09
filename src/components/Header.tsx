"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/features", label: "Caracteristicas" },
  { href: "/gallery", label: "Galeria" },
  { href: "/contact", label: "Contactanos" },
  { href: "/download", label: "Descargas" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-800/20 bg-gradient-to-r from-red-900/95 via-yellow-900/95 to-green-900/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/home" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 shadow-lg shadow-yellow-500/30">
                <span className="text-xl font-bold text-red-900">J</span>
              </div>
              <span className="hidden font-bold text-2xl text-yellow-400 sm:inline-block">J'ACHA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-yellow-400 hover:scale-105 ${
                  pathname.pathname === item.href
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Play Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/download"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2 rounded-lg text-sm font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ¡JUGAR AHORA!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-yellow-400 hover:bg-red-800/40 hover:text-yellow-300 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-5 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-yellow-400 ${
                    pathname.pathname === item.href ? "text-yellow-400" : "text-gray-200"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/download"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-bold transform hover:scale-105 transition-all duration-300 shadow-lg w-full text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ¡JUGAR AHORA!
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
