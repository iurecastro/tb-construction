import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Wood Floor Restoration",
      description: "Is your wooden floor looking worn, faded or dull? Our professional restoration service can bring it back to life. We provide complete treatment including sanding, polishing, and varnishing to make your floors look brand new again.",
      image: "https://plus.unsplash.com/premium_photo-1683129702682-052e26a0562f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whatsapp: "https://wa.me/440123456789"
    },
    {
      id: 2,
      title: "Professional Floor Sanding",
      description: "Our floor sanding service removes years of wear and tear to reveal your floor's natural beauty. Using industrial-grade equipment, we can transform even the most damaged floors into smooth, pristine surfaces ready for finishing.",
      image: "https://media.istockphoto.com/id/618972528/photo/home-renovation-parquet-sanding-polishing.jpg?s=612x612&w=0&k=20&c=LXQSrm1CbkrHoBfIwlCpspqcS_eLm8LPBLgBqNQb2LE=",
      whatsapp: "https://wa.me/440123456789"
    },
    {
      id: 3,
      title: "Wood Floor Oiling",
      description: "Enhance and protect your wooden floors with our professional oiling service. We use high-quality, hard-wearing oils that penetrate deep into the wood, providing protection while maintaining the natural look and feel of your floors.",
      image: "https://media.istockphoto.com/id/184236206/photo/home-renovation.jpg?s=612x612&w=0&k=20&c=spatWxRZXjCAg4zRSYbWxgPpkPaF9Xga_YykvfUPnxU=",
      whatsapp: "https://wa.me/440123456789"
    },
    {
      id: 4,
      title: "Floorboard Repairs",
      description: "From squeaky floorboards to damaged sections, our repair service can fix all types of wooden floor issues. We replace damaged boards, tighten loose fittings, and ensure your floor is both beautiful and structurally sound.",
      image: "https://media.istockphoto.com/id/515219705/photo/old-parquet.jpg?s=612x612&w=0&k=20&c=1wKQ1WxPDYYcD1H8cAqn8oXaI5X_tBa6qm4-S_tV6SQ=",
      whatsapp: "https://wa.me/440123456789"
    },
    {
      id: 5,
      title: "Parquet Floor Restoration",
      description: "Specialists in restoring heritage and modern parquet flooring. We carefully repair, replace and refinish parquet blocks to restore their original geometric patterns and beauty.",
      image: "https://media.istockphoto.com/id/157333831/pt/foto/bela-iluminado-pela-luz-interior-de-madeira.webp?a=1&b=1&s=612x612&w=0&k=20&c=aTQRyr8WdgNZxg_gDUe9VfFzyPzLCkjZUD2ZZzerwTA=",
      whatsapp: "https://wa.me/440123456789"
    },
    {
      id: 6,
      title: "Gap Filling & Staining",
      description: "Eliminate unsightly gaps between floorboards and achieve your desired colour with our professional gap filling and staining services. We use high-quality wood fillers and stains for durable, beautiful results.",
      image: "https://media.istockphoto.com/id/668224496/photo/carpenter-installing-hardwood-floor.jpg?s=612x612&w=0&k=20&c=aecremQGZzUSxuifLn8-S7O2kkqWD5-gBaDjwZP3vLE=",
      whatsapp: "https://wa.me/440123456789"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Flooring Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;