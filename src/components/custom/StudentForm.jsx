import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    otherName: "",
    gender: "",
    joiningDate: "",
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

    const templateParams = {
      ...formData,
      fullName: `${formData.firstName} ${formData.secondName} ${formData.otherName}`,
    };

    emailjs
      .send(
        "service_b5pgk8i",
        "your_template_id",
        templateParams,
        "YGyaXSLM1mQdE5Ckxy"
      )
      .then(
        () => alert("Form submitted successfully!"),
        (error) => alert("Submission failed: " + error.text)
      );
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 my-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Student Enrollment Form
      </h2>

      {/* PDF Links */}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          onClick={() => window.open("/fee-structure.pdf", "_blank")}
          className="text-red-600 font-medium underline hover:text-blue-800 transition"
        >
          View Fee Structure
        </button>
        <button
          type="button"
          onClick={() => window.open("/joining-instruction.pdf", "_blank")}
          className="text-[#00879E] font-medium underline hover:text-red-800 transition"
        >
          Download Instructions
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        {["firstName", "secondName", "otherName"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Joining Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 text-[#FED16A] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a course --</option>
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
              "Driving",
            ].map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
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
