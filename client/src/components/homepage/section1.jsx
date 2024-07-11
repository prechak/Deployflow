import React from "react";
import image1 from "/src/assets/images/sm/section1/image1.png";
import image2 from "/src/assets/images/sm/section1/image2.png";
import secure from "/src/assets/icons/section1/secure.png";
import support from "/src/assets/icons/section1/support.png";
import purely from "/src/assets/icons/section1/purely.png";
import ellipse from "/src/assets/icons/section1/ellipse1.png";
import ellipse2 from "/src/assets/icons/section1/ellipse2.png";
import ellipse3 from "/src/assets/icons/section1/ellipse3.png";
import vector1 from "/src/assets/icons/section1/vector1.png";

function section1() {
  return (
    <>
    <div className=" absolute">
      <img src={ellipse} alt="" className="sm:pl-6 xl:hidden" />
      </div>
      <section className="flex justify-center items-center text-black sm:w-auto sm:h-[1428.63px] xl:w-auto xl:h-[1111px] ">
        <div className="box sm:w-[343px] sm:h-[1300.63px] xl:w-[1120px] xl:h-[780px] xl:flex xl:flex-col xl:justify-center xl:align-middle ">
          <div className="card-1 sm:w-[343px] sm:h-[633.32px] xl:w-[1120px] xl:h-[330px]  xl:p-0 xl:flex">
            <img src={image1} alt="" className="xl:w-[454px] xl:h-[330px]" />
            <div className="xl:p-0 xl:m-0 xl:pl-[119px]">
              <h1 className="sm:pt-8 sm:text-2xl sm:font-medium  xl:w-[547px] xl:h-[90px] xl:p-0 xl:text-4xl xl:font-medium">
                Learning experience has been enhanced with new technologies
              </h1>
              <div className="sm:mt-8 sm:w-auto sm:h-[103px]  xl:w-[547px] xl:h-[200px]">
                <div className="sm:flex">
                  <img src={secure} alt="" className="sm:h-full" />
                  <div className="sm:pl-4 xl:pl-6">
                    <h1 className="sm:font-normal sm:text-xl">Secure & Easy</h1>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      es se cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint.
                    </p>
                  </div>
                </div>
                <div className="sm:mt-8 sm:w-auto sm:h-[103px]">
                  <div className="sm:flex">
                    <img src={support} alt="" className="sm:h-full" />
                    <div className="sm:pl-4 xl:pl-6">
                      <h1 className="sm:font-normal sm:text-xl">
                        Supports All Students
                      </h1>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit es se cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-2 sm:w-[343px] sm:h-[633.32px] sm:mt-16 xl:w-[1120px] xl:h-[330px] xl:flex xl:flex-row-reverse  xl:m-0 xl:mt-[120px]">
            <img src={image2} alt="" className="xl:w-[454px] xl:h-[330px]" />
            <div className="xl:p-0 xl:m-0 xl:pr-[119px]">
              <h1 className="sm:pt-8 sm:text-2xl sm:font-medium  xl:w-[547px] xl:h-[90px] xl:p-0 xl:text-4xl xl:font-medium">
                Interactions between the tutor and the learners
              </h1>
              <div className="sm:mt-8 sm:w-auto sm:h-[103px]  xl:w-[547px] xl:h-[200px]">
                <div className="sm:flex">
                  <img src={purely} alt="" className="sm:h-full" />
                  <div className="sm:pl-4 xl:pl-6">
                    <h1 className="sm:font-normal sm:text-xl">
                      Purely Collaborative
                    </h1>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      es se cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint.
                    </p>
                  </div>
                </div>
                <div className="sm:mt-8 sm:w-auto sm:h-[103px]">
                  <div className="sm:flex">
                    <img src={support} alt="" className="sm:h-full" />
                    <div className="sm:pl-4 xl:pl-6">
                      <h1 className="sm:font-normal sm:text-xl">
                        Supports All Students
                      </h1>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit es se cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={ellipse2} alt="" className="sm:pl-[308px] xl:hidden" />
        </div>
      </section>
      <div className="xl:flex xl:justify-end xl:relative">
        <img src={ellipse3} alt="" className="xl:w-[85px] xl:mr-[122px] xl:block sm:hidden" />
      </div>
    </>
  );
}

export default section1;
