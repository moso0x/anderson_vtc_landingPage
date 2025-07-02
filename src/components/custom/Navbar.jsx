import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.jpg";
import Header from "./Header";
import { FcLock } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";


const courses = [
  "Electrical Installation",
  "Plumbing Technology",
  "Hairdressing & Beauty",
  "Welding & Fabrication",
  "ICT (Information Technology)",
  "Motor Vehicle Mechanics",
  "Fashion Design & Tailoring",
  "Masonry",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = `
    relative 
    text-white 
    visited:text-[#ffffff]
    transition-all 
    duration-300 
    hover:text-[#FED16A]
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:w-0 
    after:h-[2px] 
    after:bg-[#FED16A] 
    after:transition-all 
    after:duration-1000 
    hover:after:w-full
  `;

  return (
    <>
      <Header />
      <header className="bg-gradient-to-r from-[#1b8cfc] via-[#2eaefc] to-[#3cc8ff] shadow-lg shadow-blue-300/40 z-50 relative">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="flex gap-2 items-center">
                <img className="w-[50px] rounded-full" src={logo} alt="Logo" />
                <span className="text-xl font-bold text-white">
                  Andersen Training Center
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkClass}>
                <p className="text-gray-50 text-xl font-bold">Home</p>
              </Link>

              {/* About Dropdown with Courses */}
              <div className="relative group">
                <div className={`${navLinkClass} flex items-center gap-1 cursor-pointer`}>
                  <span className="font-bold">About Anderson VTC</span>
                  <ChevronDown className="w-4 h-4 text-[#FED16A] transition-transform duration-300 group-hover:rotate-180" />
                </div>

                {/* Dropdown Panel */}
                <div className="absolute font-bold bg-gray-300 px-8 left-0 mt-8 w-[600px] max-h-[480px] rounded-xl shadow-lg border border-blue-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 invisible group-hover:visible scale-95 group-hover:scale-100 transform transition-all duration-500 z-50 p-6 overflow-y-auto">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 flex">Who We Are <FcAbout className="text-[35px]"/></h4>
                  <p className="text text-black leading-relaxed mb-5">
                    Anderson VTC is dedicated to empowering youth with hands-on skills in various technical fields. We shape futures and transform communities through practical education and mentorship.
                  </p>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">Courses Offered:</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-100 text-sm">
                    {courses.map((course, index) => (
                      <li
                        key={index}
                        className="font-bold text-lg bg-blue-100 text-black px-3 py-2 rounded hover:bg-[#FED16A] hover:text-black transition"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/about"
                    className="mt-6 inline-block text-base font-semibold text-blue-400 hover:text-white"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>

              <Link to="/programmes" className={navLinkClass}>
                <p className="font-bold">Programmes</p>
              </Link>
              <Link to="/admissions" className={navLinkClass}>
                <p className="font-bold">Admissions</p>
              </Link>
              <Link to="/students" className={navLinkClass}>
                <p className="font-bold">Gallery</p>
              </Link>
              <Link to="/staff" className={navLinkClass}>
                <p className="font-bold">Staff</p>
              </Link>

              {/* Sign In */}
              <div className="hidden md:block">
                <div className="relative group rounded-md p-[2px] via-blue-500 to-purple-600 animate-gradient-border hover:animate-pulse">
                  <button className="flex bg-white font-bold text-[#1b8cfc] group-hover:text-[#111111] py-2 px-6 rounded-md transition-all duration-300">
                   <Link className="flex" to="/Login">Sign In <FcLock className="text-xl ml-2" /></Link> 
                  </button>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-700"
                onClick={toggleMenu}
                aria-label="Open main menu"
              >
                <Menu className="h-8 font-bold w-8 rounded text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Anderson VTC" },
                { to: "/programmes", label: "Programmes" },
                { to: "/admissions", label: "Admissions" },
                { to: "/students", label: "Gallery" },
                { to: "/staff", label: "Staff" },
                { to: "/students", label: "Gallery" },
       
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${navLinkClass} block px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3">
                <div className="relative group rounded-md  hover:animate-pulse">
                  <button className="items-center flex bg-white font-bold text-[#1b8cfc] group-hover:text-[#111111] py-2 px-6 rounded-md w-full h-full transition-all duration-300">
                  <Link className="flex" to="/Login"> Sign In <FcLock className="text-xl ml-2" />
                </Link> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
