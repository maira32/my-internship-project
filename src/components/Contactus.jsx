const ContactSection = () => {
  return (
    <>
      <section id="contact" className="w-full bg-[#222222] py-12 px-6 md:px-12 font-['Courier_New',Courier,monospace] text-gray-300">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white tracking-widest mb-2 uppercase">
              Get In Touch!
            </h2>
            <p className="text-gray-400 text-sm">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            
            <div className="flex-1">
              <h3 className="text-2xl text-white font-normal mb-6 tracking-wide">
                Contact info
              </h3>
              
              <p className="mb-4 text-sm leading-loose">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.
              </p>
              <p className="mb-6 text-sm leading-loose">
                Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum
              </p>

              <hr className="border-t border-gray-600 w-full my-6" />

              <div className="flex flex-col gap-3 text-sm">
                
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>lorem ipsum street</span>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+399 (500) 321 9548</span>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@domain.com</span>
                </div>

              </div>
            </div>

            <div className="flex-1">
              <form className="flex flex-col sm:flex-row gap-4 h-full">
                
                <div className="flex-1 flex flex-col gap-4">
                  
                  <div className="flex h-12 bg-white rounded-sm overflow-hidden">
                    <div className="w-12 bg-gray-100 border-r border-gray-200 flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <input type="text" placeholder="Name" className="flex-1 px-4 text-black outline-none font-['Courier_New',Courier,monospace]" />
                  </div>

                  <div className="flex h-12 bg-white rounded-sm overflow-hidden">
                    <div className="w-12 bg-gray-100 border-r border-gray-200 flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <input type="email" placeholder="e-mail" className="flex-1 px-4 text-black outline-none font-['Courier_New',Courier,monospace]" />
                  </div>

                  <div className="flex h-12 bg-white rounded-sm overflow-hidden">
                    <div className="w-12 bg-gray-100 border-r border-gray-200 flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <input type="text" placeholder="website" className="flex-1 px-4 text-black outline-none font-['Courier_New',Courier,monospace]" />
                  </div>

                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <textarea 
                    placeholder="Message" 
                    className="flex-1 p-4 bg-white text-black outline-none font-['Courier_New',Courier,monospace] resize-none rounded-sm min-h-[10px]"
                  ></textarea>
                  
                  <button type="button" className="h-12 w-full bg-[#3bc2b7] text-white font-bold tracking-widest hover:bg-teal-500 transition-colors rounded-sm uppercase">
                    Send Message
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="w-full bg-[#3bc2b7] py-12 px-6 md:px-12 font-['Courier_New',Courier,monospace] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="text-sm tracking-wider">
            © 2014 OnePager, All Rights Reserved
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['f', 't', 'rss', 'g+', 'in', 'p'].map((icon, i) => (
              <a 
                key={i} 
                href={`#home`} 
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm hover:bg-white hover:text-[#2bb6b6] transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
      </footer>
    </>
  );
};

export default ContactSection;