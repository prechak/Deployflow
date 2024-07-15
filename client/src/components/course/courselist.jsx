import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [searchCourse, setSearchCourse] = useState("");
  const [course, setCourse] = useState([]);

  const getCourseData = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/courses`);
      setCourse(result.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  const handleChange = (event) => {
    setSearchCourse(event.target.value);
  };

  const filteredCourses = useMemo(
    () =>
      course.filter(
        (course) =>
          course.coursename
            .toLowerCase()
            .includes(searchCourse.toLowerCase()) ||
          course.description.toLowerCase().includes(searchCourse.toLowerCase())
      ),
    [searchCourse, course]
  );

  return (
    <>
      <section
        id="search"
        className="sm:w-full sm:h-[198px] xl:flex xl:flex-col"
      >
        <h1 className="text-black sm:text-2xl sm:font-medium sm:text-center sm:pt-10">
          Our Courses
        </h1>
        <div className="sm:mt-8 sm:flex sm:justify-center">
          <input
            type="text"
            className="sm:border sm:rounded-lg sm:px-4 sm:w-[343px] sm:h-12 text-black xl:w-[357px]"
            value={searchCourse}
            onChange={handleChange}
            placeholder="Search courses..."
          />
        </div>
      </section>

      <section
        id="course"
        className="sm:w-full sm:h-auto sm:rounded-lg flex flex-wrap justify-center xl:w-[1119px] xl:flex xl:flex-wrap xl:justify-center xl:pb-[187px] xl:mx-auto"
      >
        {filteredCourses.map((course) => (
          <Link
            key={course.courseid}
            to={`/coursedetail/${course.courseid}`}
            className="sm:w-[343px] sm:h-[431px] sm:flex sm:flex-col items-center mb-8 mx-4 xl:w-[30%] border-[1px] border-black xl:mt-[60px] xl:rounded-xl xl:mb-5"
          >
            <img
              src={course.imagefile}
              alt={course.coursename}
              className="sm:w-[343px] sm:h-[240px] sm:object-cover rounded-lg"
            />
            <div className="sm:w-[343px] sm:h-[191px] sm:p-4">
              <p className="sm:text-xs sm:font-medium text-Orange-500">
                Course
              </p>
              <h1 className="sm:text-black sm:text-xl sm:font-normal">
                {course.coursename}
              </h1>
              <p className="sm:text-black sm:text-sm font-normal">
                {course.description}
              </p>
            </div>
            <div className="sm:w-[343px] sm:h-[53px] border-t-[1px] border-Gray-700 text-Gray-700 flex flex-row items-center p-4 gap-5">
              <p>{course.lessons} Lessons</p>
              <p>{course.hours} Hours</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Course;
