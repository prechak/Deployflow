import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en-gb";
import { useAuth } from "../../contexts/authentication";

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

  const { register } = useAuth();

  // Error Message
  const [errorMessage, setErrorMessage] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [ageFormatError, setAgeFormatError] = useState("");
  const [ageInvalidError, setAgeInvalidError] = useState("");
  const [ageMinimumError, setAgeMinimumError] = useState("");
  const [emailFormatError, setEmailFormatError] = useState("");
  const [emailExistError, setEmailExistError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Success message
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");
    setFullnameError("");
    setAgeFormatError("");
    setAgeInvalidError("");
    setAgeMinimumError("");
    setEmailFormatError("");
    setEmailExistError("");
    setPasswordError("");
    setSuccessMessage("");
    register(data);

    // All required field validation
    if (
      !fullname ||
      !selectedDate ||
      !educationalbackground ||
      !email ||
      !password
    ) {
      return setErrorMessage("All fields are required.");
    }
    /*
    // Fullname condition
    const nameRegex = /^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/;
    if (!nameRegex.test(fullname)) {
      return setFullnameError(
        `Special characters and numbers are not allowed.`
      );
    }

    // Age condition
    const dateOfBirth = new Date(selectedDate);
    const currentDate = new Date();
    const minimumAge = new Date(
      currentDate.getFullYear() - 6,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    if (isNaN(dateOfBirth)) {
      return setAgeFormatError(`Invalid date format for age.`);
    }

    if (dateOfBirth > currentDate) {
      return setAgeInvalidError(`Please provide a valid date of birth.`);
    }
    if (dateOfBirth > minimumAge) {
      return setAgeMinimumError(
        `You must be at least 6 years old to register.`
      );
    }

    // Email condition
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setEmailFormatError(`Invalid email format`);
    }

    // Password condition
    if (password.length < 12) {
      return setPasswordError(`Password must be longer than 12 characters.`);
    }
*/
    const values = {
      fullname,
      age: selectedDate.format("YYYY-MM-DD"),
      educationalbackground,
      email: email.toLowerCase(),
      password,
      role,
    };

    try {
      const response = await axios.post(
        `http://localhost:4000/users/register`,
        values
      );

      // If the request is successful
      if (response.status === 201) {
        setSuccessMessage(`Registration successful!`);
        setErrorMessage("");
      }
      // console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;

        // General error message
        setErrorMessage(message);

        // Specific error messages
        if (message.includes("fullname")) {
          setFullnameError(message);
        } else if (message.includes("age")) {
          setAgeInvalidError(message);
        } else if (message.includes("educationalbackground")) {
          setEducationErrorMessage(message);
        } else if (message.includes("email")) {
          setEmailExistError(message);
        } else if (message.includes("password")) {
          setPasswordError(message);
        }
      }
    }
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
      {/* Nav bar รอเอาของแก๊งมาใส่ */}

      <section className="flex flex-col flex-1 items-center mt-40 pb-40 max-[375px]:w-[80%]">
        <div className="bg-white p-8 rounded-lg  w-full max-w-md">
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
              {fullnameError && <p className="text-red-500">{fullnameError}</p>}
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
              {ageFormatError && (
                <p className="text-red-500">{ageFormatError}</p>
              )}
              {ageInvalidError && (
                <p className="text-red-500">{ageInvalidError}</p>
              )}
              {ageMinimumError && (
                <p className="text-red-500">{ageMinimumError}</p>
              )}
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
              {emailFormatError && (
                <p className="text-red-500">{emailFormatError}</p>
              )}
              {emailExistError && (
                <p className="text-red-500">{emailExistError}</p>
              )}
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
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 mb-3 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && (
                <p className="mb-4 text-sm text-green-600">{successMessage}</p>
              )}
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
