import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  const closeDropdowns = () => setActiveDropdown(null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900 shadow-lg" : "bg-slate-900"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeDropdowns}>
            <div className="relative h-12 w-20">
              <img
                src="/logo.png"
                alt="Logo"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavItem to="/" onClick={closeDropdowns} label="HOME" />
            <a
              href="https://academy.muhsinmashkur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white hover:text-emerald-400 transition-colors"
            >
              ACADEMY
            </a>
            <NavItem to="/about" onClick={closeDropdowns} label="ABOUT" />

            {/* MEDIA */}
            <Dropdown
              label="MEDIA"
              isOpen={activeDropdown === "media"}
              onToggle={() => toggleDropdown("media")}
              items={[
                { to: "/media/live", label: "Live" },
                { to: "/media/lectures", label: "Lectures" },
                { to: "/media/podcasts", label: "Podcasts" },
                { to: "/media/gallery", label: "Gallery" },
              ]}
            />

            <NavItem to="/blog" onClick={closeDropdowns} label="BLOG" />
            <NavItem to="/consultancy" onClick={closeDropdowns} label="CONSULTANCY" />

            <div className="h-6 w-px bg-gray-600 mx-2"></div>

            <Link
              to="/book"
              className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-medium px-6 py-2 rounded-full transition-colors"
              onClick={closeDropdowns}
            >
              Book PROGRAM
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-slate-800 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="px-4 py-2">
          <MobileLink to="/">HOME</MobileLink>
          <a href="https://academy.muhsinmashkur.com" target="_blank" rel="noopener noreferrer" className="block py-3 text-white border-b border-slate-700">
            ACADEMY
          </a>
          <MobileLink to="/about">ABOUT</MobileLink>

          <MobileDropdown
            label="MEDIA"
            isOpen={activeDropdown === "mobile-media"}
            onToggle={() => toggleDropdown("mobile-media")}
            items={[
              { to: "/media/live", label: "Live" },
              { to: "/media/lectures", label: "Lectures" },
              { to: "/media/podcasts", label: "Podcasts" },
              { to: "/media/gallery", label: "Gallery" },
            ]}
          />

          <MobileLink to="/blog">BLOG</MobileLink>
          <MobileLink to="/consultancy">CONSULTANCY</MobileLink>

          <div className="pt-4 pb-2">
            <Link
              to="/book"
              className="block w-full bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-medium px-6 py-3 rounded-full text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book PROGRAM
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Desktop NavLink
const NavItem = ({ to, onClick, label }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2 transition-colors ${isActive ? "text-emerald-400" : "text-white hover:text-emerald-400"
      }`
    }
  >
    {label}
  </NavLink>
);

// Desktop Dropdown
const Dropdown = ({ label, isOpen, onToggle, items }) => (
  <div className="relative group">
    <button
      className="px-4 py-2 text-white hover:text-emerald-400 transition-colors flex items-center"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      {label}
      <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div
      className={`absolute left-0 mt-0 w-48 bg-slate-800 shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100 transform translate-y-0" : "opacity-0 scale-y-0 transform -translate-y-3 pointer-events-none"
        }`}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-4 py-2 text-gray-200 hover:bg-slate-700 hover:text-emerald-400 transition-colors"
            onClick={() => document.activeElement?.blur()}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// Mobile Link
const MobileLink = ({ to, children }) => (
  <NavLink
    to={to}
    className="block py-3 text-white border-b border-slate-700"
    onClick={() => document.querySelector("button.md\\:hidden")?.click()}
  >
    {children}
  </NavLink>
);

// Mobile Dropdown
const MobileDropdown = ({ label, isOpen, onToggle, items }) => (
  <div className="border-b border-slate-700">
    <button className="flex items-center justify-between w-full py-3 text-white" onClick={onToggle}>
      <span>{label}</span>
      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block py-2 pl-6 text-gray-300 hover:text-emerald-400"
          onClick={() => document.querySelector("button.md\\:hidden")?.click()}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);
