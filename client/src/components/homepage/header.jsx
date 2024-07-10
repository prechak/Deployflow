import React from "react";
import Ellipse from "/src/assets/images/sm/header/ellipse-sm.png";
import Book from "/src/assets/images/sm/header/book-sm.png";
import Vector from "/src/assets/images/sm/header/bg-header-sm.png";
import VectorXl from "/src/assets/images/xl/vector-xl.png";

function Header() {
  return (
    <>
      <section id="header" className="sm:w-full sm:h-[704px] bg-Blue-100 sm:flex sm:justify-center xl:h-[700px] xl:relative xl:align-middle">
        <img src={Ellipse} alt="" className="absolute top-0 left-0 mt-[76px]" />
        <div className="relative z-10 sm:px-4 sm:pt-14 md:p-0 md:mt-[165px] md:w-[643px] md:h-[370px] xl:p-0 xl:mt-[165px] xl:w-[643px] xl:h-[370px] xl:mr-[350px] ">
          <h1 className="relative text-black sm:text-4xl sm:font-medium md:text-[66px] md:font-Headline3 md:w-[643px] md:h-[166px] md:leading-tight xl:text-[66px] xl:font-Headline3 xl:w-[643px] xl:h-[166px] xl:leading-tight">
            Best Virtual Classroom Software
          </h1>
          <p className="sm:text-Gray-700 sm:text-base sm:font-normal sm:pt-4 sm:z-30 sm:w-3/4  md:mt-6 xl:mt-6">
            Welcome to Schooler! The one-stop online class management system that caters to all your educational needs!
          </p>
            <button className="font-bold text-base text-white bg-Blue-500 sm:px-8 sm:py-4 sm:rounded-xl sm:mt-8 md:mt-[60px] md:font-bold md:text-base xl:mt-[60px]">
              Explore Courses
            </button>
          <img src={Book} alt="" className="absolute md:top-0 md:left-0 md:ml-56 md:hidden xl:top-0 xl:left-0 xl:ml-[667px] xl:block" />
        </div>
        <div className="absolute z-0 sm:top-0 sm:left-0 sm:w-full sm:h-3/4 sm:mt-44 md:hidden xl:hidden">
          <img src={Vector} alt="" className="w-full h-full object-cover" />
        </div> 
        <div className="absolute flex xl:justify-end xl:top-0 xl:left-0 xl:w-full xl:h-full">
          <img src={VectorXl} alt="" className="sm:hidden xl:block" />
        </div>
      </section>
    </>
  );
}

export default Header;
