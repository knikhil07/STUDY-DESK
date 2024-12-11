import React from "react";
import { IoMdMenu,  } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="py-4 w-full bg-slate-50  flex items-center">
        <div className="flex items-center justify-between w-full px-8">
          <a href="/" className="text-2xl logo-font text-sky-500">Studydesk</a>
          <div className="flex gap-3 items-center ">
            <div className="hidden md:flex gap-5 pr-4 border-r-2 text-slate-900 font-semibold">
              <a href="#" className="hover:text-sky-500"  >Home</a>
              <a href="#" className="hover:text-sky-500"  >Courses</a>
            </div>
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-sky-500 rounded-full "></button>
              <button className="text-2xl">
                <IoMdMenu />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed h-screen w-screen bg-black/5  right-0 top-0 ">
         <div className="w-full h-96 bg-white "></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
