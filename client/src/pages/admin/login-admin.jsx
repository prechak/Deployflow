import React from "react";
import { useAuth } from "../../contexts/authentication";



function loginAdmin() {
  const {email,
    setEmail,
    isLogin,
    setIsLogin} = useAuth()

    const logIn = (e) => {
      e.preventDefualt()
      isLogin(true)
      setAuthUser({
        name: {email}
      })
    }


  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-400 h-screen overflow-hidden flex items-center justify-center">
        <div className="max-w-[566px] w-full md:max-w-[566px] p-6 shadow-lg bg-white rounded-md">
          <h1 className="mt-4 text-6xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-l from-blue-700 to-blue-200 bg-clip-text text-transparent flex items-center justify-center">
            CourseFlow
          </h1>
          <h2 className="mt-4 text-slate-500 font-medium text-base md:text-lg lg:text-xl xl:text-24 flex items-center justify-center">
            Admin Panel Control
          </h2>
          <div>
            <label
              htmlFor="username"
              className="mt-10 block text-base mb-2 text-black"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              className="bg-white box-border border-2 w-full text-base px-2 py-1 rounded-md flex items-center"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="mt-10 block text-base mb-2 text-black"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your passwaord"
              id="password"
              className="bg-white box-border border-2 w-full text-base px-2 py-1 rounded-md flex items-center"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="mt-4 font-medium text-base md:text-lg lg:text-xl xl:text-24 text-white bg-blue-500 shadow-lgpt-1 py-5 w-full rounded-xl"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginAdmin;
