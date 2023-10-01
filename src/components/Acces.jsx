import React from "react";
import profile from "../assets/profileimage.png";

const Access = () => {
  return (
    <>
      <div
        id="about"
        className="flex md:min-h-[100vh] sm:min-h-[100vh] bg-black z-10 justify-center items-center relative overflow-hidden"
      >
        <div className=" absolute h-full w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black mx-14 my-2">
          <div className="flex flex-col items-center justify-center mt-5 px-4">
            <div className="mt-6 p-2   border-l-8 border-r-8 border-[#E3CF41] rounded-full">
              <div className="bg-white rounded-full p-2">
                <img
                  src={profile}
                  className="prof-image-gradient w-[20rem] h-[20rem] brightness-96 object-none rounded-full"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-yellow-300 text-4xl font-bold mt-6 tracking-wider sm:px-4">
                Asutosh Pandey
              </h1>
              <h3 className="text-white text-2xl font-bold">Founder and CEO</h3>
              <div className="flex justify-center items-center flex-col gap-1">
                <h1 className="text-white text-xl mt-10">
                  He is an entrepreneur,
                </h1>
                <h1 className="text-white lg:text-xl sm:text-lg text-center sm:px-4 lg:px-0">
                  Founder and CEO of Prime builders and developers.
                </h1>
              </div>
              <div className="text-center text-white sm:mt-8 lg:mt-2 lg:text-lg sm:text-md sm:px-3 ">
                <p className="md:block">
                  His passion is building great communities of international
                </p>
                <p className="md:block">
                  standards by understanding current market requirement
                </p>
                <p className=" md:block">and implementing technology stacks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Access;
