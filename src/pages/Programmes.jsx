
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ParallaxCardWrapper from "../components/custom/ParallaxCardWrapper";
import ProgrammeCard from "../components/custom/ProgrammeCard";

function Programmes() {
  const program = [
    {
      question: "Electrical & Electronics",
      answer:
        "Master the fundamentals of electricity, circuit design, and cutting-edge electronics technology. Gain practical skills to install, maintain, and troubleshoot electrical systems in residential, commercial, and industrial settings, preparing you for diverse career opportunities.",
      requirements: [
        "Basic knowledge of physics and mathematics",
        "High school diploma or equivalent",
      ],
    },
    {
      question: "Motor Vehicle Mechanics",
      answer:
        "Engage in comprehensive hands-on training covering engine diagnostics, automotive repairs, and vehicle maintenance. Learn to work with modern vehicle systems and technologies, setting the foundation for a thriving career in the fast-evolving automotive industry.",
      requirements: [
        "Interest in mechanical systems",
        "Basic understanding of tools and safety",
      ],
    },
    {
      question: "Agribusiness",
      answer:
        "Combine agricultural science with business acumen. Explore modern farming methods, supply chain management, and entrepreneurial skills needed to successfully manage agribusiness ventures in today’s competitive market.",
      requirements: [
        "Passion for agriculture and business",
        "Good communication skills",
      ],
    },
    {
      question: "Metalwork Processing",
      answer:
        "Develop expertise in metal cutting, welding, fabrication, and operating industrial machinery. This course prepares you for roles in manufacturing, construction, and repair industries with a focus on precision and safety.",
      requirements: [
        "Basic math skills",
        "Willingness to learn technical processes",
      ],
    },
    {
      question: "Carpentry & Joinery",
      answer:
        "Acquire practical skills in woodworking, furniture making, and structural carpentry. Learn to read blueprints, select materials, and execute projects with craftsmanship—ideal for creative problem-solvers aiming to build tangible results.",
      requirements: [
        "Good hand-eye coordination",
        "Basic knowledge of tools",
      ],
    },
    {
      question: "Masonry",
      answer:
        "Master the techniques of building with stone, brick, and concrete. This course combines theoretical knowledge and hands-on practice to prepare you for careers in construction, infrastructure development, and restoration.",
      requirements: [
        "Physical stamina",
        "Basic math skills",
      ],
    },
    {
      question: "Fashion Design & Garment Making",
      answer:
        "Transform your creativity into a professional skillset. Learn garment construction, pattern making, fabric selection, and the latest fashion trends to succeed in the dynamic fashion industry.",
      requirements: [
        "Creative mindset",
        "Basic sewing skills (helpful but not required)",
      ],
    },
    {
      question: "Hairdressing & Beauty Therapy",
      answer:
        "Gain proficiency in hair styling, skincare treatments, makeup artistry, and salon management. Prepare for a rewarding career in the personal care and beauty industry, emphasizing client satisfaction and hygiene standards.",
      requirements: [
        "Interest in personal care",
        "Good communication skills",
      ],
    },
    {
      question: "Food & Beverage (Hospitality)",
      answer:
        "Develop skills in culinary arts, food preparation, and service excellence. Explore hospitality management principles to excel in fast-paced environments such as hotels, restaurants, and event planning.",
      requirements: [
        "Passion for cooking and service",
        "Good interpersonal skills",
      ],
    },
    {
      question: "Information Communication Technology (ICT)",
      answer:
        "Acquire essential digital skills ranging from computer literacy to advanced software development, networking, and cybersecurity. Open doors to diverse careers in the expanding technology sector.",
      requirements: [
        "Basic computer knowledge",
        "Willingness to learn new technologies",
      ],
    },
    {
      question: "Plumbing",
      answer:
        "Learn to install, maintain, and repair water supply, drainage, and sanitation systems. This vital trade offers steady employment opportunities in both residential and commercial construction projects.",
      requirements: [
        "Physical fitness",
        "Basic math skills",
      ],
    },
    {
      question: "Driving",
      answer:
        "Receive comprehensive practical and theoretical driving instruction designed to make you a safe, confident driver. Prepare for professional licensing and potential careers in transport and logistics.",
      requirements: [
        "Minimum age 18 years",
        "Valid learner's permit or equivalent",
      ],
    },
  ];

  return (
    <motion.div>
      <div>
      <div className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#00879E]">
            Empowering You with Hands-On Skills for a Brighter Future
          </h1>
          <p className=" font-medium  text-center max-w-3xl mx-auto">
            At Anderson VTC, we offer a variety of career-shaping programmes designed to equip you with practical skills and industry knowledge.
            <br />
            <span className="text-red-700 text-xl"> Join us today and start building a successful and fulfilling career.</span>
           
          </p>
        </div>
      </div>

      {/* Full width grid, 2 columns on md+ */}
      <div className="pt-14 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-full mx-auto">
     {program.map((prog, index) => (
  <ParallaxCardWrapper key={index}>
    <ProgrammeCard
      question={prog.question}
      answer={prog.answer}
      requirements={prog.requirements}
    />
  </ParallaxCardWrapper>
))}
      </div>
    </div>
    
    
    </motion.div>



    
  );
}

export default Programmes;
