import React, { useContext } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import AppContext from "../Context/AppContext";

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(AppContext);

  return (
    <>
      <div className="py-4 w-full  bg-white">
        <div className="px-6  flex w-full items-center justify-between">
          <a href="/" className="font-semibold text-2xl">
            Studydesk
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSidebar(true);
              }}
              className="text-2xl "
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          sidebar
            ? "fixed top-0 left-0 h-screen w-screen  bg-black/20 backdrop-blur-md z-40"
            : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setSidebar(false);
          }}
          className="text-xl px-2 py-2 rounded-full bg-black/50 hover:bg-black/80 text-white fixed top-4 right-4"
        >
          <IoMdClose />
        </button>
        <div className="fixed top-16 right-6  h-30 w-90 sm:w-96 bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
          <div className="flex flex-col items-start  w-[98%] gap-4  h-[98%] overflow-y-scroll">
            <div className="h-full ">
              <h2 className="text-xl font-semibold text-sky-500">Courses</h2>
              <div className="flex flex-col items-center gap-1 py-2 ">
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-1
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-2
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-3
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-4
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-5
                  </a>
                </li>
              </div>
            </div>
            <div className="h-full ">
              <h2 className="text-xl font-semibold text-sky-500">Courses</h2>
              <div className="flex flex-col items-center gap-1 py-2 ">
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-1
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-2
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-3
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-4
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-5
                  </a>
                </li>
              </div>
            </div>
            <div className="h-full ">
              <h2 className="text-xl font-semibold text-sky-500">Courses</h2>
              <div className="flex flex-col items-center gap-1 py-2 ">
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-1
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-2
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-3
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-4
                  </a>
                </li>
                <li className="group hover:bg-slate-400/15 cursor-pointer px-6 py-1">
                  <a
                    href=""
                    className={`text-slate-950 group-hover:text-sky-500`}
                  >
                    courses-5
                  </a>
                </li>
              </div>
            </div>
            <div className="h-10 px-6 flex items-center justify-center gap-3">
              <button> Dark mode</button>
              <label
                htmlFor="check"
                className="h-6 w-[3.5rem] bg-slate-200 rounded-full relative"
              >
                <input type="checkbox" id="check" className="peer  hidden" />
                <span className="h-4 w-4 bg-slate-600/60 rounded-full absolute left-1 top-1 peer-checked:bg-slate-900 peer-checked:left-9"></span>
              </label>
            </div>
            <div className="py-2 px-6">
              <button className="px-10 py-2 rounded-xl bg-sky-500 text-slate-50">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
