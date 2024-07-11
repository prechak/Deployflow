import React, { useState } from "react";
import image1 from "/src/assets/images/sm/course/image1.png";
import image2 from "/src/assets/images/sm/course/image2.png";
import image3 from "/src/assets/images/sm/course/image3.png";
import image4 from "/src/assets/images/sm/course/image1.png";
import image5 from "/src/assets/images/sm/course/image1.png";
import image6 from "/src/assets/images/sm/course/image1.png";
import image7 from "/src/assets/images/sm/course/image1.png";
import image8 from "/src/assets/images/sm/course/image1.png";
import image9 from "/src/assets/images/sm/course/image1.png";
import image10 from "/src/assets/images/sm/course/image1.png";

const courseData = [
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
  {
    id: 3,
    title: "Web Development Fundamentals",
    description:
      "Nulla facilisi. Aenean sed lorem at leo vulputate dictum. Sed eu vestibulum elit.",
    lessons: 10,
    hours: 12,
    image: image3,
  },
  {
    id: 4,
    title: "Graphic Design Principles",
    description: "Fusce nec ligula eu ligula consequat varius non in magna.",
    lessons: 7,
    hours: 9,
    image: image4,
  },
  {
    id: 5,
    title: "Data Science Fundamentals",
    description:
      "Vivamus efficitur nisl in nisl rhoncus, sit amet venenatis odio tempor.",
    lessons: 12,
    hours: 15,
    image: image5,
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Cras mattis risus eu nunc viverra, et varius ex cursus.",
    lessons: 9,
    hours: 10,
    image: image6,
  },
  {
    id: 7,
    title: "Digital Marketing Strategies",
    description:
      "Phasellus nec risus ultricies, ultricies augue ac, feugiat quam.",
    lessons: 8,
    hours: 7,
    image: image7,
  },
  {
    id: 8,
    title: "Photography Basics",
    description:
      "Donec feugiat augue id tortor tempor, sit amet elementum ante vehicula.",
    lessons: 6,
    hours: 5,
    image: image8,
  },
  {
    id: 9,
    title: "Artificial Intelligence Essentials",
    description:
      "Integer pretium quam et justo sagittis, vel tincidunt est semper.",
    lessons: 10,
    hours: 12,
    image: image9,
  },
  {
    id: 10,
    title: "UI Design Principles",
    description: "Morbi nec nulla at lorem aliquet maximus.",
    lessons: 7,
    hours: 8,
    image: image10,
  },
];

function Course() {
  const [searchCourse, setSearchCourse] = useState("");

  const handleChange = (event) => {
    setSearchCourse(event.target.value);  
  };

  const filteredCourses = courseData.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchCourse.toLowerCase()) ||
      course.description.toLowerCase().includes(searchCourse.toLowerCase())
    );
  });

  return (
    <>
      <section id="search" className="sm:w-full sm:h-[198px] xl:flex xl:flex-col">
        <h1 className="text-black sm:text-2xl sm:font-medium sm:text-center sm:pt-10">
          Our Courses
        </h1>
        <div className="sm:mt-8 sm:flex sm:justify-center">
          <input
            type="text"
            className="sm:border sm:rounded-lg sm:px-4 sm:w-full sm:h-12 text-black xl:w-[357px]"
            value={searchCourse}
            onChange={handleChange}
            placeholder="Search courses..."
          />
        </div>
      </section>

      <section
  id="course"
  className="sm:w-full sm:h-auto sm:rounded-lg flex flex-wrap justify-center xl:w-[1119px] xl:flex xl:flex-wrap xl:justify-center xl:mx-auto"
>
  {filteredCourses.map((course) => (
    <div
      key={course.id}
      className="sm:w-[343px] sm:h-[431px] sm:flex sm:flex-col items-center mb-8 mx-4 xl:w-[30%] border-2 border-black xl:mt-[60px] xl:rounded-xl xl:mb-5"
    >
      <img
        src={course.image}
        alt=""
        className="sm:w-[343px] sm:h-[240px] sm:object-cover"
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
        <p>{course.lessons} Lessons</p>
        <p>{course.hours} Hours</p>
      </div>
    </div>
  ))}
</section>
    </>
  );
}

export default Course;
