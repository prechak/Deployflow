import React, { useState, useEffect } from "react";
import axios from "axios";
import edit from "../../assets/image/edit.png"
import bin from "../../assets/image/Bin.png"
import { Link } from "react-router-dom";


function CourseListTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="m-10">
      <table className=" text-black text-sm  ">
        <thead className="w-[1120px] h-[41px] bg-slate-200 rounded-lg">
          <tr className="">
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
          {users.map((item, index) => (
            <tr key={index} className="w-[1120px] h-[88px]">
              <td className="w-[48px]">{item.courseid}</td>
              <td className="w-[96px]">
                <img
                  src={item.imagefile}
                  alt="avatar"
                  style={{ width: "64px", height: "47px" }}
                />
              </td>
              <td className="w-[268px] text-left">{item.coursename}</td>
              <td className="w-[105px] text-left">{item.lesson}</td>
              <td className="w-[105px] text-left">{item.price}</td>
              <td className="w-[188px] text-left"></td>
              <td className="w-[188px] text-left"></td>
              <td className="w-[120px] text-left">
                <button><Link to=""><img src={bin} /></Link></button>
                <button><Link to={`/admin/editcourse/${item.courseid}`}><img src={edit} /></Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Create</button>
    </div>
  );
}

export default CourseListTable;
