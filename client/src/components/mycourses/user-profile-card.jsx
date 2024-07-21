import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function UserProfileCard() {
  const [userData, setUserData] = useState({});
  const [countCourseStatus, setCountCourseStatus] = useState({});

  const userId = useAuth();

  //===============Get course count
  const getCountCourseStatus = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/courses/user/${userId.UserIdFromLocalStorage}/count/`
      );
      // Assuming the response is an array with a single object
      const data = result.data[0] || {}; // Handle the case where result.data might be empty
      setCountCourseStatus(data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  const getUserData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/profiles/${userId.UserIdFromLocalStorage}`
      );
      setUserData(result.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getUserData(), getCountCourseStatus();
  }, []);

  return (
    <div className="shadow-xl w-full h-[8rem] bg-white flex flex-col justify-center items-center pb-3 fixed bottom-0 lg:left-[16rem] lg:sticky lg:top-0 lg:w-[357px] lg:h-[396px] lg:rounded-xl lg:mb-20">
      <div className="flex gap-3 pr-[110px] mr-8 lg:flex-col lg:justify-center lg:items-center lg:pr-0 lg:mr-0 lg:mb-5">
        <img
          className="object-cover w-[40px] h-[40px] border rounded-full m-4 lg:w-[120px] lg:h-[120px] lg:m-0"
          src={userData.profilepicture}
          alt="avatar"
        />
        <span className="text-Body1 mt-6 text-Blue-500 lg:text-Body1 lg:font-semibold lg:mt-1">
          {userData.fullname}
        </span>
      </div>

      <div className="flex gap-3 justyfy-center items-center">
        <div className="bg-Gray-300 text-Gray-800 px-4 py-2 rounded-lg text-Body4 lg:h-[134px] lg:w-[143px] lg:text-Body2 relative ">
          Course Inprogress
          <span className="font-semibold text-Body1 lg:absolute lg:bottom-4 lg:left-4">
            {countCourseStatus.inprogress_count}
          </span>
        </div>
        <div className="bg-Gray-300 text-Gray-800 px-4 py-2 rounded-lg text-Body4 lg:h-[134px] lg:w-[143px] lg:text-Body2 relative">
          Course Completed
          <span className="font-semibold text-Body1 lg:absolute lg:bottom-4 lg:left-4">
            {countCourseStatus.completed_count}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
