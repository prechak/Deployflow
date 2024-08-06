import React, { useState, useEffect } from "react";
import arrow_drop from "../../assets/icons/coursedetail/arrow_drop.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function StickybarRemoveDesire() {
  const navigate = useNavigate();
  const params = useParams();
  const [coursedetail, setCoursedetail] = useState([]);
  const [isCoursevisible, setIsCourseVisible] = useState(false);

  const toggleCourse = () => {
    setIsCourseVisible(!isCoursevisible);
  };

  useEffect(() => {
    const getCourses = async () => {
      const result = await axios.get(
        `https://deployflow-server.vercel.app/courses/${params.Id}`
      );
      setCoursedetail(result.data.data);
    };
    getCourses();
  }, []);

  const deleteDesireCourse = async () => {
    await axios.delete(
      `https://deployflow-server.vercel.app/courses/desire/${params.Id}`
    );
    navigate("/user/desire");
  };
  const handleRemoveDesire = (event) => {
    event.preventDefault();
    deleteDesireCourse();
  };

  const [courseDetail] = coursedetail;
  return (
    <div>
      <footer className="bg-white flex items-center justify-center shadow-md h-fit sticky bottom-0 xl:hidden">
        <div className="flex flex-col items-center w-[100%] gap-[8px] p-[16px]">
          <div className="w-[343px] flex flex-col sm:w-[100%] justify-between gap-3 pb-[8px] pt-[8px]">
            <h1
              className={`${
                isCoursevisible ? "block" : "hidden"
              } text-[12px] font-[400] text-Orange-500`}
            >
              Course
            </h1>
            <div>
              <div>
                <div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <span className="text-black text-Body2 font-Body2">
                        {courseDetail?.coursename}
                      </span>
                    </div>
                    <button onClick={toggleCourse}>
                      <img className="w-[24px] h-[24px]" src={arrow_drop}></img>
                    </button>
                  </div>

                  <p
                    className={`${
                      isCoursevisible ? "block" : "hidden"
                    } pt-[8px] text-Gray-700 text-Body4 font-Body4`}
                  >
                    {courseDetail?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB {courseDetail?.price}.00
            </div>
            <div className="flex flex-row gap-[8px]">
              <button
                onClick={handleRemoveDesire}
                className="border-solid border-[1px] border-Orange-500 rounded-[12px] text-[12px] font-[700] text-Orange-500 sm:w-[180px] sm:h-[34px]"
              >
                Remove from Desire Course
              </button>
              <button
                onClick={() => {
                  navigate(`/modal/${params.Id}`);
                }}
                className="border-solid border-[1px] bg-Blue-500 rounded-[12px] text-[12px] font-[700] text-white sm:w-[155px] sm:h-[34px]"
              >
                Subscribe This Course
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StickybarRemoveDesire;
