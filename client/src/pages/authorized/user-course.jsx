import React, { useState } from "react";
import image1 from "/src/assets/images/sm/course/image1.png";
import image2 from "/src/assets/images/sm/course/image2.png";
import image3 from "/src/assets/images/sm/course/image3.png";
import image4 from "/src/assets/images/sm/course/image1.png";
import clock from "/src/assets/icons/icon-clock.png";
import book from "/src/assets/icons/icon-homework.png";
import bgSm from "/src/assets/icons/bgcourse/assetsSM.png";
import bgXl from "/src/assets/icons/bgcourse/assetsXl.png";
import Navbaruser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

const userData = [
  {
    id: 1,
    courses: [
      {
        id: 1,
        title: "Service Design Essentials",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        lessons: 6,
        hours: 6,
        image: image1,
      },
      {
        id: 2,
        title: "Advanced UX Design",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        lessons: 8,
        hours: 8,
        image: image2,
      },
    ]
  },
  {
    id: 2,
    courses: [
      {
        id: 3,
        title: "Web Development Fundamentals",
        description:
          "Nulla facilisi. Aenean sed lorem at leo vulputate dictum. Sed eu vestibulum elit.",
        lessons: 10,
        hours: 12,
        image: image3,
      },
    ]
  },
];

function UserCourse() {
  const [searchCourse, setSearchCourse] = useState("");

  const handleChange = (event) => {
    setSearchCourse(event.target.value);  
  };


  const filteredCourses = userData.find(user => user.id === 1)?.courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchCourse.toLowerCase()) ||
      course.description.toLowerCase().includes(searchCourse.toLowerCase())
    );
  }) || [];

  return (
    <>
    <Navbaruser/>

      <section id="search" className="sm:w-full sm:h-[198px] xl:flex xl:flex-col">
      <img src={bgXl} alt="" className="z-0 absolute sm:hidden md:block md:w-auto md:mt-10 xl:w-full"/>
        <img src={bgSm} alt="" className="z-0 absolute sm:w-full sm:h-[157px] sm:mt-10 md:hidden"/>
        
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
        className="mt-10 sm:w-full sm:h-auto sm:rounded-lg flex flex-wrap justify-center xl:w-[1119px] xl:flex xl:flex-wrap xl:justify-center xl:pb-[187px] xl:mx-auto "
      >
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="sm:w-[343px] sm:h-[431px] sm:flex sm:flex-col items-center mb-8 mx-4 xl:w-[30%] xl:mt-[60px] xl:rounded-xl xl:mb-5"
          >
            <img
              src={course.image}
              alt=""
              className="sm:w-[343px] sm:h-[240px] sm:object-cover rounded-lg"
            />
            <div className="sm:w-[343px] sm:h-[191px] sm:p-4">
              <p className="sm:text-xs sm:font-medium text-Orange-500">
                Course
              </p>
              <h1 className="sm:text-black sm:text-xl sm:font-normal">
                {course.title}
              </h1>
              <p className="sm:text-black sm:text-sm font-normal">
                {course.description}
              </p>
            </div>
            <div className="sm:w-[343px] sm:h-[53px] border-t-[1px] border-Gray-700 text-Gray-700 flex flex-row items-center p-4 gap-5">
              <p className="flex flex-row gap-4"><img src={book} alt="" className="w-[20px]"/>{course.lessons} Lessons</p>
              <p className="flex flex-row gap-4"><img src={clock} alt="" className="w-[20px]"/>{course.hours} Hours</p>
            </div>
          </div>
        ))}
      </section>

        <Footer/>
    </>
  );
}

export default UserCourse;
