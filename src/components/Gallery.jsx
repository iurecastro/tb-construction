import React from 'react';

const projects = [
  {
    id: 1,
    title: "Residential Floor Restoration",
    image: "https://plus.unsplash.com/premium_photo-1683133868074-9a18502cd348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvb2QlMjBmbG9vciUyMHJlc3RvcmF0aW9ufGVufDB8fDB8fHww", // Example: Restored wooden floor in a home
    category: "Restoration"
  },
  {
    id: 2,
    title: "Commercial Space Flooring",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2", // Example: Office floor sanding
    category: "Commercial"
  },
  {
    id: 3,
    title: "Floor Expansion & Repair",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", // Example: Construction area
    category: "Expansion"
  },
  {
    id: 4,
    title: "Premium Finishing Work",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab", // Example: Close-up of polished floor
    category: "Finishing"
  },
  {
    id: 5,
    title: "Industrial Floor Projects",
    image: "https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg", // Example: Factory floor
    category: "Industrial"
  },
  {
    id: 6,
    title: "Heritage Floor Restoration",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a", // Example: Classic parquet restoration
    category: "Heritage"
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
                <div>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mt-2">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;