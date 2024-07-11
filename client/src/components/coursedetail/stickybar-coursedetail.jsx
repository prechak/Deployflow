<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
=======
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
=======
import React, { useState } from "react";
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
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
<<<<<<< HEAD
=======
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
import { useNavigate } from "react-router-dom";

function StickybarCoursedetail() {
  const [isCoursevisible, setIsCourseVisible] = useState(false);
  const toggleCourse = () => {
    setIsCourseVisible(!isCoursevisible);
  };
<<<<<<< HEAD
  const navigate = useNavigate();
=======
const navigate = useNavigate();
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac

  return (
    <div>
      <footer className="flex items-center justify-center border-solid border-2 border-blue-700 shadow-md bg-white h-fit sticky bottom-0 xl:hidden">
<<<<<<< HEAD
        <div className="flex flex-col items-center w-[100%] gap-[8px] p-[16px]">
          <div className="w-[343px] flex flex-col sm:w-[100%] justify-between gap-3 pb-[8px] pt-[8px]">
=======
        <div className="flex flex-col items-center w-[93%] h-[80%] gap-[8px] p-[8px]">
          <div className="sm:w-[343px] flex flex-col justify-between gap-3 pb-[8px] pt-[8px]">
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
            <h1
              className={`${
                isCoursevisible ? "block" : "hidden"
              } text-[12px] font-[400] text-Orange-500`}
            >
              Course
            </h1>
<<<<<<< HEAD
=======

function StickybarCoursedetail() {
  return (
    <div>
        <footer className="flex items-center justify-center border-solid border-2 border-blue-700 shadow-md bg-white h-fit sticky bottom-0 xl:hidden">
          <div className="flex flex-col w-[93%] h-[80%] gap-[8px] p-[8px]">
            <div  className="sm:w-[343px] flex flex-col justify-between gap-3">
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
=======
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
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
<<<<<<< HEAD
                      <button onClick={toggleCourse}>
<<<<<<< HEAD
=======
                      <div>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
=======
>>>>>>> 498807f (fix: client addjust width stickybar remove)
=======
                      <button onClick={toggleCourse}>
                      <div>
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 498807f (fix: client addjust width stickybar remove)
=======
                        </div>
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </AccordionPanel>
>>>>>>> 6cac249 (feat: create file user-confirmation and user-coursedetail)
=======
>>>>>>> 498807f (fix: client addjust width stickybar remove)
=======
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </AccordionPanel>
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB 3,559.00
            </div>
            <div className="flex flex-row gap-[8px] sticky">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <button onClick={()=>{
                navigate("/user/coursedetail/desire")
              }} className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px]">
=======
              <button
                onClick={() => {
                  navigate("/user/coursedetail/desire");
                }}
                className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px] sm:h-[34px]"
              >
>>>>>>> 498807f (fix: client addjust width stickybar remove)
                Get in Desire Course
              </button>
              <button
                onClick={() => {
                  navigate("/modal");
                }}
                className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center w-[167px] sm:h-[34px]"
              >
=======
              <button onClick={()=>{
                navigate("/user/coursedetail/desire")
              }} className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px]">
                Get in Desire Course
              </button>
              <button onClick={()=>{
                navigate("/modal")
              }} className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center w-[167px]">
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
                Subscribe This Course
              </button>
            </div>
          </div>
        </div>
      </footer>
<<<<<<< HEAD
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
=======
>>>>>>> fa2e03abb2c956d00619e69d622c0a24d9d1c5ac
    </div>
  );
}

export default StickybarCoursedetail;
