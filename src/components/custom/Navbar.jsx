import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.jpg";

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
    <header className="bg-[#00879E]">
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
              Home
            </Link>
            <Link to="/about" className={navLinkClass}>
              About Anderson Vtc
            </Link>
            <Link to="/programmes" className={navLinkClass}>
              Programmes
            </Link>
            <Link to="/admissions" className={navLinkClass}>
              Admissions
            </Link>
            <Link to="/students" className={navLinkClass}>
              Clubs & Activities
            </Link>
            <Link to="/staff" className={navLinkClass}>
              Staff
            </Link>

            <div className="hidden md:block">
              <div className="relative group rounded-md p-[2px] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-border hover:animate-pulse">
                <button className="bg-white text-sm font-bold text-[#00879E] group-hover:text-green-700 py-2 px-6 rounded-md w-full h-full transition-all duration-300">
                  Login
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Anderson Vtc" },
              { to: "/programmes", label: "Programmes" },
              { to: "/admissions", label: "Admissions" },
              { to: "/students", label: "Clubs & Activities" },
              { to: "/staff", label: "Staff" },
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
              <div className="relative group rounded-md p-[2px] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-border hover:animate-pulse">
                <button className="bg-white text-sm font-bold text-[#00879E] group-hover:text-green-700 py-2 px-6 rounded-md w-full h-full transition-all duration-300">
                  Student Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
