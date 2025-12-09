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
import linkedin from "../images/linkedin.png";
import Carousel from "./Carousel";
import logo from "../images/logo.png";
import vitelogo from "../images/Vitelogo.png";
import jupyterlogo from "../images/Jupyterlogo.png";
import Npmlogo from "../images/NPM.png";
import Azioslogo from "../images/Azios.png";
import Typescriptlogo from "../images/TypeScript.png";
import Navbarmobile from "./Navbarmobile.jsx";
import Specificproject from "./Specificproject.jsx";
import TechCard from "./Techcard.jsx";

import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { useEffect } from "react";
import { toast } from "sonner";

const Portfolio = () => {
  const [isopen, Setisopen] = useState(false);
  const project1 = 1;
  const project2 = 2;
  const project3 = 3;
  const project4 = 4;
  const project5 = 5;
  const project6 = 6;

  const toggleNavbar = () => {
    Setisopen(!isopen);
  };

  const [state, handleSubmit] = useForm("manpbqzd");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Sent sucessfully");
    } else if (state.errors) {
      toast.error("Something went wrong.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <div className="bg-black mx-auto min-h-screen ">
      <div className="fixed w-full flex-wrap z-20">
        <div className="hidden  lg:flex   bg-white/10 backdrop-blur-md  rounded-2xl shadow-lg border border-white/20">
          <div className="flex-shrink-0 ml-5 mt-3">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-20 h-auto"
              loading="lazy"
            />
          </div>
          <Navbar/>
        </div>

        <div className="flex items-center justify-between px-3 py-2 lg:hidden">
          {/* Logo on the far left */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Brand logo" className="w-10" />
          </div>

          {/* Menu icon on the far right */}
          <div className="text-green-500">
            <button onClick={toggleNavbar}>{isopen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {isopen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-black/10 backdrop-blur-md z-50">
            <button
              onClick={toggleNavbar}
              className="absolute top-4 right-4 text-green-500"
            >
              <X />
            </button>
            <Navbarmobile />
          </div>
        )}
      </div>

      <section
        className="flex flex-col items-center justify-center px-3"
        id="home"
      >
        <Carousel />
        <h1 className="text-white text-3xl font-bold mt-4 mb-7 font-marker">
          I code for a living 👨‍💻
        </h1>

        <h2
          className="text-white max-w-3xl text-center text-md font-satoshi"
          data-aos="zoom-in-up"
        >
          I’m a Frontend Engineer passionate about crafting clean, responsive
          interfaces that feel intuitive and perform seamlessly. My work centers
          on turning design into interactive experiences blending thoughtful UI
          architecture with smooth animations and scalable components. I thrive
          in environments where attention to detail meets creative
          problem-solving, whether I’m building solo or collaborating across
          teams. With a strong grasp of modern frontend tools and a love for
          design consistency, I aim to deliver products that not only look great
          but feel effortless to use.
        </h2>

        <div
          className="flex justify-between space-x-6 mt-20 mb-5 "
          data-aos="fade-up"
        >
          <a href="https://wa.me/+2348127500146">
            <button className="bg-white text-black font-bold py-4 px-10 rounded-2xl font-marker">
              Get in Touch
            </button>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1MwofKkY8Z--SNWEjWhyiQM7aBzTdwxs9"
            download
          >
            <button className="bg-transparent text-white font-semibold py-4 px-10 border border-white rounded-2xl font-marker">
              Download CV
            </button>
          </a>
        </div>
      </section>
      <h2
        id="Mystack"
        className="text-green-500 text-center text-2xl mt-[20%] mb-8 font-marker"
      >
        Tech Stack
      </h2>
      <div className="relative mx-auto overflow-hidden z-10 max-w-7xl">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center px-4">
          <TechCard src={csslogo} alt="CSS"/>
          <TechCard src={javascriptlogo} alt="JavaScript" />
          <TechCard src={firebaselogo} alt="Firebase" />
          <TechCard src={htmllogo} alt="HTML" />
          <TechCard src={pythonlogo} alt="Python" />
          <TechCard src={reacticon} alt="React" />
          <TechCard src={Typescriptlogo} alt="Typescript" />
          <TechCard src={tailwindlogo} alt="Tailwind CSS" />
          <TechCard src={Npmlogo} alt="NPM" />
          <TechCard src={vitelogo} alt="Vite" />
          <TechCard src={Azioslogo} alt="Axios" />
          <TechCard src={jquerylogo} alt="jQuery" />
          <TechCard src={jupyterlogo} alt="Jupyter" />
        </div>
      </div>

      <section id="projects" className="mt-40 ">
        <h2 className="text-green-500 text-2xl mt-10 mb-10 text-center font-marker">
          PROJECTS
        </h2>
        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden mt-0 pt-0">
          <div className="sm:grid grid-cols-2 gap-8 text-center px-4">
            <div
              data-aos="slide-right"
              data-aos-delay="300"
              className="mt-0 pt-0"
            >
              <Specificproject projectId={project1} />
            </div>

            <div style={{ position: "relative", overflow: "hidden" }}>
              <div
                data-aos="slide-left"
                data-aos-delay="300"
                className="mt-0 pt-0"
              >
                <Specificproject projectId={project2} />
              </div>
            </div>

            <div
              data-aos="slide-right"
              data-aos-delay="300"
              className="mt-0 pt-0"
            >
              <Specificproject projectId={project3} />
            </div>

            <div style={{ position: "relative", overflow: "hidden" }}>
              <div
                data-aos="slide-left"
                data-aos-delay="300"
                className="mt-0 pt-0"
              >
                <Specificproject projectId={project4} />
              </div>
            </div>

            <div
              data-aos="slide-right"
              data-aos-delay="200"
              className="mt-0 pt-0"
            >
              <Specificproject projectId={project5} />
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="mt-0 pt-0"
            >
              <Specificproject projectId={project6} />
            </div>
          </div>
        </div>

        {/* Laptop & Desktop Layout */}
        <motion.div className="hidden lg:grid grid-cols-3 gap-8 mx-auto max-w-7xl font-satoshi px-3">
          {[project1, project2, project3, project4, project5, project6].map(
            (project, index) => (
              <motion.div key={index}>
                <Specificproject projectId={project} />
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      <section id="experience" className="mt-40 ">
        <h2 className="text-green-500 text-2xl mt-40 mb-6 text-center font-marker">
          CERTIFICATES
        </h2>

        <div className="grid grid-cols-1 gap-0 max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[10] min-h-[100vh] flex items-center"
          >
            <img
              src="/images/certone.png"
              alt="certone"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[11] min-h-[100vh] flex items-center"
          >
            <img
              src="/images/certthree.png"
              alt="certthree"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[12] min-h-[100vh] flex items-center"
          >
            <img
              src="/images/certtwo.png"
              alt="certtwo"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[13] min-h-[100vh] flex items-center justify-center"
          >
            <img
              src="/images/certfour.png"
              alt="certfour"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[14] min-h-[100vh] flex items-center justify-center"
          >
            <img
              src="/images/certfive.jpg"
              alt="certfive"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[15] min-h-[100vh] flex items-center justify-center"
          >
            <img
              src="/images/certsix.png"
              alt="certsix"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[16] min-h-[100vh] flex items-center justify-center"
          >
            <img
              src="/images/certseven.png"
              alt="certseven"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ position: "sticky", top: 20 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="z-[17] min-h-[100vh] flex items-center justify-center"
          >
            <img
              src="/images/certeight.png"
              alt="certeight"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mt-[20%]">
        <div className="mt-5 w-auto">
          <footer className="text-white flex flex-col">
            <div className="text-center mb-4">
              <h2 className="text-green-500 items-center justify-center font-bold text-2xl font-marker">
                Contact
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 px-3 py-6 max-w-7xl mx-auto"
                data-aos="zoom-in-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
                <input
                  type="text"
                  placeholder="Kesnia MSI"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="E.g uchendukesnia2424@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black"
                />
                <textarea
                  placeholder="Write Message here"
                  name="message"
                  className="w-full h-40 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black resize-none"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-green-500 mt-4 text-black font-semibold py-4 px-20  border-black rounded-xl font-marker"
                  >
                    Let's Talk
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-center space-x-6 mt-7 ">
              <a href="https://github.com/KESNIAABRAHAM">
                <img src={github} alt="github" className="w-7 h-7" />
              </a>

              <a href="https://uchendukesnia2424@gmail.com">
                <img src={email} alt="Mail" className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/kesnia-uchendu-405a3924a">
                <img src={linkedin} alt="github" className="w-7 h-7" />
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
