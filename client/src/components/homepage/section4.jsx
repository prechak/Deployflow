import React from "react";
import vector1 from "/src/assets/images/sm/section4/vector1.png";
import vector2 from "/src/assets/images/sm/section4/vector2.png";

function section4() {
  const gradientStyle = {
    background: "linear-gradient(270.94deg, #5697FF 7.78%, #2558DD 73.86%)",
  };

  return (
    <>
      <section>
        <div
          className="sm:w-full sm:h-[500px] sm:flex sm:justify-center xl:w-full xl:h-[500px]"
          style={gradientStyle}
        >
          <div className=" sm:w-[343px] sm:h-[375px] sm:flex sm:justify-center xl:w-full xl:h-[500px] xl:justify-start">
            <div className="sm:mt-16 sm:w-[343px] sm:h-[114px] sm:flex sm:flex-col sm:text-center sm:mx-[16px] xl:pl-[161px] xl:pt-[125px] xl:w-[453px] xl:h-[149px]">
              <h1 className="sm:text-white sm:font-medium sm:text-2xl xl:font-medium xl:text-4xl xl:w-[453px]">
                Want to start learning?
              </h1>
              <button className="cursor-pointer sm:mt-[24px] sm:text-orange-500 sm:bg-white sm:mx-[51px] sm:py-[18px] sm:rounded-xl sm:border-orange-500 sm:border-[1px] sm:font-bold sm:text-4 xl:w-[241px] xl:h-[60px]">
                <span className="mt-6 ">Check out our courses</span>
              </button>
            </div>
          </div>
          <img
            src={vector1}
            alt=""
            className="absolute sm:pt-[190px] xl:hidden"
          />
          <img
            src={vector2}
            alt=""
            className="sm:hidden xl:block xl:w-[592px] xl:h-[448.59px] xl:mr-[159px] xl:mt-[53px]"
          />
        </div>
      </section>
    </>
  );
}

export default section4;
