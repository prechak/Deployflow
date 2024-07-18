import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Navbarnonuser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function UserProfile() {
  const [img, setImg] = useState({
    hasImg: false,
    data: {},
  });

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    educationalBackground: "",
    email: "",
  });

  useEffect(() => {
    // Fetch user data from an API or other source if necessary
    // For example:
    // fetchUserProfile().then(data => setFormData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as updating user profile via an API
    console.log(formData);
  };

  return (
    <>
      {/* Background  */}
      <div className="absolute right-0 top-52">
        <svg
          width="61"
          height="74"
          viewBox="0 0 61 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="37" r="37" fill="#C6DCFF" />
        </svg>
      </div>
      <div className="absolute right-[-1rem] top-28 md:right-[9rem] md:top-[9rem]">
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3581 19.9099L37.1499 15.9774L27.6597 40.28L11.3581 19.9099Z"
            stroke="#FBAA1C"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="absolute left-[-15px] top-28 md:left-[2rem] md:top-[12rem]">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.1741" cy="13.1741" r="13.1741" fill="#C6DCFF" />
        </svg>
      </div>
      <div className="absolute left-6 top-20 md:left-[6rem] md:top-[8rem]">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.5" cy="5.5" r="4" stroke="#2F5FAC" strokeWidth="3" />
        </svg>
      </div>
      {/* Background  */}

      {<Navbarnonuser />}
      <header className="text-black font-medium text-Headline3 pt-[3rem] md:text-Headline2 md:pb-[3rem] flex flex-col justify-center items-center">
        Profile
      </header>
      <form
        className="flex flex-col md:flex-row justify-center items-center md:gap-[3rem] md:mr-[2rem] md:-ml-[8rem] mb-[14rem]"
        onSubmit={handleSubmit}
      >
        <div className="relative object-fit flex md:flex-row">
          <h3>Upload Files</h3>
        </div>
        <div className=" relative object-cover flex md:flex-row ">
          {img.hasImg && (
            <div className="absolute w-[343px] h-[343px] flex justify-center items-center z-20">
              <img
                src={URL.createObjectURL(img.data)}
                className="rounded-lg h-full object-cover"
              />
              <button
                onClick={() => {
                  setImg([]);
                }}
                className="absolute z-10 top-1 right-1  "
              >
                <XMarkIcon className="size-6 text-white bg-purple-700 rounded-full" />
              </button>
            </div>
          )}
          <label className="w-[343px] h-[343px] cursor-pointer rounded-xl bg-Gray-700 outline-none flex justify-center items-center relative">
            <span className="text-white text-xl font-bold text-center">
              Upload file
            </span>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImg({
                    ...img,
                    hasImg: true,
                    data: e.target.files[0],
                  });
                }
              }}
              multiple
              className=" hidden  z-20"
            />
          </label>
        </div>

        <div className="w-[343px] h-[343px] text-black flex flex-col gap-5 ">
          <div className="container md:font-medium">
            <label>
              Name
              <p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Name"
                  required
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Date of Birth
              <p>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Date of Birth"
                  required
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Educational Background
              <p>
                <input
                  type="text"
                  name="educationalBackground"
                  value={formData.educationalBackground}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="School"
                  required
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Email
              <p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Enter Email"
                  required
                />
              </p>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-Blue-500 font-medium rounded-xl text-sm w-full md:w-auto px-4 py-4 text-center hover:bg-Blue-400 duration-75 md:mt-3"
          >
            Update Profile
          </button>
        </div>
      </form>

      {<Footer />}
    </>
  );
}

export default UserProfile;
