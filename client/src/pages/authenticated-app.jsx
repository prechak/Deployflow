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
import UserDesireCourses from "./authorized/user-desirecourse";
import Course from "../components/course/courselist";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Userhomepage />} />
        <Route path="/courselist" element={<Course />} />
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
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/my_course/" element={<UserMycourse />} />
        <Route path="*" element={<Userhomepage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
