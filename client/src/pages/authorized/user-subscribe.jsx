import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import UserSectionSubscribe from "../../components/coursedetail/section-subscribe";
import StickybarStartLearning from "../../components/coursedetail/stickybar-startlearning";
import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function SubscribeCourse() {
  return (
    <div>
      <nav className="sticky top-0 bg-white z-10">
        <NavbarUser />
      </nav>
      <UserSectionSubscribe />
      <div className="xl:hidden">
        <SectionOtherCourse />
      </div>
      <Footer />
      <div className="sticky bottom-0">
        <StickybarStartLearning />
      </div>
    </div>
  );
}

export default SubscribeCourse;

