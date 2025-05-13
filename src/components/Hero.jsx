import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Floor Sanding & Restoration Experts in London
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          We treat your home with the same care as our own
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Transform Your Floors
        </h2>
        <p className="text-gray-700 mb-8">
          Professional floor restoration services that combine traditional craftsmanship with modern techniques to bring your floors back to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+4407543583107" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-700 transition">
            Call Now
          </a>
          <a href="#survey" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition">
            BOOK A FREE SURVEY
          </a>
          <a href="https://wa.me/4407543583107" className="bg-green-500 text-white px-6 py-3 rounded-lg text-center hover:bg-green-600 transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WHATSAPP US
          </a>
        </div>
      </div>
      
      <div className="md:w-1/2">
        <img 
          src="https://media.istockphoto.com/id/1071685150/photo/parquet-floor-sanding.jpg?s=612x612&w=0&k=20&c=SM9_1KZiLv6aHPaUDHbia7J7bSFOC2HXQgRDZ1jddCc=" 
          alt="Beautifully restored wooden floor" 
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
    </div>
  </section>
  );
};

export default Hero;