import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { MdAddIcCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";


import { IoIosCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import "./Header.css"; // Add this import if you're placing animation styles in a separate CSS file

const Header = () => {
  return (
    <div className="bg-black p-4">
      <div className="md:flex gap-6 items-center justify-center">
        <div>
          <Link className="flex gap-2 items-center">
            <MdAttachEmail className="text-2xl text-red-600 animate-icon" />
            <p className="text-gray-50 text-lg hover:text-[#FED16A] font-mono font-bold">
              andersenvtc@gmail.com
            </p>
          </Link>
        </div>

        <div>
          <Link to="/" className="flex gap-2 items-center">
          <MdAddIcCall className="text-2xl text-green-600 animate-icon" />
            <p className="text-gray-200 text-lg font-bold hover:text-[#FED16A]">+254 724- 014 -770</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
