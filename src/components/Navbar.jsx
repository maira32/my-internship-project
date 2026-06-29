function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <img src="/logo.png"></img>
              <span className="font-black">ONE</span>PAGER
              <br/>
            <span className="text-[10px] font-mono tracking-tighter text-gray-400 -mt-1.5">
              creative single page template
            </span>
        </div>

        <nav className="flex items-center space-x-7 text-xs font-bold tracking-widest text-gray-800">
          
          <a 
            href="#home" 
            className="bg-teal-500 text-white px-5 py-2 -skew-x-12 inline-block transition-transform"
          >
            <span className="skew-x-12 inline-block">HOME</span>
          </a>

          <a href="#portfolio" className="hover:text-teal-500 transition-colors">PORTFOLIO</a>
          <a href="#services" className="hover:text-teal-500 transition-colors">SERVICES</a>
          <a href="#team" className="hover:text-teal-500 transition-colors">TEAM</a>
          <a href="#about" className="hover:text-teal-500 transition-colors">ABOUT</a>
          <a href="#blog" className="hover:text-teal-500 transition-colors">BLOG</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">CONTACT US</a>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;