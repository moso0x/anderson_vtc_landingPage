import React from "react";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#00879E] text-gray-100 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Circular Logo and Rotating Text */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-[150px] h-[150px]">
              {/* Rotating circular text */}
              <div className="absolute inset-0 flex items-center justify-center rotate-slow">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text fill="white" fontSize="5">
                    <textPath href="#circlePath" startOffset="0%" className="">
                      ANDERSEN VOCATIONAL CENTER • ANDERSON VOCATIONAL CENTER •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Rotating logo in opposite direction */}
              <img
                src={logo}
                alt="Logo"
                className="absolute top-1/2 left-1/2 w-[60px] h-[60px] object-cover rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-reverse"
              />
            </div>

            <h3 className="text-xl font-extrabold mt-4 text-center">Anderson Vocational Center</h3>
            <p className="text-sm text-center mt-2">
              Are you passionate about hands-on skills and ready to shape your future?
              <br />
              Join us and become a certified professional!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FED16A]">Academic Programmes (PDF)</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">TVETA Corner</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">Staff Information</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">Guidance & Counselling</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FED16A]">Academic Programmes</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">Downloads</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">Institution Journals</a></li>
              <li><a href="#" className="hover:text-[#FED16A]">Notices</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p className="mb-3 hover:text-[#FED16A]">Stay updated with the latest Institution news</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-white border border-gray-700 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-[#60B5FF] px-3 py-2 rounded-r-lg hover:bg-[#AFDDFF]">→</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 flex  mx-auto hover:text-[#FED16A] justify-center pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Andersen VTC. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}