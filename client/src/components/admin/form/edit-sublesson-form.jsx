import Uploadvideo from "../../../assets/image/Uploadvideo.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import drag1 from "../../../assets/icons/admin/drag1.png";
import NavbarEditSubLesson from "../../admin/navbar/navbar-editsublesson";
import { useState, useEffect } from "react";
import modal_vector from "../../../assets/icons/coursedetail/modal_vector.png";

function AddSubLessonFrom() {
  const [lessons, setLessons] = useState([]);
  const [subLessons, setSubLessons] = useState([]);
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  console.log(subLessons);
  const getLesson = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/admin/lesson/${params.lessonId}`
      );
      setLessons(result.data.data[0]);
    } catch (error) {
      console.error("Error getLesson", error);
    }
  };

  const getSublesson = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/admin/sublesson/${params.lessonId}`
      );
      setSubLessons(result.data.data);
    } catch (error) {
      console.error("Error getSublesson", error);
    }
  };
  const deleteLesson = async () => {
    await axios.delete(`http://localhost:4000/admin/lesson/${params.lessonId}`);
    navigate("/admin/courselist");
  };
  const handleDeleteLesson = (event) => {
    event.preventDefault();
    deleteLesson();
  };

  const deleteSublesson = async (sublessonid) => {
    console.log(sublessonid);
    try {
      await axios.delete(
        `http://localhost:4000/admin/sublesson/${sublessonid}`
      );
    } catch (error) {
      console.log("Error deleteSublesson", error);
    }
  };

  const putLesson = async () => {
    const editLesson = lessons;
    const editSublesson = subLessons;
    console.log(editLesson);
    console.log(editSublesson);
    try {
      await axios.put(`http://localhost:4000/admin/sublesson/${params.lessonId}`, [
        editLesson,
        editSublesson,
      ]);
    } catch (error) {
      console.log("Error putLessonAndSublesson", error);
    }
  };
  useEffect(() => {
    getLesson();
    getSublesson();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <button
        onClick={putLesson}
        className={`${modal ? "opacity-30" : "opacity-100"}`}
      >
        <NavbarEditSubLesson text="Edit" />
      </button>
      <div
        className={`${
          modal ? "opacity-30" : "opacity-100"
        } mt-[50px] mx-8 w-[1120px] h-fit bg-white rounded-[16px] border-[1px] mb-[80px]`}
      >
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
                  Value={lessons.modulename}
                  onChange={(event) => {
                    setLessons({ ...lessons, modulename: event.target.value });
                  }}
                />
              </div>
              <div className="mx-[40px]">
                <hr className="my-8 border-1 " />
              </div>
              <div className="mx-[40px] text-[20px] font-[600] text-[#646D89]">
                Sub-Lesson
              </div>
            </div>
            {subLessons
              .sort((a, b) => a.sublessonid - b.sublessonid)
              .map((item, index) => {
                return (
                  <article
                    key={index}
                    className="relative mt-[30px] mx-[40px] w-[920px] h-[340px] bg-Gray-100 flex justify-center items-center rounded-[16px] border-[1px]"
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
                          <label className="text-Body2 font-Body2 text-[#08090D]">
                            Sub-Lesson name *
                          </label>
                          <input
                            id="sub-lesson-name"
                            type="text"
                            className="w-[530px] h-[48px] bg-white text-black border-[1px] border-[#D6D9E4] rounded-[8px] pl-[20px] placeholder:text-black"
                            value={item.sublessonname}
                            onChange={(e) => {
                              setSubLessons([
                                ...subLessons.toSpliced(index, 1),
                                {
                                  ...subLessons[index],
                                  sublessonname: e.target.value,
                                },
                              ]);
                            }}
                          />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                          <h1 className="font-[400] text-[16px] text-[#07090D]">
                            Video *
                          </h1>
                          <div className="w-[160px] h-[160px] rounded-[8px] bg-Gray-200 flex items-center justify-center">
                            <img src={Uploadvideo} />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          deleteSublesson(item.sublessonid);
                        }}
                        className=" w-[67px] h-[32px] text-center text-[16px] font-[700] text-Blue-500 cursor-pointer"
                      >
                        Delete {item.sublessonid}
                      </button>
                    </div>
                  </article>
                );
              })}

            <button
              className="mx-[40px] mt-[32px] border-[1px] border-Orange-500 shadow-md bg-white text-Orange-500 rounded-[12px] w-[208px] h-[60px] text-[16px] font-[700]"
              type="button"
              onClick={() => {
                const newId =
                  subLessons[subLessons.length - 1]?.sublessonid + 1 || 1;
                setSubLessons([
                  ...subLessons,
                  {
                    sublessonid: newId,
                    moduleid: lessons.moduleid,
                    sublessonname: "",
                    videofile: null,
                    sublessondate: new Date(),
                  },
                ]);
              }}
            >
              + Add Sub-Lesson
            </button>
          </form>
        </div>
      </div>
      <button onClick={toggleModal} className=" pl-[520px] mb-[80px]">
        <h1 className="text-Blue-500 text-[16px] font-[700] cursor-pointer">
          Delete lesson
        </h1>
      </button>
      <aside className={`${modal ? "block" : "hidden"} mt-[16px]`}>
        <div className="flex items-center justify-center relative right-[140px] bottom-[240px]">
          <div className="border-solid border-2 bg-white rounded-[24px] w-[528px] h-[212px]">
            <div className="flex items-center justify-between pl-[16px] pr-[16px] h-[56px] border-solid border-b-[1px] border-[#E4E6ED] ">
              <h1 className="text-Body1 font-Body1 text-black">Confirmation</h1>
              <button onClick={toggleModal}>
                <img className="w-[9.94px] h-[9.7px]" src={modal_vector}></img>
              </button>
            </div>
            <div className="w-[528px] pl-[24px] pr-[24px]">
              <h1 className="text-Body2 font-Body2 text-[#646D89] pt-[24px] pb-[24px]">
                Are you sure you want to delete this lesson?
              </h1>
              <div className="border-solid border-1 flex gap-[16px] w-[528px] flex-row">
                <button
                  onClick={handleDeleteLesson}
                  className=" rounded-[12px] border-solid border-[1px] border-Orange-500 text-Orange-500 shadow-md text-[16px] font-[700] w-[310px] h-[60px]"
                >
                  Yes, I want to delete this lesson
                </button>
                <button
                  onClick={toggleModal}
                  className="rounded-[12px] border-solid border-[1px] bg-Blue-500 shadow-md text-white text-[16px] font-[700] w-[147px] h-[60px]"
                >
                  No, keep it
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AddSubLessonFrom;
