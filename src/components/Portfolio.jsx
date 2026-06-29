function Portfolio(){
    return(
        <section className="w-full bg-slate-200 py-24 px-6 md:px-12">
        <h1 className="text-center mb-10 text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wider uppercase mb-3">Our Portfolio</h1>
        <h2 className="text-center mb-10 text-xs md:text-sm font-mono text-gray-400 tracking-tight max-w-xl mx-auto">This is Photoshop's version of Lorem Ipsum. Proin gravida</h2>
        <div> 
        <ul className="flex justify-center items-center gap-8 border-y border-gray-300 py-4">
            <li>All</li>
            <li>Web Design</li>
            <li>Photography</li>
            <li>Illustration</li>
            <li>Branding</li>
        </ul>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-6">
            <img src="/img1.png"/>
            <img src="/img2.png"/>
            <img src="/img3.png"/>
            <img src="/img4.png"/>
            <img src="/img5.png"/>
            <img src="/img6.png"/>
            <img src="/img7.png"/>
            <img src="/img8.png"/>
            <img src="/img9.png"/>
            <img src="/img10.png"/>

        </div>
        </section>
    );
}
export default Portfolio;