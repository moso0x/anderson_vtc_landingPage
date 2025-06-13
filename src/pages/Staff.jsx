import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import staff from "../assets/staff.jpg";
import staff1 from "../assets/staff1.jpeg";
import staff3 from "../assets/staff3.jpeg";
import sponsor from "../assets/sponsor.jpg";
import sponsor2 from "../assets/sponsor.jpg";

const staffData = [
  {
    image: staff,
    message: "Empowering learners to thrive in every field.",
  },
  {
    image: sponsor,
    message: "Dedicated to hands-on training and real-world success.",
  },
  {
    image: staff1,
    message: "Guiding students through practical and theoretical excellence.",
  },
  {
    image: sponsor2,
    message: "Building partnerships that elevate educational opportunities.",
  },
  {
    image: staff3,
    message: "Shaping future professionals with care and expertise.",
  },
];

const Staff = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % staffData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-[60vh] overflow-hidden rounded-xl shadow-lg bg-black my-10 flex flex-col md:flex-row">
      {/* Left: Message */}
      <motion.div
        key={staffData[index].message}
        className="w-full md:w-1/2 flex items-center justify-center p-6 z-20 text-white bg-black bg-opacity-70"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg md:text-2xl font-semibold text-left md:text-center max-w-xl">
          {staffData[index].message}
        </h2>
      </motion.div>

      {/* Right: Image */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={staffData[index].image}
            src={staffData[index].image}
            alt="Staff"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Overlay gradient for legibility on small screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 md:hidden" />
      </div>
    </div>
  );
};

export default Staff;
