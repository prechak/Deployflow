import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar";
import EditCourseFrom from "../../components/admin/form/edit-course-form";
import NavbarEditCourse from "../../components/admin/navbar/navbar-editcourse";
import TestTable from "../../components/admin/addcourse-sublesson";
import AddCourseSubLessonTable from "../../components/admin/addcourse-sublesson";

function EditCourse() {
  return (
    <div className=" h-[2320px] flex flex-col bg-gray-100">
      <div className="flex flex-1">
        <Sidebar />
        <div className=" flex flex-col w-full">
          <main className="flex-1">
            <Outlet />
            <EditCourseFrom />
          </main>
        </div>
        <div className="">{<Outlet />}</div>
        <main className=""></main>
      </div>
    </div>
  );
}

export default EditCourse;
