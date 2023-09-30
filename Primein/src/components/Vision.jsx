import React from "react";
import { GiBoltEye } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { TbTargetArrow } from "react-icons/tb";
import value from "../assets/vector.jpg";

const Vision = () => {
  return (
    <>
      <div className="min-h-[576px] w-full flex justify-center items-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-60 sm:mx-8 mt-10 gap-12 mb-10 py-4">
          <div className="flex flex-col gap-5">
            <div className="h-20 rounded-sm bg-gradient-to-r from-[#FFEF60] via-[#E3CF41] to-yellow-500 p-[2px] w-1/5 sm:w-24">
              <div className="flex items-center justify-center h-full w-full bg-white">
                <GiBoltEye
                  size={80}
                  className="px-4 py-4 text-gray-600  drop-shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold underline decoration-[#E3CF41] hover:decoration-yellow-400 underline-offset-8">
                VISION
              </h1>
              <h3 className="text-gray-700 tracking-normal text-lg">
                To be a leading infrastructure development group aimed at
                fostering National & Global Development.
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-20 rounded-sm bg-gradient-to-r from-[#FFEF60] via-[#E3CF41] to-yellow-500 p-[2px] w-1/5 sm:w-24">
              <div className="flex items-center justify-center h-full w-full bg-white">
                <TbTargetArrow
                  size={75}
                  className="px-4 py-4 text-gray-600  drop-shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold underline decoration-[#E3CF41] hover:decoration-yellow-400 underline-offset-8">
                MISSION
              </h1>
              <h3 className="text-gray-700 tracking-normal text-lg">
                Empowering Clients by delivering timely and cost effective
                quality projects in arena of infrastructure and thus indirectly
                rendering Client's Customer Delight.
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-2">
            <div className="h-20 rounded-sm bg-gradient-to-r from-[#FFEF60] via-[#E3CF41] to-yellow-500 p-[2px] w-1/5 sm:w-24">
              <div className="flex items-center justify-center h-full w-full bg-white">
                <img src={value} alt="" className="-rotate-270" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold underline decoration-[#E3CF41] hover:decoration-yellow-400 underline-offset-8">
                VALUES
              </h1>
              <h3 className="text-gray-700 tracking-normal text-lg">
                <div className="flex items-center gap-1">
                  <div>
                    <TiTick
                    size={20}
                    className="bg-gray-700 text-white rounded-full p-[1px]"
                  />
                  </div>
                  
                  Team work and Adaption
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div>
                    <TiTick
                      size={20}
                      className="bg-gray-700 text-white rounded-full p-[1px]"
                    />
                  </div>
                  Human Safety & Environmental Responsibility{" "}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div>
                    <TiTick
                      size={20}
                      className="bg-gray-700 text-white rounded-full p-[1px]"
                    />
                  </div>
                  Dynamic Improvement and culture of constant innovation
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div>
                    <TiTick
                      size={20}
                      className="bg-gray-700 text-white rounded-full p-[1px]"
                    />
                  </div>
                  Realizing potential and harnessing talent
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div>
                    <TiTick
                      size={20}
                      className="bg-gray-700 text-white rounded-full p-[1px]"
                    />
                  </div>
                  Developing self, nation and humanity
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
