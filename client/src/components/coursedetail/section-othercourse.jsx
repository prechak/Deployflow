import othercoursepic1 from "../../images/coursedetail/othercoursepic1.png";
import othercoursepic2 from "../../images/coursedetail/othercoursepic2.png";
import othercourselesson1 from "../../icons/coursedetail/othercourselesson1.png";
import othercourselesson2 from "../../icons/coursedetail/othercourselesson2.png";
import othercoursepic3 from "../../images/coursedetail/othercoursepic3.png";
import React,{useState, useEffect} from "react";


function SectionOtherCourse() {
 

  return (
    <div>
      <section className="h-[1483px] border-solid border-2 border-green-700 bg-Gray-100 pl-[16px] pr-[16px] xl:h-[792px]">
        <div className=" flex flex-col items-center w-[100%] xl:mt-[121px]">
          <h1 className=" text-black text-Headline3 font-Headline3 mt-4 mb-6 xl:text-Headline2 xl:font-Headline2 xl:mb-[40px]">
            Other Interesting Course
          </h1>
          <div className="flex flex-col xl:flex-row xl:w-[1119px] justify-between">
          <article className="shadow-md rounded-[8px] flex flex-col mb-10 xl:h-[475px]">
            <figure>
              <img
                className="w-[343px] h-[240px] rounded-t-[8px]"
                src={othercoursepic1}
              ></img>
            </figure>
            <div className="flex flex-col pl-[16px] mt-[5px] mb-[10px] sm:w-[343px] xl:mt-[20px]">
              <h1 className="text-Body4 font-Body4 text-Orange-500 xl:text-Body3 xl:font-Body3 xl:mb-[10px]">Course</h1>
              <h1 className="text-Body1 font-Body1 text-black xl:text-Headline3 xl:font-Headline3">
                Service Design Essentials
              </h1>
              <p className="text-Body3 font-Body3 text-Gray-700 xl:text-Body2 xl:font-Body2 xl:mt-[10px]">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-row border-t-[1px] border-t-Gray-500 h-[53px] p-[16px] mt-[5px] xl:mt-[20px]">
              <div className="flex w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson1}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">
                  6 Lesson
                </h1>
              </div>
              <div className="flex ml-[20px] w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson2}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">6 Hours</h1>
              </div>
            </div>
          </article>

          <article className="shadow-md rounded-[8px] flex flex-col mb-10 xl:h-[475px]">
            <figure>
              <img
                className="w-[343px] h-[240px] rounded-t-[8px]"
                src={othercoursepic2}
              ></img>
            </figure>
            <div className="flex flex-col pl-[16px] mt-[5px] mb-[10px] sm:w-[343px] xl:mt-[20px]">
              <h1 className="text-Body4 font-Body4 text-Orange-500 xl:text-Body3 xl:font-Body3 xl:mb-[10px]">Course</h1>
              <h1 className="text-Body1 font-Body1 text-black xl:text-Headline3 xl:font-Headline3">
                Software Developer
              </h1>
              <p className="text-Body3 font-Body3 text-Gray-700 xl:text-Body2 xl:font-Body2 xl:mt-[10px]">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-row border-t-[1px] border-t-Gray-500 h-[53px] p-[16px] mt-[5px] xl:mt-[20px]">
              <div className="flex w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson1}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">
                  6 Lesson
                </h1>
              </div>
              <div className="flex ml-[20px] w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson2}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">6 Hours</h1>
              </div>
            </div>
          </article>

          <article className="shadow-md rounded-[8px] flex flex-col mb-10 xl:h-[475px]">
            <figure>
              <img
                className="w-[343px] h-[240px] rounded-t-[8px]"
                src={othercoursepic3}
              ></img>
            </figure>
            <div className="flex flex-col pl-[16px] mt-[5px] mb-[10px] sm:w-[343px] xl:mt-[20px]">
              <h1 className="text-Body4 font-Body4 text-Orange-500 xl:text-Body3 xl:font-Body3 xl:mb-[10px]">Course</h1>
              <h1 className="text-Body1 font-Body1 text-black xl:text-Headline3 xl:font-Headline3">
                UX/UI Design Beginer
              </h1>
              <p className="text-Body3 font-Body3 text-Gray-700 xl:text-Body2 xl:font-Body2 xl:mt-[10px]">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-row border-t-[1px] border-t-Gray-500 h-[53px] p-[16px] mt-[5px] xl:mt-[20px]">
              <div className="flex w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson1}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">
                  6 Lesson
                </h1>
              </div>
              <div className="flex ml-[20px] w-[88px] gap-2">
                <img
                  className="w-[20px] h-[20px]"
                  src={othercourselesson2}
                ></img>
                <h1 className="text-Body3 font-Body3 text-Gray-700">6 Hours</h1>
              </div>
            </div>
          </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOtherCourse;
