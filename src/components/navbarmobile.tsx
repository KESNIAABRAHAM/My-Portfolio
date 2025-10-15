import { Link } from "react-scroll";

const Navbarmobile = () => {
  return (
    <nav className="mt-20 px-6 ">
      <ul className="flex flex-col space-y-6 text-white text-lg">
        <li className="hover:text-green-500 font-marker cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-green-500 font-marker cursor-pointer">
          <Link to="Mystack" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-green-500 font-marker cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-green-500 font-marker cursor-pointer">
          <Link to="experience" smooth={true} duration={500}>
           Certificates
          </Link>
        </li>
        <li className="hover:text-green-500  font-marker cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarmobile;
