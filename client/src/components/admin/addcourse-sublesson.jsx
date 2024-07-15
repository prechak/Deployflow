import React, { useState, useEffect } from "react";
import axios from "axios";
import bin from "../../assets/image/Bin.png";
import edit from "../../assets/image/edit.png";
import { Link } from "react-router-dom";

function AddCourseSubLessonTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.melivecode.com/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="m-10 w-[1120px] text-black">
      <div className="flex justify-between">
        <div className="text-lg justify-center">Lesson</div>
        <div className="justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-[171px] h-[60px]">
            <Link to="/admin/addsublesson">+Add lesson</Link>
          </button>
        </div>
      </div>
      <div className="mt-10 w-[1120px] h-[41px]">
        <table className="table">
          <thead>
            <tr className="w-[1120px] h-[41px] bg-slate-200">
              <th className="w-[56px]"></th>
              <th className="w-[56px]"></th>
              <th className="w-[500px] text-left">Lesson name</th>
              <th className="w-[396px] text-left">Sub-lesoon</th>
              <th className="w-[120px] text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {users.slice(0, 5).map((item, index) => (
              <tr key={index} className="bg-white border-2">
                <td className="w-[56px] h-[88px] "></td>
                <td className="w-[56px]">{item.id}</td>
                <td>{item.fname}</td>
                <td className="expand">{item.username}</td>

                <td>
                  <button>
                    <img src={bin} />
                  </button>
                  <button>
                    <Link to="/admin/addsublesson">
                      <img src={edit} />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddCourseSubLessonTable;
