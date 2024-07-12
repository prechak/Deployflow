import SectionDesireCourseDetail from "../../components/coursedetail/section-desire-coursedetail";
import StickybarRemoveDesire from "../../components/coursedetail/stickybar-removedesire";
import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function UserDesireCoursedetail() {
  return (
    <div>
      <nav className="sticky top-0 bg-white z-10">
        <NavbarUser />
      </nav>
      <SectionDesireCourseDetail />
      <Footer />
      <div className="sticky bottom-0">
        <StickybarRemoveDesire />
      </div>
    </div>
  );
}

export default UserDesireCoursedetail;
