<<<<<<< HEAD
import React, { useState } from "react";
=======
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
import arrow_drop from "../../icons/coursedetail/arrow_drop.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function StickybarCoursedetail() {
  const [isCoursevisible, setIsCourseVisible] = useState(false);
  const toggleCourse = () => {
    setIsCourseVisible(!isCoursevisible);
  };
const navigate = useNavigate();

  return (
    <div>
      <footer className="flex items-center justify-center border-solid border-2 border-blue-700 shadow-md bg-white h-fit sticky bottom-0 xl:hidden">
        <div className="flex flex-col items-center w-[93%] h-[80%] gap-[8px] p-[8px]">
          <div className="sm:w-[343px] flex flex-col justify-between gap-3 pb-[8px] pt-[8px]">
            <h1
              className={`${
                isCoursevisible ? "block" : "hidden"
              } text-[12px] font-[400] text-Orange-500`}
            >
              Course
            </h1>
=======

function StickybarCoursedetail() {
  return (
    <div>
        <footer className="flex items-center justify-center border-solid border-2 border-blue-700 shadow-md bg-white h-fit sticky bottom-0 xl:hidden">
          <div className="flex flex-col w-[93%] h-[80%] gap-[8px] p-[8px]">
            <div  className="sm:w-[343px] flex flex-col justify-between gap-3">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
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
<<<<<<< HEAD
                      <button onClick={toggleCourse}>
=======
                      <div>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
<<<<<<< HEAD
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
=======
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </AccordionPanel>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB 3,559.00
            </div>
            <div className="flex flex-row gap-[8px] sticky">
<<<<<<< HEAD
              <button onClick={()=>{
                navigate("/user/coursedetail/desire")
              }} className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px]">
                Get in Desire Course
              </button>
              <button onClick={()=>{
                navigate("/modal")
              }} className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center w-[167px]">
                Subscribe This Course
              </button>
            </div>
          </div>
        </div>
      </footer>
=======
              <button className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px]">
                Get in Desire Course
              </button>
              <button className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center w-[167px]">
                Subscribe This Course
              </button>
            </div>
            </div>
            
          </div>
        </footer>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
    </div>
  );
}

export default StickybarCoursedetail;
