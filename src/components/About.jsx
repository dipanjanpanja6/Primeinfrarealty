import React from "react";
import bar from "../assets/bar.png";
import logo from "../assets/logor1.png";

const About = () => {
  return (
    <>
      <div className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black min-h-[576px] w-full sm:px-4 overflow-hidden">
        <img
          src={logo}
          alt=""
          className="h-32 w-40 absolute right-6 sm:hidden lg:block mt-4 drop-shadow-2xl"
        />
        <div className="flex justify-center items-center sm:pt-20 lg:pt-28 lg:gap-20 lg:flex-row sm:flex-col -mt-10 mb-10">
          <img
            src={bar}
            className="lg:w-96 sm:w-[26rem] lg:h-[40rem] sm:h-[40rem] brightness-105 drop-shadow-2xl sm:ml-24 lg:ml-0 sm:px-8 lg:px-0 sm:mt-28 lg:mt-auto"
          />
          <div className="text-white justify-center lg:text-4xl sm:text-2xl flex flex-col gap-4 font-bold drop-shadow-2xl sm:absolute lg:static sm:-mt-72 sm:-ml-16  lg:-ml-0 lg:-mt-0 sm:items-start lg:items-end">
            <h1 className="outline outline-2 outline-white px-2 py-2 rounded-md">
              INFRASTRUCTURE
            </h1>
            <h1 className="outline outline-2 outline-white px-2 py-2 rounded-md lg:ml-8">
              EXCELLENCE
            </h1>
            <h1 className="outline outline-2 outline-white px-2 py-2 rounded-md lg:ml-14">
              LIFESTYLE
            </h1>
            <h1 className="outline outline-2 outline-white px-2 py-2 rounded-md lg:ml-20">
              LUXURY
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
