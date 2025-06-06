import {Link} from "react-router-dom"
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.jpg"

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className=" bg-[#3B6790]">
			<div className="container mx-auto ">
				<div className="flex h-16 items-center justify-between">
					
					<div className="flex-shrink-0">
						<Link to="/" className="flex gap-2 items-center">
					<img className="w-[50px] rounded-full" src={logo} alt="" />
							<span className="text-xl font-bold">
								<span className="text-[#ffffff]">Anderson Training Center</span>

							</span>
						</Link>
					</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-100 hover:text-[#FED16A] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-100 hover:text-[#FED16A] transition-colors">
              About Anderson Vtc
            </Link>
            <Link to="/programmes" className="text-gray-100 hover:text-[#FED16A] transition-colors">
              Programmes
            </Link>
            <Link to="/admissions" className="text-gray-100 hover:text-[#FED16A] transition-colors">
              Admissions
            </Link>
            <Link to="/students" className="text-gray-100 hover:text-[#FED16A] transition-colors">
              Students
            </Link>
			<div className="hidden md:block">
				<div className="relative group rounded-md p-[2px] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-border hover:animate-pulse">
					<button className="bg-white text-sm font-bold text-[#3B6790] group-hover:text-green-700 py-2 px-6 rounded-md w-full h-full transition-all duration-300">
					Student Portal
					</button>
				</div>
				</div>
          </nav>

				
				


					{/* Mobile Navigation Controls */}
					<div className="flex items-center gap-3 md:hidden">
						{/* Mobile Menu Button */}
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
						<Link
							to="/"
							className="block px-3 py-2 text-gray-100 hover:text-[#1A5D1A] hover:bg-gray-50 rounded-md"
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							to="/about"
							className="block px-3 py-2 text-gray-100 hover:text-[#1A5D1A] hover:bg-gray-50 rounded-md"
							onClick={() => setIsMenuOpen(false)}
						>
						About Anderson Vtc
						</Link>
						<Link
							to="/programmes"
							className="block px-3 py-2 text-gray-100 hover:text-[#1A5D1A] hover:bg-gray-50 rounded-md"
							onClick={() => setIsMenuOpen(false)}
						>
							 Programmes
						</Link>
						<Link
							to="/admissions"
							className="block px-3 py-2 text-gray-700 hover:text-[#1A5D1A] hover:bg-gray-50 rounded-md"
							onClick={() => setIsMenuOpen(false)}
						>
							 Admissions
						</Link>
						<Link
							to="/students"
							className="block px-3 py-2 text-gray-100 hover:text-[#1A5D1A] hover:bg-gray-50 rounded-md"
							onClick={() => setIsMenuOpen(false)}
						>
							Students
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
