import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { Download } from "lucide-react"; // ⬅️ Import icon

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "", secondName: "", lastName: "", otherName: "", dateOfBirth: "",
    gender: "", nationality: "", nationalId: "", birthCertificate: "",
    maritalStatus: "", religion: "", disabilityStatus: "", disabilityNature: "",
    bloodGroup: "", email: "", phone: "", altPhone: "", homeAddress: "",
    postalAddress: "", county: "", subCounty: "", town: "", landmark: "",
    guardianName: "", guardianRelation: "", guardianPhone: "", guardianEmail: "",
    guardianOccupation: "", guardianAddress: "", emergencyContact: "", emergencyPhone: "",
    previousSchool: "", educationLevel: "", yearsAttended: "", highestQualification: "",
    examNumber: "", grades: "", course: "", intake: "", reason: "", referralSource: "",
    campus: "", sponsorshipStatus: "", sponsorName: "", sponsorContact: "",
    paymentPlan: "", bankRefNumber: "", medicalCondition: "", conditionDescription: "",
    allergies: "", medications: "", comments: "", declaration: false, acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      ...formData,
      fullName: `${formData.firstName} ${formData.secondName} ${formData.otherName}`,
    };

    emailjs
      .send("service_b5pgk8i", "your_template_id", templateParams, "YGyaXSLM1mQdE5Ckxy")
      .then(() => toast.success("Form submitted successfully!"))
      .catch((error) => toast.error("Submission failed: " + error.text));
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6 my-10">
      <Toaster position="top-right" reverseOrder={false} />

      {/* 🔘 Download Buttons with Icons */}
      <div className="flex justify-end gap-4 mb-6">
        <a
          href="/fee-structure.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          <Download size={18} />
          Fee Structure
        </a>
        <a
          href="/joining-instruction.pdf"
          download
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          <Download size={18} />
          Joining Instructions
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Student Enrollment Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">🧍 Personal Information</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              "firstName", "secondName", "lastName", "otherName", "dateOfBirth", "gender",
              "nationality", "nationalId", "birthCertificate", "maritalStatus", "religion",
              "disabilityStatus", "disabilityNature", "bloodGroup"
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Contact Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">🏠 Contact Information</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              "email", "phone", "altPhone", "postalAddress", "county", "subCounty", "town"
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Guardian Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">👨‍👩‍👧‍👦 Parent/Guardian Details</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              "guardianName", "guardianRelation", "guardianPhone", "guardianEmail",
              "guardianOccupation", "guardianAddress", "emergencyContact", "emergencyPhone"
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Academic Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">🏫 Academic Background</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {["previousSchool", "educationLevel", "yearsAttended", "grades"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Enrollment Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">🎓 Enrollment Details</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {["course", "intake", "reason"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Medical Info */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">🏥 Medical Information</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {["medicalCondition", "conditionDescription", "allergies", "medications"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Declaration */}
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold text-gray-700">📄 Declaration</legend>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} />
              I confirm that the information provided is true and accurate
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} />
              I accept the terms and conditions
            </label>
          </div>
        </fieldset>

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#00879E] text-white px-8 py-2 rounded-md font-semibold hover:bg-[#FED16A] hover:text-black transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
