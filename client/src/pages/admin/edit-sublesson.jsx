import EditSubLessonFrom from "../../components/admin/form/edit-sublesson-form";
import NavbarEditSubLesson from "../../components/admin/navbar/navbar-editsublesson";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";

function EditSubLesson() {
  return (
    <div className="flex flex-row bg-[#F6F7FC]">
      <Sidebar />
      <div className="flex-1">
        <div>
            <NavbarEditSubLesson />
        </div>
        <div className="p-4">{<Outlet />}</div>
        <main className="p-4">
            <EditSubLessonFrom />
            <h1 className="ml-[1050px] mt-[80px] mb-[60px] text-Blue-500 font-[700] text-[16px]">delete lesson</h1>
        </main>
      </div>
    </div>
  );
}

export default EditSubLesson;
