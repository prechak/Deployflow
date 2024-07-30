import React, { useState, useEffect } from "react";
import {
  InprogressStatus,
  OverdueStatus,
  PendingStatus,
  SubmittedStatus,
} from "../../components/my-homework/status";
function AssignmentCard(props) {
  const [status, setStatus] = useState("pending");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (props.answer !== "") {
      setStatus("Submitted");
    }
  }, [props.answer]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
    if (event.target.value.trim() !== "") {
      setStatus("inprogress");
    } else if (props.answer.trim() !== "") {
      setStatus("submitted");
    } else {
      setStatus("pending");
    }
  };

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
            {status === "Submitted" ? (
              <SubmittedStatus />
            ) : status === "inprogress" ? (
              <InprogressStatus />
            ) : (
              <PendingStatus />
            )}
            <span className="text-gray-500 text-sm ml-[6.5rem] md:ml-2">
              Assign within {props.duedate} days
            </span>
          </div>
        </div>

        <div className="bg-white p-4 border border-Gray-400 rounded-lg">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {props.title}
          </label>
          <div className="md:flex md:flex-row gap-6">
            <textarea
              className={`bg-white resize-none w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                status === "Submitted" && "bg-gray-100 cursor-not-allowed"
              }`}
              type="text"
              rows="4"
              placeholder="Answer..."
              value={props.answer}
              onChange={handleInputChange}
              disabled={props.status === "Submitted"}
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
  );
}

export default AssignmentCard;
