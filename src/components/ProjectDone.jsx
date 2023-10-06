import React from "react";
import b1 from "../assets/building1.png";
import b2 from "../assets/building2.png";
import b3 from "../assets/building3.png";
import b4 from "../assets/building4.png";
import logo from "../assets/logo1r.png";

const ProjectDone = () => {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black min-h-screen w-full flex flex-col justify-center items-center">
        <img
          src={logo}
          alt=""
          className="w-40 drop-shadow-2xl brightness-110 mt-4 sm:block lg:hidden"
        />
        <div className="flex justify-center items-center h-full pt-12">
          <h1 className="text-white text-[poppins] text-4xl font-bold sm:bg-black lg:bg-transparent px-4 py-6 rounded-sm drop-shadow-2xl text-center">
            <span className="text-yellow-600 pr-1">Completed</span> Project
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full  rounded-sm drop-shadow-2xl lg:px-32 sm:px-8  py-6 min-h-[70vh] justify-start items-start lg:mt-6">
          <div className="flex flex-col justify-center items-center py-6 rounded-sm drop-shadow-2xl text-white text-2xl font-semibold gap-4 flex-grow overflow-hidden">
            <img
              src={b1}
              alt="b1"
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-110 rounded-md"
            />
            <h1>Shivpur, Varanasi</h1>
          </div>

          <div className="flex flex-col justify-center items-center py-6 rounded-sm drop-shadow-2xl text-white text-2xl font-semibold gap-4 flex-grow overflow-hidden">
            <img
              src={b2}
              alt="b2"
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-110 rounded-md"
            />
            <h1>Tarna, Varanasi</h1>
          </div>
          <div className="flex flex-col justify-center items-center py-6 rounded-sm drop-shadow-2xl text-white text-2xl font-semibold gap-4 flex-grow overflow-hidden">
            <img
              src={b3}
              alt="b3"
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-110 rounded-md"
            />
            <h1>Sikraul, Varanasi</h1>
          </div>
          <div className="flex flex-col justify-center items-center py-6 rounded-sm drop-shadow-2xl text-white text-2xl font-semibold gap-4 flex-grow overflow-hidden">
            <img
              src={b4}
              alt="b4"
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-110 rounded-md"
            />
            <h1 className="text-center">
              C3, nyay khand, indirapuram, Ghaziabad
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDone;
