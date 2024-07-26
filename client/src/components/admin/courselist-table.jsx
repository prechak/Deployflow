import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../assets/image/edit.png";
import bin from "../../assets/image/Bin.png";
import { Link } from "react-router-dom";
import NavbarCourseList from "./navbar/navbar-courselist";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

function CourseListTable() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  const formatToBangkokTime = (isoTime) => {
    const date = new Date(isoTime);
    const bangkokTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    );
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formattedTime = bangkokTime.toLocaleString("en-GB", options); // 'en-GB' to ensure 24-hour format

    const [datePart, timePart] = formattedTime.split(" "); // split date and time
    const [day, month, year] = datePart.split("/"); // parse the date
    const [hour, minute] = timePart.split(":"); // parse the time

    return `${day}/${month}/${year.replace(",", "")} ${hour}:${minute}`;
  };

  console.log(search);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:4000/courses");
      setCourses(res.data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/courses/${id}`);
      setCourses(courses.filter((course) => course.courseid !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div>
      <NavbarCourseList search={search} onSearchChange={setSearch} />
      <table className="m-10 text-black text-sm rounded-xl">
        <thead className="w-[1120px] h-[41px] bg-Gray-400 rounded-xl">
          <tr className="font-thin">
            <th className="w-[48px] text-left"></th>
            <th className="w-[96px] text-left">Image</th>
            <th className="w-[268px] text-left">Course name</th>
            <th className="w-[105px] text-left">Lesson</th>
            <th className="w-[105px] text-left">Price</th>
            <th className="w-[188px] text-left">Created date</th>
            <th className="w-[188px] text-left">Updated Date</th>
            <th className="w-[120px] text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {courses
            .filter((item) => {
              return search.trim() === ""
                ? true
                : item.coursename.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <tr
                key={item.courseid}
                className="w-[1120px] h-[88px] bg-white border border-b-Gray-400 "
              >
                <td className="w-[48px] text-center">{item.courseid}</td>
                <td className="w-[96px]">
                  <img
                    src={item.imagefile}
                    alt="image"
                    style={{ width: "64px", height: "47px" }}
                  />
                </td>
                <td className="w-[268px] text-left">{item.coursename}</td>
                <td className="w-[105px] text-left">
                  {item.coursesummary} Lessons
                </td>
                <td className="w-[105px] text-left">{item.price.toFixed(2)}</td>
                <td className="w-[188px] text-left">
                  {formatToBangkokTime(item.createddate)}
                </td>
                <td className="w-[188px] text-left">
                  {formatToBangkokTime(item.updateddate)}
                </td>
                <td className="w-[100px] flex items-center justify-center mt-8 gap-5 -ml-6">
                  <button onClick={() => deleteCourse(item.courseid)}>
                    <TrashIcon className="w-6 text-Blue-300 hover:text-Blue-700" />
                  </button>
                  <button>
                    <Link to={`/admin/editcourse/${item.courseid}`}>
                      <PencilSquareIcon className="w-6 text-Blue-300  hover:text-Blue-700" />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseListTable;
