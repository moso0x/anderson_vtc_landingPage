import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const slideTexts = [
  "Empowering Your Future",
  "Learn New Skills Today",
  "Join a Community of Achievers",
  "Unlock Your Potential with Us",
];

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000, children }) => {
  const [curr, setCurr] = useState(0);
  const navigate = useNavigate(); // navigation hook

  const prev = () =>
    setCurr((curr) =>
      curr === 0 ? React.Children.count(children) - 1 : curr - 1
    );

  const next = () =>
    setCurr((curr) =>
      curr === React.Children.count(children) - 1 ? 0 : curr + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide]);

   const [loading, setLoading] = useState(false);
    
    const handleEnrollClick = () => {
      setLoading(true);
      setTimeout(() => {
        navigate('/Admissions');
      }, 2000); // simulate loading delay
    };
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {child}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 rounded-xl" />

            <div className="absolute bottom-20 left-6 z-20 text-white text-2xl sm:text-4xl font-bold max-w-lg">
              {slideTexts[curr % slideTexts.length]}
            </div>

            {/* Large screen button */}
            <div className="hidden lg:flex absolute bottom-6 right-6 z-20">
              <motion.button
                onClick={handleEnrollClick}
                className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Online Application Now Open
              </motion.button>
            </div>

            {/* Small screen button */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 lg:hidden z-20">
              <motion.button
                onClick={handleEnrollClick}
                className="md:hidden bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
              Online Application Now Open
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button onClick={prev} className="text-white text-3xl">
          ‹
        </button>
        <button onClick={next} className="text-white text-3xl">
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
