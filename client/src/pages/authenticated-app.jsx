import { Routes, Route } from "react-router-dom";
import Login from "./non-authorized/loginpage";
import Coursedetail from "./non-authorized/coursedetail";
import HomePage from "./non-authorized/homepage";
import LoginAdmin from "./admin/login-admin";
import AddCourseAdmin from "./admin/addcourse-admin";
import Modal from "../components/coursedetail/modal";
import ConfirmationCourse from "./authorized/user-confirmationcourse";
import UserDesireCoursedetail from "./authorized/user-desirecoursedetail";
import StartLearning from "./authorized/user-courselearning";

function AuthenticatedApp() {

    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coursedetail" element={<Coursedetail />} />
          <Route path="/user/coursedetail" element={<UserCoursedetail />} />
          <Route path="/user/coursedetail/desire" element={<UserDesireCoursedetail />} />
          <Route path="/user/confirmationcourse" element={<ConfirmationCourse />} />
          <Route path="/user/startlearning" element={<StartLearning />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/admin/addcourse/" element={<AddCourseAdmin />} />
        </Routes>
      </div>
    );
  }
  
  export default AuthenticatedApp;