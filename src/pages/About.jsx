import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Premium Floor Restoration & Construction Services in London
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Trusted by homeowners and businesses across London for exceptional craftsmanship and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg transform hover:scale-105">
                  Get Your Free Quote
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
                  Call Now: 020 1234 5678
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                alt="London property renovation"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-blue-600 text-3xl font-bold">10+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-blue-600 text-3xl font-bold">500+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <p className="text-blue-600 text-3xl font-bold">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="p-4">
              <p className="text-blue-600 text-3xl font-bold">24h</p>
              <p className="text-gray-600">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Specialist Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored for London properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Floor Restoration",
                description: "Breathing new life into tired floors with expert sanding and finishing",
                icon: "🪚"
              },
              {
                title: "Property Renovation",
                description: "Complete home transformations with attention to detail",
                icon: "🏡"
              },
              {
                title: "Commercial Refurbishment",
                description: "High-quality workspaces that impress clients and staff",
                icon: "🏢"
              },
              {
                title: "Kitchen & Bathroom Fitting",
                description: "Premium installations that combine function and style",
                icon: "🚿"
              },
              {
                title: "Structural Repairs",
                description: "Solving London's common property issues with proven solutions",
                icon: "🔨"
              },
              {
                title: "Emergency Services",
                description: "Rapid response to urgent construction needs",
                icon: "🚨"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="TB Construction team working"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why London Chooses TB Construction</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Local Expertise",
                    content: "We understand London's unique architecture and building regulations"
                  },
                  {
                    title: "Customer Satisfaction Guarantee",
                    content: "We stand behind our work with a 100% satisfaction guarantee - if you're not happy, we'll make it right"
                  },
                  {
                    title: "Transparent Pricing",
                    content: "No hidden costs - honest quotes with clear breakdowns"
                  },
                  {
                    title: "Eco-Friendly Solutions",
                    content: "Sustainable materials and low-impact techniques"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across London
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "TB Construction transformed our Victorian home in Islington. The floor restoration brought back the original beauty we didn't know existed!",
                name: "Sarah K., Islington",
                rating: "★★★★★"
              },
              {
                quote: "As a property developer, I've worked with many contractors. TB Construction stands out for their reliability and quality workmanship.",
                name: "James P., Kensington",
                rating: "★★★★★"
              },
              {
                quote: "They completed our office refurbishment on time and on budget. The team was professional and tidy - rare in this industry!",
                name: "Emma R., City of London",
                rating: "★★★★★"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-yellow-400 text-xl mb-4">{testimonial.rating}</div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact TB Construction today for a free, no-obligation consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg transform hover:scale-105">
              Get Your Free Quote
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
              Call Now: 020 1234 5678
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5494414770346!2d-0.12880968423092252!3d51.50735097963445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342c4e8a61a1a!2sTrafalgar%20Square%2C%20London%20WC2N%205DN%2C%20UK!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              title="TB Construction Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;