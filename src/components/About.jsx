const AboutSection = () => {
  const companyStats = [
    {
      id: 1,
      number: '956779',
      label: 'Lines of code written',
      icon: (
        <svg className="w-8 h-8 text-[#3bc2b7] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      number: '1479',
      label: 'Coffee Drinked',
      icon: (
        <svg className="w-8 h-8 text-[#3bc2b7] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 19h16v2H4v-2zm4-4h11a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H4v9a6 6 0 0 0 6 6zm10-9v5h-1a1 1 0 0 1-1-1V6h2zM6 6h9v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6h2z" />
        </svg>
      )
    },
    {
      id: 3,
      number: '578',
      label: 'Happy Clients',
      icon: (
        <svg className="w-8 h-8 text-[#3bc2b7] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
        </svg>
      )
    },
    {
      id: 4,
      number: '2178',
      label: 'Projects Done',
      icon: (
        <svg className="w-8 h-8 text-[#3bc2b7] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="w-full bg-white py-16 px-6 md:px-12 font-['Courier_New',Courier,monospace] text-gray-600">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-black tracking-widest mb-2 uppercase">
              Company Biography
            </h2>
            <span className="inline-block bg-[#3bc2b7] text-white text-xs font-bold px-2 py-1 mb-6 uppercase tracking-wider">
              Short Story About Us
            </span>
            
            <p className="mb-4 text-sm leading-relaxed">
              This is <span className="text-[#3bc2b7] font-bold">Photoshop's</span> version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.
            </p>
            
            <p className="mb-4 text-sm leading-relaxed">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. <span className="text-[#3bc2b7] font-bold">Class aptent taciti</span> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            
            <p className="text-sm leading-relaxed">
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-2xl font-bold text-black tracking-widest uppercase">
                Our Clients
              </h2>
              <div className="flex space-x-1 pb-1">
                <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-transparent border border-gray-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-transparent border border-gray-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-transparent border border-gray-400 rounded-full"></span>
              </div>
            </div>
            
            <span className="inline-block bg-[#3bc2b7] text-white text-xs font-bold px-2 py-1 mb-6 uppercase tracking-wider">
              We Love Our Clients
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#3bc2b7] text-white flex items-center justify-center p-8 lg:p-10 text-xl font-bold font-['Courier_New',Courier,monospace]">
                OPERA
              </div>
              <div className="bg-[#3bc2b7] text-white flex items-center justify-center p-8 lg:p-10 text-3xl font-bold font-['Courier_New',Courier,monospace] italic">
                hp
              </div>
              <div className="bg-[#3bc2b7] text-white flex items-center justify-center p-8 lg:p-10 text-lg font-bold font-['Courier_New',Courier,monospace]">
                WORDPRESS
              </div>
              <div className="bg-[#3bc2b7] text-white flex items-center justify-center p-8 lg:p-10 text-2xl font-bold font-['Courier_New',Courier,monospace]">
                Canon
              </div>
            </div>
          </div>

        </div>

        <div className="mt-24">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black tracking-widest mb-2 uppercase">
              Company Stats
            </h2>
            <p className="text-gray-400 text-sm">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat) => {
              return (
                <div key={stat.id} className="border border-gray-200 rounded-sm py-10 px-4 text-center hover:shadow-lg transition-shadow bg-white">
                  {stat.icon}
                  
                  <h3 className="text-4xl text-black font-normal mb-2">
                    {stat.number}
                  </h3>
                  
                  <p className="text-gray-400 text-xs tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;