import { Routes, Route } from "react-router-dom";
import Login from "./non-authorized/loginpage";
import Coursedetail from "./non-authorized/coursedetail";
import HomePage from "./non-authorized/homepage";
import LoginAdmin from "./admin/login-admin";
import AddCourseAdmin from "./admin/addcourse-admin";
import Modal from "../components/coursedetail/modal";
import ConfirmationCourse from "./authorized/user-confirmationcourse";

function AuthenticatedApp() {

    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coursedetail" element={<Coursedetail />} />
          <Route path="/user/coursedetail" element={<UserCoursedetail />} />
          <Route path="/user/confirmationcourse" element={<ConfirmationCourse />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/admin/addcourse/" element={<AddCourseAdmin />} />
        </Routes>
      </div>
    );
  }
  
  export default AuthenticatedApp;