import SubButton from "../button/sub-button";
import CancelButton from "../button/cancel-button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavbarEditCourse({text,handleSubmit}) {
  return (
    <div className="w-full">
      <nav className="border-b-2 border-gray-300 md:p-4 bg-white text-base text-slate-800 flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex items-center space-x-2 ml-8 mb-2 md:mb-0 flex-1">
          <span>Course</span>
          <p className="mb-0 font-bold">‘Service Design Essentials’</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-2">
          <Link to="/admin/courselist">
            <CancelButton text="Cancel" />
          </Link>
          <Link>
            <SubButton text={text} onClick={handleSubmit} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarEditCourse;
