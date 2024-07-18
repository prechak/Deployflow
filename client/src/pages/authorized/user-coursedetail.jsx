import SectionCourseDetail from "../../components/coursedetail/section-coursedetail";
import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import StickybarCoursedetail from "../../components/coursedetail/stickybar-coursedetail";
import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function UserCoursedetail() {
  return (
    <div>
      <nav className="sticky top-0 bg-white z-10">
        <NavbarUser />
      </nav>
      <SectionCourseDetail />
      <SectionOtherCourse />
      <Footer />
      <div className="sticky bottom-0">
        <StickybarCoursedetail />
      </div>
    </div>
  );
}

export default UserCoursedetail;
