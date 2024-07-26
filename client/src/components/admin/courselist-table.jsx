import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../assets/image/edit.png";
import bin from "../../assets/image/Bin.png";
import { Link } from "react-router-dom";
import NavbarCourseList from "./navbar/navbar-courselist";

function CourseListTable() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
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
      <table className="m-10 text-black text-sm">
        <thead className="w-[1120px] h-[41px] bg-slate-200 rounded-lg">
          <tr>
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
        <tbody>
          {courses
            .filter((item) => {
              return search.trim() === ""
                ? true
                : item.coursename.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <tr key={item.courseid} className="w-[1120px] h-[88px]">
                <td className="w-[48px]">{item.courseid}</td>
                <td className="w-[96px]">
                  <img
                    src={item.imagefile}
                    alt="image"
                    style={{ width: "64px", height: "47px" }}
                  />
                </td>
                <td className="w-[268px] text-left">{item.coursename}</td>
                <td className="w-[105px] text-left">
                  {item.courselearningtime}
                </td>
                <td className="w-[105px] text-left">{item.price}</td>
                <td className="w-[188px] text-left">{item.createddate}</td>
                <td className="w-[188px] text-left">{item.updateddate}</td>
                <td className="w-[120px] text-left">
                  <button onClick={() => deleteCourse(item.courseid)}>
                    <img src={bin} alt="delete" />
                  </button>
                  <button>
                    <Link to={`/admin/editcourse/${item.courseid}`}>
                      <img src={edit} alt="edit" />
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
