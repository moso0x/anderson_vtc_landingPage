import React from 'react';

import Carousel from "../components/custom/Carousel";
import intake2025 from '../assets/intake2025.jpg';
import fees from '../assets/fees.jpg';
import institution from '../assets/institution.jpg';
import applications from '../assets/applications.jpg';
import courss_duration from '../assets/courss_duration.jpg';
import CardGrid from '../components/custom/Card';
import ContactInfoCard from '../components/custom/Contact';
import CoursesGrid from '../components/custom/CoursesGrid';
import AnnouncementsList  from '../components/custom/AnnouncementsList';

const slides = [intake2025, applications, fees, courss_duration, institution];

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white p-4 flex flex-col">
      
     

      {/* Main grid section */}
      <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
        
        {/* Carousel */}
        <div className="col-span-1 lg:col-span-2 h-[80vh] overflow-hidden">
          <Carousel autoSlide={true}>
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            ))}
          </Carousel>
        </div>

        {/* Sidebar / Extra */}
        <div className="bg-gray-800 rounded-xl p-4 h-[80vh]">
          <h1 className='text-2xl font-bold text-center mx-auto text-[#309898]'>Empowering You With Hands-On Skills for a Brighter Future</h1>
          <h2 className="text-sm text md:mx-auto flex mx-auto text-center font-bold mb-2">Andersen VTC offers the following career-shaping courses:</h2>
            <ul className='pl-6 list-disc  '>
            <li className='hover:text-[#309898] transform transition-transform duration-300 hover:scale-105'>Electrical & Electronics</li>
            <li className='hover:text-[#309898] '>Motor Vehicle Mechanics</li>
            <li className='hover:text-[#309898] '>Agribusiness</li>
            <li className='hover:text-[#309898] '>Metalwork Processing</li>
            <li className='hover:text-[#309898] '>Carpentry & Joinery</li>
            <li className='hover:text-[#309898] '>Masonry</li>
            <li className='hover:text-[#309898] '>Fashion Design & Garment Making</li>
            <li className='hover:text-[#309898] '>Hairdressing & Beauty Therapy</li>
            <li className='hover:text-[#309898] '>Food & Beverage (Hospitality)</li>
            <li className='hover:text-[#309898] '>Information Communication Technology (ICT)</li>
            <li className='hover:text-[#309898] '>Plumbing</li>
            <li className='hover:text-[#309898] '> Driving</li>
            </ul>
        </div>
      </main>

     <CardGrid/>
     <   AnnouncementsList/>
  
     <CoursesGrid/>
     <  ContactInfoCard/>
    </div>
  );
};

export default Home;
