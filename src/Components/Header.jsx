import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { useTranslation } from "../hooks/useTranslation"
import { Globe } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const { language, switchLanguage } = useLanguage()
  const { t } = useTranslation()

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-dropdown')) {
        setShowLanguageDropdown(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showLanguageDropdown])

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
            <NavItem to="/" label={t('home')} />
            <a
              href="https://academy.muhsinmashkur.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-500 px-1 font-semibold transition"
            >
              {t('academy')}
            </a>
            <NavItem to="/media" label={t('media')} />
            <a
              href="https://academy.muhsinmashkur.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 hover:text-emerald-600 px-1 font-semibold transition"
            >
              {t('blog')}
            </a>
            <NavItem to="/consultancy" label={t('consultNow')} pulse yellow />
            <div className="flex items-center space-x-2 ml-6">
              <button
                onClick={scrollToFooter}
                className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-4 py-2 rounded-full font-semibold transition"
              >
                {t('hireForSession')}
              </button>
              <div className="w-px h-6 bg-slate-400 opacity-30 mx-2" />
              
              {/* Language Switcher */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="bg-blue-400 hover:bg-blue-500 text-slate-900 px-4 py-2 rounded-full text-center font-semibold flex items-center gap-2 transition"
                >
                  <Globe className="w-4 h-4" />
                  {t('language')}
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <button
                      onClick={() => {
                        switchLanguage('en')
                        setShowLanguageDropdown(false)
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 rounded-t-lg transition ${language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        switchLanguage('bn')
                        setShowLanguageDropdown(false)
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 rounded-b-lg transition ${language === 'bn' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                      style={{ fontFamily: 'Tiro Bangla, serif' }}
                    >
                      বাংলা
                    </button>
                  </div>
                )}
              </div>
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
          <MobileLink to="/">{t('home')}</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-300 text-yellow-600 hover:text-yellow-500 font-semibold transition"
          >
            {t('academy')}
          </a>
          <MobileLink to="/media">{t('media')}</MobileLink>
          <a
            href="https://academy.muhsinmashkur.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-slate-300 text-slate-900 hover:text-emerald-600 font-semibold transition"
          >
            {t('blog')}
          </a>
          <MobileLink to="/consultancy" pulse yellow>
            {t('consultNow')}
          </MobileLink>
          <div className="pt-4 flex flex-col space-y-2">
            <button
              onClick={scrollToFooter}
              className="bg-emerald-400 text-slate-900 px-4 py-2 rounded-full text-center font-semibold"
            >
              {t('hireForSession')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => switchLanguage('en')}
                className={`flex-1 py-2 px-4 rounded-full text-center font-semibold transition ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-slate-900 hover:bg-gray-300'}`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                English
              </button>
              <button
                onClick={() => switchLanguage('bn')}
                className={`flex-1 py-2 px-4 rounded-full text-center font-semibold transition ${language === 'bn' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-slate-900 hover:bg-gray-300'}`}
                style={{ fontFamily: 'Tiro Bangla, serif' }}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop NavItem with optional blinking pulse effect for CONSULT NOW
const NavItem = ({ to, label, pulse, yellow }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-1 hover:text-emerald-600 transition font-semibold
      ${isActive ? "text-emerald-600" : yellow ? "text-yellow-600 hover:text-yellow-500" : "text-slate-900"}
      ${pulse && !isActive ? "animate-pulse" : ""}
    `
    }
  >
    {label}
  </NavLink>
)

// Mobile NavLink with optional blinking pulse effect for CONSULT NOW
const MobileLink = ({ to, children, pulse, yellow }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 border-b border-slate-300 transition font-semibold
      ${isActive ? "text-emerald-600" : yellow ? "text-yellow-600 hover:text-yellow-500" : "text-slate-900"}
      ${pulse && !isActive ? "animate-pulse" : ""}
      `
    }
    onClick={() => document.querySelector("button.xl\\:hidden")?.click()}
  >
    {children}
  </NavLink>
)
