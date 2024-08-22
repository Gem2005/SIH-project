import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import images
import alumini1 from '../assets/images/alumini1.jpg';
import note2 from '../assets/images/note2.jpg';
import interaction1 from '../assets/images/interaction1.png';
import student2 from '../assets/images/student2.png';
import college3 from '../assets/images/college3.png';
import alpha from '../assets/images/alpha.jpg';

const FeatureCard: React.FC = () => {
  return (
    <section id="features" className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#E0E5EC]">
      {/* Section Header */}
      <div className="flex justify-center mb-12">
        <h2 className="text-[#2E3A59] text-3xl md:text-4xl lg:text-5xl font-bold">
          Features
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { to: "/batch", imgSrc: alumini1, title: "Alumni" }, // Update href to route
          { to: "/study-material", imgSrc: note2, title: "Study Material" },
          { to: "/", imgSrc: interaction1, title: "Interact" },
          { href: "", imgSrc: student2, title: "Students" },
          { href: "http://recb.ac.in/", imgSrc: college3, title: "College" },
          { href: "", imgSrc: alpha, title: "Alpha" },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-[#E0E5EC] rounded-[20px] shadow-[6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),_inset_-6px_-6px_12px_rgba(255,255,255,0.7)]"
          >
            {card.to ? (
              <Link to={card.to} className="flex justify-center items-center mb-4">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="rounded-full w-28 h-28 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover shadow-inner"
                />
              </Link>
            ) : (
              <a href={card.href} className="flex justify-center items-center mb-4">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="rounded-full w-28 h-28 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover shadow-inner"
                />
              </a>
            )}
            <h2 className="text-[#1E2A38] text-base md:text-lg font-semibold text-center">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
