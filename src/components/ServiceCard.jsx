import React from 'react';

const ServiceCard = ({ title, description, image, whatsapp }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={whatsapp} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          Contact us on WhatsApp
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;