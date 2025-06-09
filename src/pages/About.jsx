import React, {useState, useEffect} from 'react'
import aboutImage from "../assets/about.jpg"

const About = () => {
const messages = [
    "🌐 Learn market-ready skills in ICT, Mechanics, Fashion & more.",
    "🎓 Accredited training with real-world internships.",
    "🔧 Join a growing community of skilled professionals.",
    "💡 Build your future — the Anderson way.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto m-10 rounded-2xl overflow-hidden shadow-xl">
  <div className="flex flex-col md:flex-row relative">
    {/* Image with Overlay and Flash Text */}
    <div className="relative w-full md:w-1/2 h-[250px] md:h-auto min-h-[250px]">
      <img
        src={aboutImage}
        alt="Students at Anderson VTC"
        className="object-cover w-full h-full brightness-75"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00879E] via-[#00879E]/50 to-transparent" />

      {/* Flashing Message */}
      <div className="absolute bottom-20 left-0 w-full text-center px-4">
        <p className="text-white text-3xl sm:text-base md:text-4xl font-semibold animate-fade-in">
          {messages[index]}
        </p>
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FED16A] mb-4">
        About Anderson Vocational Training Centre
      </h2>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        <strong>Anderson Vocational Training Centre (Anderson VTC)</strong> is a premier institution committed to empowering youth and adult learners with hands-on, market-ready skills. We offer practical training in <strong>ICT, Electrical Engineering, Automotive Mechanics, Fashion Design, Carpentry, Welding, Plumbing</strong>, and more.
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        Our mission is to bridge the gap between education and employment through accredited programs, expert instructors, and real-world training environments. Students benefit from internships, mentorships, and job placement support.
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        Whether you're a school leaver or a professional looking to upskill, Anderson VTC provides a supportive, inclusive space to help you build a better future.
      </p>

      <div className="mt-6">
        <span className="inline-block bg-[#00879E] text-white text-xl font-medium px-5 py-2 rounded-full shadow hover:bg-[#FED16A] transition">
          Building Skills, Shaping Futures
        </span>
      </div>
    </div>
  </div>
</div>

  );
};




export default About
