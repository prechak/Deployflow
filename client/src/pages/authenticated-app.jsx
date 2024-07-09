import { Routes, Route } from "react-router-dom";
import Login from "./non-authorized/loginpage";
import Coursedetail from "./non-authorized/coursedetail";
import HomePage from "./non-authorized/homepage";
import LoginAdmin from "./admin/login-admin";
import AddCourseAdmin from "./admin/addcourse-admin";
import Register from "./non-authorized/registerpage";
import Course from "./non-authorized/course";
import Userhomepage from "./authorized/user-homepage";
import Usercourse from "./authorized/user-course";

function AuthenticatedApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courselist" element={<Course />} />
        <Route path="/coursedetail" element={<Coursedetail />} />
        <Route path="/userhomepage" element={<Userhomepage />} />
        <Route path="/usercourse" element={<Usercourse />} />
        <Route path="/user/coursedetail" element={<UserCoursedetail />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/admin/addcourse/" element={<AddCourseAdmin />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
