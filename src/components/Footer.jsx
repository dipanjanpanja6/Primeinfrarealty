import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white text-center p-4">
        <div className="flex sm:flex-col lg:flex-row sm:gap-2 lg:gap-0 items-center justify-between md:px-40 sm:px-5 md:text-xl sm:text-lg ">
          <div className="flex items-center gap-3">
            <MdOutlineEmail size={25} />
            <h1 className="text-center">contact@premeinfarelty.com</h1>
          </div>
          <div className="flex items-center gap-3 text-center">
            <FiPhoneCall size={22} />
            7985121784
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
