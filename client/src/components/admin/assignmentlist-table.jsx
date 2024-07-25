import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../assets/image/edit.png";
import bin from "../../assets/image/Bin.png";
import { Link } from "react-router-dom";

function AssignmentListTable() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/admin/assignments/list"
      );
      setAssignments(res.data);
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
    <div className="m-12">
      <table className="text-black text-sm">
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
          {assignments.map((item) => (
            <tr key={item.assignmentid} className="w-[1120px] h-[88px]">
              <td className="w-[200px] text-left">{item.detail}</td>
              <td className="w-[200px] text-left">{item.title}</td>
              <td className="w-[200px] text-left">{item.modulename}</td>
              <td className="w-[200px] text-left">{item.sublessonname}</td>
              <td className="w-[200px] text-left">{item.createddate}</td>
              <td className="w-[120px] text-left">
                <button onClick={() => deleteAssignment(item.assignmentid)}>
                  <img src={bin} alt="delete" />
                </button>
                <button>
                  <Link to={`/admin/assignment/${item.assignmentid}`}>
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
