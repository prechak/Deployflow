import SubButton from "../button/sub-button";
import CancelButton from "../button/cancel-button";
import { useNavigate } from "react-router-dom";
import vector from "../../../assets/icons/vector.png";

function NavbarEditSubLesson() {
  const navigate = useNavigate();
  const handleCreateCourseClick = () => {
    navigate("");
  };

  return (
    <div className="w-full ">
      <nav className="border-b-2 border-gray-300  bg-white flex flex-row justify-between p-4 pr-[32px]">
        <div className="flex flex-row items-center gap-[20px] pl-[40px]">
          <img className="w-[24px] h-[24px]" src={vector}></img>
          <div className="flex flex-col">
            <div className="flex flex-row gap-[8px]">
              <h1 className="text-Body3 font-Body3 text-Gray-600">Course</h1>
              <h1 className="text-Body3 font-Body3 text-black">
                ‘Service Design Essentials’
              </h1>
              <h1 className="text-Body3 font-Body3 text-black ml-[-8px]">
                Introduction
              </h1>
            </div>
            <div className="flex flex-row">
            <h1 className="text-Headline3 font-Headline3 text-Gray-600">
              Lesson
            </h1>
            <h1 className="text-[24px] font [400] text-black">‘Introduction’</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <CancelButton text="Cancel" />
          <SubButton text="Edit" />
        </div>
      </nav>
    </div>
  );
}

export default NavbarEditSubLesson;
