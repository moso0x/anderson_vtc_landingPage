import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import PlayfulCard from "../../pages/PlayfulCard";

const Programmes = () => {
  return (
       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <PlayfulCard
        icon={<FaLaptopCode />}
        title="ICT Training"
        description="Gain cutting-edge skills in computing, coding, and networking."
        buttonText="Apply Now"
      />
      <PlayfulCard
        icon={<FaLaptopCode />}
        title="Metalwork Processing"
        description="Hands-on skills to master metal fabrication and welding."
        buttonText="Apply Now"
      />
      {/* Add more cards */}
    </div>

  )
}

export default Programmes
