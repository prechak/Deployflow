import SubButton from "../button/sub-button";
import CancelButton from "../button/cancel-button";
import { useNavigate } from "react-router-dom";
import vector from "../../../assets/icons/vector.png";

function NavbarAddSubLesson() {
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
              <p className="text-Body3 font-Body3 text-black">
                ‘Service Design Essentials’
              </p>
            </div>
            <h1 className="text-Headline3 font-Headline3 text-black">
              Add Lesson
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <CancelButton text="Cancel" />
          <SubButton text="Create" />
        </div>
      </nav>
    </div>
  );
}

export default NavbarAddSubLesson;
