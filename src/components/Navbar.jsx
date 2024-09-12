import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="flex  text-center justify-between py-4 px-5 md:px-10 ">
        <ul className="flex space-x-4  mx-auto  md:mx-0  md:flex-row ">
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
