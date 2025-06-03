import React from 'react';

const CourseCard = ({ image, title, description, button = "Learn More" }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Color overlay on entire card */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00879E]/50 via-[#00A3B7]/40 to-[#00C1D4]/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {/* Button centered and width about 50% */}
        <button className="w-1/2 mx-auto mt-auto bg-[#00879E] text-white px-4 py-2 rounded hover:bg-[#F4631E] transition transform hover:scale-110 duration-300">
          {button}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
