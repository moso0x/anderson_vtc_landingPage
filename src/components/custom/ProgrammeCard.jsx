import React from "react";
import { Link } from "react-router-dom";  // import Link from react-router-dom

const ProgrammeCard = ({ question, answer, requirements }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-full">
      <div className="flex items-center justify-between mb-4 transition-transform hover:scale-105">
        <h2 className="text-[#00879E] font-semibold text-xl">{question}</h2>
      </div>
      <p className="text-gray-700 mb-4">{answer}</p>
      {requirements && requirements.length > 0 && (
        <div className="mb-6">
          <h3 className="text-red-800 font-semibold mb-2">Minimum Requirements:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <Link
        to="/admissions"  
        className="block text-center bg-[#FED16A] text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-[#00879E]  transition-colors duration-300"
        aria-label={`Enroll for ${question} course`}
      >
        Register
      </Link>
    </div>

  );
};

export default ProgrammeCard;
