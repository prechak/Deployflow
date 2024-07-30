import React, { useState, useEffect } from "react";
import NavbarUser from "../../components/homepage/navbar-user";
import GeneralFooter from "../../components/homepage/footer";
import Buttons from "../../components/my-homework/buttons";
import Slider from "react-slick";
import AssignmentCard from "../../components/my-homework/assignment-card";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useParams } from "react-router-dom";
import {
  InprogressStatus,
  OverdueStatus,
  PendingStatus,
  SubmittedStatus,
} from "../../components/my-homework/status";

function UserMyHomework() {
  const [assignment, setAssignment] = useState([]);
  const [courses, setCourses] = useState([]);

  const userId = useAuth();
  const { id } = useParams();

  const getAssignment = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/admin/assignments`);
      console.log("Assignment data", result.data);
      setAssignment(result.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getAssignment();
  }, []);

  const settings = {
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavbarUser />

      {/* Header */}
      <div className="mt-[5rem] mb-4 lg:mb-0 z-20 flex flex-col justify-center items-center">
        <p className="text-black text-Headline3 mb-9 font-medium bg-white p-2">
          My Assignment
        </p>
        <div className="flex justify-center items-center w-[50rem]">
          <Buttons />
        </div>
      </div>

      {/* Answer Box */}
      <div>
        {assignment.map((items) => (
          <AssignmentCard
            key={items.assignmentid}
            coursename={items.coursename}
            module={items.modulename}
            sublesson={items.sublessonname}
            title={items.title}
            duedate={items.duedate}
            answer={items.answer}
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
