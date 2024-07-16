import { Routes, Route } from "react-router-dom";

import Userhomepage from "./authorized/user-homepage";
import Usercourse from "./authorized/user-course";
import UserMycourse from "./authorized/user-mycourse";
import Modal from "../components/coursedetail/modal";
import ConfirmationCourse from "./authorized/user-confirmationcourse";
import UserDesireCoursedetail from "./authorized/user-desirecoursedetail";
import StartLearning from "./authorized/user-courselearning";
import UserCoursedetail from "./authorized/user-coursedetail";
import UserProfile from "./authorized/user-profile";
import CourseListAdmin from "./admin/courselist";
import EditCourse from "./admin/editcourse";
import AddSubLesson from "./admin/add-sublesson";
import UserDesireCourses from "./authorized/user-desirecourse";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courselist" element={<Course />} />
        <Route path="/coursedetail/:Id" element={<Coursedetail />} />
        <Route path="/user/coursedetail/:Id" element={<UserCoursedetail />} />
        <Route path="/user/subscribe" element={<ConfirmationCourse />} />
        <Route
          path="/user/desire/coursedetail/:Id"
          element={<UserDesireCoursedetail />}
        />
        <Route path="/user/desire" element={<UserDesireCourses />} />
        <Route path="/user/startlearning" element={<StartLearning />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/usercourse" element={<Usercourse />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/admin/courselist" element={<CourseListAdmin />} />

        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin/addcourse" element={<AddCourseAdmin />} />
        <Route path="/user/my_course/" element={<UserMycourse />} />
        <Route path="/admin/editcourse/:id" element={<EditCourse />} />
        <Route path="/admin/addsublesson" element={<AddSubLesson />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
