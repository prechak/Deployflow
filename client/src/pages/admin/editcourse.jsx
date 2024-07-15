import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar";
import EditCourseFrom from "../../components/admin/form/edit-course-form";
import NavbarEditCourse from "../../components/admin/navbar/navbar-editcourse";
import TestTable from "../../components/admin/addcourse-sublesson";
import AddCourseSubLessonTable from "../../components/admin/addcourse-sublesson";

function EditCourse() {
  return (
    <div className="h-[2320px] flex flex-col bg-gray-100">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1">
          <div>
            <NavbarEditCourse />
          </div>
          <div className="p-4">{<Outlet />}</div>
          <main className="p-4">
            <EditCourseFrom />
            <AddCourseSubLessonTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
