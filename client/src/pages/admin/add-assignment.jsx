import React from "react";
import Sidebar from "../../components/admin/sidebar";
import NavbarAddassignment from "../../components/admin/navbar/navbar-addassignment";
import AddAssignmentForm from "../../components/admin/form/add-assignmentform";

function Addassignment() {
  return (
    <>
   <div className="flex flex-row bg-gray-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <div>
            {/* <NavbarAddassignment /> */}
        </div>
          <div>
            <AddAssignmentForm/>
          </div>
      </div>
    </div>
    </>
  );
}

export default Addassignment;