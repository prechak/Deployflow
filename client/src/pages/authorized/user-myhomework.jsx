import React, { useState, useEffect } from "react";
import NavbarUser from "../../components/homepage/navbar-user";
import GeneralFooter from "../../components/homepage/footer";
import Buttons from "../../components/my-homework/buttons";
import AssignmentCard from "../../components/my-homework/assignment-card";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useParams } from "react-router-dom";

function UserMyHomework() {
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [filter, setFilter] = useState("all");

  const userId = useAuth();
  const { id } = useParams();

  const getAssignments = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/subscriptions/user/${userId.UserIdFromLocalStorage}`
      );
      console.log("Data", result.data);
      setAssignments(result.data);
      setFilteredAssignments(result.data); // Initialize with all assignments
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getAssignments();
  }, []);

  useEffect(() => {
    let filtered;
    switch (filter) {
      case "Pending":
        filtered = assignments.filter(
          (assignment) => assignment.status === "pending"
        );
        break;
      case "submitted":
        filtered = assignments.filter(
          (assignment) => assignment.status === "submitted"
        );
        break;
      default:
        filtered = assignments;
    }
    setFilteredAssignments(filtered);
  }, [filter, assignments]);

  return (
    <>
      <NavbarUser />

      {/* Header */}
      <div className="mt-[5rem] mb-4 lg:mb-0 z-20 flex flex-col justify-center items-center">
        <p className="text-black text-Headline3 mb-9 font-medium bg-white p-2">
          My Assignment
        </p>
        <div className="flex justify-center items-center w-[50rem]">
          <Buttons onFilterChange={setFilter} />
        </div>
      </div>

      {/* Answer Box */}
      <div>
        {filteredAssignments.map((item) => (
          <AssignmentCard
            key={item.assignmentid}
            coursename={item.coursename}
            module={item.modulename}
            sublesson={item.sublessonname}
            title={item.title}
            answer={item.answer}
            link={item.courseid}
            status={item.status} // Ensure status is passed correctly
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
