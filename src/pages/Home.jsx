import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Carousel from "../components/custom/Carousel";
import intake2025 from '../assets/intake2025.jpg';
import panel from '../assets/fees.jpg';
import fees from '../assets/panel.jpg';
import graduation from '../assets/graduation.jpg';
import aforestation from '../assets/aforestation2.jpg';
import cu from '../assets/cu.jpg';
import institution from '../assets/institution.jpg';
import applications from '../assets/applications.jpg';
import courss_duration from '../assets/courss_duration.jpg';

import CardGrid from '../components/custom/Card';
import ContactInfoCard from '../components/custom/Contact';
import CoursesGrid from '../components/custom/CoursesGrid';
import AnnouncementsList from '../components/custom/AnnouncementsList';
import FeePaymentCard from '../components/custom/FeePaymentCard';

const slides = [
  intake2025,
  panel,
  aforestation,
  cu,
  applications,
  fees,
  graduation,
  courss_duration
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-black text-white px-4 py-6 flex flex-col space-y-10">
      
      {/* Main Grid Section */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Carousel */}
        <motion.div
          className="col-span-1 lg:col-span-2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden rounded-xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <Carousel autoSlide={true}>
            {slides.map((s, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={s}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Course Highlights + Button */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 h-fit"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#309898] mb-4">
            Empowering You With Hands-On Skills for a Brighter Future
          </h1>
          <h2 className="text-sm text-center font-semibold mb-4">
            Andersen VTC offers the following career-shaping courses:
          </h2>
          <ul className="pl-6 list-disc space-y-1 text-sm sm:text-base">
            {[
              "Electrical & Electronics",
              "Motor Vehicle Mechanics",
              "Agribusiness",
              "Metalwork Processing",
              "Carpentry & Joinery",
              "Masonry",
              "Fashion Design & Garment Making",
              "Hairdressing & Beauty Therapy",
              "Food & Beverage (Hospitality)",
              "Information Communication Technology (ICT)",
              "Plumbing",
              "Driving"
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[#309898] transform transition duration-300 hover:scale-[1.05]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Enroll Button */}
          <button
            onClick={() => navigate("/Admissions")}
            className="mt-6 w-full py-3 bg-[#ffffff] text-[#00879E] font-semibold rounded-lg hover:bg-[#f5c652] transition duration-300"
          >
           Click to  Enroll 
          </button>
        </motion.div>
      </main>

      {/* Additional Sections */}
      <CardGrid />
      <FeePaymentCard />

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
        <AnnouncementsList />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
        <CoursesGrid />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
        <ContactInfoCard />
      </motion.div>
    </div>
  );
};

export default Home;
