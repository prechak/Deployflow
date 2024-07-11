import SectionCourseDetail from "../../components/coursedetail/section-coursedetail";
import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import StickybarCoursedetail from "../../components/coursedetail/stickybar-coursedetail";
import Navbarnonuser from "../../components/homepage/navbar-nonuser"
import Section4 from "../../components/homepage/section4";
import Footer from "../../components/homepage/footer";

function Coursedetail() {
  return (
    <div>
      <nav className="sticky top-0 bg-white z-10">
        <Navbarnonuser />
      </nav>
      <SectionCourseDetail />
      <SectionOtherCourse />
      <Section4 />
      <Footer />
      <div className="sticky bottom-0">
        <StickybarCoursedetail />
      </div>
    </div>
  );
}

export default Coursedetail;
