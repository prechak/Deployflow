import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/logo.png";
import Profile from "/src/assets/images/sm/profile/profile.png";
import iconProfile from "/src/assets/images/sm/profile/icon-profile.png";

function Navbarnonuser() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <section className="navbar items-center sm:w-auto sm:h-[56px] sm:flex sm:flex-row sm:justify-between md:w-full md:h-[88px] md:flex md:flex-row md:justify-between xl:w-full xl:h-[88px] xl:flex xl:flex-row xl:justify-between ">
        <Link to="/userhomepage">
          <img
            src={logo}
            alt="Logo"
            className="sm:pl-[16px] md:p-[100px] xl:p-[160px] xl:w-[140px] xl:h-9"
          />
        </Link>
        <div className="menu flex items-center sm:mr-[16px] md:mr-[160px] xl:mr-[160px]">
          <h1
            className="sm:font-bold sm:text-sm sm:mx-[16px] sm:my-[16px] xl:font-bold xl:text-base sm:text-black cursor-pointer"
          >
            Our Courses
          </h1>
          <div className="relative ml-4">
            <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
              <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full " />
              <span className="hidden md:block mx-2 text-sm text-gray-700 md:font-normal md:text">username</span>
              <svg
                className={`h-5 w-5 ml-1 text-black ${isOpen ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="absolute right-0 sm:w-[198px] ">
                <div className="py-1 sm:text-sm sm:font-medium shadow-2xl border-2 border-red-500" role="none">
                  <Link
                    to=""
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row "
                    role="menuitem"
                  >
                    <img src={iconProfile} alt="" className="sm:pr-1" />
                    Profile
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    My Courses
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    My Homework
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    My Desire Courses
                  </Link>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-t-[1px] border-gray-500"
                    role="menuitem"
                  >
                    Log out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbarnonuser;
