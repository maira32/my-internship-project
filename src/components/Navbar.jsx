import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "services", label: "SERVICES" },
    { id: "team", label: "TEAM" },
    { id: "about", label: "ABOUT" },
    { id: "blog", label: "BLOG" },
    { id: "contact", label: "CONTACT US" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 select-none">
      <div className="w-full px-6 md:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="OnePager Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />

          <div className="flex flex-col justify-center">
            <div className="font-['Courier_New',Courier,monospace] text-base md:text-lg tracking-widest text-gray-900 leading-none">
              <span className="font-extrabold">ONE</span>
              <span className="font-light ml-1">PAGER</span>
            </div>

            <span className="font-['Courier_New',Courier,monospace] text-[8px] md:text-[9px] tracking-tight text-gray-400 mt-1 uppercase">
              creative single page template
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-['Courier_New',Courier,monospace] tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-[#1ca39e] text-white px-6 py-2.5 -skew-x-12 shadow-sm"
                  : "text-gray-800 hover:text-[#1ca39e]"
              }`}
            >
              <span
                className={`inline-block font-bold tracking-widest ${
                  activeSection === link.id ? "skew-x-12" : ""
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-[#1ca39e] focus:outline-none"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.42L10.59 12 5.7 16.89a1 1 0 101.41 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.89-4.89a1 1 0 000-1.41z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4 text-xs font-['Courier_New',Courier,monospace] tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={` py-2 text-center ${
                  activeSection === link.id
                    ? "bg-[#1ca39e] text-white font-bold"
                    : "text-gray-800 hover:text-[#1ca39e]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;