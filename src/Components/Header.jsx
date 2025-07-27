import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll smoothly to footer with id 'contact'
  const scrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.getElementById("contact")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setMobileOpen(false)
    }
  }

  return (
    <header className={`w-full bg-slate-900 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation - Now hidden below 1286px */}
          <nav className="hidden xl:flex items-center space-x-6 text-white font-medium">
            <NavItem to="/" label="HOME" />
            <a
              href="https://academy.muhsinmashkur.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 px-1 font-medium transition"
            >
              ACADEMY
            </a>
            <NavItem to="/media" label="MEDIA" />
            <a
              href="https://academy.muhsinmashkur.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 px-1 font-medium transition"
            >
              BLOG
            </a>
            <NavItem to="/consultancy" label="CONSULT NOW" pulse />
            <div className="flex items-center space-x-2 ml-6">
              <button
                onClick={scrollToFooter}
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-4 py-2 rounded-full font-semibold transition"
              >
                HIRE FOR A SESSION
              </button>
              <div className="w-px h-6 bg-white opacity-30 mx-2" />
              <Link
                to="/class"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-semibold transition"
              >
                ONE TO ONE CLASS
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle - Now shown below 1286px */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Now shown below 1286px */}
      {mobileOpen && (
        <div className="xl:hidden bg-slate-900 px-4 pb-4 space-y-2 text-white font-medium">
          <MobileLink to="/">HOME</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-700 text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            ACADEMY
          </a>
          <MobileLink to="/media">MEDIA</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-700 text-white hover:text-emerald-400 font-medium transition"
          >
            BLOG
          </a>
          <MobileLink to="/consultancy" pulse>
            CONSULT NOW
          </MobileLink>
          <div className="pt-4 flex flex-col space-y-2">
            <button
              onClick={scrollToFooter}
              className="bg-emerald-400 text-slate-900 px-4 py-2 rounded-full text-center font-semibold"
            >
              HIRE FOR A SESSION
            </button>
            <Link to="/class" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-center font-semibold">
              ONE TO ONE CLASS
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop NavItem with optional blinking pulse effect for CONSULT NOW
const NavItem = ({ to, label, pulse }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-1 hover:text-emerald-400 transition font-medium
      ${isActive ? "text-emerald-400" : "text-white"}
      ${pulse && !isActive ? "animate-pulse" : ""}
    `
    }
  >
    {label}
  </NavLink>
)

// Mobile NavLink with optional blinking pulse effect for CONSULT NOW
const MobileLink = ({ to, children, pulse }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 border-b border-slate-700 transition
      ${isActive ? "text-emerald-400" : "text-white"}
      ${pulse && !isActive ? "animate-pulse" : ""}
      `
    }
    onClick={() => document.querySelector("button.xl\\:hidden")?.click()}
  >
    {children}
  </NavLink>
)
