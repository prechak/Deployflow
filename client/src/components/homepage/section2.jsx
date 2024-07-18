import React from "react";
import people1 from "/src/assets/images/sm/section2/image1.png";
import people2 from "/src/assets/images/sm/section2/image2.png";
import people3 from "/src/assets/images/sm/section2/image3.png";
import Vector3 from "/src/assets/icons/header/xl/vector3.png";

function Section2() {
  return (
    <>
      <div className="body2 sm:flex sm:justify-center text-black">
        <img src={Vector3} alt="" className=" absolute left-0 ml-16 md:hidden "/>
        <section className="sm:w-[343px] sm:h-[1538.59px] sm:px-[16px] sm:py-[64px] md:w-auto md:h-[600px] xl:w-[1440px] xl:h-[823px] xl:flex xl:flex-col xl:items-center">
        <img src={Vector3} alt="" className="absolute sm:hidden md:block md:left-0 md:mt-[450px] md:ml-[70px] xl:left-0 xl:mt-[696px] xl:ml-[70px]"/>
          <h1 className="sm:font-medium sm:text-[24px] sm:text-center md:text-[36px] md:font-medium md:text-center xl:text-center xl:font-medium xl:text-4xl xl:flex-col xl:pt-[105px]">
            Our Professional Instructors
          </h1>
          <div className="md:flex md:justify-center md:space-x-4 xl:flex xl:justify-center xl:space-x-8 xl:mt-[60px]">
            <div className="flex flex-col items-center">
              <img
                src={people1}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] md:w-[240px] md:h-[320px] xl:w-[343px] xl:h-[403.53px] rounded-lg sm:pt-[32px] md:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl md:pt-[8px] md:text-center md:font-normal md:text-xl xl:pt-6">
                Jane Cooper
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400 md:text-center md:font-normal md:text-base md:text-blue-400 xl:p-2">
                UX/UI Designer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={people2}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] md:w-[240px] md:h-[320px] xl:w-[343px] xl:h-[403.53px] rounded-lg sm:pt-[32px] md:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl md:pt-[8px] md:text-center md:font-normal md:text-xl xl:pt-6">
                Esther Howard
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400 md:text-center md:font-normal md:text-base md:text-blue-400 xl:p-2">
                Program Manager
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={people3}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] md:w-[240px] md:h-[320px] xl:w-[343px] xl:h-[403.53px] rounded-lg sm:pt-[32px] md:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl md:pt-[8px] md:text-center md:font-normal md:text-xl xl:pt-6">
                Brooklyn Simmons
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400 md:text-center md:font-normal md:text-base md:text-blue-400 xl:p-2">
                Software Engineer
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Section2;
