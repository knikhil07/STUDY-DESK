import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-screen w-screen bg-slate-300/50 flex items-center justify-center fixed">
        <div className="h-f px-8  md:w-f rounded-2xl shadow-lg lg:w-fs bg-white mb-[10%] sm:mb-0 ">
          <div className="h-full w-full md:w-[50%] flex items-start p-6 flex-col justify-between md:border-r-2">
            <button className="logo-font text-sky-500 text-3xl  ">
              Studydesk
            </button>
            <form
              action=""
              className="w-full md:w-[50%] h-64 grid gap-6 place-content-start  "
            >
              <div class="group relative  w-64 sm:w-80 ">
                <input
                  type="text"
                  class=" block w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                  placeholder=" "
                />
                <span class="absolute left-4 top-2 rounded-full text-gray-500 transition-all group-focus-within:-top-3 group-focus-within:bg-white group-focus-within:px-2 group-focus-within:text-blue-500 group-focus-within:text-sm">
                  Username
                </span>
              </div>
              <div className="group relative  w-64 sm:w-80 ">
                <input
                  type="text"
                  className="block w-full rounded-lg border-2  px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                />
                <span className="absolute left-4 top-2 rounded-full text-gray-500 transition-all group-focus-within:-top-3  group-focus-within:bg-white group-focus-within:text-blue-500 group-focus-within:px-2  group-focus-within:text-sx">
                  Password
                </span>
              </div>
              <div className=" w-64 md:w-80 flex items-center justify-end">
                <button className="px-16  py-2 bg-blue-500 text-slate-50 rounded-lg">
                  Login
                </button>
              </div>
              <div className="w-64 md:w-80 text-sky-500 cursor-pointer">
                Create an Account
              </div>
            </form>
          </div>
          <div className="h-full w-[50%] hidden md:flex">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
