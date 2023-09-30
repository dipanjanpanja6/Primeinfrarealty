import React from "react";
import map from "../assets/Plotmap.png";

const Maps = () => {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center px-4  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-white via-white to-white">
        <div className="relative flex justify-center items-center h-full flex-col lg:gap-3 sm:gap-24">
          <div className="flex flex-col items-center justify-center h-full py-8">
            <h1 className="text-4xl font-bold font-[poppins] text-black">
              <span className="text-yellow-600 pr-1">PLOTS</span> FOR SALE
            </h1>
          </div>
          <img
            src={map}
            alt=""
            className=" transition-transform duration-700 transform hover:scale-110 hover:z-10 h-full w-full pb-10 bg-white"
          />
          <button className="bg-black text-white font-bold py-3 active:bg-gray-800 hover:bg-gray-900 px-10 rounded-full mb-6 sm:mt-12 lg:mt-5">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Maps;
