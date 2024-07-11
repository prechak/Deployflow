import React, { useState } from "react";
import arrow_drop from "../../icons/coursedetail/arrow_drop.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function StickybarRemoveDesire() {
  const [isCoursevisible, setIsCourseVisible] = useState(false);
  const toggleCourse = () => {
    setIsCourseVisible(!isCoursevisible);
  };

  const navigate = useNavigate();
  return (
    <div>
      <footer className="bg-white flex items-center justify-center border-solid border-2 border-blue-700 shadow-md h-fit sticky bottom-0 xl:hidden">
<<<<<<< HEAD
        <div className="flex flex-col items-center w-[100%] gap-[8px] p-[16px]">
          <div className="w-[343px] flex flex-col sm:w-[100%] justify-between gap-3 pb-[8px] pt-[8px]">
=======
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[375px] h-[80%] p-[8px] ">
          <div className="sm:w-[343px] flex flex-col justify-between gap-3 pb-[8px] pt-[8px]">
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
            <h1
              className={`${
                isCoursevisible ? "block" : "hidden"
              } text-[12px] font-[400] text-Orange-500`}
            >
              Course
            </h1>
            <div>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <span className="text-black text-Body2 font-Body2">
                          Service Design Essentials
                        </span>
                      </Box>
                      <button onClick={toggleCourse}>
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
                      </button>
                    </AccordionButton>
                  </h2>
                  <h1
                    className={`${
                      isCoursevisible ? "block" : "hidden"
                    } pt-[8px]`}
                  >
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </h1>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB 3,559.00
            </div>
            <div className="flex flex-row gap-[8px]">
              <button className="border-solid border-[1px] border-Orange-500 rounded-[12px] text-[12px] font-[700] text-Orange-500 sm:w-[180px] sm:h-[34px]">
                Remove from Desire Course
              </button>
              <button onClick={()=>{
                navigate("/modal")
              }} className="border-solid border-[1px] bg-Blue-500 rounded-[12px] text-[12px] font-[700] text-white sm:w-[155px] sm:h-[34px]">
                Subscribe This Course
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StickybarRemoveDesire;
