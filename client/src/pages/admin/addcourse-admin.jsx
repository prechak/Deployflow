import NavbarAddCourse from "../../components/admin/navbar/navbar-addcourse";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";
import AddCourseFrom from "../../components/admin/addcourseform";
import CourseAddLesson from "../../components/admin/lesson-table-addcourse";
import UserCreate from "../../components/admin/addcourse-test";



function AddCourseAdmin() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <NavbarAddCourse />
          <div className="flex-1 p-4">
            <Outlet />
          </div>
          <main className="p-4">
            {/*<AddCourseFrom />*/}
            <UserCreate />
            <CourseAddLesson />
          </main>
        </div>
        <div className="p-4">{<Outlet />}</div>
        <main className="p-4"></main>
      </div>
    </div>
  );
}

export default AddCourseAdmin;
