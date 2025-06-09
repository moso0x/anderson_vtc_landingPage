// components/Staff.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staffData = [
  {
    image: "/images/staff1.jpg",
    message: "Empowering learners to thrive in every field.",
  },
  {
    image: "/images/staff2.jpg",
    message: "Dedicated to hands-on training and real-world success.",
  },
  {
    image: "/images/staff3.jpg",
    message: "Shaping future professionals with care and expertise.",
  },
];

const Staff = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % staffData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence>
        <motion.img
          key={staffData[index].image}
          src={staffData[index].image}
          alt="Staff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

      {/* Message */}
      <motion.div
        key={staffData[index].message}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center px-6 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">{staffData[index].message}</h2>
      </motion.div>
    </div>
  );
};

export default Staff;
