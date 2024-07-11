import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

function UserProfile() {
  return (
    <>
      {/* Background  */}
      <div className="absolute"></div>
      {/* Background  */}

      <div className="fixed mb-10 z-10 w-full flex justify-between items-center bg-Gray-400 sm:px-8 px-4 py-2 md:py-4 border-b border-b-[#e6ebf4]">
        <Link
          to="/"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Test Navbar
        </Link>
      </div>
      <header className="text-black font-medium text-Headline3 pb-[1.5rem] md:pb-[3rem] md:pt-[9.5rem] pt-[5.5rem] flex flex-col justify-center items-center">
        Profile
      </header>
      <main className="flex flex-col md:flex-row justify-center items-center md:gap-[6.5rem] md:mr-[6rem]">
        <div className="relative pb-8 md:pb-[8rem]">
          <img
            className="w-[343px] h-[343px] rounded-xl"
            src="https://media.istockphoto.com/id/1147544807/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B8%A2%E0%B9%88%E0%B8%AD-%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%B4%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg?s=2048x2048&w=is&k=20&c=-ZEhbimlkfYo4fMHIy_2eF7CxXYFUuQWk-Y1Wjaonz4="
            alt="photo"
          />
          <div className="absolute top-0 right-0 p-1">
            <XMarkIcon className="size-6 text-white bg-purple-700 rounded-full" />
          </div>
        </div>
        <form className=" w-[343px] h-[468px] text-black flex flex-col gap-5">
          <div className="container md:font-medium">
            <label>
              Name
              <p>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400  outline-2 block w-full p-3"
                  placeholder="Name"
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Date of Birth
              <p>
                <input
                  type="date"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Enter Email"
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Educational Background
              <p>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="School"
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Email
              <p>
                <input
                  type="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Enter Email"
                />
              </p>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-Blue-500 font-medium rounded-xl text-sm w-full sm:w-auto px-4 py-4 text-center hover:bg-Blue-400 duration-75 md:mt-3"
          >
            Update Profile
          </button>
        </form>
      </main>
    </>
  );
}

export default UserProfile;
