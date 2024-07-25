
import AssignmentListTable from "../../components/admin/assignmentlist-table";
import NavbarAssignmentList from "../../components/admin/navbar/navbar-assignmentlist";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";

function AssignmentListAdmin() {
  return (
    <div className="h-full flex flex-row bg-gray-100 w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <div>
          <NavbarAssignmentList />
        </div>
        <div className="p-4">{<Outlet />}</div>
        <main className="p-4">
            <AssignmentListTable />
        </main>
      </div>
    </div>
  );
}

export default AssignmentListAdmin;
