import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6">We're available from 8am to 8pm Monday to Saturday</p>
              
              <div className="mb-4 flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+44 0123 456789</p>
                </div>
              </div>
              
              <div className="mb-4 flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@tbconstruction.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Trafalgar Square, London WC2N 5DN, UK</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule a free survey now</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;