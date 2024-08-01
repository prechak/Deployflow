import React, { useState, useEffect } from "react";
import {
  PendingStatus,
  SubmittedStatus,
} from "../../components/my-homework/status";

function AssignmentCard(props) {
  const [status, setStatus] = useState(props.status);

  const handleLinkClick = () => {
    window.open(`/user/subscribe/coursedetail/${props.link}`, "_blank");
  };

  useEffect(() => {
    if (props.answer && props.answer.trim() !== "") {
      setStatus("submitted");
    } else {
      setStatus("pending");
    }
  }, [props.answer]);

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md w-[343px] md:w-screen md:mx-4">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-4 w-full">
          <div className="flex flex-col mb-4 md:mb-0">
            <h2 className="text-Body1 font-medium text-black w-[240px] md:w-fit">
              Course: {props.coursename}
            </h2>
            <p className="text-Gray-700 text-sm my-2 w-full">
              {props.module}: {props.sublesson}
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-col md:justify-end md:items-end md:mb-[2rem]">
            {status === "submitted" ? <SubmittedStatus /> : <PendingStatus />}
          </div>
        </div>
        <div className="bg-white p-4 border border-Gray-400 rounded-lg">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {props.title}
          </label>
          <div className="md:flex md:flex-row gap-6">
            <textarea
              className={`bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                status === "submitted" &&
                "text-gray-600 text-opacity-70 border-none cursor-not-allowed"
              }`}
              type="text"
              rows="4"
              placeholder="Answer..."
              value={props.answer}
              disabled={status === "submitted"}
            ></textarea>
            <div className="flex flex-col justify-between items-center">
              {status !== "submitted" && (
                <button className="bg-Blue-500 text-white py-4 my-4 w-full rounded-lg hover:bg-Blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[137px]">
                  Submit
                </button>
              )}
              <button
                className="text-Blue-500 font-semibold flex justify-center w-[130px] mt-8 hover:underline p-1 rounded-xl"
                onClick={handleLinkClick}
              >
                Open in course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard;
