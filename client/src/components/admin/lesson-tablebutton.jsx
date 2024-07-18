import { useNavigate } from "react-router-dom";
import Button from "./button/button";

const MuiTable = () => {
  const navigate = useNavigate();

  const handleAddCourseClick = () => {
    navigate("/admin/addlesson");
  };

  return (
    <div style={{ textAlign: "start" }}>
      <div className="mx-8 my-8 text-md flex flex-row justify-between items-center">
        <h1 className="">Lesson</h1>
        <Button text="+ Add Lesson" onClick={handleAddCourseClick} />
      </div>
      <div></div>
    </div>
  );
};

export default MuiTable;
