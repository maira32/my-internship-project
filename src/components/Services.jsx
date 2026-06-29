const servicesData = [
  {
    title: "WEB DESIGN",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    title: "HTML5",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
        />
      </svg>
    ),
  },
  {
    title: "JQUERY",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "CSS3",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="w-full bg-white py-24 px-6 md:px-12">
    <h1 className="text-center mb-10 text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wider uppercase mb-3">Our Services</h1>
    <h2 className="text-center mb-10 text-xs md:text-sm font-mono text-gray-400 tracking-tight max-w-xl mx-auto">This is Photoshop's version of Lorem Ipsum. Proin gravida</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {servicesData.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-16 h-20 shrink-0 bg-teal-500 -skew-x-12 flex items-center justify-center text-white shadow-md">
                <div className="skew-x-12">{service.icon}</div>
              </div>


              <div className="flex flex-col pt-1">
                <h3 className="text-base font-serif font-bold tracking-widest text-gray-900 uppercase mb-2">
                  {service.title}
                </h3>

                <p className="text-xs font-mono text-gray-400 leading-relaxed tracking-tight">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <img src="/services.png" className="block mx-auto "/>
    </section>

  );
}

export default Services;