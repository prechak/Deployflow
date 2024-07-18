import { Routes, Route } from "react-router-dom";
import Login from "./non-authorized/loginpage";
import Coursedetail from "./non-authorized/coursedetail";
import HomePage from "./non-authorized/homepage";
import Register from "./non-authorized/registerpage";
import Course from "./non-authorized/course";
import NotFoundPage from "./notfoundpage";
import LoginAdmin from "./admin/login-admin";
import CourseListAdmin from "./admin/courselist";
import AddCourseAdmin from "./admin/addcourse-admin";
import EditCourse from "./admin/editcourse";
import AddSubLesson from "./admin/add-sublesson";
import EditSubLesson from "./admin/edit-sublesson";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courselist" element={<Course />} />
        <Route path="/coursedetail/:Id" element={<Coursedetail />} />

        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/admin/courselist" element={<CourseListAdmin />} />
        <Route path="/admin/addcourse" element={<AddCourseAdmin />} />
        <Route path="/admin/editcourse/:id" element={<EditCourse />} />
        <Route path="/admin/addsublesson" element={<AddSubLesson />} />
        <Route path="/admin/editsublesson" element={<EditSubLesson />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
