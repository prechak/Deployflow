import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../assets/image/edit.png";
import bin from "../../assets/image/Bin.png";
import { Link } from "react-router-dom";
import NavbarAssignmentList from "./navbar/navbar-assignmentlist";

function AssignmentListTable() {
  const [assignments, setAssignments] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/admin/assignments"
      );
      setAssignments(res.data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const deleteAssignment = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/assignments/${id}`);
      setAssignments(
        assignments.filter((assignment) => assignment.assignmentid !== id)
      );
    } catch (error) {
      console.error("Error deleting assignment:", error);
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarAssignmentList search={search} onSearchChange={setSearch} />
      <table className="text-black text-sm m-20">
        <thead className="w-[1120px] h-[41px] bg-slate-200 rounded-lg">
          <tr>
            <th className="w-[200px] text-left">Assignment detail</th>
            <th className="w-[200px] text-left">Course</th>
            <th className="w-[200px] text-left">Lesson</th>
            <th className="w-[200px] text-left">Sub-lesson</th>
            <th className="w-[200px] text-left">Created date</th>
            <th className="w-[120px] text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments
            .filter((item) => {
              if (search.trim() === "") {
                return true;
              }
              const searchText = search.toLowerCase();
              return (
                (item.detail &&
                  item.detail.toLowerCase().includes(searchText)) ||
                (item.title && item.title.toLowerCase().includes(searchText)) ||
                (item.modulename &&
                  item.modulename.toLowerCase().includes(searchText)) ||
                (item.sublessonname &&
                  item.sublessonname.toLowerCase().includes(searchText))
              );
            })
            .map((item) => (
              <tr key={item.assignmentid} className="w-[1120px] h-[88px]">
                <td className="w-[200px] text-left">{item.title}</td>
                <td className="w-[200px] text-left">{item.coursename}</td>
                <td className="w-[200px] text-left">{item.modulename}</td>
                <td className="w-[200px] text-left">{item.sublessonname}</td>
                <td className="w-[200px] text-left">{item.createddate}</td>
                <td className="w-[120px] text-left">
                  <button onClick={() => deleteAssignment(item.assignmentid)}>
                    <img src={bin} alt="delete" />
                  </button>
                  <button>
                    <Link to={`/admin/editaddassignment/${item.assignmentid}`}>
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

export default AssignmentListTable;
