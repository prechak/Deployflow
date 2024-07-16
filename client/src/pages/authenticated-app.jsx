import { Routes, Route } from "react-router-dom";

import Userhomepage from "./authorized/user-homepage";
import Usercourse from "./authorized/user-course";
import Modal from "../components/coursedetail/modal";
import ConfirmationCourse from "./authorized/user-confirmationcourse";
import UserDesireCoursedetail from "./authorized/user-desirecoursedetail";
import StartLearning from "./authorized/user-courselearning";
import UserCoursedetail from "./authorized/user-coursedetail";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Userhomepage />} />
        <Route path="/user/coursedetail" element={<UserCoursedetail />} />
        <Route
          path="/user/confirmationcourse"
          element={<ConfirmationCourse />}
        />
        <Route
          path="/user/coursedetail/desire"
          element={<UserDesireCoursedetail />}
        />
        <Route path="/user/startlearning" element={<StartLearning />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/usercourse" element={<Usercourse />} />
        <Route path="*" element={<Userhomepage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
