import AddSubLessonFrom from "../../components/admin/form/add-sublesson-form";
import NavbarAddSubLesson from "../../components/admin/navbar/navbar-addsublesson";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";

function AddSubLesson() {
  return (
    <div className="flex flex-row bg-[#F6F7FC]">
      <Sidebar />
      <div className="flex-1">
        {/* <div>
          <NavbarAddSubLesson />
        </div> */}
        <div className="p-4">{<Outlet />}</div>
        <main className="p-4">
          <AddSubLessonFrom />
        </main>
      </div>
    </div>
  );
}

export default AddSubLesson;
