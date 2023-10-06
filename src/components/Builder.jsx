import React from "react";
import builder from "../assets/builder.png";
import logo from "../assets/logor1.png";

const Builder = () => {
  return (
    <>
      <div
        id="clickOnStarted"
        className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black min-h-[90vh] w-full sm:px-4 overflow-hidden flex justify-center items-center flex-col"
      >
        <img
          src={logo}
          className="w-40 drop-shadow-2xl brightness-110 mt-4"
          alt=""
        />
        <div className="flex lg:flex-row sm:flex-col-reverse items-center justify-center py-10 lg:mx-48 sm:mx-4 gap-10 mt-4">
          <div className="w-full h-full flex flex-col justify-center gap-4">
            <h1 className="md:text-3xl sm:text-2xl text-white font-bold tracking-wide font-[avro]">
              PRIME BUILDER <br />& DEVELOPERS
            </h1>
            <h3 className="text-left text-gray-200 lg:text-xl sm:text-md pr-4">
              are involved in real estate sector such as residential apartments
              and township, commercial complexes, business centers. The company
              was founded in the year 2015 and since its launch, the company has
              been committed in building spaces with international quality,
              excellent framework and customer satisfaction. Every project
              undertaken is designed and developed by in-house team of
              professionals considering affordable spaces with remarkable
              infrastructure.
            </h3>
          </div>
          <div className="w-full h-full flex justify-center items-center p-2 lg:p-0 my-auto  shadow-2xl bg-white  text-black  shadow-gray-900/50  hover:shadow-gray-900/100 transition-all duration-300 ease-in-out cursor-pointer  hover:rotate-3 hover:translate-y-2 hover:translate-x-2 hover:bg-gray-100 hover:scale-105 rounded-sm drop-shadow-2xl ">
            <img
              src={builder}
              alt=""
              className="w-full object-contain h-full rounded-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Builder;
