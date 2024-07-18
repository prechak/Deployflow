import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "/src/assets/icons/logo.png";
import Profile from "/src/assets/images/sm/profile/profile.png";
import iconProfile from "/src/assets/icons/icon-profile.png";
import iconMyCourse from "/src/assets/icons/icon-mycourse.png";
import iconDesire from "/src/assets/icons/icon-desire.png";
import iconHomework from "/src/assets/icons/icon-homework.png";
import iconLogout from "/src/assets/icons/icon-logout.png";
import Usercourse from "../../pages/authorized/user-course";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  // const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { logout } = useAuth();
  const userId = useAuth();

  const getUserData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/profiles/${userId.UserIdFromLocalStorage}`
      );
      console.log(result.data);
      setUserData(result.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setState({ ...state, user: null });
  // };

  return (
    <div className="navbar z-40 relative">
      <section
        className="navbar items-center sm:w-auto sm:h-[56px] sm:flex sm:flex-row sm:justify-between md:w-full md:h-[88px] md:flex md:flex-row md:justify-between xl:w-full xl:h-[88px] xl:flex xl:flex-row xl:justify-between"
        style={{ boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <Link to="/userhomepage">
          <img
            src={logo}
            alt="Logo"
            className="sm:pl-[16px] md:p-[100px] xl:p-[160px]"
          />
        </Link>

        <div className="menu flex items-center sm:mr-[16px] md:mr-[160px] xl:mr-[160px]">
          <Link to="/courselist">
            <h1 className="sm:font-bold sm:text-sm sm:mx-[16px] sm:my-[16px] xl:font-bold xl:text-base sm:text-black cursor-pointer">
              Our Courses
            </h1>
          </Link>

          <div className="relative ml-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMenu}
            >
              <img
                src={userData.profilepicture}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block mx-2 text-sm text-gray-700 md:font-normal xl:text-base xl:font-normal">
                Name: {userData.fullname}
              </span>
              <svg
                className={`h-5 w-5 ml-1 text-black ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="absolute bg-white z-50 shadow-2xl rounded-lg sm:w-[198px] sm:h-auto sm:mt-5 md:left-[85px] sm:right-0 sm:mr-[-18px] md:mt-0 xl:left-24 xl:mt-0">
                <div className="py-1 text-sm font-medium">
                  <Link
                    to="/user/profile"
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row"
                    role="menuitem"
                  >
                    <img src={iconProfile} alt="" className="pr-[12px]" />
                    Profile
                  </Link>
                  <Link
                    to="/user/my_course"
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row"
                    role="menuitem"
                  >
                    <img src={iconMyCourse} alt="" className="pr-[12px]" />
                    My Courses
                  </Link>
                  <Link
                    to=""
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row"
                    role="menuitem"
                  >
                    <img src={iconHomework} alt="" className="pr-[12px]" />
                    My Homework
                  </Link>
                  <Link
                    to=""
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row"
                    role="menuitem"
                  >
                    <img src={iconDesire} alt="" className="pr-[12px]" />
                    My Desire Courses
                  </Link>
                  <div
                    onClick={() => logout()}
                    className="flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex-row border-t-2 cursor-pointer"
                    role="menuitem"
                    style={{
                      boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <img src={iconLogout} alt="" className="pr-[12px]" />
                    Log out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavbarUser;
