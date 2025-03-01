import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import csslogo from "../images/cssicon.png";
import "../components/Marquee.css";
import javascriptlogo from "../images/javascriptlogo.png";
import htmllogo from "../images/htmllogo.png";
import firebaselogo from "../images/firebaselogo.png";
import pythonlogo from "../images/pythonlogo.png";
import reacticon from "../images/reacticon.png";
import tailwindlogo from "../images/tailwindlogo.png";
import jquerylogo from "../images/jquerylogo.png";
import github from "../images/github.png";
import email from "../images/Email.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import Carousel from "./Carousel";

import Specificproject from "./Specificproject.jsx";

function Portfolio() {
  const [isopen, Setisopen] = useState(false);
  const project1 = 1;
  const project2 = 2;
  const project3 = 3;

  const toggleNavbar = () => {
    Setisopen(!isopen);
  };
  return (
    <div className="bg-black mx-auto min-h-screen ">
      <div className="bg-gray-900 fixed w-full flex-wrap z-20">
        <div className="hidden w-full md:flex">
          <div className="mx-auto">
            <Navbar />
          </div>
        </div>

        <div className="md:hidden text-green-500 ml-[90%]">
          <button onClick={toggleNavbar}>{isopen ? <X /> : <Menu />}</button>
        </div>

        {isopen && (
          <div>
            <Navbar />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center" id="home">
        <Carousel />

        <h1 className="text-white text-4xl font-bold mt-4 mb-4">
          I code & Chill 🍿
        </h1>

        <h2 className="text-white mx-auto text-center">
          <div className="mb-2">
            I am a dedicated frontend developer with over 4 years of
            professional experience.
          </div>
          <div className="mb-2">
            My passion lies in creating seamless and responsive user interfaces
            that enhance user experience. My expertise lies
          </div>
          <div className="mb-2">
            in crafting robust and scalable SaaS-based architectures on the
            Amazon AWS platform With a deep expertise in modern frontend
            technologies,
          </div>
          <div className="mb-2">
            I excel at building visually appealing and performant web
            applications. I specialize in React, CSS, JavaScript, and{" "}
          </div>
          <div className="mb-2">
            Tailwind CSS, and I take pride in writing clean and maintainable
            code. My goal is to craft intuitive and engaging user experiences
            that delight users and drive business success.
          </div>
        </h2>

        <div className="flex justify-between space-x-2 mt-4 mb-4">
          <a href="https://wa.me/+2348127500146">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-3xl">
              Get in Touch
            </button>
          </a>
          <a href="https://drive.google.com/file/d/14uRJKDDXdqOSI0owI_wySQki1AYKjgAt/view?usp=drive_link">
            <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded-3xl">
              Download CV
            </button>
          </a>
        </div>

        <h2 className="text-white text-center text-1xl mt-8 mb-8">
          My Tech Stack
        </h2>

        <div className="relative w-full overflow-hidden z-10">
          <div className="marquee space-x-5">
            <img src={csslogo} alt="csslogo" className="w-10 h-10" />
            <img
              src={javascriptlogo}
              alt="javascriptlogo"
              className="w-10 h-10"
            />
            <img src={firebaselogo} alt="firebaselogo" className="w-12 h-15 " />
            <img src={reacticon} alt="reacticon" className="w-10 h-10 " />
            <img src={htmllogo} alt="htmlogo" className="w-10 h-10 " />
            <img src={pythonlogo} alt="pythonlogo" className="w-10 h-10 " />
            <img src={tailwindlogo} alt="tailwindlogo" className="w-10 h-10 " />
            <img src={jquerylogo} alt="jquerylogo" className="w-8 h-10 " />
          </div>
        </div>

        <h2 className="text-orange-400 text-3xl mt-10 mb-10" id="projects">
          PROJECTS
        </h2>

        <div className="flex flex-wrap justify-between space-x-4 text-center">
          <Specificproject projectId={project1} />

          <Specificproject projectId={project2} />

          <Specificproject projectId={project3} />
        </div>

        <section id="experience">
          <h2 className="text-blue-500 text-3xl mt-4 text-center">
            EXPERIENCE
          </h2>

          <div className="flex justify-between max-w-xl">
            <div>
              <h2 className="text-white mt-8 font-semibold text-2xl justify-between ">
                <span>Web developer instructor at Root Node</span>
              </h2>
            </div>
            <div className="text-right text-sm text-white mt-10 ml-11">
              <span>August 2024</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-white text-sm mt-2 max-w-2xl  ">
              Taught students HTML, CSS, and JavaScript, focusing on building a
              strong foundation in web programming. Delivered comprehensive
              lessons on core concepts and best practices for front-end
              development. Encouraged hands-on learning by providing classwork
              and assignments after each session. Offered personalized guidance
              to help students overcome challenges and improve their coding
              skills. Fostered a collaborative learning environment to inspire
              creativity and innovation in web design.
            </p>
          </div>

          <div className="flex justify-between max-w-xl">
            <div>
              <h2 className="text-white mt-8 font-semibold text-2xl justify-between ">
                <span>Software Engineer Intern at NIIT</span>
              </h2>
            </div>
            <div className="text-right text-sm text-white mt-10 ml-10">
              <span>April 2023-October2023</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-white text-sm mt-2 max-w-2xl ">
              Led the development of a Jumia clone web app, meticulously
              crafting the user interface from scratch to closely mirror the
              original platform. Focused on delivering a seamless user
              experience by designing intuitive, user-friendly interfaces and
              implementing client-side validation for web forms. Collaborated
              with team members to ensure a consistent and responsive design
              across all devices. Enhanced my technical skills by mastering
              HTML5, CSS3, JavaScript, jQuery, XML, SQL, and React JS.
              Participated in code reviews and contributed to improving code
              quality and development processes. This experience solidified my
              ability to translate complex requirements into functional and
              visually appealing web applications."
            </p>
          </div>

          <div className="flex justify-between max-w-xl">
            <div>
              <h2 className="text-white mt-8 font-semibold text-2xl justify-between ">
                <span>MTU Location Navigation Web App </span>
              </h2>
            </div>
            <div className="text-right text-sm text-white mt-10 ml-11">
              <span>January 2024-June2024</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-white text-sm mt-2 max-w-2xl ">
              Developed a location navigation web app for my University at MTU
              LNS, Ogun, Nigeria, in January 2024. The project aimed to enhance
              the campus experience by providing an intuitive mapping solution
              for visitors. Utilizing React and Vite for the frontend, and
              integrating Firebase for authentication, the app offers a seamless
              user experience. Implemented Leaflet.js for dynamic mapping and
              Leaflet Routing Machine for accurate route guidance. This solution
              significantly reduces the need for visitors to seek directions
              from students, thereby streamlining campus navigation. The project
              highlights my skills in modern web technologies and my ability to
              address real-world challenges through innovative solutions.
            </p>
          </div>

          <div className="flex justify-between max-w-xl">
            <div>
              <h2 className="text-white mt-8 font-semibold text-2xl justify-between  ">
                <span>IT Technician at Integrity solutions </span>
              </h2>
            </div>
            <div className="text-right text-sm text-white mt-10 ml-11">
              <span>March 2023 - October 2023</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-white text-sm mt-2 max-w-2xl ">
              Worked as an IT Technician at Integrity Technologies in Lagos,
              Nigeria, from May 2023 to October 2023. Diagnosed and resolved
              client computer hardware and software issues, ensuring continuous
              operation and user efficiency. Proficient in rapidly identifying
              root causes of technical problems and implementing effective
              solutions. Collaborated seamlessly with IT teams, management, and
              end-users to implement technology upgrades, which contributed to a
              20% reduction in operational costs.
            </p>
          </div>
        </section>

        <section id="contact">
          <div className="mt-5 w-full">
            <footer className="bg-gray-950 text-white p-8 flex flex-col items-center ">
              <div>
                <h2 className="items-center justify-center font-semibold ">
                  Contact
                </h2>
                <p className="mt-10">
                  Experienced Frontend Developer with 4 years of expertise in
                  designing and implementing scalable, innovative web solutions.
                  Skilled in creating responsive, user-centric interfaces using
                  modern frontend technologies like HTML5, CSS3,
                  JavaScript,TailwindCss and React.js. Adept at translating
                  complex requirements into intuitive, efficient and accessible
                  web applications, ensuring cross-browser compatibility and
                  optimized performance. Proficient in collaborating with
                  cross-functional teams, including designers, backend
                  developers, and product managers, to deliver high-quality
                  products on time. Strong understanding of UI/UX principles,
                  version control systems like Git, and familiarity with agile
                  methodologies. Passionate about staying updated with the
                  latest industry trends and continuously enhancing skills to
                  build cutting-edge web experiences.
                </p>
              </div>

              <div className="flex justify-center space-x-6 mt-7 ">
                <a href="https://github.com/KESNIAABRAHAM">
                  <img src={github} alt="github" className="w-7 h-7" />
                </a>

                <a href="https://uchendukesnia2424@gmail.com">
                  <img src={email} alt="Mail" className="w-7 h-7" />
                </a>
                <a href="https://x.com/kesniaU">
                  <img src={twitter} alt="Twitter" className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/kesnia-uchendu-405a3924a">
                  <img src={linkedin} alt="github" className="w-7 h-7" />
                </a>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
