import Navbar from "../../components/admin/navbar/navbar-courselist";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";

function AssignmentList() {
  return (
    <div className="flex flex-row bg-gray-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <div>
          <Navbar />
        </div>
        <div className="p-4">{<Outlet />}</div>
        <main className="p-4"></main>
      </div>
    </div>
  );
}

export default AssignmentList;
