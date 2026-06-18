import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      
      <nav className="flex mx-auto space-x-4 font-bold text-lg md:px-10">
        <ul className="flex space-x-10 items-center text-center">
          <li className="text-green-500 font-marker hover:text-blue-300 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              {"</Home>"}
            </Link>
          </li>
            <li className="text-green-500 font-marker hover:text-blue-300 cursor-pointer">
            <Link to="Mystack" smooth={true} duration={500}>
             
             {"</Skills>"}
            </Link>
          </li>

          <li className="text-green-500 font-marker hover:text-blue-300 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
             
             {"</Projects>"}
            </Link>
          </li>

          <li className="text-green-500 font-marker hover:text-blue-300 cursor-pointer">
            <Link to="experience" smooth={true} duration={500}>
            { "</Certificates>"}
            </Link>
          </li>
          <li className="text-green-500 font-marker hover:text-blue-300 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
             {"</Contact>"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
