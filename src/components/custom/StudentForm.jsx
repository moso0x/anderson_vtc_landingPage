import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submit logic here
  };

  const handleViewFees = () => {
    window.open("/fee-structure.pdf", "_blank");
  };

  const handleJoiningInstructions = () => {
    window.open("/joining-instructions.pdf", "_blank");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Student Enrollment Form
      </h2>

      {/* Buttons to View PDFs */}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          onClick={handleViewFees}
          className="text-red-600 font-medium underline hover:text-blue-800 transition"
        >
          View Fee Structure
        </button>
        <button
          type="button"
          onClick={handleJoiningInstructions}
          className="text-[#00879E] font-medium underline hover:text-red-800 transition"
        >
          Download Instructions
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Second Name 
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Other Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium  mb-1">
            Enter joining Date
          </label>
          <input
            type="date"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 text-[#FED16A] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Course
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-[]">-- Choose a course --</option>
            <option value="">Electrical & Electronics</option>
            <option value="">Motor Vehicle Mechanics</option>
            <option value="">Agribusiness</option>
            <option value="">Metalwork Processing</option>
              <option value="">Carpentry & Joinery</option>
            <option value="">Masonry</option>
            <option value="">Fashion Design & Garment Making</option>
            <option value="">Hairdressing & Beauty Therapy</option>
              <option value="">Food & Beverage (Hospitality)</option>
            <option value="">Information Communication Technology (ICT)</option>
            <option value="">Plumbing</option>
            <option value="">Driving</option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#00879E] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#FED16A] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
