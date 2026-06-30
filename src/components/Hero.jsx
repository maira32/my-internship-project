import { useState } from 'react';

const slides = [
  {
    id: 1,
    textBefore: "WE ARE GREAT ",
    tealWord: "",
    boldWord: "COMPANY",
    textAfter: "",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing\nelit, sed do eiusmod",
    buttonText: "LEARN MORE",
    bgImage: "https://demoxml.com/html/onepager/upload/slide.jpg" 
  },
  {
    id: 2,
    textBefore: "",
    tealWord: "ONE",
    boldWord: "PAGER",
    textAfter: " IS VERY SUITABLE",
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate\nvelit esse, consectetur adipisicing elit",
    buttonText: "", 
    bgImage: "https://demoxml.com/html/onepager/upload/slide.jpg"
  },
  {
    id: 3,
    textBefore: "Welcome to ",
    tealWord: "ONE",
    boldWord: "PAGER",
    textAfter: "",
    subtitle: "we design and develop awesome websites and smart applications, impactful identities using the latest",
    buttonText: "LEARN MORE",
    bgImage: "https://demoxml.com/html/onepager/upload/slide.jpg"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const active = slides[currentSlide];

  return (
    <div id="home" className="relative min-h-screen w-full bg-[#1e232d] flex flex-col items-center justify-center overflow-hidden select-none">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none transition-all duration-500"
        style={{ backgroundImage: `url(${active.bgImage})` }}
      />

<button 
  onClick={prevSlide}
  className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-75 transition-opacity focus:outline-none cursor-pointer p-2"
  aria-label="Previous slide"
>
  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
</button>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        <h1 className="font-['Courier_New',Courier,monospace] text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase">
          
          {active.textBefore && (
            <span className="font-normal">{active.textBefore}</span>
          )}

          {active.tealWord && (
            <span className="text-teal-400 font-bold">{active.tealWord}</span>
          )}

          {active.boldWord && (
            <span className="font-extrabold">{active.boldWord}</span>
          )}

          {active.textAfter && (
            <span className="font-normal">{active.textAfter}</span>
          )}

        </h1>

        <p className="font-['Courier_New',Courier,monospace] text-xs sm:text-sm md:text-base text-slate-200 mt-4 max-w-xl leading-relaxed uppercase whitespace-pre-line">
          {active.subtitle}
        </p>

        {active.buttonText && (
          <button className="mt-8 bg-[#1ca39e] hover:bg-[#178c88] text-white font-['Courier_New',Courier,monospace] font-bold text-xs tracking-wider uppercase px-8 py-3 -skew-x-12 transition-all shadow-md cursor-pointer">
            {active.buttonText}
          </button>
        )}

      </div>

<button 
  onClick={nextSlide}
  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-75 transition-opacity focus:outline-none cursor-pointer p-2"
  aria-label="Next slide"
>
  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2z"/>
  </svg>
</button>

    </div>
  );
}

export default Hero;