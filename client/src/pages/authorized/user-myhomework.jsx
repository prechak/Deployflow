import React from "react";
import NavbarUser from "../../components/homepage/navbar-user";
import GeneralFooter from "../../components/homepage/footer";
import Buttons from "../../components/my-homework/buttons";
import Slider from "react-slick";
import {
  InprogressStatus,
  OverdueStatus,
  PendingStatus,
  SubmittedStatus,
} from "../../components/my-homework/status";

function UserMyHomework() {
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
      {/* Pending */}
      <div className="flex justify-center items-center">
        <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md w-[343px] md:w-screen md:mx-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 w-full">
            <div className="flex flex-col mb-4 md:mb-0">
              <h2 className="text-Body1 font-medium text-black w-[240px] md:w-fit">
                Course: Service Design Essentials
              </h2>
              <p className="text-Gray-700 text-sm my-2 w-full">
                Introduction: 4 Levels of Service Design in an Organization
              </p>
            </div>
            <div className="flex justify-center items-center md:flex-col md:justify-end md:items-end md:mb-[2rem]">
              <PendingStatus />
              <span className="text-gray-500 text-sm ml-[6.5rem] md:ml-2">
                Assign within 2 days
              </span>
            </div>
          </div>

          <div className="bg-white p-4 border border-Gray-400 rounded-lg ">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              What are the 4 elements of service design?
            </label>
            <div className="md:flex md:flex-row gap-6">
              <textarea
                className="bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                placeholder="Answer..."
              ></textarea>
              <div className="flex flex-col justify-between items-center">
                <button className="bg-Blue-500 text-white py-4 my-4 w-full rounded-lg hover:bg-Blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[137px]">
                  Submit
                </button>
                <p className="text-Blue-500 font-semibold">Open in course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Answer Box */}
      {/* Submitted */}
      <div className="flex justify-center items-center">
        <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md w-[343px] md:w-screen md:mx-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 w-full">
            <div className="flex flex-col mb-4 md:mb-0">
              <h2 className="text-Body1 font-medium text-black w-[240px] md:w-fit">
                Course: Service Design Essentials
              </h2>
              <p className="text-Gray-700 text-sm my-2 w-full">
                Introduction: 4 Levels of Service Design in an Organization
              </p>
            </div>
            <div className="flex justify-center items-center md:flex-col md:justify-end md:items-end md:mb-[2rem]">
              <SubmittedStatus />
              <span className="text-gray-500 text-sm ml-[6.5rem] md:ml-2">
                Assign within 2 days
              </span>
            </div>
          </div>

          <div className="bg-white p-4 border border-Gray-400 rounded-lg ">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              What are the 4 elements of service design?
            </label>
            <div className="md:flex md:flex-row gap-6">
              <textarea
                className="bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                placeholder="Answer..."
              ></textarea>
              <div className="flex flex-col justify-between items-center">
                <button className="bg-Blue-500 text-white py-4 my-4 w-full rounded-lg hover:bg-Blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[137px]">
                  Submit
                </button>
                <p className="text-Blue-500 font-semibold">Open in course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Answer Box */}
      {/* Inprogress */}
      <div className="flex justify-center items-center">
        <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md w-[343px] md:w-screen md:mx-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 w-full">
            <div className="flex flex-col mb-4 md:mb-0">
              <h2 className="text-Body1 font-medium text-black w-[240px] md:w-fit">
                Course: Service Design Essentials
              </h2>
              <p className="text-Gray-700 text-sm my-2 w-full">
                Introduction: 4 Levels of Service Design in an Organization
              </p>
            </div>
            <div className="flex justify-center items-center md:flex-col md:justify-end md:items-end md:mb-[2rem]">
              <InprogressStatus />
              <span className="text-gray-500 text-sm ml-[6.5rem] md:ml-2">
                Assign within 2 days
              </span>
            </div>
          </div>

          <div className="bg-white p-4 border border-Gray-400 rounded-lg ">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              What are the 4 elements of service design?
            </label>
            <div className="md:flex md:flex-row gap-6">
              <textarea
                className="bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                placeholder="Answer..."
              ></textarea>
              <div className="flex flex-col justify-between items-center">
                <button className="bg-Blue-500 text-white py-4 my-4 w-full rounded-lg hover:bg-Blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[137px]">
                  Submit
                </button>
                <p className="text-Blue-500 font-semibold">Open in course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Answer Box */}
      {/* Overdue */}
      <div className="flex justify-center items-center">
        <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md w-[343px] md:w-screen md:mx-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 w-full">
            <div className="flex flex-col mb-4 md:mb-0">
              <h2 className="text-Body1 font-medium text-black w-[240px] md:w-fit">
                Course: Service Design Essentials
              </h2>
              <p className="text-Gray-700 text-sm my-2 w-full">
                Introduction: 4 Levels of Service Design in an Organization
              </p>
            </div>
            <div className="flex justify-center items-center md:flex-col md:justify-end md:items-end md:mb-[2rem]">
              <OverdueStatus />
              <span className="text-gray-500 text-sm ml-[6.5rem] md:ml-2">
                Assign within 2 days
              </span>
            </div>
          </div>

          <div className="bg-white p-4 border border-Gray-400 rounded-lg ">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              What are the 4 elements of service design?
            </label>
            <div className="md:flex md:flex-row gap-6">
              <textarea
                className="bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                placeholder="Answer..."
              ></textarea>
              <div className="flex flex-col justify-between items-center">
                <button className="bg-Blue-500 text-white py-4 my-4 w-full rounded-lg hover:bg-Blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[137px]">
                  Submit
                </button>
                <p className="text-Blue-500 font-semibold">Open in course</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <GeneralFooter />
      </div>
    </>
  );
}

export default UserMyHomework;
