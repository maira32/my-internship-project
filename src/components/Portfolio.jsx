import { useState } from 'react';

const categories = ["All", "Web Design", "Photography", "Illustration", "Branding"];

const portfolioItems = [
  { id: 1, src: "/img1.png", category: "Web Design" },
  { id: 2, src: "/img2.png", category: "Branding" },
  { id: 3, src: "/img3.png", category: "Illustration" },
  { id: 4, src: "/img4.png", category: "Photography" },
  { id: 5, src: "/img5.png", category: "Web Design" },
  { id: 6, src: "/img6.png", category: "Branding" },
  { id: 7, src: "/img7.png", category: "Photography" },
  { id: 8, src: "/img8.png", category: "Illustration" },
  { id: 9, src: "/img9.png", category: "Web Design" },
  { id: 10, src: "/img10.png", category: "Branding" },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full py-20 min-h-screen select-none overflow-hidden bg-slate-100">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('https://demoxml.com/html/onepager/upload/background1.jpg')" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-['Courier_New',Courier,monospace] font-extrabold text-gray-900 tracking-wider uppercase mb-4">
            Our Portfolio
          </h1>
          <p className="text-xs md:text-sm font-['Courier_New',Courier,monospace] text-gray-500 tracking-tight max-w-xl mx-auto uppercase">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="border-y border-gray-300/80 py-6 mb-12">
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 font-['Courier_New',Courier,monospace] text-xs sm:text-sm font-bold text-gray-700 tracking-wider">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`transition-all duration-300 cursor-pointer px-4 py-1.5 ${
                      isActive 
                        ? "bg-[#1ca39e] text-white -skew-x-12 shadow-sm inline-block" 
                        : "hover:text-[#1ca39e]"
                    }`}
                  >
                    <span className={isActive ? "skew-x-12 inline-block" : ""}>
                      {cat}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
              <img 
                src={item.src} 
                alt={`Portfolio project ${item.id}`} 
                className="w-full h-auto object-cover block hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;