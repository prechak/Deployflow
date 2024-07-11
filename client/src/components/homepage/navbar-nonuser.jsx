import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/logo.png";

function NavbarNonUser() {
  return (
    <>
      <div className="navbar">
        <section className="navbar shadow-shadow2 items-center sm:w-auto sm:h-[56px] sm:flex sm:flex-row sm:justify-between md:w-full md:h-[88px] md:flex md:flex-row md:justify-between xl:w-full xl:h-[88px] xl:flex xl:flex-row xl:justify-between ">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="sm:pl-[16px] md:p-[100px] xl:p-[160px]"
            />
          </Link>
          <div className="menu sm:flex sm:flex-row sm:mr-[16px] md:w-[291px] md:h-[88px] md:flex md:flex-row md:items-center md:justify-center md:mr-[160px] md:gap-[32px] xl:w-[291px] xl:h-[88px] xl:flex xl:flex-row xl:items-center xl:justify-center xl:mr-[160px] xl:gap-[32px]">
            <Link to="/courselist">
              <h1 className="sm:font-bold sm:text-sm sm:mx-[16px] sm:my-[16px] xl:font-bold xl:text-base sm:text-black cursor-pointer">
                Our Courses
              </h1>
            </Link>
            <Link
              to="/userhomepage"
              className="bg-Blue-500 cursor-pointer sm:my-[8px] sm:rounded-xl md:py-[18px] xl:py-[18px]"
            >
              <button className=" justify-center align-middle sm:pt-1 md:pt-0 xl:p-0 shadow-shadow2">
                <span className="text-white sm:my-[8px]  sm:mx-[16px] md:font-bold md:text-center md:text-base md:px-[16px] xl:font-bold xl:text-center xl:text-base xl:px-[16px]">
                  Log in
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default NavbarNonUser;
