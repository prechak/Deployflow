import uploadvideo from "../../../assets/image/uploadvideo.png";
import OrageButton from "../button/secondary-button";
import drag1 from "../../../assets/icons/admin/drag1.png";
import NavbarAddSubLesson from "../navbar/navbar-addsublesson";
import { useRef, useState } from "react";

//const navbar = [NavbarAddSubLesson];
function AddSubLessonFrom() {
  const [subLessons, setSubLessons] = useState([{ id: 1 }]);
  const [drag, setDrag] = useState([]);
  const [lessonName, setLessonName] = useState("");
  const [subLessonName, setSubLessonName] = useState("");

  const addSubLesson = (event) => {
    event.preventDefault();
    setSubLessons([...subLessons, { id: subLessons.length + 1 }]);
  };

  const lessonNameInput = (event) => {
    setLessonName(event.target.value);
  };
  const subLessonNameInput = (event) => {
    setSubLessonName(event.target.value);
  };

  
  // const dragItem = useRef(0);
  // const draggedOverItem = useRef(0);
  // const handleSort = () => {
  //   const itemClone = [...subLessons];
  //   const temp = itemClone[dragItem.current];
  //   itemClone[dragItem.current] = itemClone[draggedOverItem.current];
  //   itemClone[draggedOverItem.current] = temp;
  //   setDrag(itemClone);
  // };
  return (
    <div>
      <div>
        <NavbarAddSubLesson />
      </div>
      <div className="mx-8 w-[1120px] h-fit bg-white rounded-[16px] border-[1px] mb-[100px]">
        <div className=" mx-8 p-8">
          <form>
            <div>
              <div className="mx-[40px] w-[920px] h-[76px]">
                <label className="w-full h-[24px] text-black text-[16px]">
                  Lesson name *
                </label>
                <input
                  className="w-full h-[48px] bg-white text-black border-[1px] rounded-[8px] pl-[20px]"
                  placeholder="Place Holder"
                  value={lessonName}
                  onChange={lessonNameInput}
                />
              </div>
              <div className="mx-[40px]">
                <hr className="my-8 border-1 " />
              </div>
              <div className="mx-[40px] text-[20px] font-[600] text-[#646D89]">
                Sub-Lesson
              </div>
            </div>
            {subLessons.map((subLesson, index) => {
              return (
                <aside
                  key={index}
                  className="mt-[30px] mx-[40px] w-[920px] h-[340px] bg-Gray-100 flex justify-center items-center rounded-[16px] border-[1px]"
                  // draggable
                  // onDragStart={() => (dragItem.current = index)}
                  // onDragEnter={() => (draggedOverItem.current = index)}
                  // onDragEnd={handleSort}
                  // onDragOver={(e) => e.preventDefault()}
                >
                  <div className="w-[888px] h-[292px] flex gap-[24px]">
                    <div className="w-[26px] h-[76px] text-[#C8CCDB]">
                      <img src={drag1}></img>
                    </div>
                    <div className="w-[747px] flex flex-col justify-center gap-[23px]">
                      <div className="flex flex-col gap-[4px]">
                        <label
                          htmlFor="sub-lesson-name"
                          className="text-Body2 font-Body2 text-[#08090D]"
                        >
                          Sub-Lesson name *
                        </label>
                        <input
                          id={`sub-lesson-name-${subLesson.id}`}
                          type="text"
                          className="w-[530px] h-[48px] bg-white text-black border-[1px] border-[#D6D9E4] rounded-[8px] pl-[20px]"
                          placeholder="Place Holder"
                          value={subLessonName}
                          onChange={subLessonNameInput}
                        />
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <h1 className="font-[400] text-[16px] text-[#07090D]">
                          Video *
                        </h1>
                        <div className="w-[160px] h-[160px] rounded-[8px] bg-Gray-200 flex items-center justify-center">
                          <img src={uploadvideo} />
                        </div>
                      </div>
                    </div>
                    <div className=" w-[67px] h-[32px] text-center text-[16px] font-[700] text-Gray-500">
                      Delete
                    </div>
                  </div>
                </aside>
              );
            })}

            <div className="mx-[40px] mt-[32px]">
              <OrageButton onClick={addSubLesson} text="+ Add Sub-lesson" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubLessonFrom;
