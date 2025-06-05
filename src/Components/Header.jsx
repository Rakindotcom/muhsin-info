import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900 shadow-lg" : "bg-slate-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" onClick={closeDropdowns}>
            <div className="relative h-12 w-20">
              <img
                src="/placeholder.svg"
                alt="Logo"
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/" onClick={closeDropdowns}>
              HOME
            </NavLink>
            <NavLink href="/about" onClick={closeDropdowns}>
              ABOUT
            </NavLink>

            {/* Media Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-white hover:text-amber-400 transition-colors flex items-center"
                onClick={() => toggleDropdown("media")}
                aria-expanded={activeDropdown === "media"}
              >
                MEDIA
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${
                    activeDropdown === "media" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-0 w-48 bg-slate-800 shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top ${
                  activeDropdown === "media"
                    ? "opacity-100 scale-y-100 transform translate-y-0"
                    : "opacity-0 scale-y-0 transform -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  <DropdownLink href="/media/live">Live</DropdownLink>
                  <DropdownLink href="/media/lectures">Lectures</DropdownLink>
                  <DropdownLink href="/media/podcasts">Podcasts</DropdownLink>
                  <DropdownLink href="/media/gallery">Gallery</DropdownLink>
                </div>
              </div>
            </div>

            <NavLink href="/consultancy" onClick={closeDropdowns}>
              CONSULTANCY
            </NavLink>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-white hover:text-amber-400 transition-colors flex items-center"
                onClick={() => toggleDropdown("blog")}
                aria-expanded={activeDropdown === "blog"}
              >
                BLOG
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform ${
                    activeDropdown === "blog" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-0 w-48 bg-slate-800 shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top ${
                  activeDropdown === "blog"
                    ? "opacity-100 scale-y-100 transform translate-y-0"
                    : "opacity-0 scale-y-0 transform -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  <DropdownLink href="/blog/writing">Writing</DropdownLink>
                  <DropdownLink href="/blog/quotes">Quotes</DropdownLink>
                </div>
              </div>
            </div>

            <div className="h-6 w-px bg-gray-600 mx-2"></div>

            <a
              href="/apply"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-medium px-6 py-2 rounded-full transition-colors"
              onClick={closeDropdowns}
            >
              Apply Program
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-800 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2">
          <MobileNavLink href="/">HOME</MobileNavLink>
          <MobileNavLink href="/about">ABOUT</MobileNavLink>

          {/* Mobile Media Dropdown */}
          <div className="border-b border-slate-700">
            <button
              className="flex items-center justify-between w-full py-3 text-white"
              onClick={() => toggleDropdown("mobile-media")}
            >
              <span>MEDIA</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeDropdown === "mobile-media" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeDropdown === "mobile-media" ? "max-h-60" : "max-h-0"
              }`}
            >
              <MobileDropdownLink href="/media/live">Live</MobileDropdownLink>
              <MobileDropdownLink href="/media/lectures">Lectures</MobileDropdownLink>
              <MobileDropdownLink href="/media/podcasts">Podcasts</MobileDropdownLink>
              <MobileDropdownLink href="/media/gallery">Gallery</MobileDropdownLink>
            </div>
          </div>

          <MobileNavLink href="/consultancy">CONSULTANCY</MobileNavLink>

          {/* Mobile Blog Dropdown */}
          <div className="border-b border-slate-700">
            <button
              className="flex items-center justify-between w-full py-3 text-white"
              onClick={() => toggleDropdown("mobile-blog")}
            >
              <span>BLOG</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeDropdown === "mobile-blog" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeDropdown === "mobile-blog" ? "max-h-40" : "max-h-0"
              }`}
            >
              <MobileDropdownLink href="/blog/writing">Writing</MobileDropdownLink>
              <MobileDropdownLink href="/blog/quotes">Quotes</MobileDropdownLink>
            </div>
          </div>

          <div className="pt-4 pb-2">
            <a
              href="/apply"
              className="block w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-medium px-6 py-3 rounded-full text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Program
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper components

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    className="px-4 py-2 text-white hover:text-amber-400 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

const DropdownLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-4 py-2 text-gray-200 hover:bg-slate-700 hover:text-amber-400 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block py-3 text-white border-b border-slate-700"
    onClick={() => {
      // Close mobile menu when a link is clicked
      document.querySelector("button.md\\:hidden")?.dispatchEvent(new MouseEvent("click"));
    }}
  >
    {children}
  </a>
);

const MobileDropdownLink = ({ href, children }) => (
  <a
    href={href}
    className="block py-2 pl-6 text-gray-300 hover:text-amber-400"
    onClick={() => {
      // Close mobile menu when a link is clicked
      document.querySelector("button.md\\:hidden")?.dispatchEvent(new MouseEvent("click"));
    }}
  >
    {children}
  </a>
);
