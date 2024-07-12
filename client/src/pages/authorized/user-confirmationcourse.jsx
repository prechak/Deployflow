import SectionOtherCourse from "../../components/coursedetail/section-othercourse";
import UserSectionConfirmation from "../../components/coursedetail/section-confirmation";
import StickybarStartLearning from "../../components/coursedetail/stickybar-startlearning";
import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function ConfirmationCourse() {
  return (
    <div>
      <nav className="sticky top-0 bg-white z-10">
        <NavbarUser />
      </nav>
      <UserSectionConfirmation />
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

export default ConfirmationCourse;

