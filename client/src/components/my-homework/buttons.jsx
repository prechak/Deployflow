import React, { useState } from "react";
import Slider from "react-slick";

const Buttons = () => {
  const [active, setActive] = useState("");

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleButtonClick = (buttonId) => {
    setActive(buttonId);
  };

  return (
    <div className="flex justify-center items-center lg:pb-[2rem] bg-red-100">
      {/* <Slider {...settings} className="w-[600px]"> */}
      <button
        className={`w-20 transition-colors duration-300 ease-in-out ${
          active === "b1"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => handleButtonClick("b1")}
      >
        All
      </button>

      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b2"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => handleButtonClick("b2")}
      >
        Pending
      </button>

      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b3"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => handleButtonClick("b3")}
      >
        In progress
      </button>

      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b4"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => handleButtonClick("b4")}
      >
        Submitted
      </button>

      <button
        className={`w-28 transition-colors duration-300 ease-in-out ${
          active === "b5"
            ? "text-gray-900 border-b-2 border-gray-800"
            : "text-gray-400"
        }`}
        onClick={() => handleButtonClick("b5")}
      >
        Overdue
      </button>
      {/* </Slider> */}
    </div>
  );
};

export default Buttons;
