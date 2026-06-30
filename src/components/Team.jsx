import { useRef } from 'react';

const Team = () => {
  // 1. The Data
  const teamMembers = [
    { name: 'Owen Miller', role: 'developer', imageUrl: '/team1.png' },
    { name: 'Mike William', role: 'developer', imageUrl: '/team2.png' },
    { name: 'Besim Dauti', role: 'developer', imageUrl: '/team3.png' },
    { name: 'Faton Avdiu', role: 'developer', imageUrl: '/team4.png' },
  ];

  // Make a long list so the carousel can scroll multiple times
  const carouselMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  // 2. The Reference to the scroll box
  const carouselRef = useRef(null);

  // 3. Scroll Functions
  function scrollLeft() {
    const box = carouselRef.current;
    if (box) {
      const width = box.offsetWidth;
      box.scrollBy({ left: -width, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    const box = carouselRef.current;
    if (box) {
      const width = box.offsetWidth;
      box.scrollBy({ left: width, behavior: 'smooth' });
    }
  }

  // 4. The UI
  return (
    <section className="relative w-full bg-slate-600 py-16 flex items-center justify-center overflow-hidden font-mono">
      
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Left Button */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 z-30 bg-black opacity-80 text-white p-4 hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Button */}
      <button 
        onClick={scrollRight}
        className="absolute right-0 z-30 bg-black opacity-80 text-white p-4 hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10">
        
        {/* Title Area */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-widest mb-2 uppercase">
            Meet the Team
          </h2>
          <p className="text-gray-300 text-sm">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        {/* Scrollable Carousel Box */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar
        >
          {carouselMembers.map((member, index) => {
            return (
              <div 
                key={index} 
                // THIS IS THE FIX! Exact math guarantees 4 fit perfectly on desktop.
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start shadow-xl bg-gray-200"
              >
                
                {/* Profile Picture */}
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover"
                />

                {/* Name and Role */}
                <div className="bg-[#1c1f26] p-5">
                  <h3 className="text-white font-bold text-lg tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="bg-[#3bc2b7] p-5 flex space-x-3">
                  <a href="#f" className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs hover:bg-white hover:text-teal-500">
                    f
                  </a>
                  <a href="#t" className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs hover:bg-white hover:text-teal-500">
                    t
                  </a>
                  <a href="#in" className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs hover:bg-white hover:text-teal-500">
                    in
                  </a>
                  <a href="#g" className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs hover:bg-white hover:text-teal-500">
                    g
                  </a>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Team;