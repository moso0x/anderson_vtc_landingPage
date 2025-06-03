import React from 'react';
import CourseCard from './CourseCard';
import beauty from '../../assets/beauty.jpg'; 
import driving from '../../assets/driving.jpg'; 
import machinery from '../../assets/machinery.jpg';
import electronicss from '../../assets/electronicss.jpg';
import ICT from '../../assets/design.jpg';  
import design from '../../assets/it.jpg';     
import masonry from '../../assets/masonry.jpg';  
import carpentry from '../../assets/carpentry.jpg'; 
import agribusiness from "../../assets/agribusines.jpg"; 
import metalworks from "../../assets/metalworks.jpeg";  
import plumbing from "../../assets/plumbing.jpg"; 
import foodBevarages

from "../../assets/foodsBevarage.jpeg";     
     
const courses = [
  {  image :electronicss, title: "Electrical & Electronics", description: "Practical training in electrical systems and electronics." },
  {  image :machinery,title: "Motor Vehicle Mechanics", description: "Learn vehicle repair, maintenance, and diagnostics." },
  {image :agribusiness ,  title: "Agribusiness", description: "Master farming and business practices in agriculture." },
  { image :metalworks , title: "Metalwork Processing", description: "Explore fabrication, welding, and metal design." },
  { image :carpentry, title: "Carpentry & Joinery", description: "Craft wooden furniture and structures." },
  { image :masonry, title: "Masonry", description: "Train in construction using bricks, stones, and concrete." },
  { image :design, title: "Fashion Design & Garment Making", description: "Design and sew creative, professional garments." },
  {image :beauty , title: "Hairdressing & Beauty Therapy", description: "Styling, beauty, and salon management skills." },
  { image :foodBevarages , title: "Food & Beverage (Hospitality)", description: "Skills in culinary arts, serving, and hospitality." },
  { image :ICT , title: "Information Communication Technology (ICT)", description: "Digital literacy, software, and networking skills." },
  { image :plumbing ,title: "Plumbing", description: "Learn installation and maintenance of water systems." },
  {image :driving, title: "Driving", description: "Professional driver training for licensing and safety." , button:"Learn More"}
  
];

const CoursesGrid = () => {
  return (
    <div className="p-6 bg-gray-700 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">Our Courses and Teaching Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image } // Replace with course-specific images
            title={course.title}
            description={course.description}
            button={course.button}
          />
          
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
