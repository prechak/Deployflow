import CourseListTable from "../../components/admin/courselist-table";
import NavbarCourseList from "../../components/admin/navbar/navbar-courselist";
import Sidebar from "../../components/admin/sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function CourseListAdmin() {
  return (
    <div className="h-full flex flex-row bg-gray-100 w-[1900px]">
      <Sidebar />
      <div className="flex-1">
        <div>{<Outlet />}</div>
        <main>
          <CourseListTable />
        </main>
      </div>
    </div>
  );
}

export default CourseListAdmin;
