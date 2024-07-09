import SectionCourseDetail from "../../components/coursedetail/section-coursedetail";
import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import StickybarCoursedetail from "../../components/coursedetail/stickybar-coursedetail";
import Modal from "../../components/coursedetail/modal";
import UserSectionCourseDetail from "../../components/coursedetail/user-section-coursedetail";
import UserSectionOtherCourse from "../../components/coursedetail/user-section-othercourse";
import arrow_drop from "../../images/coursedetail/arrow_drop.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function UserCoursedetail() {
  return (
    <div>
      <nav className="border-solid border-2 border-purple-700 bg-pink-400 h-[56px] sticky top-0"></nav>
      <SectionCourseDetail />
      <SectionOtherCourse />
      <div>
        <footer className="border-solid border-2 border-purple-700 flex h-[272px]"></footer>
      </div>
      <div className="sticky bottom-0">
        <StickybarCoursedetail />
      </div>
    </div>
  );
}

export default UserCoursedetail;
