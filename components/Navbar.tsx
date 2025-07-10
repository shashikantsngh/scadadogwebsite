"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Support", href: "/support" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
              <div className="w-20 h-20 flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                <Image
                src="/sd/SCADADOG-B1.svg"
                alt="ScadaDog Logo"
                width={140}
                height={140}
                className="w-28 h-20 object-contain"
                />
              </div>
              <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-gray-50 group ${
                  pathname === item.href ? "text-black bg-gray-50" : "text-gray-700 hover:text-black"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 to-black rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 relative"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 py-6 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors duration-300 rounded-xl mx-2 ${
                    pathname === item.href ? "text-black bg-gray-50" : "text-gray-700 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:info@scadadog.com"
                className="mx-2 mt-4 bg-gradient-to-r from-gray-800 to-black text-white px-4 py-3 rounded-xl text-sm font-semibold text-center hover:from-gray-700 hover:to-black transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
