import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarCourseList from "./navbar/navbar-courselist";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import ConfirmationModal from "../../components/admin/modal/delete-course-confirmation";

function CourseListTable() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

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
    const formattedTime = bangkokTime.toLocaleString("en-GB", options);

    const [datePart, timePart] = formattedTime.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hour, minute] = timePart.split(":");

    return `${day}/${month}/${year.replace(",", "")} ${hour}:${minute}`;
  };

  useEffect(() => {
    fetchCourses();
    console.log(courses)
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:4000/courses");
      setCourses(res.data);
      console.log(res.data)

    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/courses/${id}`);
      setCourses(courses.filter((course) => course.courseid !== id));
      handleCloseModal(); // Close the modal after successful deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleOpenModal = (id) => {
    setSelectedCourseId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCourseId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedCourseId) {
      deleteCourse(selectedCourseId);
    }
  };

  return (
    <div>
      <NavbarCourseList search={search} onSearchChange={setSearch} />
      <div className="m-10">
        <table className="text-black text-sm rounded-xl w-full">
          <thead className="w-[100px] h-[41px] bg-Gray-400 rounded-xl ">
            <tr className="font-thin ">
              <th className="text-left w-[48px]"></th>
              <th className="text-left w-[6rem]">Image</th>
              <th className="text-left w-[17rem]">Course name</th>
              <th className="text-left w-[6.4rem]">Lesson</th>
              <th className="text-left w-[6.4rem]">Price</th>
              <th className="text-left w-[11.5rem]">Created date</th>
              <th className="text-left">Updated Date</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-scroll max-h-[550px]">
          <table className="text-black text-sm rounded-xl w-full">
            <tbody>
              {courses.map((item) => (
                  <tr
                    key={item.courseid}
                    className="bg-white border-b border-Gray-400 w-[1120px] h-[88px]"
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
                    <td className="w-[105px] text-left">
                      {item.price.toFixed(2)}
                    </td>
                    <td className="w-[188px] text-left">
                      {formatToBangkokTime(item.createddate)}
                    </td>
                    <td className="w-[188px] text-left">
                      {formatToBangkokTime(item.updateddate)}
                    </td>
                    <td className="w-[120px] flex items-center justify-center gap-5 ml-[1.5rem] mt-8">
                      <button onClick={() => handleOpenModal(item.courseid)}>
                        <TrashIcon className="w-6 text-Blue-300 hover:text-Blue-700  " />
                      </button>
                      <button>
                        <Link to={`/admin/editcourse/${item.courseid}`}>
                          <PencilSquareIcon className="w-6 text-Blue-300 hover:text-Blue-700  " />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmationModal
        open={openModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default CourseListTable;
