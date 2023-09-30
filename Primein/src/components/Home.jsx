import React from "react";
import bgImg from "../assets/lukas.jpg";
import logo from "../assets/logor1.png";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900 min-h-[90vh] w-full relative px-2 flex justify-center items-center">
          <div>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay brightness-110"
              src={bgImg}
              alt="bgimage"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <img
              src={logo}
              alt=""
              className="w-80 mx-auto pt-48 brightness-125"
            />
            <div className="relative text-white text-4xl px-8 py-2 rounded-sm lg:mt-36 sm:mt-20 mx-auto flex border brightness-125 font-semibold mb-4">
              Get Started
              <div className="absolute top-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 border-t-4 border-r-4 border-b-0 border-l-0 right-0 border-[#E3CF41] rotate-[170] "></div>
              <div className="absolute bottom-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 border-t-0 border-r-0 border-b-4 border-l-4 left-0 border-[#E3CF41] rotate-[170] "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
