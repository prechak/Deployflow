import othercourselesson1 from "../../assets/icons/coursedetail/othercourselesson1.png";
import othercourselesson2 from "../../assets/icons/coursedetail/othercourselesson2.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function SectionOtherCourse() {
  const [otherCourse, setOtherCourse] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const specificIDs = [params.Id];

  const getOtherCourse = async () => {
    const result = await axios.get(
      `https://deployflow-server.vercel.app/courses`
    );
    const filteredCourses = result.data.filter(
      (course) => !specificIDs.includes(course.courseid)
    );
    let results = [filteredCourses[0], filteredCourses[1], filteredCourses[2]];
    setOtherCourse(results);
  };
  useEffect(() => {
    getOtherCourse();
  }, []);

  return (
    <div>
      <section className="h-[1410px] bg-Gray-100 pl-[16px] pr-[16px] xl:h-[792px]">
        <div className=" flex flex-col items-center w-[100%] xl:mt-[121px]">
          <h1 className=" text-black text-Headline3 font-Headline3 mt-4 xl:mt-[140px]  mb-6 xl:text-Headline2 xl:font-Headline2 xl:mb-[40px]">
            Other Interesting Course
          </h1>
          <div className="flex flex-col xl:flex-row xl:w-[1119px] justify-between">
            {otherCourse.map((item, index) => {
              return (
                <article
                  key={index}
                  className="shadow-md rounded-[8px] flex flex-col justify-between mb-10 xl:h-[475px]"
                >
                  <button
                    onClick={() => {
                      // navigate(`/user/coursedetail/${item.courseid}`);
                      window.location.href = `/user/coursedetail/${item.courseid}`;
                    }}
                  >
                    <img
                      className="w-[343px] h-[240px] rounded-t-[8px]"
                      src={item.imagefile}
                    ></img>
                  </button>
                  <div className="flex flex-col pl-[16px] mt-[15px] mb-[10px] sm:w-[343px] xl:mt-[20px]">
                    <h1 className="text-Body4 font-Body4 text-Orange-500 xl:text-Body3 xl:font-Body3 xl:mb-[10px]">
                      Course
                    </h1>
                    <h1 className="text-Body1 font-Body1 text-black xl:text-Headline3 xl:font-Headline3">
                      {item.coursename}
                    </h1>
                    <p className="text-Body3 font-Body3 text-Gray-700 xl:text-Body2 xl:font-Body2 xl:mt-[10px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-t-Gray-500 h-[53px] p-[16px] mt-[30px]">
                    <div className="flex w-[88px] gap-2">
                      <img
                        className="w-[20px] h-[20px]"
                        src={othercourselesson1}
                      ></img>
                      <h1 className="text-Body3 font-Body3 text-Gray-700">
                        {item.coursesummary} Lesson
                      </h1>
                    </div>
                    <div className="flex ml-[20px] w-[88px] gap-2">
                      <img
                        className="w-[20px] h-[20px]"
                        src={othercourselesson2}
                      ></img>
                      <h1 className="text-Body3 font-Body3 text-Gray-700">
                        {item.courselearningtime} Hours
                      </h1>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOtherCourse;
