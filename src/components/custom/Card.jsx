import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const cards = [
  { title: "Craft Certificate Courses", content: "Entry KCSE D (plain) and above" },
  { title: "Artisan Courses", content: "Entry KCPE Certificate or equivalent" },
  { title: "Trade Test Levels (NITA)", content: "Open to anyone—including international applicants" },
  { title: "Computer Packages (3 months)", content: "Beginners and advanced levels" },
  { title: "Driving school (3 months)", content: "Learn from certified instructors. Get a valid driving license and road safety skills." },
];

// Card Component
const Card = ({ title, content }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 text-black w-96 mx-4 flex-shrink-0 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300">
    <FaLaptopCode />
    <h3 className="text-2xl font-bold mb-3 text-gray-800 tracking-wide">{title}</h3>
    <p className="text-base text-gray-600 leading-relaxed mb-6">{content}</p>
    <button className="px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 font-semibold shadow-md">
      enroll now!
    </button>
  </div>
);

// Marquee Component
const CardMarquee = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-800 p-6 overflow-hidden relative">
      <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wider">Available Programs</h2>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 animate-marquee group-hover:paused">
          {cards.concat(cards).map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>

      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
            width: max-content;
          }

          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default CardMarquee;
