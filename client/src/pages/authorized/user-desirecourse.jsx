import SectionDesireCourses from "../../components/coursedetail/section-desire-course";
import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";

function UserDesireCourses() {
    return (
      <div>
        <nav className="sticky top-0 bg-white z-10">
        <NavbarUser />
      </nav>
      <SectionDesireCourses />
      <Footer />
      </div>

    );
  }
  
  export default UserDesireCourses;