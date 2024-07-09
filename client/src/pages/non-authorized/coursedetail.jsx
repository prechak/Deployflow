import SectionCourseDetail from "../../components/coursedetail/section-coursedetail";
import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import arrow_drop from "../../images/coursedetail/arrow_drop.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function Coursedetail() {
  return (
    <div>
        <nav className="border-solid border-2 border-purple-700 bg-slate-400 h-[56px]"></nav>
        <SectionCourseDetail />
        <SectionOtherCourse />
        <div>
          <footer className="border-solid border-2 border-purple-700 flex h-[805px]"></footer>
        </div>
        <footer className="flex items-center justify-center border-solid border-2 border-blue-700 shadow-md bg-white h-fit sticky bottom-0 xl:hidden">
          <div className="flex flex-col w-[93%] h-[80%] gap-[8px] p-[8px]">
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
                      <div>
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB 3,559.00
            </div>
            <div className="flex flex-row gap-[8px] sticky">
              <button className="border-solid border-[1px] border-Orange-500 text-Orange-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-center w-[167px]">
                Get in Desire Course
              </button>
              <button className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center w-[167px]">
                Subscribe This Course
              </button>
            </div>
          </div>
        </footer>
      
      
    </div>
  );
}

export default Coursedetail;
