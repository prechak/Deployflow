import React from "react";
import people1 from "/src/assets/images/sm/section2/image1.png";
import people2 from "/src/assets/images/sm/section2/image2.png";
import people3 from "/src/assets/images/sm/section2/image3.png";

function section2() {
  return (
    <>
      <div className="body2 sm:flex sm:justify-center text-black ">
        <section className="sm:w-[343px] sm:h-[1538.59px] sm:px-[16px] sm:py-[64px] xl:w-[1440px] xl:h-[823px] xl:flex xl:flex-col xl:items-center ">
          <h1 className="sm:font-medium sm:text-[24px] sm:text-center xl:text-center xl:font-medium xl:text-4xl xl:flex-col xl:pt-[105px]">
            Our Professional Instructors
          </h1>
          <div className="xl:flex xl:justify-center xl:space-x-8 ">
            <div className="flex flex-col items-center">
              <img
                src={people1}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] rounded-lg sm:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl">
                Jane Cooper
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400">
                UX/UI Designer
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={people2}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] rounded-lg sm:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl">
                Esther Howard
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400">
                Program Manager
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={people3}
                alt=""
                className="sm:w-[343px] sm:h-[403.53px] rounded-lg sm:pt-[32px]"
              />
              <p className="name sm:pt-[8px] sm:text-center sm:font-normal sm:text-xl">
                Brooklyn Simmons
              </p>
              <p className="position sm:text-center sm:font-normal sm:text-base sm:text-blue-400">
                Software Engineer
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default section2;
