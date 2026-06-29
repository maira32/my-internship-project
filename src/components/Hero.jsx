function Hero() {
  return (
  <div className="min-h-[80vh] bg-slate-800 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl text-white font-light tracking-wide">We are great <span className="font-bold">COMPANY</span></h1>
    <p className="text-slate-300 text-sm md:text-base max-w-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
    <button className="bg-teal-500 text-white font-bold text-xs px-6 py-3 mt-8 -skew-x-12 hover:bg-teal-600 transition-allS">Learn More</button>
  </div>
  )
}

export default Hero;