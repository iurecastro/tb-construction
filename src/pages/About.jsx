import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">TB Construction Team</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
              alt="TB Construction Team Working"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by Thalisson, TB Construction brings years of experience and an unwavering commitment to customer satisfaction. Based in London, we specialize in high-quality floor restoration and construction services.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of qualified professionals who share the same passion for excellence in construction and renovations. Each member is trained in the latest techniques to deliver outstanding results.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that quality workmanship is the foundation for lasting relationships with our clients. That's why we dedicate ourselves to every detail of your project, treating your home with the same care as our own.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-blue-600 text-3xl font-bold">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-blue-600 text-3xl font-bold">500+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose TB Construction</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3">London-Based Experts</h3>
              <p className="text-gray-600">Local knowledge of London properties and building regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">Traditional techniques combined with modern equipment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">Clear communication and reliable service from start to finish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;