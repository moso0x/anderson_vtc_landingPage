import React, { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaRobot,
  FaTheaterMasks,
  FaRunning,
  FaLeaf,
  FaFutbol,
} from "react-icons/fa";

// ✅ Make sure these assets are correctly placed in /assets
import students from "../../assets/students.jpg";
import blockss from "../../assets/blockss.jpg";
import students1 from "../../assets/students1.jpg";
import agroforestry from "../../assets/agroforestry.jpg";

// ✅ Background images rotate
const backgroundImages = [agroforestry, students, students1, blockss];

const quotes = [
  "🌟 Empowering students beyond academics!",
  "🏅 Discover your talents through sports, arts, and tech.",
  "🎭 Expression. Innovation. Leadership.",
  "🌱 Build, create, perform — be more than a student.",
];

// const activities = [
//   {
//     title: "Coding Club",
//     description:
//       "Join fellow tech enthusiasts to learn programming, work on projects, and participate in hackathons.",
//     icon: <FaLaptopCode />,
//     category: "Tech",
//   },
//   {
//     title: "Robotics Society",
//     description:
//       "Build and program robots, compete in robotics challenges, and explore automation technologies.",
//     icon: <FaRobot />,
//     category: "Innovation",
//   },
//   {
//     title: "Drama & Arts Club",
//     description:
//       "Express yourself through acting, painting, and creative arts. Participate in school plays and exhibitions.",
//     icon: <FaTheaterMasks />,
//     category: "Arts",
//   },
//   {
//     title: "Sports & Athletics",
//     description:
//       "Join our football, basketball, and athletics teams. Stay active and compete in inter-school tournaments.",
//     icon: <FaRunning />,
//     category: "Sports",
//   },
//   {
//     title: "Environmental Club",
//     description:
//       "Engage in sustainability projects, tree planting, and awareness campaigns to protect our environment.",
//     icon: <FaLeaf />,
//     category: "Eco",
//   },
//   {
//     title: "Games & Competitions",
//     description:
//       "Enjoy football, volleyball, and more. Sports foster teamwork, discipline, and a healthy spirit.",
//     icon: <FaFutbol />,
//     category: "Games",
//   },
// ];

// ✅ Activity Card Component
const ActivityCard = ({ title }) => (
  <div className="relative rounded-xl shadow-lg p-6 bg-black/30 border border-white/20 backdrop-blur-md hover:shadow-2xl transition duration-300 transform hover:scale-105 text-white">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-bold text-yellow-300">{title}</h3>
      <div className="text-2xl animate-bounce"></div>
    </div>
    <p className="text-sm mb-3 text-white/90"></p>
    <span className="inline-block bg-cyan-500 text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wider">
      
    </span>
  </div>
);

// ✅ Activities Section Component
const ActivitiesSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(bgInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <section
      className="relative py-16 px-6 bg-cover bg-center transition-all duration-1000 text-white"
      style={{
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-cyan-200 mb-6 text-center drop-shadow-xl">
          Explore Student Life <span className="text-gray-100">@ Anderson VTC</span> 
        </h2>

        <p className="text-center italic text-2xl text-white-80  mb-10 transition-opacity duration-700">
          {quotes[currentQuote]}
        </p>

        {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} {...activity} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ActivitiesSection;
