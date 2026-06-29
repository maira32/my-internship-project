import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 select-none">
      
      <div className="w-full px-6 md:px-10 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" alt="OnePager Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
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

        <nav className="hidden md:flex items-center space-x-6 text-xs font-['Courier_New',Courier,monospace] text-gray-800 tracking-wider">
          <a 
            href="#home" 
            className="bg-[#1ca39e] text-white px-6 py-2.5 -skew-x-12 inline-block shadow-sm transition-all hover:bg-[#178c88]"
          >
            <span className="skew-x-12 inline-block font-bold tracking-widest">HOME</span>
          </a>
          <a href="#portfolio" className="hover:text-[#1ca39e] transition-colors">PORTFOLIO</a>
          <a href="#services" className="hover:text-[#1ca39e] transition-colors">SERVICES</a>
          <a href="#team" className="hover:text-[#1ca39e] transition-colors">TEAM</a>
          <a href="#about" className="hover:text-[#1ca39e] transition-colors">ABOUT</a>
          <a href="#blog" className="hover:text-[#1ca39e] transition-colors">BLOG</a>
          <a href="#contact" className="hover:text-[#1ca39e] transition-colors">CONTACT US</a>
        </nav>

        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-[#1ca39e] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7a1 1 0 00-1.41 1.42L10.59 12 5.7 16.89a1 1 0 101.41 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.89-4.89a1 1 0 000-1.4px" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>

      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-100 px-6 py-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-xs font-['Courier_New',Courier,monospace] text-gray-800 tracking-wider">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#1ca39e] text-white px-4 py-2 text-center font-bold tracking-widest shadow-sm"
            >
              HOME
            </a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">PORTFOLIO</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">SERVICES</a>
            <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">TEAM</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">ABOUT</a>
            <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">BLOG</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1ca39e] transition-colors py-1">CONTACT US</a>
          </nav>
        </div>
      )}

    </header>
  );
}

export default Navbar;