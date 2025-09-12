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
    <header className={`w-full bg-gray-200 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 font-semibold text-slate-900">
            <NavItem to="/" label="HOME" />
            <a
              href="https://academy.muhsinmashkur.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-500 px-1 font-semibold transition"
            >
              ACADEMY
            </a>
            <NavItem to="/media" label="MEDIA" />
            <a
              href="https://academy.muhsinmashkur.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-emerald-600 px-1 font-semibold transition"
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
              <div className="w-px h-6 bg-slate-400 opacity-30 mx-2" />
              <button
                onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
                className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-center font-semibold"
              >
                ONE TO ONE CLASS
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-slate-900 focus:outline-none"
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="xl:hidden bg-gray-100 px-4 pb-4 space-y-2 font-semibold text-slate-900">
          <MobileLink to="/">HOME</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-300 text-yellow-600 hover:text-yellow-500 font-semibold transition"
          >
            ACADEMY
          </a>
          <MobileLink to="/media">MEDIA</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-300 text-slate-900 hover:text-emerald-600 font-semibold transition"
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
            <button
              onClick={() => window.open("https://calendly.com/muhsin-du/30min", "_blank")}
              className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-center font-semibold"
            >
              ONE TO ONE CLASS
            </button>
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
      `px-1 hover:text-emerald-600 transition font-semibold
      ${isActive ? "text-emerald-600" : "text-slate-900"}
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
      `block py-2 border-b border-slate-300 transition font-semibold
      ${isActive ? "text-emerald-600" : "text-slate-900"}
      ${pulse && !isActive ? "animate-pulse" : ""}
      `
    }
    onClick={() => document.querySelector("button.xl\\:hidden")?.click()}
  >
    {children}
  </NavLink>
)
