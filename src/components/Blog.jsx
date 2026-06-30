const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'Mobile Friendly Comments Dashboard now launched!',
      date: '19 oct',
      comments: '10',
      excerpt: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu',
      imageUrl: './B1.png' 
    },
    {
      id: 2,
      title: 'Mobile Friendly Comments Dashboard now launched!',
      date: '19 oct',
      comments: '10',
      excerpt: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu',
      imageUrl: './B2.png'
    },
    {
      id: 3,
      title: 'Mobile Friendly Comments Dashboard now launched!',
      date: '19 oct',
      comments: '10',
      excerpt: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu',
      imageUrl: './B3.png'
    },
    {
      id: 4,
      title: 'Mobile Friendly Comments Dashboard now launched!',
      date: '19 oct',
      comments: '10',
      excerpt: 'Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu',
      imageUrl: './B4.png'
    }
  ];

  return (
    <section id="blog" className="w-full bg-white py-20 px-6 md:px-12 font-['Courier_New',Courier,monospace]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black tracking-widest mb-2 uppercase">
            Latest Posts
          </h2>
          <p className="text-gray-500 text-sm">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => {
            return (
              <div key={post.id} className="flex flex-col text-center group">
                
                <div className="relative mb-10">
                  <img 
                    src={post.imageUrl} 
                    alt="Blog thumbnail" 
                    className="w-full h-48 object-cover shadow-sm group-hover:opacity-90 transition-opacity"
                  />
                  
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#3bc2b7] text-white text-xs font-bold py-2 px-4 flex items-center justify-center space-x-4 min-w-[140px]">
                    
                    <div className="flex items-center space-x-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z" />
                      </svg>
                      <span>{post.comments}</span>
                    </div>

                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-gray-800 font-bold text-sm leading-relaxed mb-4">
                    {post.title}
                  </h3>
                  
                  <hr className="border-t border-gray-300 w-full my-4" />
                  
                  <p className="text-gray-500 text-xs leading-loose">
                    {post.excerpt}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default BlogSection;