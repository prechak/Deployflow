import React, { useState, useEffect } from "react";
import NavbarUser from "../../components/homepage/navbar-user";
import GeneralFooter from "../../components/homepage/footer";
import Buttons from "../../components/my-homework/buttons";
import AssignmentCard from "../../components/my-homework/assignment-card";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useParams } from "react-router-dom";

function UserMyHomework() {
  const [submissions, setSubmissions] = useState([]);
  const [filter, setFilter] = useState("all");

  const userId = useAuth();
  const { id } = useParams();

  const getSubmissions = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/submissions/user/${userId.UserIdFromLocalStorage}`
      );
      console.log("Data", result.data.data);
      setSubmissions(result.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  // const filteredSubmissions = submissions.filter((item) => {
  //   if (filter === "all") return true;
  //   return item.status === filter;
  // });

  return (
    <>
      <NavbarUser />

      {/* Header */}
      <div className="mt-[5rem] mb-4 lg:mb-0 z-20 flex flex-col justify-center items-center">
        <p className="text-black text-Headline3 mb-9 font-medium bg-white p-2">
          My Assignment
        </p>
        <div className="flex justify-center items-center w-[50rem] mb-4">
          {/* FilterButtons */}
          <button
            className={`w-14 transition-colors duration-300 ease-in-out ${
              filter === "all"
                ? "text-gray-900 border-b-2 border-gray-800"
                : "text-gray-400"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`w-20 transition-colors duration-300 ease-in-out mx-4 ${
              filter === "Pending"
                ? "text-gray-900 border-b-2 border-gray-800"
                : "text-gray-400"
            }`}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>
          <button
            className={`w-20 transition-colors duration-300 ease-in-out ${
              filter === "Submitted"
                ? "text-gray-900 border-b-2 border-gray-800"
                : "text-gray-400"
            }`}
            onClick={() => setFilter("Submitted")}
          >
            Submitted
          </button>
        </div>
      </div>

      {/* Answer Box */}
      <div>
        {submissions.map((item) => (
          <AssignmentCard
            key={item.assignmentid}
            coursename={item.coursename}
            module={item.modulename}
            sublesson={item.sublessonname}
            title={item.title}
            answer={item.answer}
            link={item.courseid}
            status={item.status}
          />
        ))}
      </div>

      <div className="mt-20">
        <GeneralFooter />
      </div>
    </>
  );
}

export default UserMyHomework;
