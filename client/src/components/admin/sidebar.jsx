import course from "../../assets/image/course.png";
import assingment from "../../assets/image/assignment.png";
import logout from "../../assets/image/logout.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login/admin");
  };
  return (
    <div>
      <div className="h-full flex flex-row overflow-hidden justify-start border-r-2 border-gray-300">
        <div className=" bg-white w-full h-full">
          <div>
            <h1 className=" py-2 px-8 md:text-3xl lg:text-3xl font-bold bg-gradient-to-l from-blue-700 to-blue-200 bg-clip-text text-transparent flex items-center justify-center">
              CourseFlow
            </h1>
            <h2 className="text-slate-500 font-small text-base md:text-sm lg:text-sm xl:text-sm flex items-center justify-center">
              Admin Panel Control
            </h2>
          </div>
          <div className="mt-20 h-[540px] flex flex-col items-start justify-start">
          <button className="w-full h-[56px] pl-8 flex items-center font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
            <img src={course} alt="Course Icon" className="w-6 h-6 mr-4" />
              Course
            </button>
            <button className="w-full h-[56px] pl-8 flex items-center font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
            <img src={assingment} alt="Assignment Icon" className="w-6 h-6 mr-4" />
              Assignment
            </button>
          </div>
          <div className="mt-20">
          <button onClick={handleLogoutClick} className="w-full h-[56px] pl-8 flex items-center font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
          <img src={logout} alt="Logout Icon" className="w-6 h-6 mr-4" />
              Log out
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
