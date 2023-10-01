import React from "react";
import logo from "../assets/logoedit.png";
import Home from "./Home";
import About from "./About";
import Vision from "./Vision";
import Builder from "./Builder";
import Maps from "./Maps";
import ProjectDone from "./ProjectDone";
import Footer from "./Footer";
import Access from "./Acces";

const Navbar = () => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap bg-white px-4 pr-8 top-0 sticky z-50 py-2">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={logo} alt="" className="w-24 h-16" />
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap text-black gap-6">
              <li
                className="text-xl font-bold cursor-pointer"
                onClick={() => scrollToComponent("home")}
              >
                Home
              </li>
              <li
                className="text-xl font-bold cursor-pointer"
                onClick={() => scrollToComponent("about")}
              >
                About
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Home id="home" scrollToComponent={scrollToComponent} />
      <About />
      <Vision />
      <Builder id="clickOnStarted" />
      <Maps />
      <ProjectDone />
      <Access id="about" />
      <Footer />
    </>
  );
};

export default Navbar;
