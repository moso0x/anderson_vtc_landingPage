import React from 'react';
import { Link } from 'react-router-dom';
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
    <h3 className="text-2xl font-bold mb-3 text-gray-800 tracking-wide">{title}</h3>
    <p className="text-base text-[#00879E] leading-relaxed mb-6">{content}</p>
    <Link to="/Admissions">
      <button className="px-5 py-2 bg-[#F4631E] text-white rounded-full hover:bg-[#00879E] transition-colors duration-300 font-semibold cursor-pointer shadow-md">
        enroll now!
      </button>
    </Link>
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
    </div>
  );
};

export default CardMarquee;
