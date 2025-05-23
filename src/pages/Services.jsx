import React from 'react';

const services = [
  {
    id: 1,
    title: "Wood Floor Restoration",
    description: "Revitalize your worn, faded wooden floors with our complete restoration service including sanding, polishing, and varnishing to make them look brand new again.",
    icon: "🔨",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    features: [
      "Complete sanding & refinishing",
      "Stain color matching",
      "Scratch & dent repair",
      "Eco-friendly varnishes"
    ]
  },
  {
    id: 2,
    title: "Professional Floor Sanding",
    description: "Remove years of wear and tear with our industrial-grade sanding equipment, revealing your floor's natural beauty with smooth, pristine surfaces ready for finishing.",
    icon: "🔄",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    features: [
      "Dust-free sanding technology",
      "Multi-stage sanding process",
      "Edge and corner sanding",
      "Final fine-grit finishing"
    ]
  },
  {
    id: 3,
    title: "Wood Floor Oiling",
    description: "Enhance and protect your wooden floors with high-quality, hard-wearing oils that penetrate deep while maintaining the natural look and feel of your wood.",
    icon: "🛢️",
    image: "https://media.istockphoto.com/id/184236206/photo/home-renovation.jpg?s=612x612&w=0&k=20&c=spatWxRZXjCAg4zRSYbWxgPpkPaF9Xga_YykvfUPnxU=",
    features: [
      "Hardwax oil applications",
      "Matte or satin finishes",
      "Enhanced wood grain",
      "Food-safe options available"
    ]
  },
  {
    id: 4,
    title: "Floorboard Repairs",
    description: "From squeaky floorboards to damaged sections, we fix all types of wooden floor issues, ensuring your floor is both beautiful and structurally sound.",
    icon: "🔧",
    image: "https://media.istockphoto.com/id/515219705/photo/old-parquet.jpg?s=612x612&w=0&k=20&c=1wKQ1WxPDYYcD1H8cAqn8oXaI5X_tBa6qm4-S_tV6SQ=",
    features: [
      "Squeak elimination",
      "Board replacement",
      "Subfloor repairs",
      "Levelling uneven floors"
    ]
  },
  {
    id: 5,
    title: "Parquet Floor Restoration",
    description: "Specialists in restoring both heritage and modern parquet flooring, carefully repairing and refinishing blocks to restore their original geometric patterns.",
    icon: "🧩",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    features: [
      "Pattern matching",
      "Historical techniques",
      "Custom staining",
      "Geometric realignment"
    ]
  },
  {
    id: 6,
    title: "Gap Filling & Staining",
    description: "Eliminate unsightly gaps between floorboards and achieve your desired color with our professional gap filling and staining services.",
    icon: "🎨",
    image: "https://media.istockphoto.com/id/668224496/photo/carpenter-installing-hardwood-floor.jpg?s=612x612&w=0&k=20&c=aecremQGZzUSxuifLn8-S7O2kkqWD5-gBaDjwZP3vLE=",
    features: [
      "Color-matched wood filler",
      "Custom stain blending",
      "Gap stabilization",
      "Seamless finish"
    ]
  }
];

const ServicesPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Flooring Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium floor restoration services in London combining traditional craftsmanship with modern techniques
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition">
                  Get a Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our 5-Step Restoration Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-3">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Free on-site evaluation of your floors</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-3">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Furniture removal & area protection</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-3">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Sanding</h3>
              <p className="text-gray-600 text-sm">Multi-stage professional sanding</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-3">4</div>
              <h3 className="font-semibold text-gray-800 mb-2">Finishing</h3>
              <p className="text-gray-600 text-sm">Staining, oiling or varnishing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-3">5</div>
              <h3 className="font-semibold text-gray-800 mb-2">Final Inspection</h3>
              <p className="text-gray-600 text-sm">Quality check & aftercare advice</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Floors?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation survey and quote. Our London-based team is ready to bring your floors back to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call Now: +44 01234 56789
            </button>
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition">
              WhatsApp Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;