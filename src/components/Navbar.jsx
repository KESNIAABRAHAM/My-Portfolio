import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png"; // Assuming you have a logo image
const Navbar = () => {
  return (
    <>
      
      <nav className="flex items-center justify-between py-4 px-5 md:px-10 ml-auto">
        <ul className="flex space-x-4 items-center">
          <li className="text-white hover:text-blue-300 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-white hover:text-blue-300 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="text-white hover:text-blue-300 cursor-pointer">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="text-white hover:text-blue-300 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
