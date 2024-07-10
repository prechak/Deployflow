import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en-gb";

dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.locale("en-gb");

function Register() {
  const [fullname, setFullname] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [educationalbackground, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      fullname,
      age: selectedDate.format("YYYY-MM-DD"),
      educationalbackground,
      email,
      password,
      role,
    };

    console.log(values);

    const response = await axios.post(
      `http://localhost:4000/users/register`,
      values
    );
    console.log(response.status);
  };

  return (
    <>
      <section>
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <a href="#" className="text-blue-600 text-xl font-bold">
                    Course<span className="text-blue-900">Flow</span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Courses
                </a>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className="flex flex-col flex-1 items-center mt-40 pb-40 max-[375px]:w-[80%]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
            Register to start learning!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name and Lastname"
                className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      sx: {
                        "& .MuiOutlinedInput-root": {
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#C8CCDB",
                          },
                        },
                        "& .MuiInputBase-input": {
                          padding: "8px 14px",
                          color: "#555",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="mb-4">
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700"
              >
                Educational Background
              </label>
              <input
                type="text"
                id="education"
                name="education"
                placeholder="Enter Educational Background"
                className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={educationalbackground}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="bg-white text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Log in
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
